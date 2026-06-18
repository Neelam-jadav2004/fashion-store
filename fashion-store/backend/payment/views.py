from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.conf import settings

from .models import Order

import json
import razorpay


def get_order_status(request, order_id):
    try:
        order = Order.objects.get(id=order_id)

        return JsonResponse({
            "id": order.id,
            "name": order.name,
            "email": order.email,
            "amount": str(order.amount),
            "status": order.status,
            "created_at": order.created_at
        })

    except Order.DoesNotExist:
        return JsonResponse({
            "error": "Order not found"
        }, status=404)


def get_orders(request):
    orders = list(
        Order.objects.values(
            "id",
            "name",
            "email",
            "amount",
            "status",
            "created_at"
        ).order_by("-created_at")
    )

    return JsonResponse(orders, safe=False)


def get_order(request, id):
    try:
        order = Order.objects.get(id=id)

        return JsonResponse({
            "id": order.id,
            "name": order.name,
            "email": order.email,
            "amount": str(order.amount),
            "status": order.status,
            "created_at": order.created_at
        })

    except Order.DoesNotExist:
        return JsonResponse({
            "error": "Order not found"
        }, status=404)


@csrf_exempt
def create_razorpay_order(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            amount = int(data.get("amount")) * 100

            client = razorpay.Client(
                auth=(
                    settings.RAZORPAY_KEY_ID,
                    settings.RAZORPAY_KEY_SECRET
                )
            )

            payment = client.order.create({
                "amount": amount,
                "currency": "INR",
                "payment_capture": 1
            })

            return JsonResponse(payment)

        except Exception as e:
            return JsonResponse({"error": str(e)})

    return JsonResponse({"error": "Invalid Request"})


@csrf_exempt
def create_order(request):
    print("METHOD:", request.method)

    if request.method == "POST":
        try:
            data = json.loads(request.body)
            print("DATA:", data)

            order = Order.objects.create(
                name=data.get("name"),
                email=data.get("email"),
                address=data.get("address"),
                amount=data.get("amount")
            )

            return JsonResponse({
                "message": "Order Created Successfully",
                "order_id": order.id
            })

        except Exception as e:
            print("ERROR:", str(e))
            return JsonResponse({"error": str(e)})

    return JsonResponse({"error": "Invalid Request"})
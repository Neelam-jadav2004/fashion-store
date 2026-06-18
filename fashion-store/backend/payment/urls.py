from django.urls import path
from .views import create_order, create_razorpay_order,get_orders
from . import views

urlpatterns = [
    path("create-order/", create_order),
    path("create-razorpay-order/", create_razorpay_order),
    path("order-status/<int:order_id>/", views.get_order_status),
    path("orders/", get_orders),
    path("orders/<int:id>/", views.get_order),

]
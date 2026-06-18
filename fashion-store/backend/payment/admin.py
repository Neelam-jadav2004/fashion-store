from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "email",
        "amount",
        "status",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
    )

    list_filter = (
        "status",
        "created_at",
    )

    ordering = (
        "-created_at",
    )
from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/progec/', consumers.SomeConsumer.as_asgi()),
]

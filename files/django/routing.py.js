export const getRoutingPy = (projectName) => `
from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/${projectName}/', consumers.SomeConsumer.as_asgi()),
]
`

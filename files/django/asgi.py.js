export const getAsgiPy = (projectName) => `
"""
ASGI config for ${projectName} project.
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
# from channels.security.websocket import AllowedHostsOriginValidator
from ${projectName} import routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '${projectName}.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": 
        # AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            URLRouter(  
                routing.websocket_urlpatterns
            )
        # )
    ),
})
`

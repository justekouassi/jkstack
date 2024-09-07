export const getAppUrlsPy = (appName) => `
"""
URL configuration for ${appName} app.
"""

from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

# endpoints de DRF
urlpatterns = [
    # path('route/', methode, name='nom_url'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
`

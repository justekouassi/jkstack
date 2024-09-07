export const getUrlsPy = (projectName, appName) => `
"""
URL configuration for ${projectName} project.
"""

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('django.contrib.auth.urls')),
    path('${appName}/', include('${appName}\.urls')),
]
`

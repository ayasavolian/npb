from django.urls import path
from rest_framework.authtoken import views as rest_framework_views
from accounts.resources.user_authentication_resource import UserAuthentication

urlpatterns = [
    # path('get_token', rest_framework_views.obtain_auth_token, name='get_auth_token'),
    path('user_auth', UserAuthentication.as_view())
]
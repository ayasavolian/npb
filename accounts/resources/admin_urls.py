from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user.resources.session_resource import session_resource
from accounts.resources.admin_login_resource import AdminLogin

app_name = 'admin'
urlpatterns = [
    # ex: /posts/
    path('', AdminLogin.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

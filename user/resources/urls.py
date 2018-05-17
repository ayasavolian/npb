from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user.resources.session_resource import session_resource
from user.resources.user_resource import User

app_name = 'user'
urlpatterns = [
    # ex: /posts/
    path('session', session_resource),
    path('user', User.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)

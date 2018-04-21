from django.urls import path

from post.views import PostStatusView

app_name = 'post'
urlpatterns = [
    # ex: /posts/
    path('poststatus', PostStatusView.as_view(), name='poststatus')
]
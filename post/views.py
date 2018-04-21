from django.http import HttpResponse
from django.views.generic import View

from post.data_access.post_status_access import PostStatusAccess

class PostStatusView(View):
    def get(self, request, *args, **kwargs):
        value = "draft"
        post_status_access = PostStatusAccess()
        return HttpResponse(post_status_access.create_post_status(value))

    def post(self, request, *args, **kwargs):
        return HttpResponse('This is POST request')
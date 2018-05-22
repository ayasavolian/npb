from django.contrib import admin

from post.dal.models.post_model import Post
from post.dal.models.post_status_model import PostStatus
from post.dal.models.section_model import Section

admin.site.register(Post)
admin.site.register(PostStatus)
admin.site.register(Section)
from django.contrib import admin

from .models import Post, PostStatus, Image, Section

admin.site.register(Post)
admin.site.register(PostStatus)
admin.site.register(Image)
admin.site.register(Section)
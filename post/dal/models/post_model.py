from django.db import models
from post.dal.models.post_status_model import PostStatus
from post.dal.models.section_model import Section
from user.dal.models.user_model import User
import django


class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    post_uuid = models.CharField(max_length=64, unique=True)
    section_id = models.ForeignKey(Section, on_delete="SET_DEFAULT", default=None, blank=True, null=True,)
    header_image_dir = models.CharField(max_length=255, null=True)
    header_text = models.CharField(max_length=255, null=True)
    post_status_id = models.ForeignKey(PostStatus, on_delete="SET_DEFAULT", default=None, blank=True, null=True,)
    title = models.CharField(max_length=255, null=True)
    body = models.CharField(max_length=255, null=True)
    read_time = models.CharField(max_length=4, null=True)
    upvotes = models.IntegerField(default=0)
    created_by = models.ForeignKey(User, on_delete="SET_DEFAULT", related_name='created_by', default=None, blank=True,
                                   null=True,)
    last_modified_by = models.ForeignKey(User, on_delete="SET_DEFAULT", related_name='last_modified_by', default=None,
                                         blank=True, null=True,)
    created_date = models.DateTimeField(default=django.utils.timezone.now)
    modified_timestamp = models.DateTimeField(default=django.utils.timezone.now)
    article_user_status = models.CharField(max_length=255, null=True)

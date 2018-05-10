"""
User

user_id
user_uuid
email
first_name
last_name

Post

post_uuid
post_id
section_id
header_image_id
post_status_id
title
body
type
Read_time
created_timestamp
modified_timestamp
created_by
Last_modified_by

Post Status
post_status_id
post_status

Section

Section_id
Section

Images

Image_uuid
Image_id
image_dir

"""
from django.db import models
from user.models.models import User
import django


class PostStatus(models.Model):
    post_status_id = models.AutoField(primary_key=True)
    post_status = models.CharField(max_length=64)


class Section(models.Model):
    section_id = models.AutoField(primary_key=True)
    section = models.CharField(max_length=64)


class Image(models.Model):
    image_id = models.AutoField(primary_key=True)
    image_uuid = models.CharField(max_length=64)
    image_dir = models.CharField(max_length=255, null=True)


class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    post_uuid = models.CharField(max_length=64)
    section_id = models.ForeignKey(Section, on_delete="CASCADE")
    header_image_id = models.ForeignKey(Image, on_delete="CASCADE")
    header_text = models.CharField(max_length=255, null=True)
    post_component = models.CharField(max_length=255, null=True)
    post_status_id = models.ForeignKey(PostStatus, on_delete="CASCADE")
    title = models.CharField(max_length=255, null=True)
    body = models.CharField(max_length=255, null=True)
    read_time = models.CharField(max_length=4, null=True)
    upvotes = models.IntegerField(default=0)
    created_by = models.ForeignKey(User, on_delete="CASCADE", related_name='created_by')
    last_modified_by = models.ForeignKey(User, on_delete="CASCADE", related_name='last_modified_by')
    created_date = models.DateTimeField(default=django.utils.timezone.now)
    modified_timestamp = models.DateTimeField(default=django.utils.timezone.now)
    article_user_status = models.CharField(max_length=255, null=True)

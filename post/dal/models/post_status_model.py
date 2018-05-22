from django.db import models


class PostStatus(models.Model):
    post_status_id = models.AutoField(primary_key=True)
    post_status = models.CharField(max_length=64)

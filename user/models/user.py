from django.db import models
import django


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_uuid = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64, null=True)
    last_name = models.CharField(max_length=64, null=True)
    created_date = models.DateTimeField(default=django.utils.timezone.now)
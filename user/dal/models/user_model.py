from django.db import models
import django
from django.contrib.auth.models import User


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    auth_user_id = models.ForeignKey(User, on_delete="SET_DEFAULT", blank=True, null=True)
    user_uuid = models.CharField(max_length=64, unique=True)
    email = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=64, null=True)
    last_name = models.CharField(max_length=64, null=True)
    created_date = models.DateTimeField(default=django.utils.timezone.now)
    photo = models.CharField(max_length=64, null=True)
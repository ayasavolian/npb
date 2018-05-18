from django.db import models
from user.dal.models.user_model import User
import django


class Visitor(models.Model):
    visitor_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete="SET_DEFAULT", blank=True, null=True, default=None)
    visitor_uuid = models.CharField(max_length=64)
    session_id = models.CharField(max_length=64)
    created_date = models.DateTimeField(default=django.utils.timezone.now)
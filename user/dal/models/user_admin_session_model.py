from django.db import models
import django
from user.dal.models.user_model import User

class UserAdminSession(models.Model):
    user_admin_session_id = models.AutoField(primary_key=True),
    user_admin_session_uuid = models.CharField(max_length=64, unique=True)
    user_id = models.ForeignKey(User, on_delete="SET_DEFAULT")
    session_token = models.CharField(max_length=64)
    created_date = models.DateTimeField(default=django.utils.timezone.now)

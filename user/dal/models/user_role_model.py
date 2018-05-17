from django.db import models
from user.dal.models.user_model import User
from user.dal.models.role_model import Role


class UserRole(models.Model):
    user_role_id = models.AutoField(primary_key=True)
    user_role_uuid = models.CharField(max_length=64)
    role_id = models.ForeignKey(Role, on_delete="CASCADE")
    user_id = models.ForeignKey(User, on_delete="CASCADE")

from django.db import models
from user.models.user import User
from user.models.role import Role


class UserRole(models.Model):
    user_role_id = models.AutoField(primary_key=True)
    user_role_uuid = models.CharField(max_length=64)
    role_id = models.ForeignKey(Role, on_delete="CASCADE")
    user_id = models.ForeignKey(User, on_delete="CASCADE")

from django.db import models
from user.models.role import Role
from user.models.capability import Capability


class RoleCapability(models.Model):
    role_capability_id = models.AutoField(primary_key=True)
    role_id = models.ForeignKey(Role, on_delete="CASCADE")
    capability_id = models.ForeignKey(Capability, on_delete="CASCADE")
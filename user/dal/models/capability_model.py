from django.db import models


class Capability(models.Model):
    capability_id = models.AutoField(primary_key=True)
    capability = models.CharField(max_length=64)

from django.db import models
import django


class Visitor(models.Model):
    visitor_id = models.AutoField(primary_key=True)
    visitor_uuid = models.CharField(max_length=64)
    session_id = models.CharField(max_length=64)
    created_date = models.DateTimeField(default=django.utils.timezone.now)
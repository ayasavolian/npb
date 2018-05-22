from django.db import models


class Section(models.Model):
    section_id = models.AutoField(primary_key=True)
    section = models.CharField(max_length=64)

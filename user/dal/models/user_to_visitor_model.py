from django.db import models
import django
from user.dal.models.user_model import User
from user.dal.models.visitor_model import Visitor


class UserToVisitor(models.Model):
    user_to_visitor_id = models.AutoField(primary_key=True)
    visitor_id = models.ForeignKey(Visitor, on_delete="CASCADE", unique=True)
    user_id = models.ForeignKey(User, on_delete="CASCADE")
    created_date = models.DateTimeField(default=django.utils.timezone.now)

from django.db import models
from util.database_util.database_util import uuid_generator
import django
import uuid


class Role(models.Model):
    role_id = models.AutoField(primary_key=True)
    role_name = models.CharField(max_length=64)


class Capability(models.Model):
    capability_id = models.AutoField(primary_key=True)
    capability = models.CharField(max_length=64)


class RoleCapability(models.Model):
    role_capability_id = models.AutoField(primary_key=True)
    role_id = models.ForeignKey(Role, on_delete="CASCADE")
    capability_id = models.ForeignKey(Capability, on_delete="CASCADE")


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_uuid = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64, null=True)
    last_name = models.CharField(max_length=64, null=True)
    created_date = models.DateTimeField(default=django.utils.timezone.now)

    # objects = UserManager()
    @classmethod
    def create_user(cls, email, first_name=None, last_name=None):
        try:
            user = cls.objects.get(email=email)
        except Exception as e:
            user = cls.objects.create(user_uuid=uuid_generator(),
                               email=email,
                               first_name=first_name,
                               last_name=last_name)
        return user

    def __str__(self):
        return self.user_uuid


class UserRole(models.Model):
    user_role_id = models.AutoField(primary_key=True)
    user_role_uuid = models.CharField(max_length=64)
    role_id = models.ForeignKey(Role, on_delete="CASCADE")
    user_id = models.ForeignKey(User, on_delete="CASCADE")


class Visitor(models.Model):
    visitor_id = models.AutoField(primary_key=True)
    visitor_uuid = models.CharField(max_length=64)
    session_id = models.CharField(max_length=64)
    created_date = models.DateTimeField(default=django.utils.timezone.now)

    @classmethod
    def create_visitor(cls, session_id):
        try:
            visitor = cls.objects.get(session_id=session_id)
        except Exception as e:
            visitor = cls.objects.create(visitor_uuid=uuid_generator(),
                               session_id=session_id)
        return visitor

    @classmethod
    def get_visitor(cls, session_id):
        try:
            visitor = cls.objects.get(session_id=session_id)
        except Exception as e:
            return None
        return visitor


class UserToVisitor(models.Model):
    user_to_visitor_id = models.AutoField(primary_key=True)
    visitor_id = models.ForeignKey(Visitor, on_delete="CASCADE")
    user_id = models.ForeignKey(User, on_delete="CASCADE")
    created_date = models.DateTimeField(default=django.utils.timezone.now)

    @classmethod
    def create_user_to_visitor(cls, visitor_id, user_id):
        try:
            create_user_to_visitor = cls.objects.get(user_id=user_id, visitor_id=visitor_id)
        except Exception as e:
            create_user_to_visitor = cls.objects.create(visitor_id=visitor_id,
                               user_id=user_id)
        return create_user_to_visitor

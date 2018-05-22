from user.dal.models.user_model import User
from django.core.exceptions import ObjectDoesNotExist
from django.db.utils import IntegrityError
import uuid


class UserAction(object):
    def __init__(self, email=None):
        self.email = email

    def get_user_by_email(self):
        try:
            user = User.objects.get(email=self.email)
        except ObjectDoesNotExist as e:
            print("this user does not exist %s." % self.email)
            return None
        return user

    def create_user(self, first_name, last_name, email=None):
        if email is not None:
            self.email = email
        try:
            user = User.objects.create(user_uuid=uuid.uuid4(),
                                       email=self.email,
                                       first_name=first_name,
                                       last_name=last_name)
            user.save()
        except IntegrityError as e:
            print("user already exists with email %s." % self.email)
            return None
        return user

    def get_user_by_user_admin(self, user_admin):
        try:
            user = User.objects.get(auth_user_id=user_admin)
        except ObjectDoesNotExist as e:
            print("there is no user with this user admin %s." % self.email)
            return None
        return user

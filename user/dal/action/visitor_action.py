from user.dal.models.visitor_model import Visitor
from django.core.exceptions import ObjectDoesNotExist
import uuid


class VisitorAction(object):
    def __init__(self, session_id=None):
        self.session_id = session_id

    def get_visitor(self):
        try:
            visitor = Visitor.objects.get(session_id=self.session_id)
        except ObjectDoesNotExist as e:
            print("this visitor does not exist %s." % self.session_id, e)
            return None
        return visitor

    def create_visitor(self):
        visitor = Visitor(visitor_uuid=uuid.uuid4(), session_id=self.session_id)
        visitor.save()
        return visitor

    def set_visitor_user(self, user):
        visitor = self.get_visitor()
        try:
            visitor.user_id = user
            visitor.save()
        except Exception as e:
            print(e)

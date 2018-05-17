from user.dal.models.visitor_model import Visitor
from util.database_util.database_util import uuid_generator
from django.core.exceptions import ObjectDoesNotExist


class VisitorAction(object):
    def __init__(self, session_id=None):
        self.session_id = session_id

    def get_visitor(self):
        try:
            visitor = Visitor.objects.get(session_id=self.session_id)
        except ObjectDoesNotExist as e:
            print("this visitor does not exist %s." % self.session_id)
            return None
        return visitor

    def create_visitor(self):
        visitor = Visitor(visitor_uuid=uuid_generator(), session_id=self.session_id)
        visitor.save()
        return visitor

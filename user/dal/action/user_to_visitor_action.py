from user.dal.models.user_to_visitor_model import UserToVisitor

from django.core.exceptions import ObjectDoesNotExist


class UserToVisitorAction(object):
    def __init__(self, user=None, visitor=None):
        self.user = user
        self.visitor = visitor
        self.user_to_visitor = None

    def get_user_to_visitor(self):
        try:
            user_to_visitor = UserToVisitor.objects.get(visitor_id=self.visitor.visitor_id,
                                                        user_id=self.user.user_id)
        except ObjectDoesNotExist as e:
            print("this user to visitor does not exist %s and %s." % (self.visitor.visitor_id, self.user.user_id))
            return None
        return user_to_visitor

    def create_user_to_visitor(self):
        user_to_visitor = UserToVisitor(user_id=self.user, visitor_id=self.visitor)
        user_to_visitor.save()
        self.user_to_visitor = user_to_visitor
        return user_to_visitor

    def get_user_to_visitor_visitor(self):
        try:
            visitor = UserToVisitor.objects.get(visitor_id=self.visitor)
        except ObjectDoesNotExist as e:
            print("this visitor does not exist %s." % self.visitor.visitor_id)
            return None
        return visitor

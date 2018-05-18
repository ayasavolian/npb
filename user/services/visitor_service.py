from user.dal.action.visitor_action import VisitorAction


class VisitorService(object):
    def __init__(self):
        self.visitor = None

    def get_or_create_visitor(self, session_id=None):
        visitor_action = VisitorAction(session_id=session_id)
        visitor = visitor_action.get_visitor()
        if visitor is None:
            visitor = visitor_action.create_visitor()
        self.visitor = visitor
        return visitor

    def set_visitor_user(self, user):
        return VisitorAction(self.visitor.session_id).set_visitor_user(user)




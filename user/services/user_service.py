from user.dal.action.user_action import UserAction
from user.dal.action.user_to_visitor_action import UserToVisitorAction


class UserService(object):
    def __init__(self):
        self.user = None

    @staticmethod
    def get_user(email):
        return UserAction(email=email).get_user_by_email()

    @staticmethod
    def create_user(first_name, last_name, email):
        return UserAction(email=email).create_user(first_name=first_name, last_name=last_name, email=email)

    @staticmethod
    def create_user_to_visitor(user, visitor):
        user_to_visitor_action = UserToVisitorAction(user=user, visitor=visitor)
        if user_to_visitor_action.get_user_to_visitor() is None:
            user_to_visitor = user_to_visitor_action.create_user_to_visitor()
            return user_to_visitor
        else:
            print("this user to visitor connection exists. %s, %s." % (user.user_id, visitor.visitor_id))
            return None

    @staticmethod
    def get_user_to_visitor_visitor(visitor):
        return UserToVisitorAction(visitor=visitor).get_user_to_visitor_visitor()

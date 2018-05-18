from user.dal.action.user_action import UserAction


class UserService(object):
    def __init__(self):
        self.user = None

    @staticmethod
    def get_user(email):
        return UserAction(email=email).get_user_by_email()

    @staticmethod
    def create_user(first_name, last_name, email):
        return UserAction(email=email).create_user(first_name=first_name, last_name=last_name, email=email)

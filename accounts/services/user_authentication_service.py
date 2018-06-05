from user.dal.action.user_action import UserAction
from user.dal.action.user_admin_session_action import UserAdminSessionAction
from django.contrib.auth.models import User


class UserAuthenticationService(object):

    @staticmethod
    def create_auth_token(admin_user, session):
        error = None
        user = UserAction().get_user_by_user_admin(user_admin=admin_user)
        if user is not None:
            return UserAdminSessionAction().create_user_admin_session(user, session)
        else:
            return error

    @staticmethod
    def get_auth_token(session, valid=None, latest=None):
        return UserAdminSessionAction().get_user_admin_session(session, valid=valid, latest=latest)


from user.dal.models.user_admin_session_model import UserAdminSession
from django.core.exceptions import ObjectDoesNotExist
import uuid
from datetime import datetime, timedelta


class UserAdminSessionAction(object):

    @staticmethod
    def get_user_admin_session(session, latest=None):
        try:
            if latest is None:
                user_admin_session = UserAdminSession.objects.get(session_token=session)
            else:
                user_admin_session = UserAdminSession.objects.filter(session_token=session,
                                                                     created_date__range=(datetime.now()-timedelta(days=1), datetime.now()))
        except ObjectDoesNotExist as e:
            print("this session doesnt have an admin user session %s." % session)
            return None
        return user_admin_session

    @staticmethod
    def create_user_admin_session(user, session):
        user_admin_session = UserAdminSession(user_id=user,
                                              user_admin_session_uuid=uuid.uuid4(),
                                              session_token=session)
        user_admin_session.save()
        return user_admin_session

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.http import HttpResponse


from accounts.services.user_authentication_service import UserAuthenticationService


class UserAuthentication(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        session_id = request.COOKIES.get('sessionid')
        user_authentication = UserAuthenticationService.create_auth_token(admin_user=user, session=session_id)
        if user_authentication is not None:
            content = {
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            }
            return Response(content, status=200)
        else:
            return HttpResponse(status=500)

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.views import APIView
from django.views.generic import TemplateView

from accounts.services.user_authentication_service import UserAuthenticationService
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render_to_response, redirect


class AdminLogin(APIView):
    def get(self, request, format=None):
        session_id = request.COOKIES.get('sessionid')
        user_authentication = UserAuthenticationService.get_auth_token(session=session_id, latest=True)
        print (len(user_authentication))
        if len(user_authentication) != 0:
            print(user_authentication)
            return render_to_response('admin.html')
            # return(TemplateView.as_view(template_name='admin.html'))
        else:
            return redirect('/')
            # return render_to_response('index.html')
            # return(TemplateView.as_view(template_name='index.html'))
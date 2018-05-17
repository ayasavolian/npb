from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from user.services.visitor_service import VisitorService
from user.services.user_service import UserService

import json


class User(APIView):
    def post(self, request, format=None):
        content = json.loads(request.body)
        session_id = request.COOKIES.get('sessionid')
        visitor = VisitorService().get_or_create_visitor(session_id=session_id)
        if "@" not in content["email"]:
            return Response(json.dumps({"status": "error", "message": "Are you sure your email address is correct? "}), status=200)
        user_service = UserService()
        get_user = user_service.get_user(content["email"])
        user = None
        if get_user is not None:
            get_user_to_visitor = user_service.get_user_to_visitor_visitor(visitor=visitor)
            if get_user_to_visitor is None:
                user_service.create_user_to_visitor(user=get_user, visitor=visitor)
            return Response(json.dumps({"status": "okay", "message": "I think you've already signed up for our newsletter! "
                                                                    "We'll be sure to keep you up to date."}), status=200)
        if get_user is None:
            get_user_to_visitor = user_service.get_user_to_visitor_visitor(visitor=visitor)
            if get_user_to_visitor is None:
                user = user_service.create_user(first_name=content["first"],
                                                 last_name=content["last"],
                                                 email=content["email"])
            else:
                return Response(
                    json.dumps({"status": "okay", "message": "I think you've already signed up for our newsletter! "
                                                             "We'll be sure to keep you up to date."}), status=200)
        if user is not None:
            user_service.create_user_to_visitor(user=user, visitor=visitor)
            return Response(json.dumps({"status": "okay", "message": "Welcome to the Piggy Bank fam! You should "
                                                                    "receive an email shortly."}), status=200)
        return HttpResponse(status=500)

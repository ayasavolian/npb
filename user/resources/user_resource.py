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
        if "first" not in content or "last" not in content or "email" not in content:
            return Response(json.dumps({"status": "error", "message": "Are you sure you correctly filled out the fields? "}),
                            status=200)
        if content["first"] == "" or content["last"] == "" or content["email"] == "":
            return Response(json.dumps({"status": "error", "message": "Are you sure you correctly filled out the fields? "}),
                            status=200)
        if "@" not in content["email"]:
            return Response(json.dumps({"status": "error", "message": "Are you sure your email address is correct? "}), status=200)
        visitor_service = VisitorService()
        visitor = visitor_service.get_or_create_visitor(session_id=session_id)
        if visitor.user_id is None:
            user_service = UserService()
            get_user = user_service.get_user(content["email"])
            if get_user is not None:
                visitor_service.set_visitor_user(user=get_user)
                return Response(json.dumps({"status": "okay", "message": "I think you've already signed up for our newsletter! "
                                                                        "We'll be sure to keep you up to date."}), status=200)
            if get_user is None:
                user = user_service.create_user(first_name=content["first"],
                                                 last_name=content["last"],
                                                 email=content["email"])
                visitor_service.set_visitor_user(user=user)
                return Response(json.dumps({"status": "okay", "message": "Welcome to the Piggy Bank fam! You should "
                                                                         "receive an email shortly."}), status=200)
        else:
            return Response(json.dumps({"status": "okay", "message": "I think you've already signed up for our newsletter! "
                                                         "We'll be sure to keep you up to date."}), status=200)

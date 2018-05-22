from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.middleware.csrf import rotate_token

from user.services.visitor_service import VisitorService


@api_view(['POST'])
def session_resource(request):
    if request.method == 'POST':
        session_id = request.COOKIES.get('sessionid')
        csrf_token = request.COOKIES.get('csrftoken')
        print(csrf_token)
        if csrf_token is None:
            print("inside")
            rotate_token(request)
        if session_id is not None:
            VisitorService().get_or_create_visitor(session_id=session_id)
        else:
            return HttpResponse(status=500)
        return HttpResponse(status=200)

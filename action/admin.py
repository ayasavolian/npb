from django.contrib import admin

from .models import Action, WebPageAction, VisitorWebPage

admin.site.register(Action)
admin.site.register(WebPageAction)
admin.site.register(VisitorWebPage)
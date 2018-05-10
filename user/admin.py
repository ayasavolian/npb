from django.contrib import admin

from user.models.models import User, UserRole, UserToVisitor, Visitor, Capability, Role, RoleCapability

admin.site.register(User)
admin.site.register(UserRole)
admin.site.register(UserToVisitor)
admin.site.register(Visitor)
admin.site.register(Capability)
admin.site.register(Role)
admin.site.register(RoleCapability)
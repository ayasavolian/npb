from django.contrib import admin
from user.dal.models.user_model import User
from user.dal.models.user_role_model import UserRole
from user.dal.models.user_to_visitor_model import UserToVisitor
from user.dal.models.visitor_model import Visitor
from user.dal.models.capability_model import Capability
from user.dal.models.role_model import Role
from user.dal.models.role_capability_model import RoleCapability

admin.site.register(User)
admin.site.register(UserRole)
admin.site.register(UserToVisitor)
admin.site.register(Visitor)
admin.site.register(Capability)
admin.site.register(Role)
admin.site.register(RoleCapability)
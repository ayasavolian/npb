from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    user_uuid = serializers.CharField(max_length=64)
    email = serializers.CharField(max_length=64)
    first_name = serializers.CharField(max_length=64)
    last_name = serializers.CharField(max_length=64)
    created_date = serializers.DateTimeField()
    photo = serializers.CharField(max_length=64)

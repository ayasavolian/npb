from rest_framework import serializers


class PostStatusSerializer(serializers.Serializer):
    post_status = serializers.CharField(max_length=64)

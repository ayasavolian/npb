from rest_framework import serializers
from post.resources.serializers.section_serializer import SectionSerializer
from post.resources.serializers.post_status_serializer import PostStatusSerializer
from user.resources.serializers.user_serializer import UserSerializer


class PostSerializer(serializers.Serializer):
    post_uuid = serializers.CharField(max_length=64)
    post_name = serializers.CharField(max_length=64)
    preview_text = serializers.CharField(max_length=241)
    section_id = SectionSerializer(required=False)
    post_status_id = PostStatusSerializer()
    title = serializers.CharField(max_length=255)
    body = serializers.CharField()
    read_time = serializers.IntegerField(max_length=4)
    upvotes = serializers.IntegerField(max_length=25)
    created_by = UserSerializer()
    last_modified_by = UserSerializer()
    created_date = serializers.DateTimeField()
    modified_timestamp = serializers.DateTimeField()
    article_user_status = serializers.CharField(max_length=255)


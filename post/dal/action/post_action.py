from django.core.exceptions import ObjectDoesNotExist
from post.dal.models.post_model import Post


class PostAccess(object):

    @staticmethod
    def get_posts(size):
        try:
            posts = Post.objects.all().order_by('created_date')[:size:1]
        except Exception as e:
            print("something went wrong getting posts", e)
        return posts

    @staticmethod
    def get_all_posts():
        try:
            posts = Post.objects.all()
        except Exception as e:
            return None
        return posts

    @staticmethod
    def get_post(post_uuid):
        try:
            post = Post.objects.get(post_uuid=post_uuid)
        except ObjectDoesNotExist as e:
            print("this post does not exist %s." % post)
            return None
        return post

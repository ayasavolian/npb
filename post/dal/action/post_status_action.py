from django.core.exceptions import ObjectDoesNotExist
from post.dal.models.post_status_model import PostStatus


class PostStatusAction(object):

    @staticmethod
    def get_all_post_status():
        try:
            post_status = PostStatus.objects.all()
        except Exception as e:
            print("couldn't get all posts status'", e)
            return None
        return post_status

    @staticmethod
    def get_post_status(post_status):
        try:
            status = PostStatus.objects.get(post_status=post_status)
        except ObjectDoesNotExist as e:
            raise ObjectDoesNotExist("that status doesn't exist", e)
        return status

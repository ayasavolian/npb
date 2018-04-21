from post.models import PostStatus


class PostStatusAccess(object):

    def create_post_status(self, post_status):
        try:
            post_status = PostStatus.objects.get(post_status=post_status)
        except Exception as e:
            post_status = PostStatus.objects.create(post_status=post_status)
        return post_status

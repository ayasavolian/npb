from post.dal.action.post_action import PostAction
from post.resources.serializers.post_seralizer import PostSerializer


class PostService(object):

    @staticmethod
    def get_posts(size=None, post_uuid=None):
        returned_posts = []
        posts = PostAction.get_posts(size, post_uuid)
        for post in posts:
            returned_posts.append(PostSerializer(post))

    @staticmethod
    def create_or_update_post():
        PostAction.get_posts()


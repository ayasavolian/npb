from django.core.exceptions import ObjectDoesNotExist
from post.dal.models.post_model import Post
import uuid
import django


class PostAction(object):

    @staticmethod
    def get_posts(size=None, post_uuid=None):
        try:
            if size is not None:
                posts = Post.objects.all().order_by('created_date')[:size:1]
            elif post_uuid is not None:
                posts = Post.objects.get(post_uuid=post_uuid)
            else:
                posts = Post.objects.all()
        except Exception as e:
            print("something went wrong getting posts", e)
            return None
        return posts

    @staticmethod
    def create_post(title, post_name, post_status_id, preview_text=None, section_id=None,
                              header_image_dir=None, body=None, read_time=None,upvotes=None, created_by=None,
                              last_modified_by=None, article_user_status=None):
        try:
            post = Post(post_uuid=uuid.uuid4(), post_name = post_name, section_id = section_id,
                          header_image_dir = header_image_dir, post_status_id = post_status_id,
                          title = title, body = body, read_time = read_time, upvotes = upvotes,
                          created_by = created_by, last_modified_by = last_modified_by,
                        article_user_status = article_user_status, preview_text = preview_text)
            post.save()
            return post
        except Exception as e:
            raise Exception("something went wrong making the post", e)

    @staticmethod
    def update_post(title, post_name, post_status_id, preview_text=None, section_id=None,
                              header_image_dir=None, body=None, read_time=None,upvotes=None, created_by=None,
                              last_modified_by=None, post_uuid=None, article_user_status=None):
        try:
            post = Post.objects.get(post_uuid=post_uuid)
            post.title = title
            post.post_name = post_name
            post.post_status_id = post_status_id
            post.section_id = section_id
            post.preview_text = preview_text
            post.header_image_id = header_image_dir
            post.body = body
            post.read_time = read_time
            post.upvotes = upvotes
            post.created_by = created_by
            post.last_modified_by = last_modified_by
            post.modified_timestamp = django.utils.timezone.now
            post.article_user_status = article_user_status
            post.save()
            return post
        except Exception as e:
            raise Exception("something went wrong updating the post", e)
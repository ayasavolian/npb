from post.models import Post
from util.database_util.database_util import uuid_generator


class PostAccess(object):

    def create_post(self, section_id, header_image_id, post_status_id, title, body,
                    read_time, approved, upvotes, created_by, last_modified_by, post_uuid=None):
        try:
            post = Post.objects.get(post_uuid=post_uuid)
        except Exception as e:
            post = Post.objects.create(post_uuid=uuid_generator(), section_id = section_id,
                                      header_image_id = header_image_id, post_status_id = post_status_id,
                                      title_dir = title, body_dir = body,
                                      read_time = read_time, approved = approved, upvotes = upvotes,
                                      created_by = created_by, last_modified_by = last_modified_by)
        return post

    def get_all_posts(self):
        try:
            posts = Post.objects.all()
        except Exception as e:
            return None
        return posts



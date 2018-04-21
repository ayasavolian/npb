from action.models import *


def create_visitor_web_page(cls, visitor_id, visitor_post_id, visited_page_url):
    visitor_web_page = cls.objects.create(visited_post_id=visitor_post_id,
                                          visited_page_url=visited_page_url,
                                          visitor_id=visitor_id)
    return visitor_web_page
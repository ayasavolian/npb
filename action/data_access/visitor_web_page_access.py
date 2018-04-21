from action.models import VisitorWebPage


class VisitorWebPageAccess(object):

    def create_visitor_web_page(cls, visitor_id, visitor_post_id, visited_page_url):
        visitor_web_page = VisitorWebPage.objects.create(visited_post_id=visitor_post_id,
                                              visited_page_url=visited_page_url,
                                              visitor_id=visitor_id)
        return visitor_web_page

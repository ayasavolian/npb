"""
Visitor Web Page

visitor_id
visited_page_uuid
page_id

Action

action_id
action

Web Page Action

web_page_action_uuid
web_page_action_id
action_id
web_page_id
"""
from django.db import models
from user.models import Visitor
from post.models import Post
import django


class VisitorWebPage(models.Model):
    visitor_web_page_id = models.AutoField(primary_key=True)
    visited_post_id = models.ForeignKey(Post, on_delete="CASCADE")
    visited_page_url = models.CharField(max_length=64)
    visitor_id = models.ForeignKey(Visitor, on_delete="CASCADE")
    created_date = models.DateTimeField(default=django.utils.timezone.now)

    @classmethod
    def create_visitor_web_page(cls, visitor_id, visitor_post_id, visited_page_url):
        visitor_web_page = cls.objects.create(visited_post_id=visitor_post_id,
                           visited_page_url=visited_page_url,
                            visitor_id=visitor_id)
        return visitor_web_page


class Action(models.Model):
    action_id = models.AutoField(primary_key=True)
    action = models.CharField(max_length=64)

    @classmethod
    def create_action(cls, action):
        try:
            action = cls.objects.get(action=action)
        except Exception as e:
            action = cls.objects.create(action=action)
        return action

    @classmethod
    def get_action(cls, action):
        try:
            action = cls.objects.get(action=action)
        except Exception as e:
            return None
        return action


class WebPageAction(models.Model):
    web_page_action_id = models.AutoField(primary_key=True)
    web_page_action_uuid = models.CharField(max_length=64)
    action_id = models.ForeignKey(Action, on_delete="CASCADE")
    web_page_id = models.ForeignKey(VisitorWebPage, on_delete="CASCADE")
    created_date = models.DateTimeField(default=django.utils.timezone.now)

    @classmethod
    def create_web_page_action(cls, action_id, web_page_id):
        web_page_action = cls.objects.create(action_id=action_id,
                                    web_page_id=web_page_id)
        return web_page_action
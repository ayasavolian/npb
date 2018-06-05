from django.core.exceptions import ObjectDoesNotExist
from post.dal.models.section_model import Section


class SectionAction(object):

    @staticmethod
    def get_section(section):
        try:
            section = Section.objects.get(section=section)
        except ObjectDoesNotExist as e:
            raise ObjectDoesNotExist("that status doesn't exist", e)
        return section

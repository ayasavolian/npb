from post.models import Section


class SectionAccess(object):

    def create_section(self, section):
        try:
            section = Section.objects.get(section=section)
        except Exception as e:
            section = Section.objects.create(section=section)
        return section


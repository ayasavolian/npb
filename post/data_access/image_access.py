from post.models import Image


class ImageAccess(object):

    def create_image(self, image_dir):
        try:
            image = Image.objects.get(image_dir=image_dir)
        except Exception as e:
            image = Image.objects.create(image_uuid=uuid_generator(), image_dir=image_dir)
        return image

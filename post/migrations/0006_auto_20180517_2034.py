# Generated by Django 2.0.4 on 2018-05-18 03:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0005_auto_20180508_0426'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='header_image_id',
        ),
        migrations.RemoveField(
            model_name='post',
            name='post_component',
        ),
        migrations.AddField(
            model_name='post',
            name='header_image_dir',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_by',
            field=models.ForeignKey(default=None, on_delete='SET_DEFAULT', related_name='created_by', to='user.User'),
        ),
        migrations.AlterField(
            model_name='post',
            name='last_modified_by',
            field=models.ForeignKey(default=None, on_delete='SET_DEFAULT', related_name='last_modified_by', to='user.User'),
        ),
        migrations.AlterField(
            model_name='post',
            name='post_status_id',
            field=models.ForeignKey(default=None, on_delete='SET_DEFAULT', to='post.PostStatus'),
        ),
        migrations.AlterField(
            model_name='post',
            name='section_id',
            field=models.ForeignKey(default=None, on_delete='SET_DEFAULT', to='post.Section'),
        ),
        migrations.DeleteModel(
            name='Image',
        ),
    ]

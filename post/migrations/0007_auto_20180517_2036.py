# Generated by Django 2.0.4 on 2018-05-18 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0006_auto_20180517_2034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_by',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete='SET_DEFAULT', related_name='created_by', to='user.User'),
        ),
        migrations.AlterField(
            model_name='post',
            name='last_modified_by',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete='SET_DEFAULT', related_name='last_modified_by', to='user.User'),
        ),
        migrations.AlterField(
            model_name='post',
            name='post_status_id',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete='SET_DEFAULT', to='post.PostStatus'),
        ),
        migrations.AlterField(
            model_name='post',
            name='section_id',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete='SET_DEFAULT', to='post.Section'),
        ),
    ]
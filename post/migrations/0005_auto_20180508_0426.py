# Generated by Django 2.0.4 on 2018-05-08 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0004_auto_20180404_1657'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='approved',
        ),
        migrations.AddField(
            model_name='post',
            name='article_user_status',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='header_text',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='post_component',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='body',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
# Generated by Django 2.0.3 on 2018-04-04 16:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('action', '0002_auto_20180403_0529'),
    ]

    operations = [
        migrations.AddField(
            model_name='visitorwebpage',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='webpageaction',
            name='created_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]

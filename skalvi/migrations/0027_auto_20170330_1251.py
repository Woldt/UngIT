# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-30 10:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skalvi', '0026_auto_20170328_1324'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='suitedForType',
        ),
        migrations.AlterField(
            model_name='activity',
            name='activityType',
            field=models.CharField(max_length=80),
        ),
    ]
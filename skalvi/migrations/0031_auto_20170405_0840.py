# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-05 06:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skalvi', '0030_auto_20170331_1322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='provider',
            field=models.TextField(),
        ),
    ]

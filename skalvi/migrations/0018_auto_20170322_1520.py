# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-22 14:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skalvi', '0017_auto_20170322_1517'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='adaptions',
            field=models.TextField(blank=True, null=True),
        ),
    ]

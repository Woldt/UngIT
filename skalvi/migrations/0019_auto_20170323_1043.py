# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-23 09:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skalvi', '0018_activity_number_of_ratings'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='rating',
            field=models.FloatField(),
        ),
    ]
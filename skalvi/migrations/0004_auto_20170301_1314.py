# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-01 12:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skalvi', '0003_auto_20170301_1303'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='images',
            field=models.ImageField(blank=True, max_length=200, upload_to='/provider/images/'),
        ),
    ]

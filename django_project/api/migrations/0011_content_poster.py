# Generated by Django 2.2.5 on 2019-09-08 22:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20190908_2210'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='poster',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.User'),
        ),
    ]

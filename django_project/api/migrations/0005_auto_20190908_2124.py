# Generated by Django 2.2.5 on 2019-09-08 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20190908_2120'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='data',
            field=models.TextField(default=-1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='content',
            name='data',
            field=models.TextField(),
        ),
    ]

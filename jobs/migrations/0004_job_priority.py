# Generated by Django 2.0.2 on 2018-05-20 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0003_job_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='priority',
            field=models.PositiveSmallIntegerField(default=0),
            preserve_default=False,
        ),
    ]
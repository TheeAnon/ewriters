# Generated by Django 4.0 on 2023-07-31 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_users_is_active_users_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 4.0 on 2023-07-13 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_alter_users_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
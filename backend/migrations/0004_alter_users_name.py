# Generated by Django 4.0 on 2023-07-13 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_remove_users_first_name_remove_users_is_active_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='name',
            field=models.CharField(max_length=30),
        ),
    ]
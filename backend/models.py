from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserAccountManager(BaseUserManager):
    def create_user(self, email,  phone, password, **exta_fields):
        if not email:
            raise ValueError("Email address cannot be blank")

        email = self.normalize_email(email)
        user = self.model(email=email, phone=phone, **exta_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, phone, password, **exta_fields):
        if not email:
            raise ValueError("Email address cannot be blank")

        email = self.normalize_email(email)
        user = self.model(email=email, phone=phone, **exta_fields,
                          is_staff=True, is_superuser=True)
        user.set_password(password)
        user.save()

        return user


class Users(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.IntegerField()
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone']

    def get_name(self):
        return self.first_name

    def get_phone(self):
        return self.phone

    def __str__(self):
        return self.email

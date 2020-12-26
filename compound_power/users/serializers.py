from rest_framework import serializers
# from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from .models import User


# Users serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'

# Register Serializer
# class RegisterSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = User
#     fields = ('id', 'username', 'email', 'password') 

# Login Serializer

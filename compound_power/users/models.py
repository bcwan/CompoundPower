from django.db import models

class User(models.Model):
  name = models.CharField(max_length = 50)
  username = models.CharField(max_length = 20, unique = True)
  email = models.EmailField(max_length = 100, unique=True)
  created_at = models.DateTimeField(auto_now_add = True)



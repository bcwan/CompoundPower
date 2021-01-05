from django.urls import path
from . import views

# point to index function in views.py
urlpatterns = [
  path('', views.index)
]
from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('users.urls')),
    path('', include('accounts.urls'))
]

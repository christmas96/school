from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.UserProfile.loginUser, name='login'),
    path('signup', views.UserProfile.registerUser, name='signup')
]
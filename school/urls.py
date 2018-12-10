from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.UserProfile.loginUser, name='login'),
    path('signup', views.UserProfile.registerUser, name='signup'),
    path('user/schedule', views.UserProfile.get_user_schedule, name='get_user_schedule')
]
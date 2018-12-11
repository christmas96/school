from django.urls import path, include
from django.contrib import admin
from . import views
from . import teacher

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.UserProfile.loginUser, name='login'),
    path('signup', views.UserProfile.registerUser, name='signup'),
    path('user/schedule', views.UserProfile.get_user_schedule, name='get_user_schedule'),
    path('teacher/subjects', teacher.TeacherProfile.get_subjects, name='get_teacher_all_subjects'),
    path('teacher/groups', teacher.TeacherProfile.get_groups, name='get_teacher_all_groups'),
    path('admin/', admin.site.urls)
]
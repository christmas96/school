from django.db import connection
from django.shortcuts import render
import json
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from school.models import *


# Create your views here.

def index(request):
    return HttpResponse("Hey it's school app")

def check_role(request):
    user_mail = request.GET['email']
    user_obj = User.objects.filter(email=user_mail).exists()

    employee_role = Employee.objects.filter(user=user_obj).exists()
    pupil_role = Pupil.objects.filter(user=user_obj).exists()

    if employee_role:
        return JsonResponse({'email':user_mail, 'permission':"admin"}, status=200)
    elif pupil_role:
        return JsonResponse({'email':user_mail, 'permission':"pupil"}, status=200)
    else:
        # user with specified email not found
        return HttpResponse(status=404)


def get_user_schedule(user_id, start_date, end_date):
    with connection.cursor() as cursor:
        cursor.execute("select school_subject.name, school_group.name, school_diary.mark, school_hometask.description, "
                       "school_lessondata.room, school_lessontime.begin, school_lessontime.end, school_lesson.date "
                       "from school_pupil inner join school_pupil_groups on school_pupil.id = school_pupil_groups.pupil_id "
                       "inner join school_group on school_pupil_groups.group_id = school_group.id "
                       "inner join school_lessondata on school_lessondata.group_id = school_group.id "
                       "inner join school_lesson on school_lesson.lesson_data_id = school_lessondata.id "
                       "inner join school_lessontime on school_lessontime.id = school_lesson.lesson_time_id "
                       "inner join school_subject on school_subject.id = school_lessondata.subject_id "
                       "left join school_hometask on school_hometask.group_id = school_group.id "
                       "left join school_diary on school_diary.lesson_id = school_lesson.id "
                       "WHERE school_pupil.id = " + user_id + " AND school_lesson.date between  '" + start_date + "' AND '" + end_date + "'"
                       "ORDER BY school_lesson.date, school_lessontime.number")
        a = cursor.fetchall()

    return a

class UserProfile():
    @csrf_exempt
    def registerUser(request):
        email = request.POST['email']
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        User.objects.create_user(username=email, email=email,
                                 password=password, first_name=first_name,
                                 last_name=last_name)
        user = authenticate(request, username=email, password=password)
        login(request, user)
        return JsonResponse({'email': email}, status=200)


    @csrf_exempt
    def loginUser(request):
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user:
            login(request, user)
            return JsonResponse({'email':email}, status = 200)
        else:
            # Return an 'invalid login' error message.
            return HttpResponse(status=404)

    @csrf_exempt
    def get_user_schedule(request):
        user_id = request.GET['userId']
        start_date = request.GET['startDate']
        end_date = request.GET['endDate']
        result = get_user_schedule(user_id, start_date, end_date)
        #return JsonResponse(result, status = 200)
        return JsonResponse("Test! fix me please", status = 200, safe=False)

    @csrf_exempt
    def logoutUser(request):
        logout(request)
        return HttpResponse(status=200)

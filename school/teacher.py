from django.db import connection
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


def teacher_subjects_sql(user_id):
    with connection.cursor() as cursor:
        cursor.execute("select school_subject.name, school_subject.id "
                       "from school_employee_subjects inner join school_subject on school_employee_subjects.employee_id = school_subject.id "
                       "WHERE school_employee_subjects.employee_id = 2 ;")
        row = cursor.fetchone()

    return row


def my_teacher_groups_sql(user_id):
    with connection.cursor() as cursor:
        cursor.execute("select school_group.name, school_group.id "
                       "from school_group "
                       "WHERE school_group.teacher_id = 2 ;")
        row = cursor.fetchone()

    return row


class TeacherProfile():
    @csrf_exempt
    def get_subjects(request):
        user_id = request.GET['userId']
        subjects = teacher_subjects_sql(user_id)
        return JsonResponse({'subjects': subjects}, status=200)

    @csrf_exempt
    def get_groups(request):
        user_id = request.GET['userId']
        groups = my_teacher_groups_sql(user_id)
        return JsonResponse({'groups': groups}, status=200)



from django.db import models

from django.contrib.auth.models import User


class Position(models.Model):
    title = models.CharField(max_length=150)


class Subject(models.Model):
    name = models.CharField(max_length=100)


class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    position = models.ForeignKey(Position, on_delete=models.DO_NOTHING)
    subjects = models.ManyToManyField(Subject)


class SchoolClass(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.ForeignKey(Employee, on_delete=models.DO_NOTHING)


class Group(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.ForeignKey(Employee, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)


class Pupil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    schoolClass = models.ForeignKey(SchoolClass, on_delete=models.DO_NOTHING)
    groups = models.ManyToManyField(Group)


class HomeTask(models.Model):
    deadline = models.DateField()
    description = models.TextField()
    group = models.ForeignKey(Group, on_delete=models.CASCADE)


class LessonTime(models.Model):
    number = models.IntegerField()
    begin = models.CharField(max_length=20)
    end = models.CharField(max_length=20)


class LessonData(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.DO_NOTHING)
    group = models.ForeignKey(Group, on_delete=models.DO_NOTHING)
    room = models.CharField(max_length=100)


class Lesson(models.Model):
    date = models.DateField()
    lesson_data = models.ForeignKey(LessonData, on_delete=models.CASCADE)
    lesson_time = models.ForeignKey(LessonTime, on_delete=models.CASCADE)


class Diary(models.Model):
    pupil = models.ForeignKey(Pupil, on_delete=models.CASCADE)
    mark = models.IntegerField()
    lesson = models.ForeignKey(Lesson, on_delete=models.DO_NOTHING)
    teacher_note = models.CharField(max_length=200)


class Announcement(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    is_for_everyone = models.BooleanField()
    author = models.ForeignKey(Employee, on_delete=models.CASCADE)
    text = models.TextField()
    date_start = models.DateField()
    date_end = models.DateField()









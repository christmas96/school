from django.shortcuts import render
import jwt,json
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


# Create your views here.


def index(request):
    return HttpResponse("Hey it's school app")


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
        return HttpResponse(status=200)


    @csrf_exempt
    def loginUser(request):
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'email':email}, status = 200)
        else:
            # Return an 'invalid login' error message.
            return HttpResponse(status=404)

    @csrf_exempt
    def logoutUser(request):
        logout(request)
        return HttpResponse(status=200)



from django.shortcuts import render
from rest_framework.response import Response
from apps.users.mixins import CustomLoginRequiredMixin
from rest_framework import generics
from .models import User
from .serializers import UserSerializer, UserSignUpSerializer, UserSignInSerializer

class UserSignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer


class UserSignIn(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignInSerializer

class UserProfile(CustomLoginRequiredMixin,generics.ListAPIView):
    serializer_class= UserSerializer
    pagination_class= None

def get(self, request, *args, **kwargs):
    serializer = UserSerializer([request.login_user], many=True)
    return Response(serializer.data[0])
   
    
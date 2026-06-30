from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from .models import Job
from .serializers import JobSerializer, RegisterSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, RegisterView

router = DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = router.urls

urlpatterns += [
    path("register/", RegisterView.as_view(), name="register"),
]
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, RegisterView, ApplicationViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'applications', ApplicationViewSet)

urlpatterns = router.urls

urlpatterns += [
    path("register/", RegisterView.as_view(), name="register"),
]
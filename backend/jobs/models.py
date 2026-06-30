from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=100)
    salary = models.IntegerField()
    job_type = models.CharField(max_length=50)
    description = models.TextField()   

    def __str__(self):
        return self.title
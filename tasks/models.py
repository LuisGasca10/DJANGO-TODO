from django.db import models

# Create your models here.
class Tarea(models.Model):
    description = models.TextField(max_length=50)
    completed = models.BooleanField(default=False)
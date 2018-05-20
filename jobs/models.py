from django.db import models

# Create your models here.
class Job(models.Model):
  title = models.CharField(max_length=30)
  image = models.ImageField(upload_to='images/')
  summary = models.CharField(max_length=200)
  skills = models.CharField(max_length=200, default='html css javascript')
  priority = models.PositiveSmallIntegerField()
  # environment
  # created date

# client
# objective
# role
# skills
# term

from django.db import models

# Create your models here.
class Job(models.Model):
  title = models.CharField(max_length=200)
  link = models.URLField(max_length=100, blank=True)
  image = models.ImageField(upload_to='images/')
  skills = models.CharField(max_length=200, default='html css javascript')
  priority = models.PositiveSmallIntegerField()

  def __str__(self):
    return self.title

  # environment
  # created date
  # client
  # objective
  # role
  # skills
  # term

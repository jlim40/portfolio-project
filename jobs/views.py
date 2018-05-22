from django.shortcuts import render, get_object_or_404
from .models import Job

# Create your views here.
def home(request):
  jobs = Job.objects.order_by('-priority')
  return render(request, 'jobs/home.html', {'jobs': jobs})

def jobdetail(request, job_id):
  detailjob = get_object_or_404(Job, pk=job_id)
  return render(request, 'jobs/jobdetail.html', {'job': detailjob})

def randomquote(request):
  return render(request, 'jobs/randomquote.html');
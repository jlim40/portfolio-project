from django.urls import path
from . import views

urlpatterns = [
  path('<int:job_id>/', views.jobdetail, name='jobdetail'),
  path('RandomQuoteGen/', views.randomquote, name='randomquote'),
]
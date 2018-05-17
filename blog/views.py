from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.shortcuts import render, get_object_or_404
from .models import Blog

# Create your views here.
# def allblogs(request):
#   blogs = Blog.objects.all()
#   paginator = Paginator(blogs, 5) # Show 25 contacts per page
#   return render(request, 'blog/allblogs.html', {'blogs': blogs})

def allblogs(request):
    blog_list = Blog.objects.all()
    paginator = Paginator(blog_list, 3) # Show 5 blogs per page

    page = request.GET.get('page')
    blogs = paginator.get_page(page)
    return render(request, 'blog/allblogs.html', {'blogs': blogs})

def blogdetail(request, blog_id):
  detailblog = get_object_or_404(Blog, pk=blog_id)
  return render(request, 'blog/blogdetail.html', {'blog': detailblog})
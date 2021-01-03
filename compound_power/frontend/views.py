from django.shortcuts import render

# Create your views here. This is pointing to index.html in src/templates/frontend
def index(request):
  return render(request, 'frontend/index.html')
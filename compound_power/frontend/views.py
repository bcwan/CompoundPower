from django.shortcuts import render

# Create your views here. Pointing to index.html in src/templates/frontend
def index(request):
  return render(request, 'frontend/index.html')
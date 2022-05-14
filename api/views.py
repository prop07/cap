from django.shortcuts import render,redirect
from .models import  Order, OrderItem, Product,  Category, CategoryProduct, Slider
from .serializer import OrderItemSerializer, OrderSerializer, ProductSerializer, CategorySerializer, CategoryProductSerializer, SliderSerializer
from rest_framework import viewsets
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout

# Create your views here.
def registerPage(request):
    
    if request.method=="POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request,"Account Created.")
            return redirect('login')
        
    else:
        form = CreateUserForm()
    Context = {"form" : form}
    return render(request,'account/register.html',Context)


def loginPage(request):
    if request.method == 'POST':
        username =request.POST['username']
        password =request.POST['password']
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request, user)
            return redirect('register')

    context ={}
    return render(request,'account/login.html')
    

def resetPage(request):
    context = {}
    return render(request,'account/reset.html',context)



class SliderViewSet(viewsets.ModelViewSet):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductViewSet(viewsets.ModelViewSet):
    queryset = CategoryProduct.objects.all()
    serializer_class = CategoryProductSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    

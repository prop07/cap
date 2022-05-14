from django.contrib import admin
from django.urls import path, include
from api import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'slider', views.SliderViewSet)
router.register(r'product', views.ProductViewSet),
router.register(r'category', views.CategoryViewSet),
router.register(r'category-product', views.CategoryProductViewSet),
router.register(r'order', views.OrderViewSet),
router.register(r'order-item', views.OrderItemViewSet),

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('register/',views.registerPage,name='register'),
    path('login/',views.loginPage,name='login'),
    path('reset/',views.resetPage,name='reset'),
   


   
]

from rest_framework.routers import DefaultRouter
from tasks.api.views import TareaViewSet

router = DefaultRouter()
router.register('tareas',TareaViewSet,basename='tarea')
urlpatterns = router.urls

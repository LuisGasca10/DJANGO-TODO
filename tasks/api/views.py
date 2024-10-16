from rest_framework import viewsets
from tasks.models import Tarea
from tasks.api.serializer import TareaSerializer

class TareaViewSet(viewsets.ModelViewSet):
    queryset = Tarea.objects.all()
    serializer_class = TareaSerializer
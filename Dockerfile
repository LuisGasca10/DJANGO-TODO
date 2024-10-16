# Usa una imagen base de Conda
FROM continuumio/miniconda3

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo environment.yml al contenedor
COPY environment.yml .

# Crea el entorno Conda dentro del contenedor
RUN conda env create -f environment.yml

# Activa el entorno
SHELL ["conda", "run", "-n", "todo-app", "/bin/bash", "-c"]

# Copia el código de tu aplicación al contenedor
COPY . .

# Expone el puerto 8000 para el servidor de desarrollo de Django
EXPOSE 8000

# Ejecuta las migraciones y el servidor de Django
CMD ["conda", "run", "-n", "todo-app", "/bin/bash", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]


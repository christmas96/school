# School application written in Python Django/React.js

### Run app
To run the application you should got to outer school folder and write in your terminal:
> pythoon manage.py runserver   

After that you can access admin page where you can directly manage all models.



## svc_school

### Start server
### The commands below have to be run in `school` folder
make docker-build <br />
make docker-run <br />

### Creating an admin user (Execute only once)
python3 manage.py makemigrations school<br />
python3 manage.py migrate<br />
python3 manage.py createsuperuser<br />


python3 manage.py runserver 0.0.0.0:8080



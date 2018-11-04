## svc_school

### Start server
### The commands below have to be run in `school` folder
make docker-build <br />
make docker-run <br />

### Creating an admin user (Execute only once)
python3 manage.py makemigrations school
python3 manage.py migrate<br />
python3 manage.py createsuperuser<br />


python3 manage.py runserver 0.0.0.0:8080



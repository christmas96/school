## svc_school

### Start server
### The commands below have to be run in svc_school folder
make docker-build
make docker-run


### Creating an admin user (Execute only once)
python3 manage.py migrate
python3 manage.py createsuperuser

python3 manage.py runserver 0.0.0.0:8080



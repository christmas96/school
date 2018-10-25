FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y build-essential libssl-dev libffi-dev python-dev mysql-client curl tmux
RUN apt-get install -y python3.5 python3.5-dev python3-pip

RUN mkdir /opt/svc_school

ADD . /opt/svc_school

WORKDIR /opt/svc_school

RUN pip3 install -r requirements.txt

FROM nginx:1.17

WORKDIR /etc/nginx

RUN mkdir sites-available && rm conf.d/default.conf

ADD ./docker/nginx/nginx.conf ./

COPY ./docker/nginx/sites ./sites-available

COPY ./frontend /var/www/html

CMD nginx
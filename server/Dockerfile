FROM nginx:latest

#workdir dizin değiştirmenizi sağlar
WORKDIR /usr/share/nginx/html

#buradaki dosyaları ilgili dizine kopyalar
COPY . /usr/share/nginx/html/

# Expose veya cmd çalışacak port belirtiliyor

EXPOSE 3000

RUN npm init

RUN npm install

CMD [ "npm","start" ]

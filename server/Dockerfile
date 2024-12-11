FROM node:latest

#workdir dizin değiştirmenizi sağlar
WORKDIR /usr/src/app

#buradaki dosyaları ilgili dizine kopyalar
COPY . .

# Expose veya cmd çalışacak port belirtiliyor

EXPOSE 3000

RUN npm install

CMD [ "npm","start" ]

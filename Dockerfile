WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["nodemon", "./bin/www"]

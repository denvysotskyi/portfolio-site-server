FROM node

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

ENV PORT 8888

EXPOSE $PORT

VOLUME [ "/app/data" ]

CMD [ "node", "dist/main" ]

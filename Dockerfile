FROM node:16-buster-slim
RUN apt update && apt upgrade -y && apt install ffmpeg git -y
RUN /bin/sh -c npm install ytdl-core@latest
COPY . /tgvcbot
WORKDIR /tgvcbot
RUN yarn install
RUN yarn build
RUN rm -rf src
CMD yarn start

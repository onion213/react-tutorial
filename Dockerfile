FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash
RUN apt-get update && apt-get install -y \
    tzdata \
    nodejs \
    npm
RUN npm install --save-dev babel-cli babel-preset-react babel-preset-es2015

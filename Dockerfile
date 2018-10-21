FROM node:8.11.1

# Create app directory
RUN mkdir -p /usr/src/node-js-blog
WORKDIR /usr/src/node-js-blog

# Install app dependencies
COPY package.json /usr/src/node-js-blog
RUN npm install

# Bundle app source
COPY . /usr/src/node-js-blog

# Build arguments
ARG NODE_VERSION=8.11.1

# Environment
ENV NODE_VERSION $NODE_VERSION
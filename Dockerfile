# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /frontend

# Copy package.json, package-lock.json and install app dependencies
# This is done before copying the actual app files to allow Docker to cache
# this stage and avoid reinstalling dependencies when only app files change
COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

# Command to fire up the a container with a volume
#  docker run -p 8000:8000 -v /usr/hackerbay-backend-challenge/node_modules -v $(pwd):/usr/hackerbay-backend-challenge katunold/hackerbay-backend-challenge
# Specify base image
FROM node:alpine

WORKDIR /usr/hackerbay-backend-challenge

COPY ./package.json ./

# Install some dependencies
RUN npm install

COPY ./ ./

# Default command
CMD ["npm", "start"]

# FROM node:20

# WORKDIR /app

# COPY package.json .

# ARG NODE_ENV

# RUN  if["$NODE_ENV" = "production"]; \
#     then npm install --only=production; \
#     else npm install; \
#     fi


# COPY . .

# EXPOSE 6000

# CMD [ "npm", "run", "start-dev" ]
FROM node:20 as development
WORKDIR /app
COPY package.json .
RUN  npm install
COPY . .
EXPOSE 6000
CMD [ "npm", "run", "start-dev" ]

FROM node:20 as production
WORKDIR /app
COPY package.json .
RUN  npm install --only=production
COPY . .
EXPOSE 6000
CMD [ "npm", "run", "start" ]
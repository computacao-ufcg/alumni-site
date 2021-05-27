# pull official base image
FROM node:16-alpine3.11

ARG ALUMNI_SITE_BRANCH

# set working directory
WORKDIR /root

RUN \
  apk update && apk upgrade && \
  apk add --no-cache git 

RUN \
  git clone https://github.com/computacao-ufcg/alumni-site.git && \
  (cd alumni-site && git checkout $ALUMNI_SITE_BRANCH) 

WORKDIR /root/alumni-site

RUN \
  npm install

# start app
CMD ["npm", "start"]

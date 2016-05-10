FROM node:6.0

MAINTAINER Fusion Alliance <code@fusionalliance.com>

# Work around for NPM install, remove after issue is resolved with Docker: https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm; \
    npm install fs-extra; \
    sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

RUN useradd --user-group --create-home --shell /bin/false api; \
    npm install -g npm@3.8.8; \
    npm install -g foreman;

RUN mkdir -p /home/api
ENV HOME=/home/api
WORKDIR $HOME

COPY package.json $HOME/package.json
RUN npm install

COPY . $HOME/
RUN chown -R api:api $HOME/*
USER api

EXPOSE 3000

CMD ["npm", "start"]

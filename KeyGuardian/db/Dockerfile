FROM alpine:latest

VOLUME /data

RUN apt update \
    && apk upgrade \
    && apk add --no-cache sqlite-dev sqlite

WORKDIR /data
COPY ./data/database.sqlite3 ./

CMD ["tail", "-f", "/dev/null"]
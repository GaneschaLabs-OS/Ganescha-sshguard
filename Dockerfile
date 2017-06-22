FROM alpine:latest
RUN apk add --update iptables ip6tables sshguard && rm -rf /var/cache/apk/*
ENTRYPOINT ["/usr/sbin/sshguard"]

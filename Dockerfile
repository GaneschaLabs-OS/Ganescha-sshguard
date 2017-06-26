FROM alpine:3.2

RUN apk add --update iptables ip6tables sshguard && rm -rf /var/cache/apk/*

CMD /usr/sbin/sshguard

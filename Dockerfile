FROM alpine:3.2

# copy our config from ./config to 
# COPY ./config /usr/etc/

RUN apk add --update iptables ip6tables sshguard && rm -rf /var/cache/apk/*

CMD /usr/sbin/sshguard

# CMD /usr/sbin/sshguard -l- "$@"

# CMD echo '----- showing ls /usr/etc -----' && ls /usr/etc && echo '----- showing sshguard.conf -----' &&cat /usr/etc/sshguard.conf && echo '----- showing ls /app/journal -----' && ls /app/journal
# ENTRYPOINT ["ls /usr/etc"] # && ls /app/journal/ && /usr/sbin/sshguard"]

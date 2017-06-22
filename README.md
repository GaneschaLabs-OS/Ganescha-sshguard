# Ganescha-sshguard
Ganescha-sshguard is just a simple sshguard setup for Core OS (or as it is officially called: Container Linux).
Usage of sshguard is strongly recommended to reduce hacking attempts.

## Table of Contents

<!-- toc -->

- [Dockerfile](#dockerfile)
- [ganescha-sshguard.service](#ganescha-sshguardservice)
- [Usage](#usage)
  * [Creating / Updating the Docker Image](#creating--updating-the-docker-image)
    + [tl;dr](#tldr)
  * [Actual usage on a CoreOS System](#actual-usage-on-a-coreos-system)
    + [Setting up the service via `cloud-config`](#setting-up-the-service-via-cloud-config)

<!-- tocstop -->

## Dockerfile
The Dockerfile is kept as minimalistic as possible, just to create a Docker image which is pushed to
[ganescha/ganescha-sshguard](https://hub.docker.com/r/ganescha/ganescha-sshguard/).

**[⬆ back to top](#table-of-contents)**

## ganescha-sshguard.service
Basically this is where the magic happens. This service file is setting up everything for sshguard. For further
information about what exactly is happening here read more on the official [sshguard website](https://www.sshguard.net).

**[⬆ back to top](#table-of-contents)**

## Usage
### Creating / Updating the Docker Image
Make sure you are logged in to docker with an account that can push to
[ganescha/ganescha-sshguard](https://hub.docker.com/r/ganescha/ganescha-sshguard/). If not use the
`docker login` command to do so. Then just run `npm start` and this will create the current version of the
`Ganescha-sshguard`.

If you have no access to push to [ganescha/ganescha-sshguard](https://hub.docker.com/r/ganescha/ganescha-sshguard/),
just skip this step.

**[⬆ back to top](#table-of-contents)**

#### tl;dr
Open your terminal and run

```bash
npm start
```

**[⬆ back to top](#table-of-contents)**

### Actual usage on a CoreOS System
To use `Ganescha-sshguard` either setup or copy the service file, which usually should be placed in
`/etc/systemd/system/`, or create the service file via your `cloud-config`.

**[⬆ back to top](#table-of-contents)**

#### Setting up the service via `cloud-config`
To setup `ganescha-sshguard.service` via a `cloud-config` just add an according unit in the `cloud-config`s `coreos`
section within the `units` section. Here is an example where you would put the content of `ganescha-sshguard.service`:

```yaml
.
.
.
coreos:
    units:
        - name: ganescha-sshguard.service
          command: start
          content: |
          <here goes the content of ganescha-sshguard.service>
.
.
.
```

**[⬆ back to top](#table-of-contents)**

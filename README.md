# Directory Mock Server

_A Microservice API utilizing Node JS and Express._

_What_: Mock server to enable parallel workstreams between iOS, Web, Android and Back-end platforms

## Prerequisites

### NPS

Directory Mock Server uses [nps] to define and execute npm scripts without the cost of a bloated package.json and the limits of JSON.

`npm start` is defined (in `package.json`) as an alias for `nps`, hence all scripts are run via `npm start <...>`

### Docker

Install [Docker]

```sh
brew install docker
```

and [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

## Setup

Clone this repo

```sh
git clone https://github.com/jennyChoudhry/directory-mock-server
cd directory-mock-server
```

Install all dependencies

```sh
npm install
```

Run app in a terminal window:

```sh
npm start
```

The application can also be run containorized with `npm start container` and stopped with `npm start container.clear`

Application is running on http://localhost:4000

## Contributing

See [Contributing.md](CONTRIBUTING.md)

## Architecture Design Record

See [ADR.md](ADR.md)

[nps]: https://github.com/kentcdodds/nps
[docker]: https://www.docker.com/

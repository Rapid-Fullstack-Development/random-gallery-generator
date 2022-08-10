# Random gallery generator

This program generates a data file containing a randomized list of photos created using the Unsplash API.

This code was created during a [live stream](https://youtu.be/_YzUpl_ip8M) to support the book [Rapid Fullstack Development](https://rapidfullstackdevelopment.com/).

This repo contains [the randomly generated gallery data](./gallery.json) that was created during the live stream.

Follow on [Twitter](https://twitter.com/codecapers) for updates.

## Pre-reqs

You need [Node.js](https://nodejs.org/) installed to run this code.

## Unsplash setup

You must create an account on Unsplash and then create an "Application" through [the Unsplash developer portal](https://unsplash.com/oauth/applications).

After creating an Unsplash Application look up the access key for it and set it in an environment variable.

Under MacOS and Linux like this:

```bash
export UNSPLASH_ACCESS_KEY=<your access key>
```

Under Windows like this:

```bash
set UNSPLASH_ACCESS_KEY=<your access key>
```

## Run the code

Run the code like this:

```bash
npm start
```




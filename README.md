# Todo PWA React App

Example Todo app, based on [Progressive Web App][pwa] concept and [React][react] framework.

## Setup

* Run `yarn install`
* Add `.env` file with proper variables

You need to generate your our VAPID keys. To see how to do it using `web-push` library see it's [docs](https://github.com/web-push-libs/web-push#usage).

To add VAPID public key for front-end application, you need to set `REACT_APP_VAPID_PUBLIC_KEY` variable. Each variable which should be used in React app, needs to have `REACT_APP_` according to Create React App [docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables).

## Run

`yarn run start` and go to [http://localhost:3000](http://localhost:3000)

## Build

`yarn run build`

## Start Node server

`yarn run start:server` and go to [http://localhost:3001](http://localhost:3001)

Node server serves static files from `/build` directory, so it's possible to test Service Worker here.

## Evaluate app in Lighthouse
`yarn run lighthouse <url>`

See results in lighthouse-report.html file.

[pwa]: https://developers.google.com/web/progressive-web-apps/
[react]: https://facebook.github.io/react/

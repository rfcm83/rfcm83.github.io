/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c1102ad0fb643afcc783.js"
  },
  {
    "url": "styles.2b79eae4a99311ad657b.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-305b3707783ccc9d7ca6.js"
  },
  {
    "url": "app-c584aeb0aa883e8f1128.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "53acb00cbc5578bfaf9f9a3c45bf7d5a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "polyfill-d0a90a918e39f7bd0bdc.js"
  },
  {
    "url": "component---src-templates-blog-list-js-0227f6d2627af97a4a7b.js"
  },
  {
    "url": "8f2d471fb7333c6c0018ac531eee0249a8ca709b-20f0cac0237fd466a027.js"
  },
  {
    "url": "777cf710-76a45f57e6b3e9a3d300.js"
  },
  {
    "url": "page-data/2/page-data.json",
    "revision": "0bc47b90ba99470829ba33df6dcf7f02"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "ec1fde6e34decfffeaf8a3f02fded919"
  },
  {
    "url": "page-data/sq/d/3114762285.json",
    "revision": "cfadec1b4ad0c625fa57fecbb243ab8b"
  },
  {
    "url": "page-data/sq/d/550521386.json",
    "revision": "1efba65204d24c6acefeeab474a160d2"
  },
  {
    "url": "page-data/sq/d/764694655.json",
    "revision": "7ddd5d1069d3e7232b3c2ca719e93775"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "0407f3eb0cdc763f7fe76a5764671d15"
  },
  {
    "url": "page-data/3/page-data.json",
    "revision": "30833bf450eef376a973e058b1316a15"
  },
  {
    "url": "page-data/4/page-data.json",
    "revision": "10cbbdacc8e500c7cc87fa7e70c09a78"
  },
  {
    "url": "page-data/5/page-data.json",
    "revision": "bffb874decf7dcde320de3a3b4e0594a"
  },
  {
    "url": "page-data/6/page-data.json",
    "revision": "e95293823765944b2cc1fce67765a1f6"
  },
  {
    "url": "component---src-pages-tags-js-ae4904c178592181da10.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "55de42094bf453b3595eaee041b3e056"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9af44c7f055f8e020e13dd4c7412cbc4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-c584aeb0aa883e8f1128.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

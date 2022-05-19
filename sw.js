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
    "url": "webpack-runtime-9773e6b722b9df6f697c.js"
  },
  {
    "url": "styles.332dcc3da4c2c10d3d41.css"
  },
  {
    "url": "framework-b9923b3cceb493977198.js"
  },
  {
    "url": "app-2ec6c5c0e18651bc45d1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3429d03f65f59e2138ca55b684ddd4cb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-37546fe15e7a1c95696d.js"
  },
  {
    "url": "polyfill-958b67dc2797f3960250.js"
  },
  {
    "url": "777cf710-5be2960e72945ec92859.js"
  },
  {
    "url": "8f2d471fb7333c6c0018ac531eee0249a8ca709b-9f37ae41159c29ecfc18.js"
  },
  {
    "url": "component---src-templates-blog-list-js-ae88844ce79ed09f6ad1.js"
  },
  {
    "url": "page-data/2/page-data.json",
    "revision": "ef4bf7ad18cce8b63b1f0bf82b1ae802"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "6ad29f8b8e10c78de3f790b992b0bc93"
  },
  {
    "url": "page-data/sq/d/3114762285.json",
    "revision": "cfadec1b4ad0c625fa57fecbb243ab8b"
  },
  {
    "url": "page-data/sq/d/550521386.json",
    "revision": "ec969e39fce341366a197b772817d8ce"
  },
  {
    "url": "page-data/sq/d/764694655.json",
    "revision": "7ddd5d1069d3e7232b3c2ca719e93775"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6ce2bdafb6cbe43a9cf94a193e469d5a"
  },
  {
    "url": "page-data/3/page-data.json",
    "revision": "f196bded8bce52a043e5b1e34192ada9"
  },
  {
    "url": "page-data/4/page-data.json",
    "revision": "7f2e38f14435c2cfdc144bda9965fb27"
  },
  {
    "url": "page-data/5/page-data.json",
    "revision": "a7e372519ef1e009103bd071366a290f"
  },
  {
    "url": "page-data/6/page-data.json",
    "revision": "c2fd82b9b8d7570aed4a3eb405a4728b"
  },
  {
    "url": "component---src-pages-tags-js-fa770ffa3686d2a621d6.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "b39a711eff4da8592c0556cb546abb94"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9af44c7f055f8e020e13dd4c7412cbc4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-2ec6c5c0e18651bc45d1.js`))) {
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

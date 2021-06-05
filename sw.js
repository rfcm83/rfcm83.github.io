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
    "url": "webpack-runtime-157a4a882302c62b63f1.js"
  },
  {
    "url": "styles.f80e199344fa66eca9a4.css"
  },
  {
    "url": "framework-de777ff0ab3a85d108fd.js"
  },
  {
    "url": "app-19efbb6e385394fc07c3.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a2ff97be34355472cbe4ecc987128e4f"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-44e6c687a88026cfc124.js"
  },
  {
    "url": "polyfill-d2a314c619ae9d8e67ff.js"
  },
  {
    "url": "777cf710-2eaf281018b0dafc6836.js"
  },
  {
    "url": "8f2d471fb7333c6c0018ac531eee0249a8ca709b-5ea1cdacbd3152554d0f.js"
  },
  {
    "url": "component---src-templates-blog-list-js-952190c30e54ec8f5a9a.js"
  },
  {
    "url": "page-data/2/page-data.json",
    "revision": "697cf3b0e86ce0055ce1434f55293104"
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
    "revision": "78a88b1c174a39fdfcd8994d94eff94a"
  },
  {
    "url": "page-data/3/page-data.json",
    "revision": "8803eabe7c5b3f47fa2cc44372150add"
  },
  {
    "url": "page-data/4/page-data.json",
    "revision": "0d329f3bf34c2d919709b644a7772277"
  },
  {
    "url": "page-data/5/page-data.json",
    "revision": "5029525ca59585b2bc59bdb808dc3e38"
  },
  {
    "url": "page-data/6/page-data.json",
    "revision": "f62415f30dd7ad5c9d8a6faf5682a3a9"
  },
  {
    "url": "component---src-pages-tags-js-5f8b1e8c81cdda6f7009.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "ee62888d114940f10de7f3ac6c4c4427"
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
  if (!resources || !(await caches.match(`/app-19efbb6e385394fc07c3.js`))) {
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

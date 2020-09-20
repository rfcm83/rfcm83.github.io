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
    "url": "webpack-runtime-f201ad93210192956d8c.js"
  },
  {
    "url": "styles.277fd7b25159ce62c646.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "framework-781d8c3da2b97ab386a4.js"
  },
  {
    "url": "app-50edcac28b1002c82553.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e925777f0cfe6b92eac688cbea446a0d"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "polyfill-1c1f602307ef1935f639.js"
  },
  {
    "url": "component---src-templates-blog-list-js-44047e5524ffeddf3650.js"
  },
  {
    "url": "8f2d471fb7333c6c0018ac531eee0249a8ca709b-88f761789ca5ffd93b6d.js"
  },
  {
    "url": "commons-61496934ba5dd7d18236.js"
  },
  {
    "url": "777cf710-1fbef7f6d0b7fd14b613.js"
  },
  {
    "url": "page-data/2/page-data.json",
    "revision": "1d3165b77329d2dfa59ee594d71df39a"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "a9c14b94e8b67655c78841ac9bcbe451"
  },
  {
    "url": "page-data/sq/d/3114762285.json",
    "revision": "baf49861fe8eee7ed6f005ce31c9ffcb"
  },
  {
    "url": "page-data/sq/d/550521386.json",
    "revision": "abf3e50d6bd7053f7ff1a2da507a7925"
  },
  {
    "url": "page-data/sq/d/764694655.json",
    "revision": "4d8124405f785c7a7f889914747501dd"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "dceb7132fa127caa8a04ba969a904d2a"
  },
  {
    "url": "page-data/3/page-data.json",
    "revision": "f688002459dd992923aed8b6f06b9e02"
  },
  {
    "url": "page-data/4/page-data.json",
    "revision": "d36e21863be5a65b99536aafc74e295b"
  },
  {
    "url": "component---src-pages-tags-js-cb13c41c919508999a8a.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "0cc40673741d6548f360c24cde84427e"
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
  if (!resources || !(await caches.match(`/app-50edcac28b1002c82553.js`))) {
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

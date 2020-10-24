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
    "url": "webpack-runtime-ed4f89307f29617050ca.js"
  },
  {
    "url": "styles.277fd7b25159ce62c646.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "framework-9086242092609fce62cd.js"
  },
  {
    "url": "app-503e4ebc6e443b382e3b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6852cb0edd315d118d827eb6e2360639"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-241020a1cf7d0f317bbe.js"
  },
  {
    "url": "polyfill-de46e2eaad6187026d24.js"
  },
  {
    "url": "component---src-templates-blog-list-js-6e412281debd1e870aee.js"
  },
  {
    "url": "8f2d471fb7333c6c0018ac531eee0249a8ca709b-f0340408ddcf6026d604.js"
  },
  {
    "url": "commons-d2a8469f6b9ca93aee8a.js"
  },
  {
    "url": "777cf710-b8339dbac930299739e2.js"
  },
  {
    "url": "page-data/2/page-data.json",
    "revision": "c2178d45ec5f71b3ae7b322c4a6eaf7b"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "0179bf31f3b0cefcdc2d342e879dd54e"
  },
  {
    "url": "page-data/sq/d/3114762285.json",
    "revision": "baf49861fe8eee7ed6f005ce31c9ffcb"
  },
  {
    "url": "page-data/sq/d/550521386.json",
    "revision": "dd94a3f3db76f3d90fcfc7c5eaa59b5d"
  },
  {
    "url": "page-data/sq/d/764694655.json",
    "revision": "4d8124405f785c7a7f889914747501dd"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "157b824ba757cb4c934e1ea605bef044"
  },
  {
    "url": "page-data/3/page-data.json",
    "revision": "894452f3ae0b0940ae3f960b039e3394"
  },
  {
    "url": "page-data/4/page-data.json",
    "revision": "bfcda9ea611979772cd0e40d338e542d"
  },
  {
    "url": "component---src-pages-tags-js-0e50ce62c4cc9fa0fdba.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "97792f7758248b48ae525e3fa23ac48f"
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
  if (!resources || !(await caches.match(`/app-503e4ebc6e443b382e3b.js`))) {
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

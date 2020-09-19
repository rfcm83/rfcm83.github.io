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
    "url": "app-9cda642306561fad604a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "70a9ed14437cea2957dc43f5429bcd9e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "polyfill-1c1f602307ef1935f639.js"
  },
  {
    "url": "component---src-templates-tags-js-344d31cacc36f6dfb854.js"
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
    "url": "page-data/tags/actions/page-data.json",
    "revision": "05ff6b91b3079fb6a1e86d9e70b478e4"
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
    "revision": "259f84a8505bc4feede56a1e48098719"
  },
  {
    "url": "page-data/tags/azure/page-data.json",
    "revision": "70ea97c5e20c498c12b59bdb6783348a"
  },
  {
    "url": "page-data/tags/azure-ad/page-data.json",
    "revision": "3fd3c573c89e44c20a00e07b8ad3c4e2"
  },
  {
    "url": "page-data/tags/basics/page-data.json",
    "revision": "d0f6aad253168ad1c9d8f586d54cecfb"
  },
  {
    "url": "page-data/tags/best-practices/page-data.json",
    "revision": "f4bba297bb441333847e12f89bc3c480"
  },
  {
    "url": "page-data/tags/codespaces/page-data.json",
    "revision": "6df524aba0dc101d05cb70c870cc5e7a"
  },
  {
    "url": "page-data/tags/dev-ops/page-data.json",
    "revision": "c192f464b22ee0b7f5f93f3f553ad2db"
  },
  {
    "url": "page-data/tags/develop/page-data.json",
    "revision": "6003682003d8f72b45a7466528c9afbc"
  },
  {
    "url": "page-data/tags/docker/page-data.json",
    "revision": "8f1c80649247d68e2284e45c6d25b5a3"
  },
  {
    "url": "page-data/tags/dotnet/page-data.json",
    "revision": "b0e210ebdf341100dec96271d11d01f4"
  },
  {
    "url": "page-data/tags/free/page-data.json",
    "revision": "253e970923c09e1b0a327912e608addd"
  },
  {
    "url": "page-data/tags/functions/page-data.json",
    "revision": "e63e092614b70488ac0f8d19200fbfa7"
  },
  {
    "url": "page-data/tags/gatsby-js/page-data.json",
    "revision": "7fcd7514d5934e51a6aefbc3883e4b7f"
  },
  {
    "url": "page-data/tags/git-hub/page-data.json",
    "revision": "e17b3fe73d359844eee6a46ed04ac1c1"
  },
  {
    "url": "page-data/tags/git-hub-pages/page-data.json",
    "revision": "31e74c68fe6daf5adefdbb5e0a487bae"
  },
  {
    "url": "component---src-pages-tags-js-cb13c41c919508999a8a.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "0cc40673741d6548f360c24cde84427e"
  },
  {
    "url": "page-data/tags/lets-encrypt/page-data.json",
    "revision": "6698506b2d20393f969fe4a75c13cef8"
  },
  {
    "url": "page-data/tags/logic-apps/page-data.json",
    "revision": "95af9c5b65c491943e18d43214f1bc29"
  },
  {
    "url": "page-data/tags/managed-identity/page-data.json",
    "revision": "0ee474ac64bdd34575764004d2796839"
  },
  {
    "url": "page-data/tags/microsoft-identity-platform/page-data.json",
    "revision": "dc6e5d2d449b38a958eff249a45745ce"
  },
  {
    "url": "page-data/tags/microsoft-teams/page-data.json",
    "revision": "1abb935069c4845bfd52aa6454632fa4"
  },
  {
    "url": "page-data/tags/monitor/page-data.json",
    "revision": "6a59c4e876f81915b62af68f6fe9e0ad"
  },
  {
    "url": "page-data/tags/patterns/page-data.json",
    "revision": "1423120824f38a262ee2d693aba6f1bb"
  },
  {
    "url": "page-data/tags/preview/page-data.json",
    "revision": "71b4105b4b944836c39ffec5f099bf6b"
  },
  {
    "url": "page-data/tags/productivity/page-data.json",
    "revision": "bb66d8939a93d5fd23f0a772bdef8167"
  },
  {
    "url": "page-data/tags/serverless/page-data.json",
    "revision": "01ed71c8e8fe8cb86b054b4ccddd7702"
  },
  {
    "url": "page-data/tags/ssl/page-data.json",
    "revision": "ed993a524993bb559daefdd3bc3e2210"
  },
  {
    "url": "page-data/tags/vs-code/page-data.json",
    "revision": "b45895dfe1717ecac79bd48c1ddad97d"
  },
  {
    "url": "page-data/tags/web-app/page-data.json",
    "revision": "ab25da6dab1dec0f1ae74d22ccac1eed"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e3e4fcb320465f03a08b934cd05767f1"
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
  if (!resources || !(await caches.match(`/app-9cda642306561fad604a.js`))) {
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

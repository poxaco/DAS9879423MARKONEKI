'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0ada1f07972e121dc6656098bf9b14a5",
"assets/AssetManifest.json": "1a1bea207010b301dc878ce356e2ed56",
"assets/assets/collection/collection.txt": "7a68f09bd992671bb3b19a5e70b7827e",
"assets/assets/credentials/credentials.json": "45e096c2d9d439bbb231d89067f80dc5",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/botones.jpg": "2ffa746b972ed9dd7f4b3af871e07cdb",
"assets/assets/images/celu.png": "9b659a6c9c10268fa68ba4721fc6cd35",
"assets/assets/images/compu.png": "dea6f604a98d5b9a25ec0c53d361ced9",
"assets/assets/images/conexion.jpg": "556a9f4576cd77e9a0369b85c229991c",
"assets/assets/images/email.png": "7c08f528c168b1aca1fc300274ba60b4",
"assets/assets/images/entrad.jpg": "8de77623ceb2d795ad963daff2e3aede",
"assets/assets/images/entradd.jpg": "dee8ba3929bf185fe1aa46399b7dc990",
"assets/assets/images/fooster.png": "fb0bd41a40eb396b170322ef1f0b204f",
"assets/assets/images/hoja.png": "dd7855d6ccaf1e014b4e84c8dc713463",
"assets/assets/images/iconbl.svg": "05aa12222a173de25898feed416da8eb",
"assets/assets/images/id.png": "2aa18579dabdf1840ce33f48330263b9",
"assets/assets/images/ifooster.png": "fe98293c952b6fe600748edf7b8352d4",
"assets/assets/images/imagenrie.png": "6dbfd0fbf9fe525f86dae5c1efeb2153",
"assets/assets/images/lock.png": "7340915f7fe76a7f10778f04723be7b6",
"assets/assets/images/logolargo.svg": "df853040fd0cc39893e9733af3064ab5",
"assets/assets/images/logotrico.png": "2080ac2bda26d585c0f0363fb7bee0ac",
"assets/assets/images/marti.png": "86f1c4d213b554cfb2340afe1650e4a1",
"assets/assets/images/nequi.png": "0bf41966fc22014a65dcdc295324d06b",
"assets/assets/images/numeros.png": "dd6eda8bded3149ff529a31e9fad8025",
"assets/assets/images/nundoc.png": "66d9e9a58e3c375a2cb08898290320a1",
"assets/assets/images/trazo.svg": "10a0f4f4ea1c2a81b675c8ecafd22468",
"assets/assets/images/vilok.svg": "990c8033924a04454ce72c4f59d94d97",
"assets/assets/images/xerror.png": "45f7517cc61d731c46d10d410054717b",
"assets/assets/lottie_animations/Animationload.json": "60baac37b22ce567e6fc28b4ab1159c1",
"assets/assets/lottie_animations/cargandodocuments.json": "656a02c5c7c5edc0bee60526998f21fb",
"assets/assets/lottie_animations/loaddina.json": "156867c59e2afed3ae3c7b09045c5eca",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6a8a479263b535cad4e1e47ca99106ae",
"assets/NOTICES": "98a3666f7a8997b9f3deb35b10ce21c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "f93cce574798cbc3f46e44765b523058",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "addd330d70d04918ab2059efeba5105f",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "c3803dbb1ac015d00c055bea11adb934",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "a71f0a2dbe0b3e87fd13e80d9758dc86",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "9abdd2d77454e154b995ceb2ac686243",
"icons/Icon-512.png": "6198178b0852a31e5c754400b1746b46",
"icons/Icon-maskable-192.png": "92840835eeee3069aeb0b6e691440e3d",
"icons/Icon-maskable-512.png": "1c2bf936970a02d62f3f3e9f637055a2",
"index.html": "b0b76e4ed4a6d2858f86222b20f53272",
"/": "b0b76e4ed4a6d2858f86222b20f53272",
"main.dart.js": "dca3ad6a1bd1d0791685f8ae6df171ca",
"manifest.json": "c51e07e6abd55c10e2cd3c86341af31c",
"version.json": "09866d0c319ad87d024a6de00dd6a8b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

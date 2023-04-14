'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "28050369fc1716b39e13619ca155f2f6",
".git/config": "b1159244c9144457f810f2a91c60b6fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8fe653a200ec64111edacd4789bfc191",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4d00292b8195c4dee387eb03c456af5",
".git/logs/refs/heads/main": "a4d00292b8195c4dee387eb03c456af5",
".git/logs/refs/remotes/originMain/main": "4a2205038097a86c8c879ed1fa2ad4a9",
".git/logs/refs/remotes/originTest/main": "1a2ffe3c333c289430f7981640fce945",
".git/objects/09/2b4ba942fd5464308fd112393ea8680e6f944f": "ef21e104a27acc7d7988f61e5160c048",
".git/objects/09/9a2a62a154427d234cded870d8e9b33392cdee": "a50b19ce76a53d27f12281f91ce7773b",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/10/70dd2139508d089d609f8270b0db557cae18cd": "b22b3d7f10be0e53950178711a5e8847",
".git/objects/19/3a1fcf3241ffacb51c70ab541b2ed383996dd9": "76b58d748b2044933fc93b44ed03a39a",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/40/fa9bf2467b5cf77e9dee749df1bf274ae18278": "26c894859ec60504c59fd2c370bdf0bb",
".git/objects/41/23ca6fc09103831ad1fa88cf47b573c09b55d6": "904b6fc7ece2bc3b5be0e9fc70780d16",
".git/objects/41/bf0e4cb5e9af2f52e3964cbb6be92abcb6ee2c": "488cf8e1c3921aecccd7797e797cd551",
".git/objects/4a/f19d1880acb7352df9c7f137f7e58834d59a7e": "fb0abc24d615ef61509d94481b34b0a6",
".git/objects/50/84fed6f032b10d4f6a3f830393fa62d579e24c": "0c604823349f5f291f5fc86542da41b8",
".git/objects/50/f7eb285f45196dcc3d9903a2c0c0e6fb4727a1": "be6df624e5de2ea244a2e960871dd16d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5c/ead7f6d09841b7942c5a5f30c2e22845c6e81b": "59d97515e42bf8ce7fda7fa293366f12",
".git/objects/62/1e44a2a983410b4da254e018f4aab69e7fe5d9": "20d6b6e0e058977bf2ff0f75f303bdd9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/9bbcd1c3ee55da99f7608685af78cb79cccb83": "71873c8779b5bb6673dc061ce8f1ee13",
".git/objects/64/d1cbaa2fb2dd1c965759d91682ea39123f1e18": "4d7e7543d3f879df96ed0cf7d3fc1c34",
".git/objects/6b/508f5c596f6df34d6245266af753cd24edf466": "67260fc0f2c69b03a2fdb41b0dda35fc",
".git/objects/6c/dbf35b5c62ac42bb8dcdef8c9d3b2a671e6a43": "8969515c34f298ec5995fbcfec03e3d6",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/6f/0103f9630c1788755a77cde25458d9df4b34b4": "5c68f9fb1508247255830b81cddb2ea7",
".git/objects/6f/6a9ba2de8c28c8ad2f6f573dfd210004e0f90e": "a339834d302425282094ced09a919f05",
".git/objects/82/b720f541d365cd81a9138d99949cf4222b4fcf": "02d69370f219abb3b8309d4f2061c6e9",
".git/objects/84/67f6aa468563a449399e38b42cabcdc3803120": "bd370a67079cb132f0fd8df5ce626fb4",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8d/1ec0dd96cf3e3ae5da77e9ab14fc34f7c328b2": "da433711a57b0edb3bbd2070cdab8e63",
".git/objects/8f/cacabf59f3d9738c344571f8bd7c2a91dbdb24": "511a6e26f90728ca3a92b52c6a7b36c2",
".git/objects/9f/cb3fe7d913e6f6aeb1a0221e20cf65391d320e": "a5091c682ebdfaff000246bd7208e512",
".git/objects/a3/1125a783921d5858773d5ebe8b5960ddde772d": "37a81b0a0683a82393ec0033b953c8c7",
".git/objects/b0/42fbd528c8d0e52ea8945baf3d8e4befdd262d": "4d618145269813e8415afdad10f496fd",
".git/objects/b0/90be7669188c2834a042ce8c762e72391a57df": "ec5d51601c3561d1e1c88e3127fb101f",
".git/objects/b6/f4e60ae1c6c27234b9dca10ad87e533978749d": "7af0e48e25bc9b4c5855d4f82ed71e7c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/fca032487f820d09cf1e72feb4b3ad2fef7923": "f8592318f8e32fb91994a5947f12c5f0",
".git/objects/c3/10471275859167e687e4ee7fd81770b7d0b216": "5ea9c6e1b8f16487c2de1c67105daa62",
".git/objects/ca/6419348eb38f02ae5ee81c14e1a49183cc701b": "edbe5bbfa39f359e793edb11a5a6f2b7",
".git/objects/cb/55877f19704a16c3e3f81b9479ec72a11b3a23": "c10284b37495488659f88e3682fa759e",
".git/objects/d1/f3b4492bd488ebb961f607dc54ad0b9df49c84": "21ee5eb102810e6ba8603221daedd4f7",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d7/2b3fe9765fbd556e41641c7c3a36ccf7a26c12": "51daae97c7563cc32f4d027f1343d1e8",
".git/objects/d8/7d6a7f106139e51969b8fa3f4eea0ee454852d": "f586ce239b5784eb512f0bb706272b02",
".git/objects/dd/d264822aeaf4314accef4f305fd907e5779756": "352d15972009a680cb75ae2cd10e932c",
".git/objects/df/f3135548f4bfd5be8243d11a8438cbead20e4f": "f9f31ad5e62e360edd1fea247cfd7163",
".git/objects/e4/84cd95c5742438cc4dda0217430e9cb4de6456": "c7229720f073f288b3835ba4a39f214a",
".git/objects/e7/f10ddd96557e4b2ba6c89165fe5dbdf1112664": "f254109082aacccc0f2f52ca38c04fa1",
".git/objects/ec/5c0e32881664eecf817af05f0d4a3ae8a8b0c3": "086b57cb46875795ce7c7673a36d08ab",
".git/objects/ed/5c0438bc5ffc67eea5ddd5196d636f6943b976": "ab9a1a9938d188ce588b6505cac0feea",
".git/objects/fc/4886e2fec75b19c25bf39c89b86e1e6afa1f60": "3c6f56524b6617907cc0e6d76281a2df",
".git/refs/heads/main": "f812a53e49d5955b6dc54644d8bbb2a5",
".git/refs/remotes/originMain/main": "f812a53e49d5955b6dc54644d8bbb2a5",
".git/refs/remotes/originTest/main": "f812a53e49d5955b6dc54644d8bbb2a5",
"assets/AssetManifest.bin": "71b4673504995d2e935cafbcc96ffd07",
"assets/AssetManifest.json": "360776bafe27fd8b0781cc67c9f6cee4",
"assets/assets/image/loading.riv": "98cc81d19df4e9438c62f264e6a3fe0d",
"assets/assets/image/mainLogo.png": "a4dde70bc9c0b8caa14dbb6e44bddce7",
"assets/assets/image/mainLogoWithoutTitle.png": "8bf2c55602d53b614c7d9d0f97818b6e",
"assets/assets/image/turkey.png": "7081aa269269b40e72618935fc2dac6a",
"assets/assets/image/united-states.png": "c7ef7aeea67ae3612237fefcaa3b8db3",
"assets/assets/translations/en-US.json": "905b77e47b719ba486df3b6d552f1d8d",
"assets/assets/translations/tr-TR.json": "c5240de2cc770a549f690da021013fef",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "976ab0b9a8c71504007067b15c19b659",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "cdd461e1f1793af7324b2f90fa91b844",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "697bc5ba4b5a2f64d7742e416d3b0c00",
"canvaskit/skwasm.js": "571d2051157ab8aa8af36796cc56720e",
"canvaskit/skwasm.wasm": "a0f94140b200e4370543c22594e0a2e3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "549f5d4b02ccc05e3703f682446b3eed",
"/": "549f5d4b02ccc05e3703f682446b3eed",
"main.dart.js": "4736cc90e67d23c0a331d0cb74a24d34",
"manifest.json": "70629287ed5c832f5fd988fa7eeb78de",
"splash/img/dark-1x.png": "1b0b4bbb1b51156b05089464d7e45ae9",
"splash/img/dark-2x.png": "81631ba9f7f4653eb796e18ebc4df06b",
"splash/img/dark-3x.png": "fe170b51746be9bf81569a80b16e03c3",
"splash/img/dark-4x.png": "91a2f809aedf0bc1d1021919e5beb54b",
"splash/img/light-1x.png": "1b0b4bbb1b51156b05089464d7e45ae9",
"splash/img/light-2x.png": "81631ba9f7f4653eb796e18ebc4df06b",
"splash/img/light-3x.png": "fe170b51746be9bf81569a80b16e03c3",
"splash/img/light-4x.png": "91a2f809aedf0bc1d1021919e5beb54b",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "785786daed06e9e2e3fcd4d8c854c38f",
"version.json": "bff1ef43a89807e88d33323788053967"};
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

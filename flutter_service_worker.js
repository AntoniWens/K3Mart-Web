'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "adabaa2cfb972a2791331bf5bd590eeb",
"assets/AssetManifest.bin.json": "34a4fb9f55697dce42a8c45e72bf8488",
"assets/AssetManifest.json": "00b72a3b7777daa86b07a52e13c0bf70",
"assets/assets/fonts/DMSans-Regular.ttf": "0305ad7453af42d8f036dd29294ae5c3",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-w700.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/html/privacy.html": "4fcfc42405c620510e3fff4960706f27",
"assets/assets/html/term_condition.html": "6ac9aa11d478570238b7815a16cc5f07",
"assets/assets/images/aa.png": "278f8946e3a3d29d5dc1a4cd70d79cc7",
"assets/assets/images/backa.png": "a54119db5f046f5fa140fac96052a294",
"assets/assets/images/bottom_navigation/cart_active.svg": "2eafbefd1b2984ba6aa28adc080a6fb8",
"assets/assets/images/bottom_navigation/cart_inactive.svg": "26a2b179be12ad00ad64292a1716de2d",
"assets/assets/images/bottom_navigation/history_active.svg": "98a3dc1197d63b0b0d3cd7f7932391d6",
"assets/assets/images/bottom_navigation/history_inactive.svg": "85fa9d68cc6ea6d0016b7f5c8a6d6f5e",
"assets/assets/images/bottom_navigation/home_active.svg": "067d103e16ef2dbf90c253138c8008fd",
"assets/assets/images/bottom_navigation/home_inactive.svg": "fa48ceb903de5bdd8a03f8b00642b010",
"assets/assets/images/bottom_navigation/profile_active.svg": "3cb104577541fd9a30ac8e2d6811fef0",
"assets/assets/images/bottom_navigation/profile_inactive.svg": "c8c6335d25bed57ba40cccee719d3021",
"assets/assets/images/brand.png": "83729d72ebfb7fb542576f89b55ceef7",
"assets/assets/images/cancels.png": "33c3cb35055ab58f4dca706be27824ff",
"assets/assets/images/cat.png": "61b500c623d5766215d2f0ecf3b58b2c",
"assets/assets/images/chevron.svg": "ece254399913a71d74aa2634e0b8412a",
"assets/assets/images/closeststore.jpeg": "a008d0c60f67481f60ee378c0c71c08e",
"assets/assets/images/dana.png": "0a218593f2cfb1a82b9ba11e6009c315",
"assets/assets/images/empty_placeholder.png": "d422f97384462c448c1578dda5623a0d",
"assets/assets/images/favorite_empty.png": "d422f97384462c448c1578dda5623a0d",
"assets/assets/images/filter.png": "e62ece79bb793d7f14a7d26ead4fd04b",
"assets/assets/images/food.png": "30776dc82ba628795b9a0c62b2b8febb",
"assets/assets/images/gopay.png": "ee89b9e4ebdf85498de5344a82803ed5",
"assets/assets/images/history_placeholder.png": "db25b312170e445a255c97ca9646f109",
"assets/assets/images/icon/arrowdown.svg": "5e6b28499530b5ed73b455b879813680",
"assets/assets/images/icon/back.svg": "80a77cdbbbe79211fa481c4cfbe7dd90",
"assets/assets/images/icon/cancel_order.svg": "6e03bc35c96fd78b9e59300cf628ea4c",
"assets/assets/images/icon/cart.png": "ae3c4b3beb486cec8234241ce2aef6c4",
"assets/assets/images/icon/cart.svg": "33f4720826b7f8c1a86d39ab274abbc3",
"assets/assets/images/icon/clear.svg": "267cec243e3bdfd387cdd43e039485db",
"assets/assets/images/icon/close.svg": "89edb6ce8122c8895435e33fd41b69cb",
"assets/assets/images/icon/close2.png": "9bbc2598b3cfa3007a2e200f7a986f84",
"assets/assets/images/icon/close2.svg": "a3d222101d2db085f637da383ab262b2",
"assets/assets/images/icon/close3.png": "acfcb15ad47ec7b41bf19065a0314187",
"assets/assets/images/icon/collapse.png": "7957e7dc2174789b89f91d570e2e549a",
"assets/assets/images/icon/deliv.svg": "77f66a77926bc0810c2103b314fd3175",
"assets/assets/images/icon/dine.svg": "08af09aac354258aa3fe1e7f0303d753",
"assets/assets/images/icon/expand.png": "05177fb4a0c60797ad0729bf1d983963",
"assets/assets/images/icon/filter.svg": "848b884bba276c932014d5d1bddfcc83",
"assets/assets/images/icon/finish_order.svg": "4d26a2408287aa595bda9566aa07cb04",
"assets/assets/images/icon/lco.png": "cbf672d33ef4a3aadeba473fcdbcc142",
"assets/assets/images/icon/lov.svg": "8422b56bf3eb739cffa8755a7b602e67",
"assets/assets/images/icon/love.svg": "eb19b06426f2678109e8c2469a2217dc",
"assets/assets/images/icon/love_red.svg": "a28fc49f271b1fe408fb044259cf526e",
"assets/assets/images/icon/note.png": "0ecc423de5d569116b05393aafd81432",
"assets/assets/images/icon/note.svg": "75dd8d1add4e48f99bf999d094c81f6c",
"assets/assets/images/icon/ord.png": "2ee9cf19d1741cac72d821385bec9639",
"assets/assets/images/icon/profile/akun.png": "bc1142723f39fd81985d90cf03f70188",
"assets/assets/images/icon/profile/arrow_right.png": "66689b461422460d2fc54bd064a35ba1",
"assets/assets/images/icon/profile/atur_alamat.png": "baed54bec88888cd7989392341a811c4",
"assets/assets/images/icon/profile/coin.png": "aea09f90d42399b3b1f7a56f4d7c0c38",
"assets/assets/images/icon/profile/coinM.png": "5026e109ab2dd3c1374cf554cf0865a9",
"assets/assets/images/icon/profile/coinn.png": "304a3dc78cf752028a999530508e9e2c",
"assets/assets/images/icon/profile/coins.png": "9497e5e60eea84242ec3d7d1ddc98691",
"assets/assets/images/icon/profile/coin_gray.png": "9cb9805a5fe07885b439a524ffe3ba16",
"assets/assets/images/icon/profile/edit.png": "406f0ff72dc848056a95b95cf0b0b9f1",
"assets/assets/images/icon/profile/faq.png": "5ed20600e3ca57292b63f39cf56b61a0",
"assets/assets/images/icon/profile/favorit.png": "7b193acc52797dac8dcd922d207ef9b1",
"assets/assets/images/icon/profile/k3care.png": "1cb4c7d78b8e89a8283ecfc760fb13d0",
"assets/assets/images/icon/profile/kebijakan.png": "a3fc2717b70a0bd998c24bfade5ff876",
"assets/assets/images/icon/profile/member.png": "b5aa18bf713f8690e0b2aa35620c00a8",
"assets/assets/images/icon/profile/mission.png": "bdfb988bb2bd262fae26a08e03bfbf11",
"assets/assets/images/icon/profile/placeholder3.png": "be94e3f33d17cd672c88c3772b406a58",
"assets/assets/images/icon/profile/saran.png": "df9cf90b357fa56e0df5f8a552fa844e",
"assets/assets/images/icon/profile/syarat.png": "0abef5c429bd8a1a341296eaadd91251",
"assets/assets/images/icon/profile/voucher.png": "6ea1f556f54095d2603e5c3f3e828998",
"assets/assets/images/icon/profile/voucherm.png": "61cc7360723766440804593d683f7dba",
"assets/assets/images/icon/profile/wallet.png": "9834377a92596fce86c72093aff03d06",
"assets/assets/images/icon/search.svg": "76aed3b0409287d6016d37e9d4a01f42",
"assets/assets/images/icon/share.png": "c67a8a9763c05154c611266f09d66f4d",
"assets/assets/images/icon/time_out.svg": "d30e359911cc8e112572916856d76224",
"assets/assets/images/icon/voucher.png": "0d422c142a3010026f05fa8f9ceee027",
"assets/assets/images/icon/wallet.png": "a7572f5699559799d5b311c15e4be532",
"assets/assets/images/icon/wallet.svg": "65b99e684e9e848daea471e435f8fa39",
"assets/assets/images/icon_app.jpeg": "6ab7ccd688f9f2342727cdb536fc9102",
"assets/assets/images/imag2.png": "7827707604b8b3b17dd5bff5e066f326",
"assets/assets/images/kmart.png": "fe3ca3047c5b69d62b9bcca35c68cf86",
"assets/assets/images/loadmore.png": "252924954b8799d87563cab21b62410d",
"assets/assets/images/love.svg": "90e2b389c13dbd6f717f688759f182c1",
"assets/assets/images/marker.png": "0664b571fc629bee370321ca228a9bf6",
"assets/assets/images/no_loc.png": "380c1433aa33f91e3b5fe028cf0e72f4",
"assets/assets/images/onboarding/1.png": "444afbc27463489f8716902bcbec4325",
"assets/assets/images/onboarding/2.png": "97a1b304591c4cfe989391dc14f2f325",
"assets/assets/images/onboarding/3.png": "79ad77ae1ce2592bf6187162cce59306",
"assets/assets/images/otp_back.png": "f89ffdd81b410cc696e65c697f125635",
"assets/assets/images/ovo.png": "89e44e64a3ce9fb9c107a33244c93bd7",
"assets/assets/images/placeholder.png": "abc89fea0fb2a79d0c22bbe72cd02284",
"assets/assets/images/placeholder1.png": "95446b1dbdf59baf72a8e69e7dac165e",
"assets/assets/images/placeholder2.png": "af32d1a3c65c8f5ba322879f76c256fd",
"assets/assets/images/placeholder4.png": "23c863c9a27363bf1f427148be3d1ad8",
"assets/assets/images/play.png": "088cead66500214323c09bbba7571253",
"assets/assets/images/popup2.png": "7827707604b8b3b17dd5bff5e066f326",
"assets/assets/images/profile_data.png": "556dba56961135c43a26c9db9259f764",
"assets/assets/images/scanner.png": "cf90f93607f8bbc2b9b6d7602187e3a0",
"assets/assets/images/search.png": "723a32b4be1ac259e149585964713ae1",
"assets/assets/images/search.svg": "76aed3b0409287d6016d37e9d4a01f42",
"assets/assets/images/shopee_pay.png": "6ca3e0f0bef39865131a6769a38f283a",
"assets/assets/images/slide.png": "e26e769a41e1601cdab5977f9ca92b3e",
"assets/assets/images/splashscreen.jpg": "2d04a0080463b7745e0ef60a927a554b",
"assets/assets/images/splashscreen.png": "ababba0906b457cef3d5289e580ad8cf",
"assets/assets/images/success_dlg.png": "01db952573984cdf3d695aba28e53eb0",
"assets/assets/images/whatsapp.png": "06eda482a54ed3bcfb612c1e6050eddf",
"assets/assets/images/white_loc.svg": "c3114734bc4e2b0469cb4168f9b87ec9",
"assets/FontManifest.json": "c2123789920bf0b1f13cd52c1b1c194e",
"assets/fonts/MaterialIcons-Regular.otf": "f6763b5f8c11743f5c3f273234d30cb5",
"assets/NOTICES": "cce17a8ee04ce84921fd96c0abda88dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "37db10a3914bcd5dae766142f37c03a6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "03d74ea76e3a5df91384368e5aad7ad0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1a009288605c454493b7fdc8d2a76d5b",
"/": "1a009288605c454493b7fdc8d2a76d5b",
"main.dart.js": "d85f73957ff303951a86e2f409e00d7b",
"manifest.json": "ddd68430ac18d030c7b269253a59f620",
"version.json": "9b14dff47c8804fcaa6e37b503b4e23a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

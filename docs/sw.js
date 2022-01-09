// (c) 2021 Scot Watson  All Rights Reserved
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function selfInstall(e) {
  function addCaches(cache) {
    cache.addAll([
      "/",
      "/index.html",
      "/index.js",
      "/style.css",
    ])
  }
  e.waitUntil(caches.open("store").then(addCaches));
}

function selfFetch(e) {
  function sendResponse(response) {
    return response || fetch(e.request);
  }
  e.respondWith(caches.match(e.request).then(sendResponse));
}

self.addEventListener("install", selfInstall);
self.addEventListener("fetch", selfFetch);

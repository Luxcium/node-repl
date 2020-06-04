/** @format */

var net = require('net');

var sock = net.connect(1337);

process.stdin.pipe(sock);
sock.pipe(process.stdout);

sock.on('connect', function() {
  process.stdin.resume();
  process.stdin.setRawMode(true);
});

sock.on('close', function done() {
  process.stdin.setRawMode(false);
  process.stdin.pause();
  sock.removeListener('close', done);
});

process.stdin.on('end', function() {
  sock.destroy();
  console.log();
});

process.stdin.on('data', function(b) {
  if (b.length === 1 && b[0] === 4) {
    process.stdin.emit('end');
  }
});

/*
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
*/

/** @format */
var repl = require('node:repl');
var net = require('net');

net
  .createServer(function (socket) {
    var r = repl.start({
      prompt: 'socket ' + socket.remoteAddress + ':' + socket.remotePort + '> ',
      input: socket,
      output: socket,
      terminal: true,
      useGlobal: false,
    });
    r.on('exit', function () {
      socket.end();
    });
    r.context.socket = socket;
  })
  .listen(1337);

/*
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
*/

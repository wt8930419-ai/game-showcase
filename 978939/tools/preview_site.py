"""仅在本机预览网站，固定 SVG 的标准 MIME 类型。"""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SimpleHTTPRequestHandler.extensions_map[".svg"] = "image/svg+xml"
handler = partial(SimpleHTTPRequestHandler, directory=str(ROOT))
server = ThreadingHTTPServer(("127.0.0.1", 8766), handler)
print("http://127.0.0.1:8766/", flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    server.server_close()

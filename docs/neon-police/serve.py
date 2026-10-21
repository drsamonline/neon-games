#!/usr/bin/env python3
"""serve.py — run the game locally.

Double-clicking index.html will NOT work: browsers block JavaScript modules on
file:// URLs. Run this instead and open the address it prints.

    python3 serve.py
"""
import http.server, socketserver, os, sys, webbrowser

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      '.js': 'text/javascript', '.mjs': 'text/javascript',
                      '.webmanifest': 'application/manifest+json'}
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()
    def log_message(self, *a):
        pass

socketserver.TCPServer.allow_reuse_address = True
url = f'http://localhost:{PORT}/'
print(f'\n  Serving this folder at {url}\n  Press Ctrl+C to stop.\n')
try:
    webbrowser.open(url)
except Exception:
    pass
with socketserver.TCPServer(('', PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n  Stopped.')

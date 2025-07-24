#!/usr/bin/env python3
"""
Simple HTTP server for the AI Fashion Suggestion System
Serves static files with proper MIME types for local development
"""

import http.server
import socketserver
import os
import mimetypes

# Add support for .js files
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def run_server(port=8000):
    """Run the HTTP server on the specified port"""
    try:
        with socketserver.TCPServer(("", port), MyHTTPRequestHandler) as httpd:
            print(f"🚀 AI Fashion Suggestion System")
            print(f"📍 Server running at: http://localhost:{port}")
            print(f"📁 Serving directory: {os.getcwd()}")
            print(f"🔗 Open http://localhost:{port} in your browser")
            print(f"⏹️  Press Ctrl+C to stop the server")
            print("-" * 50)
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {port} is already in use. Try a different port:")
            print(f"   python server.py --port 8001")
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Serve AI Fashion Suggestion System')
    parser.add_argument('--port', type=int, default=8000, help='Port to serve on (default: 8000)')

    args = parser.parse_args()
    run_server(args.port)

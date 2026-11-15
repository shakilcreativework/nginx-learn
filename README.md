# Nginx learning lab

Local Windows lab for practicing Nginx reverse proxying, load balancing, HTTPS, location matching, MIME types, and gzip compression. Two Express servers provide sample responses on ports 3001 and 3002.

## Project layout

- `nginx-1.31.8/conf/nginx.conf`: Nginx configuration used by the lab.
- `nginx-1.31.8/html/`: static files for MIME and gzip experiments.
- `nginx-learning-lab/server1.js` and `server2.js`: Express backends.

## Run locally

1. Install Node.js and download **Nginx 1.31.8 for Windows** from [nginx.org](https://nginx.org/en/download.html). Put `nginx.exe` in `nginx-1.31.8/`. The executable is intentionally excluded from Git.
2. In `nginx-learning-lab/`, run `npm ci`, then start `node server1.js` and `node server2.js` in separate terminals.
3. Create a local certificate and private key at `nginx-1.31.8/conf/ssl/localhost.crt` and `localhost.key`. For example, with OpenSSL from the repository root:

   ```powershell
   New-Item -ItemType Directory -Force nginx-1.31.8/conf/ssl
   openssl req -x509 -newkey rsa:2048 -nodes -keyout nginx-1.31.8/conf/ssl/localhost.key -out nginx-1.31.8/conf/ssl/localhost.crt -days 365 -subj "/CN=localhost"
   ```

4. From `nginx-1.31.8/`, run `./nginx.exe -t` to check the configuration, then `./nginx.exe` to start Nginx. Open `http://localhost` or `https://localhost` (the local certificate will trigger a browser warning).

The HTTPS server also exposes `/practice/`, `/practice/hello`, `/practice/regex/test`, `/practice/ignorecase/TEST`, `/mime-test.css`, `/mime-test.json`, and `/gzip-test.txt` for exercises.

The local certificate, private key, generated logs, dependencies, and Nginx executable are excluded from Git.

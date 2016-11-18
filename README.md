This sample project was made for a quick web development teaching demo at NobleDesktop NYC (nobledesktop.com). It's a simple vanilla JS front-end that pulls movies from TMDB.

# Quickstart

1. Duplicate `docker/.env.dist` into `docker/.env`. Set TMDB API v3 key and base url there.

2. `npm install`

3. Build the container. `docker-compose build`

4. Kick it off. `docker-compose up -d`

5. Ensure the app didn't throw any errors. `docker-compose logs`

Site should be running. Hit the IP address of your docker machine on ports 8088 or 8043 to see.

---
layout: blog_post
image: /assets/blog_media/screenshot_7.png
title: Ekonomiappen
description: Webbapplikation skapad med hjälp av Flask, Heroku och Tailwind CSS.
---
Ekonomiappen skapades för att underlätta översikten på utgifter och därmed kunna planera ekonomin bättre.

**Webbappen finns live på:** [https://ekonomi.dannesteknikhorna.se](https://ekonomi.dannesteknikhorna.se).

## Användna resurser

### Applikation
* [Flask (Python)](https://flask.palletsprojects.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* ~~[Heroku](https://www.heroku.com/)~~ (hostas inte längre här)
* [Docker](https://www.docker.com/)

### Hosting
* [NGINX](https://www.nginx.com/) reverse proxy för att kunna köra flera webbservrar på samma port
* [Github](https://github.com/)

## Uppdatering 8/2-2023
Heroku har officiellt stängt av sin gratis tier och appen kan därför inte längre hostas där. För att göra det enklare att flytta hostingen i framtiden så konverterade jag appen till Docker. Appen körs nu lokalt på en server i hemmet i en Docker container.
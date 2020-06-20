---
title: 'How To Do Analytics Without Google With Ackee'
date: '2020-06-20T23:00:00.000Z'
description: ''
---

I decided a long time ago to avoid Google services. I use services like DuckDuckGo for search, Posteo for emails and Apple Maps / OpenStreetMap for, well, maps and directions. I was searching for an alternative to Google Analytics. I don't need complex information and metrics, so I wasn't looking at an alternative providing me the exact same features. I needed simple metrics for a project a friend and I were releasing called [GIFinder](https://gifinder.xyz) (that is now available). We wanted the following information:

- Pages views
- Referrers
- Visit duration
- Various data (OS, languages, etc.) that would be considered a bonus.

I wanted a cheap option that respects my privacy and the privacy of the users I'll track. I found a great [list of alternatives](https://github.com/awesome-selfhosted/awesome-selfhosted#analytics) on the [Awesome-Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted#) GitHub repo. Some of them offers hosting at some cost (Fathom have an option for 100,000 page views per month with unlimited websites for **\$14/month** for example). I quickly understood that I would have a lot more options (and would save money) if I self-hosted any of them.

## Here Comes Ackee

One of those projects caught my eyes because I loved the pure and simple design: [Ackee](https://ackee.electerious.com). It had almost everything I wanted. The procedure for self-hosting it was detailed and simple (thanks to Docker).

So I rented a cloud server at [Hetzner](https://www.hetzner.com/cloud). Even the cheapest one is enough for this kind of project. You could obviously do this with a Raspberry Pi or any kind of server. Bonus is you will be able to self-host a lot more projects.

I simply followed [one of the procedures](https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md#with-docker-compose) explained on the GitHub repo of Ackee and used nginx as explained in this [docs](https://github.com/electerious/Ackee/blob/master/docs/SSL%20and%20HTTPS.md).

A simple `docker-compose up` and it was up.

After that, you have to use [one of the numerous ways](https://github.com/electerious/Ackee#related) to add Ackee to your website. You can find a wrapper for React, Gatsby, WordPress, Django, PHP or even a simple script. For me, I used the React one as my website was built with React.

In less than an hour, I had Ackee running on my server. Don't hesitate to check the [Ackee docs](https://docs.ackee.electerious.com/#/) for more information on how to get started. I will not explain it in this article as everything is written clearly in the docs.

## Adding More Data

Everything was running smoothly, and I could monitor the first users of [GIFinder](https://gifinder.xyz) with success. Then, I checked the database storing the data and was a bit frustrated that some data were collected in the database but not exposed on the UI (OS, Browsers, etc.). I thought I would check if I could add them myself.

Ackee is developed using `Node.js` on the back end and `React` on the front end (without `jsx`). I thought that it would be a good idea to try to add those data. Some days after, I did my [first PR](https://github.com/electerious/Ackee/pull/89) on the project to add the OS data. I continued working on the project with [Tobias](https://github.com/electerious) the creator of Ackee to add more data and [a bunch](https://github.com/electerious/Ackee/pull/91) of [other features](https://github.com/electerious/Ackee/pull/95). It was rewarding to be able to contribute to a project I just set up and use.
Everything was released some days after and available to all Ackee users. Many thanks to Tobias for its reactivity!

I added more websites to the same Ackee instance and everything is running smoothly. To add a new website, Ackee allows you to generate a new domain id and uses this to track the correct website.

I'm convinced by Ackee and think it's one of the best options to simply set up an analytics almost for free that respects the privacy of your users!

---

TLDR: Ackee is a simple, free, self-hosted replacement for Google Analytics. I tried it and loved it. You should try it too.

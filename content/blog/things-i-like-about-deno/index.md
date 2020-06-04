---
title: Things I like about Deno
date: '2020-06-05T23:00:00.000Z'
description: ''
---

Deno caught a lot of attention recently, following the release of Deno 1.0 [^1]. Atfer using it for some days, I will share with you the first impression that I have about it. This is totally personal and only reflect my development preferences.

## TypeScript out of the box

One of the greatest strength of Deno is that you can use TypeScript out of the box. Install Deno, create a `.ts` file, use it and run. That's all. No `tsc`, no `tsconfig`. I'm aware of [`ts-node`](https://github.com/TypeStrong/ts-node) that allow you to easily have a TypeScript execution for Node.js, but this is even simpler. You don't have to separately compile your TypeScript code, Deno does all that for you.

You don't **have to** use TypeScript by the way, it supports Javascript as well.

## Built-in tools (test runner and code formatter)

When you're using Node.js, you have to pick one of the various testing libraries (my favorite is [jest](https://jestjs.io)). Deno comes with a built-in test runner that allows you, without installing anything more, to write and run your tests.

In the same vein, I'm using prettier in all my Javascript project (using React or Node.js) to format my code accordingly to a set of rules. This allows me to always have the same formatting across my projects. Deno comes with a built-in formatter that you can run with

## No more node_modules

Is this the end of the infinite `node_modules` eating my SSD storage? I don't think it is yet, but Deno does not install dependencies in a `node_modules` folder inside your project. It stores a cached version in the system's cache directory the first time you run your program. The next time you run the program, no downloads will be made.

## The docs and community

The project is moving fast as the community is very involved in the project. A lot of Node.js libraries are already available for Deno (I'm thinking of `pg` to connect to PostgreSQL, `oak` which is a `koa` or even `denon` that is the equivalent of `nodemon`).

The official docs is also very clear, concise and handy. You can check it [here](https://deno.land). And if that's not enough, there is already a lot of handbook, tutorials and articles about Deno.

--

I will continue to use Deno for side projects and small scripts as Javascript is the language I'm the most experienced with. Deno allows me to go fast and clean with ease. And that's what I like the most about it.

If you want to read more about Deno, [Deno 1.0](https://news.ycombinator.com/item?id=23172483) and [Deno Is a Browser for Code](https://news.ycombinator.com/item?id=23343799) posts on HN led to interesting and deeper technical discussions.

TLDR: I appreciated the TypeScript support out of the box, the build-in tools, the absence of `node_modules` and the community.

[^1]: [Deno 1.0](https://deno.land/v1)

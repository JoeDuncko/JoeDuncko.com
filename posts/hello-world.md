---
title: "Hello world"
excerpt: "Welcome to my new website! Let's talk about it a bit."
date: "2022-04-01"
---

Welcome to my new website! Let's talk about it a bit.

While this site might look almost exactly like my previous one, it is built completely differently.

## The old site

The previous site was a hand-spun static site built on [Skeleton CSS](https://github.com/dhg/Skeleton), a framework that hasn't been updated since 2014, from back when mobile responsiveness was considered a feature for a CSS framework.

It was hosted on Github Pages, which is still just fine for static sites, assuming you don't need to transpile anything.

Honestly, the site was holding up just fine. It was fast, mobile and desktop friendly, and I liked how it looked. However, there are a handful of reasons I wanted to do a rewrite:

- Maintaining a decent amount of unstructured text that just lived in HTML was a pain
- I wanted to add a blog
- I wanted my resume to live in JSON, so I could potentially do cool stuff with it
- I wanted a site that I could be proud to show off
- I wanted the opportunity to play with technologies I knew I wouldn't get to play with at work

## The new site

This new site is written in Typescript, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), and hosted on [Vercel](https://vercel.com/).

Typescript was an obvious choice since I wanted my resume to live in javascript objects, and I wanted those javascript objects to have an enforced structure. The hinting also made it super easy to use the resume data in components.

Next.js is the most widely used React framework with Server Side Rendering (SSR), which is more or less necessary to get good SEO and use React at the same time, so it was the easiest choice there. I originally intended to use Next.js's Static Generation feature, but SSR ended up being so fast on Vercel that I decided it wasn't worth figuring that out quite yet.

I could have used [Remix](https://remix.run/) if I wanted to be as hip and cool as possible, or [Astro](https://astro.build/) if I wanted to reduce the amount of code that is my responsibility (especially the blog), but I decided to go with the most mature project in the space instead.

In retrospect, I think I probably should have went with something that managed the blog logic and SEO stuff for me, but that's frustration for future me.

Using Tailwind was a bit of a tossup for me. I knew that I wanted to build out the website to look very similar to my previous site with minimal work. Using a full-fledged React component framework seemed like overkill. Tailwind ended up being the perfect amount of flexibility, allowing me to quickly build out components and abstract styles and layout as I went using component composition.

There's definitely still some work that can be done to make spacing a bit more consistent across this site, but in the mean time I read [this awesome article by the creator of Tailwind on separation of concerns in CSS](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).

## Conclusion

Overall, this site is definitely over-engineered, but building it was a great learning experience for me. Now to fill it with content...

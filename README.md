# Nuze

Put yourself in the news!
![Screen Shot 2021-10-26 at 12 40 06 PM](https://user-images.githubusercontent.com/7042219/138949511-76883bc9-164e-42ab-bfea-d9ef83e4e8b1.png)

## Work in Progress...

I'm currently playing around with this as a way to learn more about [video capture](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), animation, [Svelte](https://svelte.dev), and video production. Feel free to follow along or fork for your own learning.

## Goals

A customizable replica of the CNN interface, including:

- animations
- transitions
- sound effects
- multi-user video chat

## Installation

Clone the repo, `npm install`, `npm run dev` and open a browser to [`localhost:3000`](localhost:3000).

## Developing with Svelte

I'm using [Vite](https://vitejs.dev/) for the development environment and build setup. Svelte's `.svelte` files and syntax are incredibly intuitive, but refer to [the official documentation](https://svelte.dev) for advanced examples and API reference.

## Feature (Todo?) List

- [ ] Layout
  - [-] Lower third
    - [-] Headline Block
      - [ ] Animated Headline transitions
      - [x] Headline text squeezes to fit container
      - [x] Animated Byline and Tagline
    - [x] Logo Block
      - [ ] Live market data \*
      - [x] Rotate times and stocks
      - [x] Hide stocks when market is closed
      - [x] Controllable "Live" indicator
    - [x] News Ticker
      - [x] Animated, loops when content ends
      - [x] Program Title with animated highlight
  - [-] Video
    - [ ] Size and layout transitions
    - [ ] Multiple layouts
    - [-] Webcam
      - [ ] Multiple connections \*
      - [x] Live view
    - [x] Identifier
      - [x] Works with 1-3 lines of data
      - [x] Includes live local time
      - [x] Animated in an out
- [ ] Controls
  - [-] Basic
    - [ ] Edit ticker text
    - [x] All non-ticker text editable
    - [x] Control camera activity
  - [ ] Advanced
    - [ ] Orchestration with manual and/or timed transitions
    - [ ] Multiple views and user roles \*
    - [ ] Synced display across connections \*

<small>\* indicates a feature that needs a backing server</small>

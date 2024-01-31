# CloneTube

A Youtube clone made with Nuxt 3

You can see the demo [here](https://clonetube-jd-sanmartin.vercel.app/)

## Note
Infinite scroll is mocked in the application in order not to hit the Youtube API quota limit

## Setup

1. Clone this project
2. Install dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

3. Add a .env file to the root directory with the following format:

```
NUXT_YOUTUBE_API_KEY = [YOUR YOUTUBE KEY]
NUXT_YOUTUBE_API_URL = https://youtube.googleapis.com/youtube/v3

NUXT_FIREBASE_API_KEY = [YOUR FIREBASE KEY]
NUXT_FIREBASE_AUTH_DOMAIN = [YOUR FIREBASE KEY]
NUXT_FIREBASE_PROJECT_ID = [YOUR FIREBASE KEY]
NUXT_FIREBASE_STORAGE_BUCKET = [YOUR FIREBASE KEY]
NUXT_FIREBASE_MESSAGING_SENDER_ID = [YOUR FIREBASE KEY]
NUXT_FIREBASE_APP_ID = [YOUR FIREBASE KEY]
```

4. Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

Alternatively, you can preview a production build:
Build the project first (make sure you install nuxi first!):

```bash
nuxi build
```

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

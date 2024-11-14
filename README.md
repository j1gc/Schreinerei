# Schreinerei

A simple static Sveltekit Website that uses Tailwind CSS for styling created with help from the [tutorial](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Einstieg) from selfhtml.org and deployed on cloudflare pages accesible under https://schreinerei.jonas-flörke.de.
To learn more about what the html elements in the project do hover over them in editors like Visual Studio Code or Webstorm, an popup with an definition from MDN should show up.

## Setup

To set up the project locally, clone the repository and then install the dependencies:

```bash
# bun
bun i

# npm
npm i
```

## Developing

After installing the dependencies, you can start a local development server:

```bash
# bun
bun run dev

# npm
npm run dev
```

This will launch the development environment, allowing you to view changes in real time as you edit your files.

## Building

To create an production build of the application:

```bash
# bun
bun run build

# npm
npm run build
```

You can preview the production build with `npm run preview` or `bun run preview`.

To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

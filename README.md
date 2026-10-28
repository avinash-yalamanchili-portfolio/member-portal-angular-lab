# Member Portal Angular Lab

A clean-room Angular learning project built one concept at a time. It uses the
traditional `NgModule` architecture so the lessons transfer easily to existing
enterprise Angular applications.

This independent educational project contains no proprietary code, branding,
credentials, internal endpoints, production data, or protected information.

## Day 1: Angular foundation

The first version contains only:

- Angular 20 configured with Node 20
- `main.ts`, which starts Angular
- `AppModule`, the root module
- `AppComponent`, the root component
- an empty `AppRoutingModule` for future routes
- one component test

## Day 2: Components and template binding

The root component now demonstrates how its TypeScript class connects to its
HTML template:

- interpolation displays component data with `{{ value }}`
- property binding sets an element property with `[property]="value"`
- event binding calls a component method with `(event)="method()"`
- `*ngIf` conditionally adds or removes template content
- component tests verify the rendered data and button behavior

## Requirements

- Node.js 20.9 or later within the Node 20 release line
- npm 10+

The repository includes `.nvmrc` with Node `20.20.2`, which is compatible with Angular 20.3.

## Run locally

```powershell
npm ci
npm start
```

Open `http://localhost:4200`.

## Build and test

```powershell
npm run build
```

## License

MIT

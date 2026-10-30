# Member Portal

An Angular member self-service application for managing coverage information,
claims, benefits, secure messages, and account activity.

This is an independent clean-room project. It contains no proprietary code,
branding, credentials, internal endpoints, production data, or protected
information.

## Current capabilities

- responsive member dashboard and route-based navigation
- coverage and plan summary
- claims, messages, and benefits overview
- claims workspace with status filters and financial summaries
- recent account activity
- expandable member information
- component tests for dashboard content and interactions

## Architecture

- Angular 20 with TypeScript
- traditional `NgModule` application structure
- SCSS component styling
- Angular Router with dashboard and claims feature routes
- Jasmine and Karma component tests

## Requirements

- Node.js 20.9 or later within the Node 20 release line
- npm 10+

The repository includes `.nvmrc` with Node `20.20.2`, which is compatible with
Angular 20.3.

## Run locally

```powershell
npm ci
npm start
```

Open `http://localhost:4200`.

## Build and test

```powershell
npm run build
npm run test:ci
```

## License

MIT

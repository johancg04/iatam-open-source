# IATA Flight Monitoring Platform (ea11834u202423752)

Angular 21 frontend for the IATA Flight Monitoring Hubs case (UPC, Open
Source Application Development, 1ASI0729 — Partial Exam 202610, NRC 11834).

## Description

The platform helps aeronautical analysts and airport operators to organize
and monitor information about international flights. It interacts with two
backends:

- A platform Fake API (json-server) for `flight-monitoring-hubs` and
  `flight-items`.
- The public **AviationStack API** to retrieve real flight data by airline.

## Features

- Toolbar with the IATA logo (Logo.dev), application title, navigation
  (Home, New Flight Record) and language switcher (EN/ES, English by
  default).
- `Home` view (`/home`) listing the registered Flight Items as a responsive
  Material grid of `Flight Item Summary` cards (Empty state when there are
  no records).
- `New Flight Record` view (`/flight-records/new`) with a two-step form: pick
  a region code → pick a flight returned by AviationStack. Cancelled flights
  cannot be registered. `registeredAt` is populated automatically and `hubId`
  is resolved from the matching `FlightMonitoringHub`.
- Page-not-found view that displays the invalid path and offers a "Go Home"
  button.
- Internationalization (i18n) using ngx-translate, with English as the
  default language and Spanish as the alternate.
- Material Azure-Blue palette adapted to approach the IATA design system.

## Stack

- Angular 21 (standalone components)
- Angular Material + CDK
- Angular Signals (state management)
- @ngx-translate/core + http-loader
- HttpClient (`@angular/common/http`)
- json-server v0.17.4 (fake backend)

## Architecture

Domain-Driven Design with three bounded contexts under `src/app/`:

- `shared/` — base entities, base infrastructure (api, endpoint, response,
  assembler) and presentation shell (layout, language switcher, footer,
  home, page-not-found).
- `monitoring/` — Flight Monitoring Hubs and Flight Items: entities,
  resources, assemblers, endpoint clients, infrastructure facade
  (`MonitoringApi`), application store (`FlightItemStore` with Signals),
  `FlightItemSummary` card and `NewFlightRecord` view.
- `aviation/` — AviationStack queries: `Flight` entity, response/assembler
  that flattens the nested AviationStack JSON, and an `AviationApi` facade
  that maps region codes (LATAM/NAM/EUR/MEA/APAC) to airline IATA codes
  (LA/AA/IB/EK/SQ).

Patterns applied: Request/Response, Resource, Assembler, Api, Endpoint,
Store.

## Configuration

`src/environments/environment.ts`:

```ts
platformProviderBaseUrl: 'http://localhost:3000/api/v1',
platformProviderMonitoringEndpointPath: '/flight-monitoring-hubs',
platformProviderItemsEndpointPath: 'flight-items',
logoProviderBaseUrl: 'https://img.logo.dev',
aviationStackBaseUrl: 'http://api.aviationstack.com/v1',
aviationStackKey: '<your AviationStack API key>',
logoDevKey: '<your Logo.dev public key>'
```

## Running the project

```bash
# 1. Install dependencies
npm install

# 2. Start the Fake API (in a separate terminal)
cd server
json-server --watch db.json --routes routes.json

# 3. Start the Angular dev server
npm start
```

Open `http://localhost:4200/` in your browser. The application redirects
`/` to `/home`.

## Author

Johan Alexis Contreras Granados

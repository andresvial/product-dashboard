# Product Dashboard

This project is designed to show a list of products and a dashboard with some metrics so that stakeholders can have a better understanding of the business, stay informed and make day-to-day decisions based on the info found on this app.

## Installation

To install the dependencies, use the following command:

```bash
npm install
```

## Running the project

Before running the project, you need to create a `.env` file in the root of the project with the following content (the idea being that if the external API URL changes, changes only have to be made in the `.env` file):

```bash
DUMMY_JSON_API_CLIENT_BASE_URL="https://dummyjson.com"
```

Then, to run the project, use the following command:

```bash
npm run dev
```

Then go to `http://localhost:3000`

## Exposed Endpoint

The endpoint exposed is located at `http://localhost:3000/api/products`, where query params can be used to filter the products by category, for example:

- `http://localhost:3000/api/products?category=groceries`: Will return all the products that belongs to the category "groceries".

## Product and Technical decisions

### Technical decisions

The project's architecture is made with reutilization of functions in mind and a simplified version of a Clean Architecture. First, the idea is that the `packages` folder
contains all code separated into different modules and to have them as "dumb" as possible, each one only knowing about their logic and nothing else about the project (single responsibility principle).
This includes general UI components, custom hooks, an external Dummy API client, so on and so forth. Then, the `app` folder contains the main application code, which contains the frontend code and import packages from the `packages` folder.

Thinking in maintainability, I have to make a special point about the `use cases` and the `entities` on the `domain-clean` folder:

When fetching the products from the external API, the first thing to do before working with the result in the rest of the app is to map the incoming data into the Product Entity. This allows the app to only work with the Product Entity and not with the external API data, so if the external API changes, the app will still work with the correct data by changing the mapper. Perhaps its a little excessive to do this with only a single entity, but the idea is for it be scalable by making new entities in the `domain-clean` folder, or by adding new attributes to the existing mapper if more attributes for Product are needed.

The same idea is applied to the `use cases`, which are the ones that contain the business logic of the app (for example, calculating the average price of the products). This use-cases are always within the entity folder that make sense to them (in this case, the `products` entity). The idea also is that the `fetchers` or API endpoints found in the app can reutilize the use cases from the `domain-clean` folder.

Regarding the UI, I chose to use Shadcn UI because its a library easy to install, very customizable and made with Next.js in mind.

All queries are done on the server side to improve the performance of the app thanks to the query params on the URL. By setting the query params on the URL with a custom hook when changing pages, the page obtains the query params and passes them to the `listProductsFetcher()`, only fetching the products for the page that the user is on.

### Product decisions

In terms on the layout of the page the stakeholders will see, I decided to use cards with insights at the top because is what the user will first be drawn to. If a stakeholder enters the page, chances are that this metrics are the first things that they will want to see to make decisions in the same day (changing the prices of some products for example when seeing that the average price is too high).

If a stakeholder wants to get more info to make their own conclusions about the metrics, they can then go to the table and check the details of the products. For this, I decided to use a Drawer (Sheet in Shadcn) for the details of each product, so the user can quickly jump between products without having a horrible UX experience changing pages back and forth.

## Current Limitations

The exposed endpoint is not paginated, it returns the first 30 products (the default set by the external API).

## What to improve with more time

- Implement the pagination for the exposed endpoint.
- Generalize the `ProductDetailsSheet` component to be reused in other pages and with other entities. The Same for the card withe the metric.
- Optional tasks: search bar for the table, testing, logging, etc.

## CI/CD

There is a "fake" PR that I left open to show the CI/CD pipeline. this runs two jobs, a Lint check and a Build check.

## Versions

- Node 20.9.0

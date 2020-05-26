# Doop's Droid Emporium

## Creating a new Aurelia 2 project

The easiest way is to use npx and run

`npx au2 new`

This will help scaffold a new project, setting up preffered project structure, using TypeScript or JavaScript. Additional choise of CSS preprocessors, testign frameworks etc.

## Startup main.ts & Dependency Injection

The entry point for the entire project is `main.ts`. This is a good place to register things in the DI container.

[main.ts](./../src/main.ts)

## Data Binding

Aurelia's reactive databinding is at the same time simple and very powerfull.

### Assignment: Add flair to the home page

The customer wants a visitor counter to be displayed on the [home page](./../src/modules/home/home-page.html) !

The data is already accessible in the [view model](./../src/modules/home/home-page.ts) in the property `visitors`.

<details>
<summary>Task 1</summary>

```html
<div class="visitors">
  Visitors: ${visitors}
</div>
```

</details>

## Custom Components

Components are the main building blocks of Aurelia apps.

### Assignment: Build the `product-recommendations` component

We have been given a feed of product recomendations. The customer needs:

1. the recomendations to be displayed below the products, on the [products page](./../src/modules/products/products-page.html)
2. clicking a recommended product shall filter out the recommended product model

The product feed [data structure](./../data/product-recommendations.json)

Start the work in [product-recommendation](./../src\components\product-recommendation\product-recommendation.html)

<details>
<summary>Task 1</summary>

```html
<img src.bind="imgSource" alt.bind="item.productName" />

<div class="product-name">${item.productName}</div>

<blockquote>
  ${item.quote}
  <div class="user-name">- <em>${item.user}</em></div>
</blockquote>
```

</details>

<details>
<summary>Task 2</summary>

```typescript
click.trigger = "filterProduct(item.productName)";
```

</details>

## Global Registrations

To not be forced to import/require components in views all the time, globaly registering components can be a good alternative.

## Template Repeaters

for.of

## Template Conditionals

if.bind

## Router

The new router is able to handle routing without route configurations.

## Independent ViewPorts

The possibility of independent navigation in different viewports enables us to start using routing and viewports as design elements.

## Value Converters

Value Converters are excellent tools for bending values to comply with our needs for presentation. Text in, text out.

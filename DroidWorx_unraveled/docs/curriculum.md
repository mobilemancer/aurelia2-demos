# Doop's Droid Emporium

## Startup main.ts & Dependency Injection

The entry point for the entire project is `main.ts`. This is a good place to register things in the DI container.

[main.ts](./../src/main.ts)

### Global Registrations

To not be forced to import/require components in views all the time, globaly registering components can be a good alternative.

For ex see [globalComponents.ts](./../src/components/globalComponents.ts), here all components are exported and then imported into the DI container in [main.ts](./../src/main.ts).

## Data Binding

Aurelia's reactive databinding is very powerfull and at the same time simple to use.

### Assignment: Add flair to the home page

1. The customer wants a visitor counter to be displayed on the [home page](./../src/modules/home/home-page.html) !
2. The customer wants to alternate the image between BB-8 and BB-9E for odd and even visitor count.

The data is accessible in the [view model](./../src/modules/home/home-page.ts).

<details>
<summary>Task 1</summary>

```html
<div class="visitors">
  Visitors: ${visitors}
</div>
```

</details>

<details>
<summary>Task 2</summary>

Data bind the src of the img.

```html
<img src.bind="imgSource" />
```

</details>

## Components

Components are the main building blocks of Aurelia apps.

### Assignment: Build the `product-recommendations` component

We have been given a feed of product recomendations.

#### Tasks

1. Create recomendations to be displayed below the products, on the [products page](./../src/modules/products/products-page.html)
2. Clicking a recommended product shall filter out the recommended product model

The product feed [data structure](./../data/product-recommendations.json)

Start the work in [product-recommendation](./../src\components\product-recommendation\product-recommendation.html)

<details>
<summary>Task 1</summary>

```html
<img src.bind="imgSource" />

<div class="product-name">${item.productName}</div>

<blockquote>
  ${item.quote}
  <div class="user">- <em>${item.user}</em></div>
</blockquote>
```

</details>

<details>
<summary>Task 2</summary>

```typescript
click.trigger = "filterProduct(item.productName)";
```

</details>

## Router

The new router is able to handle routing with and without route configurations. Using routing without a config makes it very easy to populate a multitude of viewports on the screen that can navigate independetly of each other. Populating multiple viewports from the same string is done with `+`.

### Assignment: Build the `Legends` page

The customer wants us to finish the [Legends page](./../src/modules/legends/legends-page.html)

#### Tasks

1. Create a list of links for all legendary droids.
2. Display the `image-part` component in the `image-viewport` and the `stats-part` in the `stats-viewport`.

<details>
<summary>Task 1</summary>

```html
<div class="legend" repeat.for="legend of legends">
  <a>
    <h1>${legend.name}</h1>
  </a>
</div>
```

</details>

<details>
<summary>Task 2</summary>

```html
goto="image-part(${legend.name})@image-viewport+stats-part(${legend.name})@stats-viewport"
```

</details>

<details>
<summary>Task 2 - The Aurelia way</summary>

```html
<a
  goto.bind="[{ component: 'stats-part', parameters: { legend }, viewport: 'stats-viewport' }, { component: 'image-part', parameters: { legend }, viewport: 'image-viewport' }]"
></a>
```

Modify image-part.ts

```typescript
  public enter(params: object) {
    if (!params) return;
    const legend = <ILegend>params["legend"];
    this.source = "./../../../../../content/images/legends/" + legend.image;
  }
```

Modify stat-part.ts

```typescript
public enter(params: object) {
  debugger;
  if (!params) return;
  this.legend = <ILegend>params["legend"];
}
```

</details>

## Independent ViewPorts

The possibility of independent navigation in different viewports and the ease of populating multiple viewports without config changes how we approach routing. This ease of use and flexibility enables us to start thinking of viewports not just as big canvases to draw pages on, but more as independent design elements.

### Assignment: Use the router to enable a Shopping-Cart

The customer needs us to finish implementing the shopping-cart. Use the router and make sure it doesn't hinder the other navigation.

#### Tasks

1. Add another viewport that can be used for the [shopping-cart](./../src\components\shopping-cart\shopping-cart.html) component. (Should be added in the root app ie. [my-app.html](./../src/my-app.html))
2. Make sure to lock it down to only be used by the `shopping-cart` component, and make sure it doesn't show in the URL.

<details>
<summary>Task 1</summary>

```html
<au-viewport></au-viewport>
```

</details>

<details>
<summary>Task 2</summary>

```html
<au-viewport
  default="shopping-cart"
  used-by="shopping-cart"
  no-link
></au-viewport>
```

</details>

Obs! Note how routing through modules and pages are separate from the viewport routing the shopping basket.

## Value Converters

Value Converters are excellent tools for bending values to comply with our needs for presentation. Text in, text out. Avoids simple formatting code all over your code base.

### Assignment: Reduce boilerplate code by using Value Converters

The customer demands us to adhere to SOLID principles! Move some view formatting code that is needed in other places on the site.

#### Tasks

1. Change the [stats-part](./../src/modules/legends/components/stats/stats-part.html) component. Make it use a value converter for formatting the Mass and Height properties. The value converters are already implemented and used in other places in the app.

<details>
<summary>Task 1</summary>

```html
<div class="stat-row">
  <span class="label">Mass</span>
  <span class="value">${legend.mass | massFormater}</span>
</div>

<div class="stat-row">
  <span class="label">Height</span>
  <span class="value">${legend.height | lengthFormater}</span>
</div>
```

</details>

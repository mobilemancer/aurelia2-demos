# Aurelia 2 - The New Hotness

## Creating a new Aurelia 2 project

The easiest way is to use npx and run

`npx au2 new`

This will help scaffold a new project, setting up preffered project structure, using TypeScript or JavaScript. Additional choise of CSS preprocessors, testign frameworks etc.

## Startup main.ts

The entry point for the entire project is `main.ts`. This is a good place to register things in the DI container.

## Custom Elements

Elements are the main building blocks of Aurelia apps.

### HTML Only Elements

Only contains a template file, has no backing view-model.

### Regular Custom Elements

Combines a template and a backing view-model.

### DI

Dependency Injection was a very good part of Aurelia. In Aurelia 2 it has an even more prolific role.

## Template Repeaters

for.of

## Template Conditionals

if.bind

## Data Binding

Aurelia's reactive databinding is at the same time simple and very powerfull.

## Value Converters

Value Converters are excellent tools for bending values to comply with our needs for presentation. Text in, text out.

## Global Registrations

To not be forced to import/require components in views all the time, globaly registering components can be a good alternative.

## Event Listener

Show the click handling.

## Event Aggregation

Show the recommendation click handler, how it communicates.

## Router

The new router is able to handle routing without route configurations.

## Independent ViewPorts

The possibility of independent navigation in different viewports enables us to start using routing and viewports as design elements.

Svelte Plop
=========

An opinionated Plop generator for Svelte components
[plopjs.com](https://plopjs.com/documentation/)

## Installation
`npm install @ctm/svelte-plop --save`

## Package.json
`"generate": "svelte-plop"`
or set a base path for your components
`"generate": "svelte-plop --base src"`

## Basic Usage
`npm run generate`

## Bypass prompts
If you want to bypass the prompts you can provide the answers
    `npm run generate "component name" Y Y`
The above will generate a component named ComponentName with minimal component boilerplate specifically for component libraries. Once you get to know the generator questions you will be able to work this out for your needs.

## Prompts
* **Component name**: will convert any case to PascalCase
* **Minimal boilerplate**: answer n to generate full component boilerplate code
* **UI component**: answer n if not generating component for the UI lib
* **Path**: answer with the path (src/components) to where you want your generated component. If you set a base path in your run script then this path will be appended.
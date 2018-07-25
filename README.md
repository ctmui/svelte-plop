Svelte Plop
=========

An opinionated Plop generator for Svelte components
[plopjs.com](https://plopjs.com/documentation/)

## Installation
`npm install @ctm/svelte-plop --save`

## Basic Usage
`svelte-plop`

## Bypass prompts
If you want to bypass the prompts you can provide the answers
    `svelte-plop "component name" Y Y`
The above will generate a component named ComponentName with minimal component boilerplate specifically for the UI library.

## Prompts
* **Component name**: will convert any case to PascalCase
* **Minimal boilerplate**: answer n to generate full component boilerplate code
* **UI component**: asnwer n if not generating component for the UI lib
* **Path**: answer with the path (src/components) to where you want your generated component
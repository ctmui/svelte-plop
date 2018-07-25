module.exports = function (plop) {
  const context = process.cwd();
  const base = context + (process.argv[2] === '--base' ? '/' + process.argv[3] : '/');

  plop.setGenerator('component', {
    description: 'Boilerplate for Svelte component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of component'
      },
      {
        type: 'confirm',
        name: 'minimal',
        message: 'do you want minimal component boilerplate?',
        default: true
      },
      {
        type: 'confirm',
        name: 'ui',
        message: 'is this a library component?',
        default: false
      },
      {
        type: 'input',
        name: 'path',
        message: `path from ${base} to generate component`
      }
    ],
    actions: (data) => {
      let dest = base + data.path || '';

      let actions = [
        {
          type: 'add',
          path: `${dest}/{{properCase name}}/src/{{properCase name}}.html`,
          templateFile: 'plop/src/Component.html'
        },
        {
          type: 'add',
          path: `${dest}/{{properCase name}}/__tests__/{{properCase name}}.spec.js`,
          templateFile: 'plop/__tests__/Component.spec.js'
        }
      ];

      if(!data.minimal) {
        actions = actions.concat([{
          type: 'add',
          path: `${dest}/{{properCase name}}/src/options.js`,
          templateFile: 'plop/src/options.js'
        }]);
      }

      if(data.ui) {
        actions = actions.concat([{
          type: 'add',
          path: `${dest}/{{properCase name}}/docs/01-intro.html`,
          templateFile: 'plop/docs/01-intro.html'
        },
        {
          type: 'add',
          path: `${dest}/{{properCase name}}/examples/01-basic{{properCase name}}.html`,
          templateFile: 'plop/examples/01-basicComponent.html'
        },
        {
          type: 'add',
          path: `${dest}/{{properCase name}}/examples-util/example.js`,
          templateFile: 'plop/examples-util/example.js'
        }]);
      }

      return actions;
    }
  });
};

import mount from 'cypress-svelte-unit-test';
import {{properCase name}} from '../src/{{properCase name}}.html';
import options from '../src/options';

describe('{{properCase name}}', () => {
  describe('when no data is passed', () => {
    beforeEach(() => {
      mount({{properCase name}});
    });

    it('has default class and text', () => {
      cy.get('.{{camelCase name}}')
        .should('have.class', '{{camelCase name}}')
        .and('have.text', '');
    });
  });
});

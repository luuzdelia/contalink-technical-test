/// <reference types="cypress" />

describe('Validaciones en login', () => {
  it('Clave incorrecta', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type('password', { log: false });
    cy.get('.group').click();
    cy.get('.bg-red-100').contains('El código de acceso no es válido. Por favor, verifica e intenta nuevamente.');
  });
  it('Sin ingresar clave', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('.group').click();
    cy.get('.bg-red-100').contains('El código de acceso no es válido. Por favor, verifica e intenta nuevamente.');
  });
})
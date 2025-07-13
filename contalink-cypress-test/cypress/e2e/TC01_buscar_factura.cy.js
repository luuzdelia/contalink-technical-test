/// <reference types="cypress" />

describe('Buscar factura', () => {
  it('Búsqueda por Número de factura', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se busca factura
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('#invoiceName').type('AUT1');
    cy.get('.bg-indigo-600').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('AUT1');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
  it('Búsqueda por Estado', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se busca factura
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('#status').select('Cancelado');
    cy.get('.bg-indigo-600').click();
    cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('Cancelado');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
  it('Búsqueda por Fecha inicial', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se busca factura
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('#startDate').type('2025-07-11');
    cy.get('.bg-indigo-600').click();
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('11/07/25');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
})
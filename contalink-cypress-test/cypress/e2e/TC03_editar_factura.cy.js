/// <reference types="cypress" />

describe('Edición de facturas', () => {
  it('Edición parcial de una factura', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se busca factura
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('input#invoiceName').type('AUT1');
    cy.get('.bg-indigo-600').click();
    //Seleccionamos la edición de una factura
    cy.get(':nth-child(2) > :nth-child(6) > .flex > .btn-primary').click();
    cy.get('.text-xl').contains('Editar Factura');
    //Editamos factura: Número y total
    cy.get('#invoiceNumber').clear().type('N9');
    cy.get('#total').clear().type('1000');
    cy.get('.text-white > span').click();
    cy.wait(2000);
    //Se busca factura actualizada
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('input#invoiceName').type('N9');
    cy.get('.bg-indigo-600').click();
    cy.wait(1000);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('N9');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  })
})
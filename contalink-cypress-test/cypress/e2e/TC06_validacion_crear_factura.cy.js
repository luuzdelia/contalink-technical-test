/// <reference types="cypress" />

describe('Validaciones al crear nueva factura', () => {
  it('Validación de Número de factura', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se intenta crear nueva factura
    cy.get('.justify-between > .btn').click();
    cy.get('.text-xl').contains('Crear Nueva Factura');
    cy.get('.space-y-4 > .flex > .text-white').click();
    cy.get('.bg-red-100').contains('El número de factura es requerido');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
  it('Validación de Total', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se intenta crear nueva factura
    cy.get('.justify-between > .btn').click();
    cy.get('.text-xl').contains('Crear Nueva Factura');
    cy.get('#invoiceNumber').type('VAL1');
    cy.get('.space-y-4 > .flex > .text-white').click();
    cy.get('.bg-red-100').contains('El total debe ser mayor a cero');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
  it('Validación de Estado', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se intenta crear nueva factura
    cy.get('.justify-between > .btn').click();
    cy.get('.text-xl').contains('Crear Nueva Factura');
    cy.get('#invoiceNumber').type('VAL1');
     cy.get('#total').clear().type('3000');
    cy.get('.space-y-4 > .flex > .text-white').click();
    cy.get('.bg-red-100').contains('El estado es requerido');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
})
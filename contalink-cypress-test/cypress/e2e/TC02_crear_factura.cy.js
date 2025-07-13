/// <reference types="cypress" />

describe('Crear nueva factura', () => {
  it('Creación de nueva factura vigente', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se crea nueva factura
    cy.get('.justify-between > .btn').click();
    cy.get('.text-xl').contains('Crear Nueva Factura');
    cy.get('#invoiceNumber').type('AUT1');
    cy.get('#total').clear().type('499.99');
    cy.get(':nth-child(4) > #status').select('Vigente');
    cy.get('.space-y-4 > .flex > .text-white').click();
    //Se busca factura
    cy.wait(3000);
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('input#invoiceName').type('AUT1');
    cy.get('.bg-indigo-600').click();
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('AUT1');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
  it('Creación de nueva factura pagada', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se crea nueva factura
    cy.get('.justify-between > .btn').click();
    cy.get('.text-xl').contains('Crear Nueva Factura');
    cy.get('#invoiceNumber').type('AUT2');
    cy.get('#total').clear().type('800.03');
    cy.get(':nth-child(4) > #status').select('Pagado');
    cy.get('.space-y-4 > .flex > .text-white').click();
    //Se busca factura
    cy.wait(3000);
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('input#invoiceName').type('AUT2');
    cy.get('.bg-indigo-600').click();
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('AUT2');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
  it('Creación de nueva factura pendiente', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se crea nueva factura
    cy.get('.justify-between > .btn').click();
    cy.get('.text-xl').contains('Crear Nueva Factura');
    cy.get('#invoiceNumber').type('AUT3');
    cy.get('#total').clear().type('13400.22');
    cy.get(':nth-child(4) > #status').select('Pendiente');
    cy.get('.space-y-4 > .flex > .text-white').click();
    //Se busca factura
    cy.wait(3000);
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('input#invoiceName').type('AUT3');
    cy.get('.bg-indigo-600').click();
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('AUT3');
    cy.get('.p-4 > .px-4'). click();//Cerrar sesión
  });
})
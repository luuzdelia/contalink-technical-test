/// <reference types="cypress" />

describe('Eliminar factura', () => {
  it('Eliminar factura cancelada', () => {
    cy.visit('/');
    cy.contains('Código de Acceso Requerido');
    cy.get('#access-code').type(Cypress.env('accessCode'), { log: false });
    cy.get('.group').click();
    cy.get('.p-4 > .text-2xl').contains('Sistema de Facturas');
    //Se busca factura
    cy.get('.text-lg').contains('Filtros de Búsqueda');
    cy.get('#status').select('Cancelado');
    cy.get('.bg-indigo-600').click();
    cy.get(':nth-child(1) > :nth-child(5) > .badge').contains('Cancelado');
    cy.get(':nth-child(1) > :nth-child(6) > .flex > .btn-error').click();
    /*
    Queda bloqueado ya que cuenta con bugs:
      1 No funciona correctamente la búsqueda
      2 No se permite buscar por ID que es un valor único
    */
  })
})
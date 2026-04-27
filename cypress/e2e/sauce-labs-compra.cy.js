describe('Flujo de compra en Sauce Labs', () => {
  const pausaEvidencia = 1200;

  beforeEach(() => {
    cy.fixture('checkout').as('datos');
  });

  it('autentica, agrega dos productos, revisa carrito y finaliza la compra', function () {
    cy.visit('/');

    cy.get('[data-test="username"]').type(this.datos.usuario);
    cy.get('[data-test="password"]').type(this.datos.password, { log: false });
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item').should('have.length.at.least', 2);
    cy.wait(pausaEvidencia);

    this.datos.productos.forEach((producto) => {
      cy.contains('.inventory_item', producto)
        .find('button')
        .click();
      cy.wait(800);
    });

    cy.get('.shopping_cart_badge').should('have.text', '2');
    cy.wait(pausaEvidencia);
    cy.get('.shopping_cart_link').click();

    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 2);
    this.datos.productos.forEach((producto) => {
      cy.contains('.inventory_item_name', producto).should('be.visible');
    });
    cy.wait(pausaEvidencia);

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(this.datos.cliente.nombre);
    cy.get('[data-test="lastName"]').type(this.datos.cliente.apellido);
    cy.get('[data-test="postalCode"]').type(this.datos.cliente.codigoPostal);
    cy.wait(pausaEvidencia);
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.summary_total_label').should('be.visible');
    cy.wait(pausaEvidencia);
    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    cy.wait(1800);
  });
});

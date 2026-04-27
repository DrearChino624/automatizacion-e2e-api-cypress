describe('API Swagger Petstore - usuario', () => {
  const baseApi = 'https://petstore.swagger.io/v2';
  const pausaEvidencia = 900;
  const usuario = {
    id: Date.now(),
    username: `mateo_test_${Date.now()}`,
    firstName: 'Mateo',
    lastName: 'Perez',
    email: 'mateo.prueba@example.com',
    password: 'Clave12345',
    phone: '0999999999',
    userStatus: 1
  };

  it('crea, consulta, actualiza, vuelve a consultar y elimina un usuario', () => {
    cy.request('POST', `${baseApi}/user`, usuario).then((respuestaCrear) => {
      expect(respuestaCrear.status).to.eq(200);
      expect(respuestaCrear.body).to.have.property('message', String(usuario.id));
      cy.writeFile('reports/api-crear-usuario.json', respuestaCrear.body);
    });
    cy.wait(pausaEvidencia);

    cy.request(`${baseApi}/user/${usuario.username}`).then((respuestaBuscar) => {
      expect(respuestaBuscar.status).to.eq(200);
      expect(respuestaBuscar.body.username).to.eq(usuario.username);
      expect(respuestaBuscar.body.email).to.eq(usuario.email);
      cy.writeFile('reports/api-buscar-usuario.json', respuestaBuscar.body);
    });
    cy.wait(pausaEvidencia);

    const usuarioActualizado = {
      ...usuario,
      firstName: 'Mateo Andres',
      email: 'mateo.actualizado@example.com'
    };

    cy.request('PUT', `${baseApi}/user/${usuario.username}`, usuarioActualizado).then((respuestaActualizar) => {
      expect(respuestaActualizar.status).to.eq(200);
      expect(respuestaActualizar.body).to.have.property('message', String(usuario.id));
      cy.writeFile('reports/api-actualizar-usuario.json', respuestaActualizar.body);
    });
    cy.wait(pausaEvidencia);

    cy.request(`${baseApi}/user/${usuario.username}`).then((respuestaBuscarActualizado) => {
      expect(respuestaBuscarActualizado.status).to.eq(200);
      expect(respuestaBuscarActualizado.body.firstName).to.eq('Mateo Andres');
      expect(respuestaBuscarActualizado.body.email).to.eq('mateo.actualizado@example.com');
      cy.writeFile('reports/api-buscar-usuario-actualizado.json', respuestaBuscarActualizado.body);
    });
    cy.wait(pausaEvidencia);

    cy.request('DELETE', `${baseApi}/user/${usuario.username}`).then((respuestaEliminar) => {
      expect(respuestaEliminar.status).to.eq(200);
      expect(respuestaEliminar.body.message).to.eq(usuario.username);
      cy.writeFile('reports/api-eliminar-usuario.json', respuestaEliminar.body);
    });
  });
});

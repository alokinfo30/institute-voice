describe('Shell app basic', () => {
  it('loads the homepage', () => {
    cy.visit('/');
    cy.contains('Welcome back');
  });
});

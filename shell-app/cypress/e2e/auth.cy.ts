describe('Shell App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate through the authentication flow', () => {
    // Check we're on the login page
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');

    // Try logging in
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // Should redirect to dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');

    // Check dashboard elements
    cy.contains('Courses Enrolled').should('be.visible');
    cy.contains('Videos Watched').should('be.visible');
    cy.contains('Recent Activities').should('be.visible');
    cy.contains('Quick Actions').should('be.visible');
  });

  it('should show validation errors on login form', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
});
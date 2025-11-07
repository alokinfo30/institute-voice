import { test, expect } from '@playwright/test';

test.describe('Shell App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should handle authentication flow', async ({ page }) => {
    // Login form should be visible
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();

    // Fill in credentials and submit
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/password/i).fill('password123');
    await page.getByRole('button', { name: /sign in/i }).click();

    // Should navigate to dashboard
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByText(/welcome back/i)).toBeVisible();

    // Check dashboard components
    await expect(page.getByText('Recent Activities')).toBeVisible();
    await expect(page.getByText('Quick Actions')).toBeVisible();
  });

  test('should validate login form', async ({ page }) => {
    // Submit empty form
    await page.getByRole('button', { name: /sign in/i }).click();

    // Should show validation errors
    await expect(page.getByText(/email is required/i)).toBeVisible();
    await expect(page.getByText(/password is required/i)).toBeVisible();
  });
});
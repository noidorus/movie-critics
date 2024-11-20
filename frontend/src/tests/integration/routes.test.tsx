import { test, expect } from '@playwright/test';

test('Если нажать на кнопку регистрации, то перенесет на страницу регистрации', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByRole('button', { name: 'Зарегистрироваться' }).click();
    await page.waitForURL('http://localhost:5173/register');

    expect(page.url()).toBe('http://localhost:5173/register');
});

test('Если нажать на кнопку логина, то перенесет на страницу авторизации', async ({ page }) => {
    await page.goto('http://localhost:5173/register');

    await page.getByRole('button', { name: 'Войти в аккаунт' }).click();
    await page.waitForURL('http://localhost:5173/login');

    expect(page.url()).toBe('http://localhost:5173/login');
});

test('Если нажать на кнопку подборок, то перенесет на страницу подборок', async ({ page }) => {
    await page.goto('http://localhost:5173/movies');

    await page.getByRole('link', { name: 'Подборки' }).click();
    await page.waitForURL('http://localhost:5173/collections');

    expect(page.url()).toBe('http://localhost:5173/collections');
});
import { test, expect } from '@playwright/test';

const loginURL = 'http://localhost:5173/login';

test('Если ввести некорректное имя пользователя, то появится ошибка', async ({ page }) => {
    await page.goto(loginURL);

    await page.getByPlaceholder('Имя').fill(' ');
    await page.getByPlaceholder('*********').fill('Password-123');

    await page.getByRole('button', { name: 'Войти' }).click();

    const toast = await page.locator('.p-toast-message');
    await expect(toast).toHaveText(
        'Ошибка валидацииИмя пользователя должно быть длиннее или равно 6 символам',
    );
});

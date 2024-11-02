import zod from 'zod';

export const authSchema = zod.object({
    login: zod
        .string()
        .min(6, 'Имя пользователя должно быть длиннее или равно 6 символам')
        .max(20, 'Имя пользователя не должно превышать 20 символов')
        .regex(/^[0-9A-Za-z]{6,20}$/, 'Имя пользователя должно содержать только английские буквы и цифры'),
    email: zod.string().email('Введите корректную почту').optional(),
    password: zod.string().min(1, 'Введите пароль'),
});

import { useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { logoutUser } from '@/app/store/Auth/authThunks';
import { selectUser } from '@/app/store/Auth/authSelectors';
import { LinkType } from '@/app/types/LinkType';

export const useHeader = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = useCallback(async () => {
        await dispatch(logoutUser());
    }, [dispatch]);

    const leftLinks: LinkType[] = [
        { to: '/movies', label: 'Фильмы', key: 'movies' },
        { to: '/collections', label: 'Подборки', key: 'collections' },
    ];

    const rightLinks: LinkType[] = user
        ? [
              { to: '/collections/my', label: 'Мои подборки', key: 'collections/my' },
              { to: '/login', key: 'logout', label: 'Выйти', onClick: handleLogout },
          ]
        : [{ to: '/login', key: 'login', label: 'Войти' }];

    return useMemo(
        () => ({ leftLinks, rightLinks, isMenuOpen, toggleMenu }),
        [leftLinks, rightLinks, isMenuOpen, toggleMenu],
    );
};

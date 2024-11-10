import React from 'react';
import Header from '@/components/Header/Header';

type DefaultPageLayoutProps = {
    children: React.ReactNode;
    activeTab?: string;
};

const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({ children, activeTab }) => {
    return (
        <>
            <header>
                <Header activeTab={activeTab} />
            </header>
            <main>{children}</main>
        </>
    );
};

export default DefaultPageLayout;

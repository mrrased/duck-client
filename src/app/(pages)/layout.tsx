import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="page-root" >
            <NavigationBar />
            <div className='body-size'>
                { children }
            </div>
        </div>
    );
};

export default HomeLayout;
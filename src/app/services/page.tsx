import ServiceSection from '@/components/Service/ServiceSection';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import React from 'react';

const page = () => {
    return (
        <div className='page-root'>
            <NavigationBar />
            <h1>service page</h1>
            <ServiceSection />
        </div>
    );
};

export default page;
import React from 'react';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';

const index = () => {
    return (
        <div className="page-root " >
            <NavigationBar/>
            <p>Product</p>
        </div>
    );
};

export default React.memo(index);
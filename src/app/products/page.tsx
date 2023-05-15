import React from 'react';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import ProductSection from '@/components/Product/ProductSection';
import bird from './../../assets/logo.png';
import building from './../../assets/building.png';
import erp from './../../assets/erp.png';

const index = () => {
    return (
        <div className="page-root" >
            <NavigationBar />
            <p>Product</p>
            <div className='body-size'>
                <ProductSection
                    title='Our very own inception for order automation'
                    subHSide='t'
                    subHead='DUCK-FUSION'
                    textBody={['State of the art solution for automation of orders via APi, client & supplier management, Billing, Shopping cart, Blog, Live Chat and Support tickets all under one dashboard.']}
                    imgUrl={bird}
                    imgSide='r'
                    bt='Getting Started'
                />

                <div className='my-10' ></div>
                <ProductSection
                    title='APi Automation'
                    subHSide='b'
                    subHead='for fast Order Processing'
                    textBody={['Dhru Fusion is an all-in-one client & supplier management, Billing, Shopping cart, Blog,Support solution for online businesses. It is an ultimate solution for Your Suppliers API Connection, so you are in control with a very powerful business automation tool. Easy to Use - Simple & Intuitive Interface, Fast Loading, Quick Setup & Efficient Support .']}
                    textList={['Send orders directly to your supplier and return code', 'Supports over 50+ supplier worldwide', 'You can provide APi for your own site to clients', 'We provide full APi documentation with examples']}
                    imgUrl={building}
                    imgSide='l'
                />

                <div className='my-10' ></div>
                <ProductSection
                    title='Complex made simple'
                    subHSide='b'
                    subHead='Grow Your Business with our PRO-efficient Products'
                    textBody={['Using our resourceful and intelligent management tools you can automate your complex workflow and save time to invest in taking your business to a whole new level.']}
                    imgUrl={erp}
                    imgSide='r'
                />
                <ProductSection
                    title='Ingenius Utilities'
                    subHSide='b'
                    subHead=''
                    textBody={['Keeping in mind the increasing Service Standards.and many more utilities so you do not have to rely on any other resources. . we provide in-built features like']}
                    textList={['Mass mail', 'SMS', 'News letter', 'System Cleanup', 'Database Backup', 'IP Manager', 'SEO Functions', 'Import Script']}
                    imgUrl={erp}
                    imgSide='l'
                />
            </div>
        </div>
    );
};

export default React.memo(index);
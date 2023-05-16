import React from 'react';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import ProductSection from '@/components/Product/ProductSection';
import bird from './../../assets/logo.png';
import building from './../../assets/building.png';
import security from './../../assets/security1.jpg';
import erp from './../../assets/erp.png';
import support from './../../assets/support1.jpg';
import api from './../../assets/api.jpg';

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
                    imgUrl={api}
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
                <ProductSection
                    title='Supporting your client'
                    sTitle='Multiple Currency and Language'
                    subHSide='b'
                    subHead=''
                    textBody={['Built-in Support ticket and live help system, Knowledge base and blogs to support your clients efficiently.']}
                    sTextBody={['Manage your international clientele with Dhru Fusion’s easy to use multi currency and language setup in just a few clicks.']}
                    imgUrl={support}
                    imgSide='r'
                />
                <ProductSection
                    title='Security First'
                    subHSide='b'
                    subHead=''
                    textBody={[]}
                    textList={[
                        'With over a decade of experience we have innovated numerous security measures considering the increasing needs of the industry.',
                        'We provide Client side fraud protection that analyses client profiles based on their KYC, Fraud Cage check and binds them to a particular payment gateway forcing them to pay securely without any fraudulent activity.',
                        'You can define staff access and control what aspects of the management panel is accessed by them, which allows YOU to always be in control of your business.'
                    ]}
                    imgUrl={security}
                    imgSide='l'
                />
            </div>
        </div>
    );
};

export default React.memo(index);
import Image from 'next/image';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import logo from './../assets/box.png'
import HomeSection from '@/components/home/HomeSection';
import bird from './../assets/logo.png';
import building from './../assets/building.png';
import fusion from './../assets/fusion.png';
import ecomm from './../assets/ecommerce.png';
import erp from './../assets/erp.png';


export default function Home() {

  //
    

  return (
    <main className="page-root  ">
      <NavigationBar/>
      <div className='body-size' >

        <HomeSection
            title='Complex made simple'
            subHead='Grow Your Business with our PRO-efficient Products'
            textBody={['Using our resourceful and intelligent management tools you can automate your complex workflow and save time to invest in taking your business to a whole new level.']}
            imgUrl={bird}
            imgSide='r'
        />

        <div className='my-10' ></div>
        <HomeSection
            title='Duck Fusion'
            subHead='Our very own inception for order automation'
            textBody={['State of the art solution for automation of orders via API, client & supplier management, Billing, Shopping cart, Blog, Live Chat and Support tickets all under one dashboard.']}
            imgUrl={fusion}
            imgSide='l'
        />

        <div className='my-10' ></div>
        <HomeSection
            title='Duck ERP'
            subHead='An ideal solution for Retail store, Restaurant and Service centers'
            textBody={['Ecosystem ERP designed specially by recognizing the demanding needs of the upcoming, small and midsize enterprises.', 'Our cloud-based ERP solution helps you manage all your business needs from accounting, CRM, Point Of Sale to Supply chain management, advanced inventory management , support/service Tickets and Intuitive & precise Reports']}
            imgUrl={erp}
            imgSide='r'
        />
        
        <div className='my-10' ></div>
        <HomeSection
            title='Duck Ecommerce'
            subHead='Secure & Powerful'
            textBody={["Hosted solution built on Dhru's Robust Framework.", 'Packed with amazing security measures, optimized performance and flexibility to customize all your out of the box needs.']}
            imgUrl={ecomm}
            imgSide='l'
        />


        {/* https://www.dhru.com/ */}

      </div>
    </main>
  )
}


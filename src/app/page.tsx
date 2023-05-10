import Image from 'next/image';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import logo from './../assets/box.png'
import HomeSection from '@/components/home/HomeSection';
import bird from './../assets/logo.png'


export default function Home() {
  return (
    <main className="page-root  ">
      <NavigationBar/>
      <div className='body-size ' >

        <HomeSection
            title='Complex made simple'
            subHead='Grow Your Business with our PRO-efficient Products'
            textBody='Using our resourceful and intelligent management tools you can automate your complex workflow and save time to invest in taking your business to a whole new level.'
            imgUrl={bird}
            imgSide='r'
        />
        <HomeSection
            title='Complex made simple'
            subHead='Grow Your Business with our PRO-efficient Products'
            textBody='Using our resourceful and intelligent management tools you can automate your complex workflow and save time to invest in taking your business to a whole new level.'
            imgUrl={bird}
            imgSide='l'
        />


      </div>
    </main>
  )
}


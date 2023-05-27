import ConatctSection from '@/components/Contact/ConatctSection';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';


const page = () => {
    return (
        <div className='page-root'>
            <NavigationBar />
            <h1>Contact</h1>
            <ConatctSection />
        </div>
    );
};

export default page;






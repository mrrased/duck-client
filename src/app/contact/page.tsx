import ConatctSection from '@/components/Contact/ConatctSection';
import NavigationBar from '@/components/shared/navigationBar/NavigationBar';



//Create Form Type 
// interface formT {
//     name: string,
//     email: string,
//     subject: string,
//     text: string,
//     message: string,
// }

const page = () => {
    // const [inputValue, setInputValue] = React.useState<formT>({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     text: "",
    //     message: ""
    // })

    // Handle Change Function 
    // const InputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     // setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    // }

    // // Form Handling Area
    // const HandleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    //     e.preventDefault();
    //     console.log('handle submit value');
    // }

    return (
        <div className='page-root'>
            <NavigationBar />
            <h1>Contact</h1>
            {/* <form  className='mt-10'>
                <input type="name" placeholder='Your Name'   className='w-96 p-3 rounded-md transition focus:outline-none focus:duration-500 focus:border focus:border-black' required /><br /><br />
                <input type="email" placeholder='Email'  className='w-96 p-3 rounded-md transition focus:outline-none focus:duration-500 focus:border focus:border-black' required /><br /><br />
                <input type="text" placeholder='Subject'  className='w-96 p-3 rounded-md transition focus:outline-none focus:duration-500 focus:border focus:border-black' required /><br /><br />
                <textarea name="message" id="" rows={4} placeholder='Message'  className='w-96 p-3 rounded-md transition focus:outline-none duration-600 focus:border focus:border-black' required ></textarea><br /><br />
                <input type="submit" value="send" className='px-6 py-3 bg-[#00c5f2] uppercase text-white cursor-pointer transition duration-600 focus:border focus:border-black hover:underline' required />
            </form> */}
            <ConatctSection />
        </div>
    );
};

export default page;






import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface HomeSectionTy {
    title: string,
    subHead:string,
    textBody: string[],
    imgUrl: StaticImageData,
    imgSide?: 'r' | 'l',
}

const HomeSection = ({ title, subHead, textBody, imgUrl, imgSide }:HomeSectionTy) => {
    return (
        <div className='py-4 px-2' >
            <div className={`flex items-center ${imgSide ? imgSide==='l' ? 'flex-row-reverse' :'' : ''}`} >
                <div className='w-1/2' >
                    <h1 className='text-3xl font-bold mb-3 ' >{title}</h1>
                    <h4 className='text-xl font-semibold mb-3' >{subHead}</h4>
                    { textBody.length ? textBody.map((each, i)=>(<p key={i} className=' text-justify' >{each}</p>)) : null}
                </div>
                <div className='w-1/2 flex justify-around items-center' >
                    <Image
                        width={450}
                        src={imgUrl}
                        alt="body section picture"
                    />
                </div>

            </div>
        </div>
    );
};

export default React.memo(HomeSection);
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HomeSectionTy {
    title: string,
    sTitle?: string,
    sTextBody?: string[],
    subHSide: 't' | 'b',
    subHead?: string,
    textBody: string[],
    textList?: string[],
    imgUrl: StaticImageData,
    imgSide?: 'r' | 'l',
    bt?: string,
}

const ProductSection = ({ title, subHead, textBody, imgUrl, imgSide, subHSide, textList, bt, sTitle, sTextBody }: HomeSectionTy) => {
    return (
        <div className='py-4 px-2'>
            <div className={`flex items-center ${imgSide ? imgSide === 'l' ? 'flex-row-reverse' : '' : ''}`} >
                <div className='w-1/2' >
                    <h4 className={`text-xl font-semibold mb-3 ${subHead ? subHSide === 't' ? 'block' : 'hidden' : ''}`} >{subHead}</h4>
                    <h1 className='text-3xl font-bold mb-3 ' >{title}</h1>
                    <h4 className={`text-xl font-semibold mb-3 ${subHead ? subHSide === 'b' ? 'block' : 'hidden' : ''}`} >{subHead}</h4>
                    {textBody.length ? textBody.map((each, i) => (<p key={i} className=' text-justify' >{each}</p>)) : null}
                    {textList ? textList.map((list, i) => <li key={i}>{list}</li>) : null}
                    <button className={`${bt ? 'px-6 py-2.5 mt-3 bg-[#00c5f2] text-white rounded-full hover:rounded-none transition duration-700' : "hidden"}`}>{bt}</button>
                    <h1 className='text-3xl font-bold mb-3 mt-5'>{sTitle}</h1>
                    <p className={`text-justify ${sTextBody ? 'block' : 'hidden'}`} >{sTextBody}</p>
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

export default ProductSection;
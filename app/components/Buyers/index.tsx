import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/advan_first.svg',
        heading: "SAFETY FIRST",
        subheading: "타고가는 안전을 최우선으로 합니다. \n 불편사항 접수 즉시 점검을 진행합니다.",
    },
    {
        imgSrc: '/assets/buyers/advan_second.svg',
        heading: "3 FREE",
        subheading: "잠금해제비, 보험부담금, 할증료가 없습니다. \n 부가적인 요금없이 이용시간에 따른 비용만으로 \n 라이더님들의 부담을 줄이도록 노력하겠습니다.",
    },
    {
        imgSrc: '/assets/buyers/advan_third.svg',
        heading: "MAGIC RIDER",
        subheading: "가장 가까운 타고가 검색이 가능합니다.\n 배터리 상태를 고려하여 찾기때문에\n라이더님들의 시간을 절약할 수 있습니다.",
    },

]

const Buyers = () => {

    return (
        <>

            <div className="px-6 lg:px-8" id="services">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20">
                    <div className="text-center mt-15">
                        <h3 className="text-2xl font-semibold leading-8 text-tagoga">
                            타고가가 추구하는
                        </h3>
                        <h2 className="text-3xl font-semibold text-navyblue sm:text-3xl lg:text-4xl md:text-4xl lh-54">
                            캠퍼스 모빌리티 서비스 
                        </h2>
                    </div>
                </div>
            </div>

        
            <div className='mx-auto max-w-7xl py-0 px-6'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10'>
                    {cardData.map((items, i) => (
                        <div className='flex flex-col justify-center items-center' key={i}>
                            <div className='flex justify-center  p-2 w-200 rounded-lg'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={200} height={200} />
                            </div>
                            <h2 className='text-xl text-tagoga font-semibold text-center lg:mt-6'>{items.heading}</h2>
                            <p className='text-base font-normal text-black text-center text-opacity-60 mt-2'>{items.subheading}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}



export default Buyers;

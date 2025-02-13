import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/provide_first.svg",
        country: "헬멧을 착용하세요",
        paragraph: '헬멧은 부상 위험을 줄입니다. \n 소중한 당신을 보호해주세요.',

    },
    {
        imgSrc: "/assets/provide/provide_second.svg",
        country: "교통법규를 지켜주세요",
        paragraph: '자전거 도로는 사고를 90% 줄이고, \n 전방 주행에 집중할 수 있습니다.',

    },
    {
        imgSrc: "/assets/provide/provide_third.svg",
        country: "성숙한 주행문화로 즐겨주세요",
        paragraph: '주행에 집중해 사고를 예방하세요. \n 내리막길에서는 속도를 줄이고, \n 날이 어두울 때는 빛이 반사되는 \n 밝은 옷을 입으세요.',

    },
    {
        imgSrc: "/assets/provide/provide_four.svg" ,
        country: "타고가와 함께 \n 캠퍼스 내 \n 라이딩의 즐거움을 \n 느껴보세요",
        paragraph: '',
    },
]


const Provide = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5 order-2 lg:order-1'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-xl font-semibold">{item.country}</h4>
                                    <h4 className='text-sm font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    <div className='col-span-6 flex justify-center order-1 lg:order-2'>
                        <div className="flex flex-col align-middle justify-center p-10 text-center lg:text-left">
                            <h3 className="text-2xl font-semibold leading-8 text-tagoga">
                                라이더 안전을 위한
                            </h3>
                            <h2 className="text-4xl font-semibold text-navyblue sm:text-2xl lg:text-4xl md:text-4xl lh-54">
                                안전수칙
                            </h2>
                            <h4 className="text-base font-normal leading-8">자유롭고 안전하게 주행하세요</h4>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;

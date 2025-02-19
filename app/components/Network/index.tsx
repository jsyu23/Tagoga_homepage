import Image from "next/image";

interface datatype {
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        country: "영남대학교",
        paragraph: 'Since 2021.04',

    },
    {
        country: "대구대학교",
        paragraph: 'Since 2021.05',

    },
    {
        country: "충남대학교",
        paragraph: 'Since 2023.07',

    },
    {
        country: "한국과학기술원",
        paragraph: 'Since 2023.07',

    },
]

const Network = () => {
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-4xl font-semibold text-center my-10 lh-56">
                </h3>

                {/* 모바일에서는 세로, sm 이상에서는 가로 배치 */}
                <div className="grid grid-cols-1 sm:flex sm:items-center sm:gap-8">
                    {/* 지도가 위에 위치 */}
                    <div className="order-1 sm:order-none flex-1">
                        <Image src={'/assets/network/tagoga_map.png'} alt={"map-image"} width={400} height={300} layout="responsive" />
                    </div>
                    
                    {/* 카드 리스트가 아래로 */}
                    <div className="order-2 sm:order-none flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                                    <div className="flex justify-start items-center gap-2">
                                        <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
                                    </div>
                                    <hr />
                                    <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network;


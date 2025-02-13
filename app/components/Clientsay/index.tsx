"use client"; // 클라이언트 컴포넌트로 설정

import Image from "next/image";
import Slider from "react-slick";

interface cardDataType {
    imgSrc: string;
    heading: string;
}

const cardData: cardDataType[] = [
    { imgSrc: "/assets/clientsay/use_first.svg", heading: "위치찾기" },
    { imgSrc: "/assets/clientsay/use_second.svg", heading: "스캔하기" },
    { imgSrc: "/assets/clientsay/use_third.svg", heading: "즐기면끝" },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
};

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-7xl py-40 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-10">
                {/* 제목 섹션 */}
                <div className="col-span-4 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center">
                    <div className="flex flex-col justify-center p-10">
                        <h3 className="text-2xl font-semibold leading-8 text-tagoga lh-56">타고가 이용방법</h3>
                        <h2 className="text-4xl font-semibold text-navyblue sm:text-2xl lg:text-4xl md:text-4xl lh-56">
                            쉬운 사용법
                        </h2>
                    </div>
                </div>

                {/* 카드 리스트 */}
                <div className="col-span-4 lg:col-span-3">
                    {/* 모바일에서는 슬라이드 */}
                    <div className="block lg:hidden">
                        <Slider {...sliderSettings}>
                            {cardData.map((items, i) => (
                                <div key={i} className="flex flex-col justify-center items-center px-4">
                                    {/* 이미지가 가운데 정렬되도록 flex 설정 */}
                                    <div className="flex justify-center items-center p-2 w-full max-w-[500px] rounded-lg">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={400} height={200} />
                                    </div>
                                    <div className="bg-tagoga text-white px-4 py-2 rounded-lg mt-4 text-center">
                                        <h2 className="text-xl font-semibold">{items.heading}</h2>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* 데스크탑에서는 기존 그리드 유지 */}
                    <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
                        {cardData.map((items, i) => (
                            <div className="flex flex-col justify-center items-center" key={i}>
                                {/* 이미지가 가운데 정렬되도록 flex 설정 */}
                                <div className="flex justify-center items-center p-2 w-full max-w-[300px] rounded-lg">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={300} height={200} />
                                </div>
                                <div className="bg-tagoga text-white px-4 py-2 rounded-lg mt-4 text-center">
                                    <h2 className="text-xl font-semibold">{items.heading}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clientsay;
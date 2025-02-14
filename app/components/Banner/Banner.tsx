import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image ">
                    <div className="text-center mt-15">
                        <p className="text-lg leading-8 text-bluegray">
                            문화를 만드는 이동수단, 대학교 필수 어플
                        </p>
                        <h1 className="text-3xl font-semibold text-navyblue sm:text-4xl  lg:text-7xl md:4px lh-96">
                            캠퍼스 모빌리티 서비스 
                        </h1>
                    </div>

                    <Image src={'/assets/banner/tagoga.svg'} alt="banner-image" width={700} height={400} className="mt-10 mx-auto"/>
                </div>
            </div>
        </main>
    )
}

export default Banner;

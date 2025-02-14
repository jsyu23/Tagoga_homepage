import Image from "next/image";
import Link from "next/link";

interface datatype {
    service: string;
    ment: string;
    mail: string;
    telephone: string;
}

const Aboutdata: datatype[] = [
    {
        service: "고객센터",
        ment: "운영시간 평일 09:00 ~18:00 \n 타고가 어플내 신고하기 운영 중 ",
        mail: 'tagoga_cs@dgood.co.kr',
        telephone: '1811-0681',

    },
    {
        service: "광고 및 사업제휴",
        ment: "경상북도 경산시 압량읍 대학로70길 8",
        mail: 'tagoga_b2b@dgood.co.kr',
        telephone: '1811-0681',
    }
]


const Contact = () => {
    return (
        <div id="contact">
            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-8'>
                    <div className='grid grid-cols-1 px-4 py-6 sm:grid-cols-2 gap-x-8 gap-y-10 sm:px-12 py-16 rounded-3xl'>
                        {Aboutdata.map((item, i) => (
                            <div key={i}>
                                <div className='bg-bluebg rounded-3xl px-12 py-16 shadow-xl flex flex-col justify-between h-full'>
                                    <div>
                                        <h4 className="text-xl font-semibold break-words whitespace-pre-line">
                                            {item.service}
                                        </h4>
                                    </div>
                                    <div className="flex gap-2 mt-6">
                                        <h4 className="text-base font-normal min-h-[56px] break-words whitespace-pre-line">
                                            {item.ment}
                                        </h4>
                                    </div>
                                
                                    <div>
                                        <div className="flex gap-2 mt-4">
                                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                                            <h5 className="text-base font-normal text-black">{item.mail}</h5>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                                            <h5 className="text-base font-normal text-black">{item.telephone}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;

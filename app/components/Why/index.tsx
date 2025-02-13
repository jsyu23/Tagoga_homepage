"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Why = () => {
  const [showBackground, setShowBackground] = useState(true);
  const [marginBottom, setMarginBottom] = useState("200px");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkWindowSize = () => {
      setScreenWidth(window.innerWidth); // Update screen width

      // 창 너비가 1024px 미만이면 모바일로 판단
      if (window.innerWidth < 1024) {
        setShowBackground(false);
        setMarginBottom("500px"); // 모바일: marginBottom을 500px로 증가
      } else {
        setShowBackground(true);
        setMarginBottom("200px");
      }
    };

    // 컴포넌트가 마운트될 때 한 번 체크
    checkWindowSize();

    // 창 크기 변경 시마다 체크
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <div id="about">
      <div
        className="relative w-full"
        style={{
          height: "calc(max(300px, 100vw / 5.27))", // 최소 300px를 보장하면서 반응형 크기 적용
          backgroundImage: showBackground
            ? "url('/assets/why/why_bg.png')"
            : "none",
          backgroundSize: "contain",
          backgroundPosition: "center",
          transform: "translateY(100px)", // 배경 이미지를 아래로 100px 이동
          marginBottom: marginBottom, // 창 크기에 따른 marginBottom 적용
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          style={{
            transform: "translateY(-20px)", // 콘텐츠를 위로 20px 이동
          }}
        >
          {/* TEXT CONTENT */}
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-block bg-white p-2">
              <h3 className="text-3xl font-semibold sm:text-4xl md:text-4xl lg:text-5xl ">
                타고가를 다운받고
              </h3>
            </div>
            <div className="inline-block bg-white p-2">
              <h3 className="text-3xl font-semibold sm:text-4xl md:text-4xl lg:text-5xl ">
                즐겁고 안전하게
              </h3>
            </div>
            <div className="inline-block bg-white p-2">
              <h3 className="text-3xl font-semibold sm:text-4xl md:text-4xl lg:text-5xl ">
                {screenWidth <= 640 ? "라이딩을 즐겨보세요" : "대학생활의 라이딩을 즐겨보세요"}
              </h3>
            </div>

            {/* App Store & Google Play Buttons */}
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <Image
                src="/assets/why/appstore.png"
                alt="App Store"
                width={120}
                height={50}
              />
              <Image
                src="/assets/why/googleplay.png"
                alt="Google Play"
                width={120}
                height={50}
              />
            </div>
          </div>

          {/* PHONE IMAGE WITH QR CODE */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/assets/why/qrcode.png"
              alt="Phone"
              width={200}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
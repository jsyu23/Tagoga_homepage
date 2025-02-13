"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Why = () => {
  const [showBackground, setShowBackground] = useState(true);
  const [marginBottom, setMarginBottom] = useState("200px");
  const [screenWidth, setScreenWidth] = useState(0); // 초기값 설정

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkWindowSize = () => {
        const width = window.innerWidth;
        setScreenWidth(width);

        if (width < 1024) {
          setShowBackground(false);
          setMarginBottom("500px");
        } else {
          setShowBackground(true);
          setMarginBottom("200px");
        }
      };

      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => window.removeEventListener("resize", checkWindowSize);
    }
  }, []);

  return (
    <div id="about">
      <div
        className="relative w-full"
        style={{
          height: "calc(max(300px, 100vw / 5.27))",
          backgroundImage: showBackground ? "url('/assets/why/why_bg.png')" : "none",
          backgroundSize: "contain",
          backgroundPosition: "center",
          transform: "translateY(100px)",
          marginBottom: marginBottom,
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          style={{ transform: "translateY(-20px)" }}
        >
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
                {screenWidth > 0 && screenWidth <= 640 ? "라이딩을 즐겨보세요" : "대학생활의 라이딩을 즐겨보세요"}
              </h3>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <Image src="/assets/why/appstore.png" alt="App Store" width={120} height={50} />
              <Image src="/assets/why/googleplay.png" alt="Google Play" width={120} height={50} />
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <Image src="/assets/why/qrcode.png" alt="Phone" width={200} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
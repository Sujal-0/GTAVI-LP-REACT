import React, { use, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = React.useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.7,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      x: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full bg-black scale-[1.6] rotate-[-10deg]">
          <div className="landing w-full h-screen bg-black overflow-hidden relative">
            <div className="navbar absolute z-[10] top-0 left-0 w-full py-10 px-10">
              <div className="logo flex gap-4">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-12 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white">Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="sky absolute top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[20deg]"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[-2deg]"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute flex flex-col left-1/2 top-20 -translate-x-1/2 gap-2 text-white scale-[2] rotate-[-10deg]">
                <h1 className="text-9xl -ml-40 leading-none">grand</h1>
                <h1 className="text-9xl -ml-10 leading-none">theft</h1>
                <h1 className="text-9xl -ml-40 leading-none">auto</h1>
              </div>

              <img
                className="character absolute -bottom-[100%] scale-[2] rotate-[-15deg] left-1/2 -translate-x-1/2 "
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="ri-arrow-down-line"></i>
                <h3>Scroll Down</h3>
              </div>
              <img
                className="absolute h-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex justify-center items-center bg-black">
            <div className="cntr w-full h-[80%] flex text-white">
              <div className="limage relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.7] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-20">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque.
                  Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum.
                </p>
                <p className="mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur vero beatae exercitationem quod.
                </p>
                <p className="mt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio aliquid laboriosam ullam corporis quaerat
                  laudantium eius consequatur sint, sequi eaque placeat
                  voluptatibus quibusdam doloremque, delectus quo voluptates,
                  blanditiis dolores unde.
                </p>
                <button className="bg-yellow-500 px-7 py-7 text-2xl mt-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 text-black">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

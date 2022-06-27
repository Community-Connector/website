/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import Navbar from "components/Navbars/navbar"
import Footersmall from "components/Footers/FooterSmall"

export default function Index() {
  return (
    <>
      <Navbar fixed />
      <section className="header relative pt-16 ml-6 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center justify-centerflex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-semibold text-5xl text-back">
                Community Connector
              </h1>
              <h3 className="mt-4 text-2xl leading-relaxed text-black">
                It's about giving now. 

              </h3>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 sm:w-6/12  sm:mt-0 w-10/12 max-h-860-px"
          src="/img/com_home.png"
          alt="..."
        />
      </section>

            <section className="mt-48 md:mt-40 pb-40 relative bg-orange-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 bg-orange-200"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden bg-orange-200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"shit 
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/com_logo.png"
                  className="w-4 align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px "
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Connecting people to create a better community
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    It's About Giving Now
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Mission
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        At Community Connector we wish to bring the world together, and provide assistance to those who are not as fortunate.   
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Who we are
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Quick about note. note does it look better as a colomn or a row?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </div>

        </div>

      <div>
      <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Current Fundraiser
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Short description of current fundraiser. Reminder to add image to the right in the next div below. also change href in link below
              </p>
              
              <a
                href="comconnecter.org"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Donate{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              
              </div>
            </div>
          </div>
      </div>

      <div>
        
      </div>

        
      </section>
      
     <Footersmall />
    </>
  );
}

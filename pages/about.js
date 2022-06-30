import React from "react";
import ReactDOM  from "react-dom";
import Link from "next/link";
import PageChange from "components/PageChange/PageChange.js";


import Navbar from "components/Navbars/navbar.js";
import FooterSmall from "components/Footers/FooterSmall";
import { auto } from "@popperjs/core";


export default function About() {
    return (
        <>
        
        <Navbar fixed />
        <section >
       
            <div className="pt-12 pb-16 mb-5 bg-blueGray-200">
                <h1 className="text-5xl text-center pt-2 pb-20 ">About</h1>
            </div>

            <div>
            <section className="pt-20 mt-20">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-orange-200 w-full mb-6 shadow-xl -mt-64 mx-auto" style={{width: '90%'}}>
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Community Connector was created to offset and provide assistance to struggling families in the community during the peak of Covid-19 in 2020.
                  </h3>
                  
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Founded by two high school students in the Bay Area, through Community Connector we have delivered groceries to people all around the Bay and have fundraised over $25k for global campaigns. We hope to continue our efforts with your help!
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>


  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Team</h2>
      </div> 


      <div class="grid grid-cols-4 grid-flow-col gap-4">
          <div class="grid text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full w-1/2" src="img/aalyan.jpeg" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Aalyan Aamir</a>
              </h3>
              <p>Co-founder</p>
              
          </div>
          <div class="grid text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full w-1/2" src="img/kumel.png"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Kumel Hasni</a>
              </h3>
              <p>Co-founder</p>
              
          </div>
          <div class="grid text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full w-1/2" src="img/zack.jpeg"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Zack Ghanbari</a>
              </h3>
              <p>Co-director of Technology</p>
              
          </div>
          <div class="grid text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full w-1/2" src="img/alir.jpeg"/>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Ali Rastegar</a>
              </h3>
              <p>Co-director of Technology</p>
              
          </div>     
          
      </div>  
  </div>
</section>


            <FooterSmall />
        </>
    )
}
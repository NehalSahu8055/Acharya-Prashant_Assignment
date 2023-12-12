import React from "react";

export default function Santwandi() {
  return (
    <div>
      <div className="hidden px-4 pt-4 md:block lg:px-8">
        <div className="text-gray-subtitle flex w-full flex-wrap items-baseline justify-start">
          <div className="hover:text-brand-600 mr-1 cursor-pointer text-sm">
            <span className="font-en">Home</span>
          </div>
          <div className="text-gray-subtitle mr-1 px-1">
            <img src="/images/ic_right-angle.svg" alt="" />
          </div>
          <div className="mr-1 text-sm font-medium">
            <span className="font-hi">संतवाणी</span>
          </div>
          <div className="text-gray-subtitle mr-1 hidden px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-2 md:py-4 md:pt-4 lg:px-8">
        <div
          className="text-gray-title py-1.5 text-lg font-semibold md:text-xl lg:py-0 lg:text-2xl"
          id="main-website-header-text"
        >
          <span className="font-hi">संतवाणी</span>
        </div>
      </div>
      <div className="px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="w-full shrink-0 md:w-2/5">
            <div className="aspect-[16/9] w-full">
              <div className="relative h-full w-full overflow-hidden rounded">
                <img
                  className="h-full w-full object-cover"
                  src="images/banner-sarawandi.jpg"
                  alt="Acharya Prashant Signed Acharya Saint Picture with giving blessings pose"
                />
                <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
                <img
                  className="absolute  bottom-1 right-1 h-[3.25rem] object-contain"
                  src="/images/ic_apsignature_hindi.png"
                  alt="Acharya P Name Signature in Hindi Language"
                />
              </div>
            </div>
            <div className="hidden pt-4 md:block">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-gray-title pb-3 text-sm font-medium md:pb-1">
                  <span className="font-en">Share this series</span>
                  <span className="invisible md:visible">:</span>
                </div>
                <div className="w-full px-8 md:-ml-1.5 md:mt-2 md:px-0">
                  <div className="space-lg flex w-full justify-center gap-2 md:justify-start">
                    <div className="social-media-share">
                      <a href="http://facebook.com">
                        <div>
                          <div className="group grid h-8 w-8 place-content-center rounded-full hover:bg-[#3E6FA7]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="34"
                              viewBox="0 0 19 34"
                              className="h-5 w-5"
                            >
                              <g fill="none" fillRule="evenodd">
                                <path d="M0 0h19v34H0z"></path>
                                <path
                                  className="transition group-hover:scale-[80%]  group-hover:fill-white group-hover:stroke-white"
                                  fill="#3E6FA7"
                                  stroke="#3E6FA7"
                                  strokeWidth="1.393"
                                  d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9V33Z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="social-media-share">
                      <a
                        href="http://twitter.com/intent/tweet?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3&amp;text=%0A&amp;hashtags=AcharyaPrashant,VideoSeries,wisdom,spirituality"
                        target="_blank"
                      >
                        <div>
                          <div className="group grid h-8 w-8 place-content-center rounded-full hover:bg-[#08BBEE]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="38"
                              height="34"
                              viewBox="0 0 38 34"
                              className="h-5 w-5"
                            >
                              <g fill="none" fillRule="evenodd">
                                <path d="M0 0h38v34H0z"></path>
                                <path
                                  className="transition group-hover:scale-[80%]  group-hover:fill-white group-hover:stroke-white"
                                  fill="#08BBEE"
                                  d="M5.213 20.363a7.251 7.251 0 0 0 3.634-.251c-3.548-.578-6.262-3.748-6.262-7.572 0-.06 0-.119.002-.178a7.22 7.22 0 0 0 3.551.995c-2.13-1.348-3.553-3.773-3.553-6.542a7.82 7.82 0 0 1 1.05-3.931c3.78 4.663 9.323 7.75 15.572 8.17a8.141 8.141 0 0 1-.175-1.683c0-4.347 3.415-7.871 7.629-7.871 2.201 0 4.184.962 5.577 2.5a11.8 11.8 0 0 0 4.735-1.898A7.398 7.398 0 0 1 33.728 6.4 12.523 12.523 0 0 0 38 5.19a12.884 12.884 0 0 1-3.712 4.008l.002.173-.004.896c0 12.279-9.647 22.233-21.549 22.233-4.329 0-8.36-1.317-11.737-3.584.6.072 1.21.109 1.83.109 3.585 0 6.89-1.24 9.532-3.326-3.384 0-6.193-2.242-7.149-5.336Z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="social-media-share">
                      <a
                        href="https://wa.me/?text=%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
                        data-action="share/whatsapp/share"
                        target="_blank"
                      >
                        <div>
                          <div className="group grid h-8 w-8 place-content-center rounded-full px-1.5 hover:bg-[#06BA27]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="34"
                              viewBox="0 0 32 34"
                              className="h-5 w-5"
                            >
                              <g fill="none" fillRule="evenodd">
                                <path d="M0 0h32v34H0z"></path>
                                <path
                                  className="transition group-hover:scale-[80%]  group-hover:fill-white group-hover:stroke-white"
                                  fill="#06BA27"
                                  d="M15.218 1.019c9.364-.445 17.065 7.145 16.774 16.455-.271 8.685-7.533 15.584-16.24 15.452A15.96 15.96 0 0 1 9.4 31.509l-.524-.249L.208 33l1.534-8.787A15.865 15.865 0 0 1 0 17.013C-.026 8.503 6.698 1.423 15.218 1.02Zm.781 3.098a13.055 13.055 0 0 0-9.205 3.804 12.888 12.888 0 0 0-3.812 9.184c0 1.889.393 3.7 1.17 5.392l.245.504.576 1.125-1.084 5.248 5.147-1.217 1.17.58a12.903 12.903 0 0 0 5.793 1.355 12.94 12.94 0 0 0 9.204-3.804 12.996 12.996 0 0 0 3.813-9.183c0-3.47-1.354-6.731-3.812-9.184a12.947 12.947 0 0 0-9.205-3.804ZM9.985 9.543a1.158 1.158 0 0 1 1.729.269l.075.143 1.304 2.943c.147.331.128.709-.044 1.02l-.098.15-.662.854c-.279.36-.316.854-.09 1.249.788 1.368 3.872 4.104 5.338 4.696.37.15.788.088 1.1-.147l.128-.111.758-.77c.26-.265.628-.386.989-.334l.154.033 3.1.888a1.152 1.152 0 0 1 .654 1.727c-.606.955-1.568 2.12-2.771 2.41-2.121.514-5.38.013-9.447-3.775-3.522-3.28-4.453-6.01-4.233-8.177.125-1.23 1.15-2.338 2.016-3.068Z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="social-media-share">
                      <a
                        href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/courses/series/course-series-eeb9d3"
                        target="_blank"
                      >
                        <div>
                          <div className="group grid h-8 w-8 place-content-center rounded-full px-1.5 hover:bg-[#0A66C2]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="34"
                              viewBox="0 0 35 34"
                              className="h-5 w-5"
                            >
                              <g fill="none" fillRule="evenodd">
                                <path d="M0 0h35v34H0z"></path>
                                <path
                                  className="transition group-hover:scale-[80%]  group-hover:fill-white group-hover:stroke-white"
                                  fill="#0A66C2"
                                  fillRule="nonzero"
                                  d="M3.99 8.956c2.172 0 3.99-1.812 3.99-3.978C7.98 2.812 6.161 1 3.99 1 1.817 1 0 2.812 0 4.978c0 2.166 1.817 3.978 3.99 3.978ZM.665 33h6.65V10.9H.664V33ZM25.71 10.282c-2.926 0-5.143 1.06-6.34 2.696V10.9h-6.649V33h6.65V20.934c0-3.138 1.684-4.553 4.122-4.553 2.128 0 3.857 1.282 3.857 4.022V33H34V19.43c0-5.966-3.812-9.148-8.29-9.148Z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-stretch pt-4 text-sm md:pl-4 md:pt-0 lg:text-lg">
            <div className="text-gray-title text-lg font-medium lg:text-xl">
              <span className="font-hi">संतों की सीख पर आधारित श्रृंखला</span>
            </div>
            <div className="text-gray-subtitle text-justify text-base md:pr-4">
              <div className="md:block">
                <span className="font-hi">
                  जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना
                  को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को
                  शीतलता प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस
                  श्रृंखला में आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू
                  दयाल, सहजोबाई, मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर
                  चर्चा की है। जानिए उनके वचनों की जीवन में सार्थकता को आचार्य
                  प्रशांत के साथ इस आसान वीडियो कोर्स में।
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png"
import project3 from "../assets/images/project-3.png"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Frogchain",
      live_link: "frogchain.vercel.app",
    },
    {
      img: project2,
      name: "MyFitPrint",
      github_link: "https://github.com/Akshay-pro/myfithealth",
      live_link: "https://myfithealth.vercel.app/",
    },
    {
      img: project3,
      name: "MyECart",
      github_link: "https://github.com/Akshay-pro/My-Ecart",
      live_link: "https://my-ecart.vercel.app/",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-4xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    {
                      project_info.github_link ? 
                        <a
                        href={project_info?.github_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                        >
                          Github
                        </a>
                      : ""
                    }
                    
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;

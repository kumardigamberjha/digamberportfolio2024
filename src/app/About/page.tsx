import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="">
          <p className="text-white text-base font-normal mb-8">
            In January 2024, joined Docladder Digital as a Full Stack Developer, focusing on developing innovative solutions and enhancements for the platform.
          </p>
          <p className="text-white text-base font-normal mb-8">
            Successfully launched Docladder, a comprehensive digital leaderboard platform, and completed the development of a childcare app with features like appointment scheduling and parent communication.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://docladderdigital.com/" target="__blank" >
              <Image
                src="/images/joineddd.png" // Update this to an image of Docladder or similar
                alt="Docladder Digital"
                width={500}
                height={500}
                className="rounded-lg p-4 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <Image
              src="/images/appdev.png" // Update this to an image of the childcare app
              alt="Childcare App"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/erp.png" // Update this to another relevant image from your projects
              alt="Project Image 1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <a href="https://codingindia.co.in/" target="__blank">
              <Image
                src="/images/proj/web1.png" // Update this to another relevant image from your projects
                alt="Project Image 2"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-white text-base font-normal mb-8">
            Focused on enhancing my expertise in Django and React, leading to the creation of a comprehensive tutorial series for Django Rest Framework and an improved integration tutorial for Django and Next.js.
          </p>
          <p className="text-white text-base font-normal mb-8">
            Developed a Python tutorial series for beginners, emphasizing practical knowledge and problem-solving techniques.
          </p>
          <p className="text-white text-base font-normal mb-8">
            Joined Om Enterprises as a Full Stack Developer in January 2023, contributing to various projects and innovations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/firstjob.png" // Update this to an image related to Django or Next.js tutorials
              alt="Django Tutorial"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/proj/optima.png" // Update this to an image related to Python tutorials or similar
              alt="Python Tutorial"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/proj/si2.png" // Update this to another relevant image from your tutorials
              alt="Tutorial Image 1"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/proj/yt.png" // Update this to another relevant image from your work
              alt="Tutorial Image 2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021-2022",
      content: (
        <div>
          <p className="text-white text-base font-normal mb-8">
            In 2021, took admission in MCA at Apeejay Institute of Management and Engineering Technical Campus, focusing on advanced studies in computer science.
          </p>
          <p className="text-white text-base font-normal mb-8">
            In July 2022, I joined Om Enterprises as an intern Full Stack Developer, where I gained valuable experience and contributed to various projects.
          </p>
          <p className="text-white text-base font-normal mb-8">
            In January 2023, got placed in Om Enterprises as a Full-time Full Stack Developer, working on diverse and challenging projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/mca.png" // Update this to an image relevant to your work at Om Enterprises
              alt="Om Enterprises Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/internship.png" // Update this to another image relevant to your work at Om Enterprises
              alt="Om Enterprises Work"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-white text-base font-normal mb-8">
            Started my YouTube channel named &apos;Coding India&apos;, focusing on providing coding tutorials and insights to help others learn and grow in the tech field.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.youtube.com/@CodinIndia">
              <Image
                src="/images/codingindia.png" // Update this to an image related to your YouTube channel
                alt="Coding India YouTube Channel"
                width={500}
                height={500}
                className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://youtube.com/playlist?list=PLba8WBUMIFFk0HdsAR8_gLl8eo4NzPYFV&si=LvLSn4W5x_Bxc7Vi">
              <Image
                src="/images/DjangoTutorial.png" // Update this to another image related to your YouTube content
                alt="YouTube Content"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            {/* Data Science Tutorial */}
            <a href="https://youtube.com/playlist?list=PLba8WBUMIFFljbQ0qeg9LkwMUfvxVCj1Q&si=LoTFilJQYx9mABJP">
              <Image
                src="/images/DataScience.png" // Update this to an image related to educational content
                alt="Education"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            {/* Website Development Tutorial */}
            <a href="https://youtube.com/playlist?list=PLba8WBUMIFFlbWhNQLiTVaxKivmQDIQCQ&si=WUGqyCBUBZzJXd7t">
              <Image
                src="/images/FullStackDevelopmentTutorial.png" // Update this to another image related to your tech content
                alt="Tech Content"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2018-2021",
      content: (
        <div>
          <p className="text-white text-base font-normal mb-8">
            In 2018, I took admission in the BCA program at DAV College, Jalandhar, where I learned my first programming language, C, and began my journey into the world of software development.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/bca.png" // Update this to an image relevant to your work at Om Enterprises
              alt="Om Enterprises Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/clanguage.png" // Update this to another image relevant to your work at Om Enterprises
              alt="Om Enterprises Work"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">

        <Timeline
          data={data}
        />
      </div>
    </div>
  );
}

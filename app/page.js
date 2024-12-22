import Image from "next/image";

export default function Home() {
  const mainPagecard = [
    {
      Image: "/SpeakingClubs.png",
      Heading: "Speaking clubs",
      discription:
        "In our school you will practice your speaking skills and just get a lot of positive emotions!",
    },
    {
      Image: "/QualityControl.png",
      Heading: "Quality control",
      discription:
        "A huge work has been done with the teachers and their work has been monitored thoroughly. ",
    },
    {
      Image: "/Progress.png",
      Heading: "Progress analysis",
      discription:
        "The CEF of Reference has been used at our school. It allows to control our students’ success in studying.",
    },
  ];
  const Teachers = [
    {
      Image: "/Haward.png",
      name: "Christian Howard",
      language: "Italian teacher",
    },
    {
      Image: "/wilson.png",
      name: "Sandra Wilson",
      language: "Spanish teacher",
    },
    {
      Image: "/Cooper.png",
      name: "Jimmy Cooper",
      language: "English teacher",
    },
  ];

  return (
    <>
      <main className="p-3">
        {/*    Hero and Navigation Section  */}
        <section className="p-3 bg-[#FFF5F1]  min-h-[700px] flex flex-col   ">
          <nav className=" flex justify-between">
            <Image src={"/Icon.png"} width={110} height={50} />
            <ul className="flex items-center gap-3">
              <li>Courses</li>
              <li>Aboutv Us</li>
              <li>Teachers</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
            <button className=" border text-blue-700 bg-white rounded-3xl p-3  ">
              Get Started
            </button>
          </nav>
          <div className=" md:flex  justify-end items-center p-3  mt-[10vh] md:mt-0 ">
            <div className=" md:w-[50%]">
              <h2 className=" sm:text-[50px] text-[40px] font-light leading-[52px] ">
                A unique approach to learning foreign languages online
              </h2>
              <p className=" text-[18px] w-[60%] font-light">
                Learn at your own pace, with lifetime access on mobile and
                desktop
              </p>
              <button className=" border text-white  bg-[#524FD5] rounded-3xl py-3  px-7 mt-7  ">
                Get Started
              </button>
            </div>
            <div className=" md:w-[50%] p-10 h-full flex  items-center relative    ">
              <div
                className="bg-[#FFD6B0] 
              md:h-[500px] md:w-[500px] w-[400px] h-[400px]  -rotate-[10deg] 
              rounded-[40px] m-4 z-0  opacity-30  "
              ></div>
              <div
                className="bg-[#FFD6B0] w-[400px] h-[400px] md:w-[500px] md:h-[500px] 
               opacity-80 z-50 absolute rounded-[60px] rotate-[5deg]"
              >
                <Image src={"/Image.png"} width={500} height={500} />
              </div>
            </div>
          </div>
        </section>
        {/*   Middle */}
        <section className=" mt-[10vh]   ">
          <div className="text-center ">
            <p className="text-[18px] text-[#B0B0C0] ">Why choose us </p>
            <h2 className="font-normal text-[48px]">Our values</h2>
          </div>
          <div className=" flex flex-wrap justify-evenly mt-4 ">
            {mainPagecard.map((data, i) => (
              <div
                key={i}
                className="w-[289px] h-[280px] flex justify-center flex-col items-center rounded-2xl gap-5  text-center shadow-2xl p-2"
              >
                <Image src={data.Image} width={80} height={80} />
                <h2 className="text-[24px] font-medium">{data.Heading}</h2>
                <p>{data.discription}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-[10vh]">
          <div className="p-4">
            <p className="text-[#B0B0C0] text-[18px] font-bold">key persons</p>
            <h2 className="text-[48px] font-light">Meet our teachers</h2>
          </div>
          <div className="flex  flex-wrap justify-evenly">
            {Teachers.map((data, i) => (
              <div key={i} className=" gap-5 flex-col  justify-between  ">
                <Image src={data.Image} height={350} width={300} />
                <h2 className="text-[24px] font-medium">{data.name}</h2>
                <p>{data.language}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

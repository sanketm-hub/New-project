import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="lg:max-w-[1080px] xl:max-w-[1140px] 2xl:max-w-[1392px] mx-auto text-center px-5 py-10 md:py-28 md:px-6 lg:py-28
      2xl:py-40 xl:py-0">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-[50px]/[60px] xl:text-[80px]/[90px] 2xl:text-[100px]/[120px] 3xl:text-[128px]/[140px]">
          THE AWARD-WINNING
          <br /> UX DEPARTMENT
        </h1>
        <p className="font-bold text-lg leading-[35px] md:text-xl md:leading-[40px] lg:text-[42] lg:leading-[60px] 2xl:text-[56px] 2xl:leading-[76px]">
          For<span className="text-[#00CE70]"> Healthcare technology</span> Teams
        </p>
      </div>

      <div className="lg:max-w-[1080px] xl:max-w-[1158px] 2xl:max-w-[1392px] mx-auto text-center px-5 pb-10  md:py-10 md:px-6  xl:py-16 xl:px-0">
        <h2 className="font-normal text-base mb-4 md:text-lg md:mb-6 xl:text-[34px] xl:leading-[48px] xl:mb-8">
          We’re a <span className="font-semibold">UX design agency</span> with
            1,500+ healthcare projects under our belt.
            <br className="hidden 2xl:inline"/>We've helped millions of
            patients, clinicians and medical providers experience
             <br className="hidden 2xl:inline"/> simpler, smarter digital care.
        </h2>
        <div className="lg:max-w-[1080px] xl:max-w-[1140px] 2xl:max-w-[1392px] mx-auto">
          <div className="flex flexx-wrap items-center justify-center gap-x-4 gap-y-6 2xl:gap-12 xl:justify-between xl:mx-0">
            <div>
              <Image
                src="/images/forbes.png"
                alt="Forbes Logo"
                width={155.7}
                height={19.43}
                className="w-28 xl:w-[151px]"
                />
            </div>
          </div>
        </div>
        <h2 className=" font-normal text-base md:text-lg xl:text-[34px] xl:leading-[48px] mt-6 lg:mt-10 xl:mt-14">
            Need support with user research, design, usability testing, or UX
            strategy? Let’s talk.
          </h2>
      </div>
    </>
  );
}

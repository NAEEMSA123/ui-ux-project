import Image from "../../public/arrow.png";



const Hero = ()=>{
    return(
        <div className=" pt-4 lg:pt-10">
            <div className=" px-[20px] lg:px-[280px]">
             <h1 className="text-center text-[32px] leading-[40px] font-medium text-[172026] lg:text-[64px] lg:leading-[72px]">Start monitring your website like a pro</h1>
             <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
             Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
             </p>
            
            <div className="flex w-full pt-8 items-center justify-center gap-x-6">
                <button className="bg-[#4328EB] w-1/2 py-4 px-8 mb-2 text-white rounded-[4px] lg:w-fit">Try for free</button>
                <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2  lg:w-fit" >View Pricing
                <span><img src="arrow.png" alt="arrow"/>
                </span>
                </button>
                </div>
            </div>
            <div className="relative h-full w-full justify-center">
               <img src="Gradient.svg" alt="Gradient" className="max-h-[700px] w-full object-cover lg:h-auto  "/>
           
            <div className=" absolute bottom-5 flex h-full w-full flex-col items-center">
            <img src="my.png" alt="" className="ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]" />
            
            <div className="flex w-full  flex-col items-center  lg:container lg:flex-row lg:justify-between lg:px-20 ">
           <p className="text-[#FFFFFF] text-center lg:text-[18px]">Trusted by these companies</p>
           
           <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
            <img src="Vector.png" alt="vector"/>
            <img src="Slack.svg" alt="Slack"/>
            <img src="Trustpilot.svg" alt=""/>
            <img src="CNN.svg" alt="Cnn"/>
            <img src="Clutch.svg" alt="Clutch"/>
            </div>
           </div>
            </div>
            </div>
            </div>
    )
}

export default Hero;
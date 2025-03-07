
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {FaCss3Alt,FaGitAlt,FaReact,FaGithub,FaBootstrap,} from "react-icons/fa";
import {SiJavascript,SiTypescript,SiDotnet,SiFirebase,SiMysql,SiPostgresql,SiTailwindcss} from "react-icons/si";

const techIcons = [
    { Icon: SiJavascript, color: "text-gray-400" },
    { Icon: SiTypescript, color: "text-gray-400" },
    { Icon: FaReact, color: "text-gray-400" },
    { Icon: SiDotnet, color: "text-gray-400" },
    { Icon: FaCss3Alt, color: "text-gray-400" },
    { Icon: SiFirebase, color: "text-gray-400" },
    { Icon: SiMysql, color: "text-gray-400" },
    { Icon: SiPostgresql, color: "text-gray-400" },
    { Icon: SiTailwindcss, color: "text-gray-400" },
    { Icon: FaBootstrap, color: "text-gray-400" },
    { Icon: FaGithub, color: "text-gray-400" },
    { Icon: FaGitAlt, color: "text-gray-400" },
  ];

const TechSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start", 
      dragFree: true, 
    },
    [Autoplay({ delay:800, stopOnInteraction: false })] 
  );

  return (
    <div ref={emblaRef} className="overflow-hidden mt-6 w-[300px] sm:w-[650px] xl:w-[600px]">
    <div className="flex flex-row justify-start items-center  w-full">
      
      {[...techIcons, ...techIcons].map(({ Icon, color }, index) => (
        <div key={index} className="flex-shrink-0 mx-6 w-20  flex justify-center">
          <Icon size={48} className={`${color}`} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default TechSlider;

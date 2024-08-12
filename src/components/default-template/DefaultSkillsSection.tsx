// import { Link } from "react-router-dom";

// import { skills } from "constants/skills";
// import { Section } from "shared/Section";

// export const DefaultSkillsSection = () => {
//   return (
//     <Section id="skills" headingText="Skills">
//       <div className="flex flex-col gap-[40px] w-full">
//         <div className="flex flex-col gap-[30px]">
//           <h3 className="animate-hidden text-xl font-semibold">Experienced with</h3>
//           <div className="grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-4">
//             {skills.experiencedWith.map(({ src, website, text }) => (
//               <div className="animate-hidden flex flex-col gap-[10px]" key={website}>
//                 <Link
//                   className="group flex items-center gap-[8px]"
//                   to={website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img className="block w-[22px] h=[22px] object-cover" src={src} alt={text} />
//                   <span className="text-color2 group-hover:text-color1 group-focus-visible:text-color1 duration-200">
//                     {text}
//                   </span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col gap-[30px]">
         
//           <div className="grid grid-cols-2 w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-4">
          
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// import { Link } from "react-router-dom";
// import { skills } from "constants/skills";
// import { Section } from "shared/Section";

// export const DefaultSkillsSection = () => {
//   return (
//     <div className="py-[60px] rounded-lg shadow-lg">
//       <Section id="skills" headingText="Skills">
//         <div className="flex flex-col gap-[40px] w-full">
//           <div className="flex flex-col gap-[30px]">
//             <h3 className="animate-hidden text-xl font-semibold text-white">Experienced with</h3>
//             <div className="grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-4">
//               {skills.experiencedWith.map(({ src, website, text }) => (
//                 <div
//                   className="animate-hidden flex flex-col gap-[10px] p-[15px] rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                   key={website}
//                 >
//                   <Link
//                     className="group flex items-center gap-[12px] relative"
//                     to={website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       className="block w-[28px] h-[28px] object-cover rounded-full shadow-lg transform transition-transform duration-300 group-hover:rotate-12"
//                       src={src}
//                       alt={text}
//                     />
//                     <span className="text-white group-hover:text-yellow-400 duration-300">
//                       {text}
//                     </span>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// };


import { Link } from "react-router-dom";
import { skills } from "constants/skills";
import { Section } from "shared/Section";

export const DefaultSkillsSection = () => {
  return (
    <div className="py-[60px] rounded-lg shadow-lg">
      <Section id="skills" headingText="Skills">
        <div className="flex flex-col gap-[40px] w-full">
          <div className="flex flex-col gap-[30px]">
            <h3 className="animate-hidden text-xl font-semibold text-white">Experienced with</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-4">
              {skills.experiencedWith.map(({ src, website, text }) => (
                <div
                  className="animate-hidden flex flex-col items-center gap-[10px] p-[20px] rounded-lg backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    backgroundColor: "#0d0c12", // Stronger white background with some transparency
                    backgroundImage: "url('')", // Ensure no background image is overlaying
                    backdropFilter: "blur(10px)",
                    color:'white'
                  }}
                  key={website}
                >
                  <Link
                    className="group flex flex-col items-center gap-[12px] relative"
                    to={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="block w-[40px] h-[40px] object-cover rounded-md"
                      src={src}
                      alt={text}
                    />
                    <span className="text-white group-hover:text-yellow-400 duration-300 text-center">
                      {text}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

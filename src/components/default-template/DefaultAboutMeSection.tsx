import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";
import pic from '../../../images/Rishi.jpg'

export const DefaultAboutMeSection = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
        <Section id="about-me" headingText="Thakoor Rishwanth">

      <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
        <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
          Full Stack Web Developer
        </Typography>
        <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
          {
            "Hello and welcome to my portfolio! \n Passionate about web development and design. My journey in this direction started in 2023."
          }
        </Typography>
        <div className="flex gap-[12px]">
          <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="GitHub" size="large">
              <GithubIcon />
            </IconButton>
          </Link>
        </div>
      </div>

    </Section>
      <div style={{width:'25%', zIndex:"1"}}>
        <img src={pic}  alt="picture"/>
          </div>
      </div>
  );
};

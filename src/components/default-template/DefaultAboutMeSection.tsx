import { Link } from "react-router-dom";
import { IconButton, Button, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";
import pic from '../../../images/Rishi.jpg';

export const DefaultAboutMeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly lg:gap-0 gap-8">
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
          <div className="flex gap-[12px]  items-center">
            <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <IconButton title="GitHub" size="large">
                <GithubIcon />
              </IconButton>
            </Link>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1kIzj-fcX1KeN8TXdRpJ_wYTa_eEMJnWF/view?usp=sharing", "_blank")}
              // size ="large"
            >
              Resume
            </Button>
          </div>
        </div>
      </Section>
      <div className="w-full lg:w-1/4 z-10 flex justify-center">
        <img src={pic} alt="Thakoor Rishwanth" className="w-2/3 sm:w-1/2 lg:w-full h-auto rounded-full" />
      </div>
    </div>
  );
};

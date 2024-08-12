import { projects } from "constants/projects";
import { Section } from "shared/Section";
import { ProjectItem } from "./ProjectItem";

export const DefaultProjectsSection = () => {
  return (
    <Section id="projects" headingText="Projects">
      <div className="grid grid-cols-1 gap-[40px] w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 px-[20px] sm:px-[40px]">
        {projects.map((project) => (
          <ProjectItem key={project.title + project.url} {...project} />
        ))}
      </div>
    </Section>
  );
};
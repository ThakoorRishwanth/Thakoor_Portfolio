
import materialUiIcon from "assets/icons/material-ui.svg";
import reactIcon from "assets/icons/react.svg";

import reduxIcon from "assets/icons/redux.svg";

import tailwindcssIcon from "assets/icons/tailwind-css.svg";

import typescriptIcon from "assets/icons/typescript.svg";
import viteIcon from "assets/icons/vite.svg";


type Skill = {
  src: string;
  website: string;
  text: string;
};

export const skills: {
  experiencedWith: Skill[];
} = {
  experiencedWith: [
    // {
    //   src: nextjsIcon,
    //   website: "https://nextjs.org",
    //   text: "Next.js"
    // },
    {
      src: reactIcon,
      website: "https://reactjs.org",
      text: "React.js"
    },
    // {
    //   src: svelteIcon,
    //   website: "https://svelte.dev",
    //   text: "Svelte"
    // },
    {
      src: typescriptIcon,
      website: "https://www.typescriptlang.org",
      text: "TypeScript"
    },
    {
      src: reduxIcon,
      website: "https://redux-toolkit.js.org",
      text: "Redux Toolkit"
    },
    {
      src: tailwindcssIcon,
      website: "https://tailwindcss.com",
      text: "Tailwind CSS"
    },
    {
      src: materialUiIcon,
      website: "https://mui.com/core/",
      text: "Material UI"
    },
    {
      src: viteIcon,
      website: "https://vitejs.dev",
      text: "Vite"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      text: "HTML"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      text: "CSS"
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-512/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--programming-language-pack-logos-icons-1174940.png?f=webp&w=256",
      website: "https://www.mysql.com",
      text: "SQL"
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp&w=256",
  website: "https://www.mongodb.com",
  text: "MongoDB"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      text: "JavaScript"
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
      website: "https://nodejs.org",
      text: "Node.js"
    },
  ]
};

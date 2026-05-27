import { BiLogoTypescript, BiLogoGraphql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaJava,
  FaCss3Alt,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiGooglecloud,
  SiNextdotjs,
  SiSolidity,
  SiNuxtdotjs,
} from "react-icons/si";
import { GrStatusUnknown } from "react-icons/gr";

export default function IconBox({ icon }) {
  const icons = {
    react: FaReact,
    tailwindcss: SiTailwindcss,
    typescript: BiLogoTypescript,
    graphql: BiLogoGraphql,
    sql: TbSql,
    javascript: RiJavascriptFill,
    python: FaPython,
    docker: FaDocker,
    java: FaJava,
    django: SiDjango,
    "google cloud platform": SiGooglecloud,
    nextjs: SiNextdotjs,
    css: FaCss3Alt,
    solidity: SiSolidity,
    vue: FaVuejs,
    nuxt: SiNuxtdotjs,
  };

  const IconComponent = icons[icon] || GrStatusUnknown;
  const tooltip =
    Object.keys(icons).find((key) => icons[key] === IconComponent) || "Unknown";

  return (
    <div className="group/iconbox size-12 relative">
      <IconComponent size="3em" className="bg-slate-600 rounded-md p-2" />
      <span className="opacity-0 group-hover/iconbox:opacity-100 bg-black-primary text-center border-[2px] border-white rounded-lg px-2 py-1 relative z-10 -top-[5em] transition-all duration-300 capitalize">
        {tooltip}
      </span>
    </div>
  );
}

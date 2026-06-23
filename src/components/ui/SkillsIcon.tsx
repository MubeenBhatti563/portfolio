import TypeScriptIcon from "public/typescript.svg";
import JavaScriptIcon from "public/javascript.svg";
import PythonIcon from "public/python.svg";
import NextJsIcon from "public/next.svg";
import ReactJsIcon from "public/react_dark.svg";
import NestJSIcon from "public/nestjs.svg";
import DjangoIcon from "public/django.svg";
import DockerIcon from "public/docker.svg";
import PrismaIcon from "public/prisma_dark.svg";
import PostgreSQLIcon from "public/postgresql.svg";
import TailwindCSSIcon from "public/tailwindcss.svg";
import BootstrapIcon from "public/bootstrap.svg";
import HTMLIcon from "public/html5.svg";
import CSSIcon from "public/css_old.svg";

export const skillIconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  Python: PythonIcon,
  NextJS: NextJsIcon,
  ReactJS: ReactJsIcon,
  NestJS: NestJSIcon,
  Django: DjangoIcon,
  Docker: DockerIcon,
  Prisma: PrismaIcon,
  PostgreSQL: PostgreSQLIcon,
  TailwindCSS: TailwindCSSIcon,
  Bootstrap: BootstrapIcon,
  HTML5: HTMLIcon,
  CSS: CSSIcon,
};

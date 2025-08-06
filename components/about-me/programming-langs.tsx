import { PROGRAMMING_LANGS } from "@/constants";
import Image from "next/image";

export default function ProgrammingLangs() {
  return (
    <ul className="flex items-center">
      {PROGRAMMING_LANGS.map((lang) => (
        <li className="list-none" key={lang.title}>
          <Image
            title={lang.title}
            alt={lang.title}
            width={28}
            height={28}
            src={lang.logo}
            className="!m-0"
          />
        </li>
      ))}
    </ul>
  );
}

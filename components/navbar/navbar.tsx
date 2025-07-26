import { SITE_CONFIG } from "@/configurations";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import MenuList from "./menu-list";
import SocialMedia from "./social-media";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <h1>{SITE_CONFIG.title}</h1>
      </Link>

      <MenuList />

      <div className="flex items-center gap-1">
        <SocialMedia />
        <ModeToggle />
      </div>
    </header>
  );
}

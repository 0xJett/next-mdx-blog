import { SITE_CONFIG } from "@/configurations";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import MenuList from "./menu-list";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 mx-auto px-4 md:max-w-6xl md:px-24 w-screen">
      <Link href="/">
        <h1 className="text-2xl font-semibold">{SITE_CONFIG.title}</h1>
      </Link>

      <MenuList />

      <div className="flex items-center gap-1">
        {/* <SocialMedia /> */}
        <ModeToggle />
      </div>
    </header>
  );
}

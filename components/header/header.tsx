import { SITE_CONFIG } from "@/configurations";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import MenuList from "./menu-list/menu-list";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 mx-auto px-4 md:max-w-6xl md:px-16 w-screen">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          width={48}
          height={48}
          alt="Next MDX Blog Logo"
          src="/logo.webp"
          className="rounded-full size-8 md:size-12"
        />
        <h1 className="text-base md:text-xl font-semibold">{SITE_CONFIG.title}</h1>
      </Link>

      <div className="flex gap-1 items-center">
        <MenuList />

        <ModeToggle />
      </div>
    </header>
  );
}

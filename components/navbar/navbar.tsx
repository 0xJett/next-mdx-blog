import { SITE_CONFIG } from "@/configurations";
import Link from "next/link";
import MenuList from "./menu-list";
import SocialMedia from "./social-media";

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <Link href="/">
        <h1>{SITE_CONFIG.title}</h1>
      </Link>

      <MenuList />

      <SocialMedia />
    </header>
  );
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MENUS } from "@/configurations";
import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {MENUS.map((menu) => (
          <NavigationMenuItem key={menu.title}>
            {menu.children ? (
              <>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[120px] gap-2">
                    <li>
                      {menu.children.map((child) => (
                        <Fragment key={child.title}>
                          {child.link ? (
                            <NavigationMenuLink asChild>
                              <Link href={child.link}>{child.title}</Link>
                            </NavigationMenuLink>
                          ) : (
                            <NavigationMenuContent>
                              {child.title}
                            </NavigationMenuContent>
                          )}
                        </Fragment>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </>
            ) : menu.link ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={menu.link}>{menu.title}</Link>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuContent>{menu.title}</NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

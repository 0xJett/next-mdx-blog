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
import { Menu } from "@/definitions";
import Link from "next/link";
import { Fragment } from "react";

function MenuContentRenderer({ menu }: { menu: Pick<Menu, "title" | "icon"> }) {
  return (
    <div className="flex items-center gap-1">
      {menu.icon && <menu.icon className="size-4" />}
      <span>{menu.title}</span>
    </div>
  );
}

export default function Navbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {MENUS.map((menu) => (
          <NavigationMenuItem key={menu.title}>
            {menu.children ? (
              <>
                <NavigationMenuTrigger>
                  <MenuContentRenderer menu={menu} />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[120px] gap-2">
                    <li>
                      {menu.children.map((child) => (
                        <Fragment key={child.title}>
                          {child.link ? (
                            <NavigationMenuLink asChild>
                              <Link href={child.link}>
                                <MenuContentRenderer menu={child} />
                              </Link>
                            </NavigationMenuLink>
                          ) : (
                            <NavigationMenuContent>
                              <MenuContentRenderer menu={child} />
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
                <Link href={menu.link}>
                  <MenuContentRenderer menu={menu} />
                </Link>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuContent>
                <MenuContentRenderer menu={menu} />
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

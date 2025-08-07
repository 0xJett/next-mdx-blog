"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

function MenuContentRenderer({ menu }: { menu: Pick<Menu, "title" | "icon"> }) {
  return (
    <div className="flex items-center gap-1">
      {menu.icon && <menu.icon className="size-4" />}
      <span>{menu.title}</span>
    </div>
  );
}

export default function MenuList() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu onOpenChange={setOpen}>
        <DropdownMenuTrigger className="md:hidden order-2">
          {!mounted ? (
            <span className="size-6"></span>
          ) : (
            <div className="relative w-6 h-6">
              <MenuIcon
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  open
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  open
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-75"
                )}
              />
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {MENUS.map((menu) => (
            <DropdownMenuItem asChild key={menu.title}>
              {menu.children ? (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {menu.children.map((child) => (
                        <Fragment key={child.title}>
                          {child.link ? (
                            <Link href={child.link}>
                              <MenuContentRenderer menu={child} />
                            </Link>
                          ) : (
                            <MenuContentRenderer menu={child} />
                          )}
                        </Fragment>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : menu.link ? (
                <Link href={menu.link}>
                  <MenuContentRenderer menu={menu} />
                </Link>
              ) : (
                <MenuContentRenderer menu={menu} />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <NavigationMenu className="hidden md:block">
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
    </>
  );
}

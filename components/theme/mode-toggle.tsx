"use client";

import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <ToggleGroup
        type="single"
        size="sm"
        variant="outline"
        onValueChange={setTheme}
      >
        <ToggleGroupItem value="light">
          <Sun className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark">
          <Moon className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="system">
          <Computer className="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}

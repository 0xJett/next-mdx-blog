import { Github, LucideIcon, Mail } from "lucide-react";
import { Metadata } from "next";
import { SITE_CONFIG } from "./configurations";
import { SocialMediaLinks } from "./definitions";

export const DEFAULT_METADATA: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  authors: SITE_CONFIG.author,
};

export const SOCIAL_MEDIA_ICON_MAP: Record<keyof SocialMediaLinks, LucideIcon> =
  {
    github: Github,
    email: Mail,
  };

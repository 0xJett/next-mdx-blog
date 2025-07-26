import { Metadata } from "next";
import { SITE_CONFIG } from "./configurations";

export const DEFAULT_METADATA: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  authors: SITE_CONFIG.author
};

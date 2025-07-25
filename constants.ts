import { Metadata } from "next";

export const DEFAULT_METADATA: Metadata = {
  title: process.env.TITLE,
  description: process.env.DESCRIPTION,
  authors: {
    name: process.env.AUTHOR,
  },
};
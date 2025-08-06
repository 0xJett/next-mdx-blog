"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: "0",
        y: 20,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: "1",
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: "0",
        y: -20,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="h-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

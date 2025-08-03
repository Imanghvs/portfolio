"use client";

import { CodeIcon } from "lucide-react";
import { CardContent } from "./ui/card";
import { motion, Variants } from "framer-motion";
import { ComponentProps } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  description: string;
}

type MotionProps = ComponentProps<typeof motion.div>;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ServiceCard = ({ title, description, ...rest }: Props & MotionProps) => {
  return (
    <motion.div
      className={clsx(
        "rounded-lg border shadow-md bg-background transition-shadow duration-300",
        "hover:shadow-lg flex flex-col h-full",
      )}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
      {...rest}
    >
      <CardContent className="p-6 space-y-4 text-center flex-grow">
        <CodeIcon className="mx-auto h-8 w-8 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </motion.div>
  );
};

export default ServiceCard;

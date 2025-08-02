import Link from "next/link";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface LinkButtonProps extends React.ComponentProps<typeof Button> {
  href: string;
  children: ReactNode;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default LinkButton;

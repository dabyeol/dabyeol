"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Wrapper = styled(Link)<{ isactive: boolean }>`
  color: ${(props) => (props.isactive ? "#333333" : "#999999")};
`;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Wrapper href={href} isactive={href === pathname}>
      {children}
    </Wrapper>
  );
}

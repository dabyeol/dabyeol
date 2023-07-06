"use client";

import { H4, H5 } from "@/lib/client/style";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 809px) {
    gap: 12px;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Frame = styled.div`
  width: 100%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
  aspect-ratio: 3/2;
  border-radius: 16px;

  img {
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 809px) {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

interface ImageCardProps {
  src: string;
  title: string;
  description: string;
  href: string;
}

export default function ImageCard({
  src,
  title,
  description,
  href,
}: ImageCardProps) {
  return (
    <Wrapper href={href}>
      <Frame>
        <Image src={src} fill alt={title} />
      </Frame>
      <Text>
        <H4>{title}</H4>
        <H5 subtitle>{description}</H5>
      </Text>
    </Wrapper>
  );
}

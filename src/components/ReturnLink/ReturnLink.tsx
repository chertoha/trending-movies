import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FC } from "react";

type ReturnLinkPropsType = {
  to: string;
  text: string;
};

const ReturnLink: FC<ReturnLinkPropsType> = ({ to, text = "" }) => {
  return (
    <div>
      <Link href={to}>
        <HiArrowNarrowLeft />
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default ReturnLink;

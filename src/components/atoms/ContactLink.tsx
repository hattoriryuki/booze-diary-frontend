import { FC, memo } from "react";
import { Link, LinkProps } from "@chakra-ui/react";

export const ContactLink: FC<{ title: string } & LinkProps> = memo(
  ({ title, ...props }) => {
    return (
      <Link
        href={process.env.REACT_APP_CONTACT_LINK}
        target="_blank"
        {...props}
      >
        {title}
      </Link>
    );
  }
);

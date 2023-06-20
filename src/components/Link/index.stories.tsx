import React from "react";
import { LogoIcon } from "../Svg";
import { Link, LinkExternal } from "./index";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <div>
        <Link href="/" color="universal">
          Default
        </Link>
      </div>
      <div>
        <Link href="/" color="text">
          Custom color
        </Link>
      </div>
      <div>
        <Link external href="/" color="universal">
          External
        </Link>
      </div>
      <div>
        <Link href="/" color="universal">
          With icon
          <LogoIcon />
        </Link>
      </div>
      <div>
        <LinkExternal href="/" color="universal">
          LinkExternal
        </LinkExternal>
      </div>
    </div>
  );
};

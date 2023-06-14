import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import Text from "../Text/Text";
import Link from "../Link/Link";
import LogoIcon from "../Svg/Icons/Logo";
import PresentWonIcon from "../Svg/Icons/PresentWon";
import BreadCrumbs from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: BreadCrumbs,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <BrowserRouter>
      <Text p="32px">
        <BreadCrumbs mb="32px">
          <a href="/"><Text color="universal">Link</Text></a>
          <a href="/"><Text color="universal">Link</Text></a>
          <RouterLink to="/"><Text color="universal">React Router Link</Text></RouterLink>
          <Text color="textDisabled">Crumb 1</Text>
          <Text color="textDisabled">Crumb 2</Text>
        </BreadCrumbs>
        <BreadCrumbs>
          <Text>Andex Protocol</Text>
          <Text>The #1 AMM and yield farm on Venom Chain.</Text>
        </BreadCrumbs>
      </Text>
    </BrowserRouter>
  );
};

export const CustomSeparator: React.FC = () => {
  return (
    <Text p="32px">
      <Text mb="16px">
        <BreadCrumbs separator={<LogoIcon width="24px" />}>
          <Link href="/" color="secondary" style={{ fontWeight: 400 }}>
            <Text color="universal">
              Link
            </Text>
          </Link>
          <Text color="textDisabled">Crumb 1</Text>
          <Text color="textDisabled">Crumb 2</Text>
        </BreadCrumbs>
      </Text>
      <Text mb="16px">
        <BreadCrumbs separator={<PresentWonIcon width="48px" />}>
          <Link href="/" color="failure" style={{ fontWeight: 400 }}>
            <Text color="universal">
              Link
            </Text>
          </Link>
          <Link href="/" color="primary" style={{ fontWeight: 400 }}>
            <Text color="universal">
              Link 2
            </Text>
          </Link>
          <Text color="textDisabled">Crumb 2</Text>
        </BreadCrumbs>
      </Text>
    </Text>
  );
};

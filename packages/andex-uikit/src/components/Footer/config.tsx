import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.andex.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://andex.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.andex.finance/contact-us/discord",
      },
      {
        label: "ANDX",
        href: "https://docs.andex.finance/tokenomics/ANDX",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.andex.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.andex.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.andex.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/andex-fi",
      },
      {
        label: "Documentation",
        href: "https://docs.andex.finance",
      },
      /*{
        label: "Audits",
        href: "https://docs.andex.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },*/
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/andexfinance",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/andex-fi/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/kmvpvBWT",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

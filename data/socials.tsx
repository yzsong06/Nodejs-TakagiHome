import { ReactNode } from "react";

import {
  GitHubLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/TakagisanReposOrg",
    icon: <GitHubLogo />,
  },
];

export default socials;

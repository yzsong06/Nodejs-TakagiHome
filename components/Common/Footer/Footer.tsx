import Link from "@/components/Shared/Link";
import Socials from "@/components/Shared/Socials";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <Socials small className="mb-8" />
      <p>
        Powered By <Link href="https://github.com/TakagisanReposOrg">Takagi-san Git-Creators</Link>
      </p>
      <p>
        这是一个开源设计方案，来自于AnishDe {" "}
        <Link href="https://github.com/AnishDe12020/portfolio">在GitHub上查看仓库</Link>
      </p>
    </footer>
  );
};

export default Footer;

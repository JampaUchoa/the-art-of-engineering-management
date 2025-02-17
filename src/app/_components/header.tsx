import Link from "next/link";
import Logo from "@/logo";

const Header = () => {
  return (
      <Link  className="header" href="/">
        <Logo />
        <h2 className="title">
          The Art of Engineering Management
        </h2>
      </Link>
  );
};

export default Header;

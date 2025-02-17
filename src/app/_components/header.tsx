import Link from "next/link";
import Logo from "@/logo";

const Header = () => {
  return (
    <Link className="header" href="/">
      <Logo />
      <h1 className="title">
        The Art of Engineering Management
      </h1>
    </Link>
  );
};

export default Header;

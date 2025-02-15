import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <div>
      <h2 className="">
        <Link href="/" className="">
          The Art of Engineering Management
        </Link>
      </h2>
    </div>
  );
};

export default Header;

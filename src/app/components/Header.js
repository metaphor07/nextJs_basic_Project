import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className={styles.main_header}>
        <Link href="/">
          <Image src="/logo.png" alt="my logo image" width={150} height={50} />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;

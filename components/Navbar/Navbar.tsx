import styles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className={`${styles.navbar} flex flex-col lg:flex-row items-center 
      space-y-3 lg:space-y-0 px-6 lg:px-20 justify-center lg:justify-between
      `}
    >
      <Link href={"/"}>
        <div className={`${styles.logo} fancy text-3xl lg:text-2xl`}>
          Ruslan Pascoal
        </div>
      </Link>
      <ul className={`${styles.links}`}>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>Hire me &#129312;</li>
      </ul>
    </div>
  );
}

export default Navbar;

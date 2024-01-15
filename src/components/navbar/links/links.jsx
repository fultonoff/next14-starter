"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from 'next/image'

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },

  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);


  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink key={link.title} item={link} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Log out</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      
      <Image src='/menu.png' width={30} height={30} className={styles.menuButton}  onClick={()=> setOpen(!open)} alt=""/>
      {open && <div className={styles.mobileLinks}>
          {links.map((link)=>{
            return <NavLink key={link.title} item={link}/>
          })}
      </div>
      }
    </div>
  );
};

export default Links;

import { ExternalLink } from "./Commons.jsx";
import { Link } from "react-router-dom";
import styles from "../styles/components.module.css";

const socialLinks = [
  {
    id: 1,
    src: "./discord-svgrepo-com.svg",
    href: "https://discord.com",
    alt: "FlexStep Discord"
  },
  {
    id: 2,
    src: "./facebook-svgrepo-com.svg",
    href: "https://facebook.com",
    alt: "FlexStep Facebook"
  },
  {
    id: 3,
    src: "./instagram-svgrepo-com.svg",
    href: "https://instagram.com",
    alt: "FlexStep Instagram"
  },
  {
    id: 4,
    src: "./github-svgrepo-com.svg",
    href: "https://github.com",
    alt: "FlexStep Github"
  },
];

const moreCategories = [
  {
    id: 1,
    name: "About Us",
    list: ["About", "Team", "Blog", "Testimonials"],
  },
  {
    id: 2,
    name: "Support",
    list: ["FAQ", "Contribute", "Contact Us"],
  },
  {
    id: 3,
    name: "Legal",
    list: ["Terms", "Privacy"],
  },
];

const Footer = () => {
  // #c2ccd6
  // https://www.svgrepo.com/svg/449705/discord
  // https://www.svgrepo.com/svg/449740/facebook
  // https://www.svgrepo.com/svg/449791/instagram
  // https://www.svgrepo.com/svg/449764/github
  return (
    <footer className={styles.footerMain}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className="flexstep-logo">
            <Link to="/">FlexStep</Link>
          </h2>
          <p>Matibay na mura pa, halika na sa FlexTape, kung saan sulit ang budget mo!</p>
        
          <ul className={styles.socialLinks}>
            {socialLinks.map(({ id, src, href, alt }) => (
              <li key={id}>
                <ExternalLink href={href}>
                  <img src={src} alt={alt} width={24} height={24} />
                </ExternalLink> 
              </li>
            ))}
          </ul>
        </div>
   
        <div className={styles.right}>
          {moreCategories.map(({id, name, list}) => (
            <div key={id}>
              <h3>{name}</h3>
              <ul>{list.map((item) => <li key={`${id}.${item}`}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.allRightsReserved}>
        © 2026 FlexStep. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

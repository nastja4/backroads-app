import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          return (
            <SocialLink
              key={socialLink.id}
              {...socialLink}
              itemClass={"footer-icon"}
            />
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

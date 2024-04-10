import { PictureAsPdf } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const SocialMedia = () => (
  <div className="app__social app__navbar-social">
    <div>
      <a
        href="https://github.com/SanketMane17"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/sanket-mane-016/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
    </div>
    <div>
      <a
        href="https://drive.google.com/file/d/1m4lM_6aOE16fPZ8wnKYXMOfX4C5ym9Yh/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >
        <PictureAsPdf />
      </a>
    </div>
  </div>
);

export default SocialMedia;

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => (
    <div className="app__social app__navbar-social">
        <div>
            <a
                href="https://github.com/SanketMane17"
                style={{ height: "20px" }}
                target="_blank" rel="noreferrer">
                <GitHubIcon />
            </a>
        </div>
        <div>
            <a
                href="https://www.linkedin.com/in/sanket-mane-016/"
                style={{ height: "20px" }}
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon />
            </a>
        </div>
    </div>
);

export default SocialMedia;
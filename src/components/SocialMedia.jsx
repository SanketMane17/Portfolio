import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/SanketMane17" target="_blank">
                <GitHubIcon />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/sanket-mane-016/" target="_blank">
                <LinkedInIcon />
            </a>
        </div>
    </div>
);

export default SocialMedia;
import React from 'react';
import { OutlineLogo } from '../Logo/OutlineLogo';

export const Footer = () => {
    const getYear = new Date
    const year = getYear.getFullYear()
    return (
        <footer className="footer">
            <p>The Pokemon Company {year}. ® All Rights Reserved</p>
            <figure className="footer__logo"><OutlineLogo/></figure>
        </footer>
    );
};

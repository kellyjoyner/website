import React, { PropTypes } from 'react';
import Svg from 'react-svg-inline';

import styles from './index.css';

const Icon = ({ icon, href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className={styles.link}
    >
    <Svg svg={icon} cleanup cleanupExceptions={['fill']}/>
    <span className={styles.name}>{children}</span>
  </a>
);

Icon.propTypes = {
  icon: PropTypes.node,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Icon;

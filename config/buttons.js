// config/buttons.js

import React from "react";
import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import {
  faAddressBook,
  faCenterCode,
  faCode,
  faArchive
} from '@fortawesome/fontawesome-free'

const navButtons = [
  {
    label: "Home",
    path: "/index",
    icon: <FontAwesomeIcon icon={faCenterCode} />
  },
  {
    label: "About Me",
    path: "/about",
    icon: <FontAwesomeIcon icon={faCode} />
  },
  {
    label: "My Projects",
    path: "/project",
    icon: <FontAwesomeIcon icon={faArchive} />
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faAddressBook} />
  }
];

export default navButtons;
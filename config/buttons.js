// config/buttons.js

import React from "react";
import fortawesome from '@fortawesome/fontawesome-free'
import {
  fasAddressBook,
  fasCenterCode,
  fasCode,
  fasArchive
} from '@fortawesome/fontawesome-free'

const navButtons = [
  {
    label: "Home",
    path: "/index",
    icon: <fortawesome icon={fasCenterCode} />
  },
  {
    label: "About Me",
    path: "/about",
    icon: <fortawesome icon={fasCode} />
  },
  {
    label: "My Projects",
    path: "/project",
    icon: <fortawesome icon={fasArchive} />
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <fortawesome icon={fasAddressBook} />
  }
];

export default navButtons;
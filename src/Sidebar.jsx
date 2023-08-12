import React, { useContext, useEffect, useState } from "react";
import { navigationLinks } from "./data";
import { SidebarContext } from "./context";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={"PERSON_IMAGE"} alt="Image_Person" />
        </div>
        <span className="info-name">Alice Wonderland</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  navigationLink.id === activeLink ? "active" : null
                }`}
              >
                <div className="nav-link-icon">{navigationLink.icon}</div>
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

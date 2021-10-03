import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../index.module.css";
import logo from "../../../assets/images/EasyFinance.svg";
import pie from "../../../assets/images/pie-chart.png";
import classnames from "classnames";

const navigation = [
  {
    name: "Route 1",
    icon: pie,
    route: "route 1",
    new: false,
    id: 1,
  },
  {
    name: "Loans",
    icon: pie,
    route: "loan",
    new: true,
    id: 2,
  },
  {
    name: "Route 3",
    icon: pie,
    route: "route 3",
    new: false,
    id: 3,
  },
];
export default function SideBar() {
  const history = useHistory();
  const navItemClass = (route) =>
    classnames({
      [styles["side-nav-item"]]: true,
      [styles["active"]]: route === history.location.pathname.trim().split("/")[1],
    });

  return (
    <div className={styles.sidebar}>
      {/* logo */}
      <div className={styles["logo-wrapper"]}>
        <img src={logo} alt="easy-finance-logo" />
      </div>
      {/* navigations */}
      <ul className={styles["side-nav-wrapper"]}>
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link to={`/${nav.route}`} className={navItemClass(nav.route)}>
              <img src={nav.icon} width="30px" />{" "}
              <div>
                {nav.name} {nav.new && <span>New</span>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

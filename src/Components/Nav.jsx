import React from "react";

const Nav = ({ numOfCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://google.com">
        <span class="badge badge-secondary">{numOfCounters}</span>Counters
      </a>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Menu, Icon, Sticky } from "semantic-ui-react";

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Sticky>
        <Menu stackable>
          <Menu.Menu position="left">
            <Menu.Item>
              <Link to="/" className="header__leftItem">
                <img
                  className="header__logo"
                  src="https://img.icons8.com/ios/100/000000/online-shop-favorite.png"
                  alt="secondhand store logo"
                />
                <p className="header__companyName">Second-hand Store</p>
              </Link>
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Link to="/login">
              <Menu.Item name="signup">
                <Icon name="sign-in" />
                Sign in
                {/* <Icon name="sign-out" /> Sign Out */}
              </Menu.Item>
            </Link>

            <Link to="/checkout">
              <Menu.Item>
                <Icon name="shop" /> 0
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </Sticky>
    </div>
  );
}

export default Header;
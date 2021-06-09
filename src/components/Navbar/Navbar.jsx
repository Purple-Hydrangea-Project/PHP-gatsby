import React from "react"
import { Link } from "gatsby"
import "./Navbar.scss"
import Menu from "./Menu"
import MenuButton from "./MenuButton"
import MenuItem from "./MenuItem"
import Logo from "../../../static/circle_logo.png"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleLinkClick() {
    this.setState({ menuOpen: false })
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        background: "black",
        width: "100%",
        color: "white",
        fontFamily: "Lobster",
      },
      logo: {
        margin: "0 auto",
        fontFamily: `'Montserrat', sans-serif`,
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    }
    const menu = [
      "Home",
      "Events",
      "Resources",
      "Blog",
      "Get Involved",
      "About",
      "Donate",
    ]
    const menuLinks = [
      "/",
      "/events",
      "/resources",
      "/blog",
      "/get-involved",
      "/about",
      "/donate",
    ]
    const mobileMenuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick()
          }}
        >
          {val}
        </MenuItem>
      )
    })
    const desktopMenuItems = menu.map((val, index) => {
      const link = menuLinks[index]
      return (
        <div className="item">
          <p>
            <Link to={link} activeClassName="active-class">
              {val}
            </Link>
          </p>
        </div>
      )
    })

    return (
      <>
        <div className="navbar-desktop">
          <img src={Logo} className="logo" />
          <div className="items">{desktopMenuItems}</div>
        </div>
        <div className="navbar-mobile">
          <div style={styles.container}>
            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="white"
              style={{ float: "right" }}
            />
            <div style={styles.logo}>The Purple Hydrangea Project</div>
          </div>
          <Menu open={this.state.menuOpen}>{mobileMenuItems}</Menu>
        </div>
      </>
    )
  }
}

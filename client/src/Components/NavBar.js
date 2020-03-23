import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
} from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu'
import Fade from 'react-reveal/Fade';


class NavBar extends Component {
    state = {
        isOpen: false,
        changeColor: true,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }


    listenScrollEvent = e => {
        if (window.scrollY < 100) {
            this.setState({ changeColor: true })
        } else {
            this.setState({ changeColor: false })
        }
    }

    toggle = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Fade>
                    <div className='navbar-overlay'>

                        <Navbar expand="md" dark className={`fixed-top ${this.state.changeColor ? 'bg-faded' : 'bg-dark'}`}
                            style={{ lineHeight: '30px', transition: 'all .5s ease' }} >
                            <NavbarBrand href="/" className={`font-weight-bold steelcorp-navbar-brand`} style={{
                                fontSize: this.state.changeColor ? '35px' : '40px', transition: 'all .5s ease'
                            }}
                            >SteelCorp</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} className='border-0 mt-2 float-right'>
                                <HamburgerMenu
                                    isOpen={this.state.isOpen}
                                    navbar
                                    menuClicked={this.toggle}
                                    color='white'
                                    borderRadius={0}
                                    animationDuration={0.5}
                                />
                            </NavbarToggler>
                            <Collapse isOpen={this.state.isOpen} navbar className='text-center'>

                                <Nav className="mx-auto navigation" navbar style={{ fontSize: this.state.changeColor ? '18px' : '20px', transition: 'all .5s ease' }}>
                                    <NavItem >
                                        <NavLink style={{
                                            cursor: 'pointer',
                                            color: 'white'
                                        }} onClick={this.handleClick}
                                            href="/"
                                        >
                                            HOME
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer',
                                            color: 'white'
                                        }}
                                            href="#about"
                                        >
                                            ABOUT
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer',
                                            color: 'white'
                                        }}
                                            href="#services"
                                        >
                                            SERVICES
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer',
                                            color: 'white'
                                        }}
                                            href="#gallery"
                                        >
                                            GALLERY
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer',
                                            color: 'white',

                                        }}
                                            href="#contact"
                                        >

                                            CONTACT US
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                    </div>
                </Fade>
            </div >
        )
    }
}
export default NavBar
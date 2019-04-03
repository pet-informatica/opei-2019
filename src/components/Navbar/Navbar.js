import './Navbar.css';
import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Segment,
  Grid
} from "semantic-ui-react";

import { HashLink as Link } from 'react-router-hash-link';

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible,
  activeItem,
  onClick
}) => (
  <div>
    {!visible && <Menu fixed="top">
      <Menu.Item onClick={onToggle}>
        <Icon name="sidebar" />
      </Menu.Item>
      <Menu.Item as={Link} to="/#inscricoes" name="inscricao" active={activeItem === 'inscricao'} onClick={onClick}>
        <Image size="tiny" src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554237827/OPEI_euzbhs.svg" />
      </Menu.Item>
    </Menu> }
    <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        visible={visible}
      >
        <Menu.Item as={Link} name="inscricao" content="Inscrição" to="/#inscricao" active={activeItem === 'inscricao'} onClick={onClick}/>
        <Menu.Item as={Link} name="sobre" content="Sobre" to="/sobre" active={activeItem === 'sobre'} onClick={onClick}/>
        <Menu.Item as={Link} name="pratique" content="Pratique" to="/pratique#prova-teorica" active={activeItem === 'pratique'} onClick={onClick}/>
        <Menu.Item as={Link} name="noticias" content="Notícias" to="/noticias" active={activeItem === 'noticias'} onClick={onClick}/>
      </Sidebar>
    <Sidebar.Pushable as={Segment} style={{marginTop: "-1px"}}>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        {visible && <Menu fixed="top">
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Item as={Link} to="/#inscricoes" name="inscricao" active={activeItem === 'inscricao'} onClick={onClick}>
            <Image size="tiny" src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554237827/OPEI_euzbhs.svg" />
          </Menu.Item>
        </Menu> }
        <Segment basic>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

const NavBarDesktop = (
    activeItem,
    onClick
) => (
    <div className="Navbar">
        <Menu text>
            <Menu.Menu position="left">
                <Menu.Item as={Link} to="/#inscricao">
                    <Image size="small" src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554237827/OPEI_euzbhs.svg" />
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu text size="massive">
                <Grid columns={4} id="Menu-items">
                  <Grid.Row>
                    <Grid.Column>
                      <Menu.Item as={Link} name='inscricao' active={activeItem === 'inscricao'} content='Inscricao' to='/#inscricao' onClick={onClick}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Menu.Item as={Link} name='sobre' active={activeItem === 'sobre'} content='Sobre' to='/sobre' onClick={onClick}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Menu.Item as={Link} name='pratique' active={activeItem === 'pratique'} content='Pratique' to='/pratique#prova-teorica' onClick={onClick}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Menu.Item as={Link} name='noticias' active={activeItem === 'noticias'} content='Notícias' to='/noticias' onClick={onClick}/>
                    </Grid.Column>
                  </Grid.Row>
                   
                </Grid>
                </Menu>
            </Menu.Menu>
        </Menu>
    </div>
);

const NavBarChildren = ({ clas, children }) => (
  <Container fluid className={"inv-lat-marg "+clas}>{children}</Container>
);

export default class Navbar extends Component {

  state = {
    activeItem: 'inscricao',
    visible: false
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            onClick={this.handleItemClick}
            visible={visible}
          >
            <NavBarChildren clas='mobile'>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop 
          onClick={this.handleItemClick}/>
          <NavBarChildren clas='desktop'>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
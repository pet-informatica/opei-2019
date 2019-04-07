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
  Grid,
  Dropdown,
  Button
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
        <Menu.Item as={Link} name="regulamento" content="Regulamento" to="/regulamento" active={activeItem === 'regulamento'} onClick={onClick}/>
        <Menu.Item as={Link} name="pratique-teorica" content="Provas Teóricas" to="/pratique#prova-teorica" active={activeItem === 'pratique-teorica'} onClick={onClick}/>
        <Menu.Item as={Link} name="pratique-pratica" content="Provas Práticas" to="/pratique#prova-pratica" active={activeItem === 'pratique-pratica'} onClick={onClick}/>
        <Menu.Item as={Link} name="faq" content="Perguntas Frequentes" to="/sobre#perguntas-frequentes" active={activeItem === 'faq'} onClick={onClick}/>
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
        <Menu text >
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
                      <Dropdown name='informacoes' active={activeItem === 'informacoes'} text='Informações' pointing="top" className='link item'>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/sobre">Sobre</Dropdown.Item>
                          <Dropdown.Item as={Link} to="/material-divulgacao">Material de divulgação</Dropdown.Item>
                          <Dropdown.Item as={Link} to="/regulamento">Regulamento</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid.Column>
                    <Grid.Column>
                      <Dropdown name='pratique' active={activeItem === 'pratique'} text='Pratique' pointing='top' className='link item'>
                        <Dropdown.Menu>
                          <Dropdown.Item> <a target="_blank" href="https://drive.google.com/drive/u/0/folders/16MxxLMiEgpY3VO3QCN54VgKOimkTILlc">Prova Teórica</a></Dropdown.Item>
                          <Dropdown.Item as={Link} to='/pratique#prova-pratica'>Prova Prática</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid.Column>
                    <Grid.Column>
                      <Menu.Item as={Link} name='faq' active={activeItem === 'faq'} content='Perguntas Frequentes' to='/sobre#perguntas-frequentes' onClick={onClick}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Menu.Item as={Link} name='inscricao' active={activeItem === 'inscricao'} to='/#inscricao' onClick={onClick}>
                        <Button disabled>Inscrições</Button>
                      </Menu.Item> 
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
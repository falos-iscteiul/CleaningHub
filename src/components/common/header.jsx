import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import Profile from "@material-ui/icons/AccountCircleOutlined";
import styled from "styled-components";
import Icon from "../../resources/Logo_White.png";
import { Link } from "react-router-dom";

const S = {
  Headerwrapper: styled(Appbar)`
    background-color: #50bfd8 !important;
  `,

  ButtonTitle: styled(Button)`
    margin-left: 0.7rem !important;
    font-family: quicksand !important;
    font-weight: 400 !important;
    font-size: 1.5rem !important;
    letter-spacing: 0.02em !important;
    color: white !important;
    &:hover {
      background-color: transparent !important;
    }
  `,

  Logo: styled.img`
    width: 30px;
    height: 35px;
  `,

  ButtonStyle: styled(Button)`
    margin-left: 4rem !important;
    font-family: quicksand !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    color: white !important;
    &:hover {
      background-color: transparent !important;
    }
  `,

  PaperStyled: styled(Paper)`
    margin-top: 0.31rem;
  `,

  MenuStyle: styled(MenuItem)`
    justify-content: center !important;
    font-family: quicksand !important;
    font-weight: 500 !important;
    font-size: 0.7rem;
    color: black;
  `,

  LoginButton: styled(Button)`
    margin-left: auto !important;
    font-family: quicksand !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    color: white !important;
    background-color: black !important;
    border-radius: 20px !important;
  `,

  VerticalDivider: styled.hr`
    height: 2rem;
    margin: auto 1rem;
    border: 1px solid white;
  `,

  RegistarButton: styled(Button)`
    font-family: quicksand !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    color: black !important;
    background-color: white !important;
    border-radius: 20px !important;
  `,
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <S.Headerwrapper position={"fixed"}>
      <Toolbar variant={"dense"}>
        <S.Logo src={Icon} alt="" />
        <S.ButtonTitle
          disableElevation
          disableRipple="true"
          variant="text"
          size="small"
          component={Link}
          to="/"
        >
          CLEANINGHUB
        </S.ButtonTitle>
        <S.ButtonStyle
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          disableRipple="true"
          onClick={handleToggle}
        >
          Empresa
        </S.ButtonStyle>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
              {...TransitionProps}
            >
              <S.PaperStyled elevation={"10"} square={true}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <S.MenuStyle
                      onClick={handleClose}
                      component={Link}
                      to="/AboutUs"
                    >
                      Quem somos
                    </S.MenuStyle>
                    <Divider variant="middle" />
                    <S.MenuStyle
                      onClick={handleClose}
                      component={Link}
                      to="/Offers"
                    >
                      As Nossas Ofertas
                    </S.MenuStyle>
                    <Divider variant="middle" />
                    <S.MenuStyle onClick={handleClose} component={Link}
                      to="/Timeline">
                      Como Funciona
                    </S.MenuStyle>
                  </MenuList>
                </ClickAwayListener>
              </S.PaperStyled>
            </Grow>
          )}
        </Popper>
        <S.ButtonStyle
           component={Link}
           to="/Safety"
        >
          Segurança
        </S.ButtonStyle>
        <S.ButtonStyle
           component={Link}
           to="/Support"
        >
          Suporte
        </S.ButtonStyle>
        <S.ButtonStyle
           component={Link}
           to="/Services"
        >
          Serviços
        </S.ButtonStyle>
        <S.LoginButton
          disableElevation
          variant="contained"
          size="small"
          startIcon={<Profile />}
          component={Link}
          to="/Login"
        >
          LOGIN
        </S.LoginButton>
        <S.VerticalDivider />
        <S.RegistarButton 
          disableElevation 
          variant="contained" 
          size="small"
          component={Link}
          to="/Register">
          Registar
        </S.RegistarButton>
      </Toolbar>
    </S.Headerwrapper>
  );
}

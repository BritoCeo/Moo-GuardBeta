import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const HomeIcon = styled.img`
  height: 32px;
  width: 29px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
`;
const Home = styled.div`
  position: relative;
  line-height: 17px;
  display: inline-block;
  min-width: 35px;
`;
const Home1 = styled.div`
  position: absolute;
  top: 5px;
  left: 45.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;
const GoogleMapsIcon = styled.img`
  width: 36px;
  height: 36px;
  position: relative;
  object-fit: cover;
`;
const Tracking = styled.div`
  position: relative;
  line-height: 17px;
  display: inline-block;
  min-width: 48px;
`;
const Saved = styled.div`
  position: absolute;
  top: 0px;
  left: 120.5px;
  width: 26px;
  height: 59px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const CameraIcon = styled.img`
  height: 30px;
  width: 38px;
  position: relative;
  object-fit: cover;
`;
const CameraWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
`;
const Surveillance = styled.div`
  position: relative;
  line-height: 17px;
  display: inline-block;
  min-width: 68px;
`;
const Cart = styled.div`
  position: absolute;
  top: 6px;
  left: 186.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;
const UserIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 305.5px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Account = styled.div`
  position: absolute;
  top: 33px;
  left: 294.5px;
  line-height: 17px;
  color: var(--color-darkgray-100);
  display: inline-block;
  min-width: 46px;
`;
const HomeIndicator = styled.div`
  height: 5px;
  width: 134px;
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--primary-900);
`;
const Homeindicator = styled.div`
  position: absolute;
  top: 54px;
  left: -2px;
  background-color: var(--primary-0);
  width: 390px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-xl) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 1;
`;
const NavbarItemsRoot = styled.div`
  align-self: stretch;
  height: 81px;
  position: relative;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;

const NavbarItems = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-16");
  }, [navigate]);

  const onSavedContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-17");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-18");
  }, [navigate]);

  return (
    <NavbarItemsRoot className={className}>
      <Home1 onClick={onHomeContainerClick}>
        <HomeWrapper>
          <HomeIcon loading="lazy" alt="" src="/home.svg" />
        </HomeWrapper>
        <Home>Home</Home>
      </Home1>
      <Saved onClick={onSavedContainerClick}>
        <GoogleMapsIcon loading="lazy" alt="" src="/google-maps@2x.png" />
        <Tracking>Tracking</Tracking>
      </Saved>
      <Cart onClick={onCartContainerClick}>
        <CameraWrapper>
          <CameraIcon loading="lazy" alt="" src="/camera@2x.png" />
        </CameraWrapper>
        <Surveillance>Surveillance</Surveillance>
      </Cart>
      <UserIcon loading="lazy" alt="" src="/user.svg" />
      <Account>Account</Account>
      <Homeindicator>
        <HomeIndicator />
      </Homeindicator>
    </NavbarItemsRoot>
  );
};

NavbarItems.propTypes = {
  className: PropTypes.string,
};

export default NavbarItems;

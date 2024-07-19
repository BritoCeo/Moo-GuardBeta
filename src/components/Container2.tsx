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
const HomeContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
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
  height: 59px;
  width: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const HeartIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Saved1 = styled.div`
  position: relative;
  line-height: 140%;
`;
const Saved2 = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
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
const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const UserIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs);
`;
const Account = styled.div`
  position: relative;
  line-height: 17px;
  display: inline-block;
  min-width: 46px;
`;
const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  color: var(--color-darkgray-100);
`;
const HomeIndicator = styled.div`
  height: 5px;
  width: 134px;
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--primary-900);
`;
const Homeindicator = styled.div`
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-xl) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 1;
`;
const ContainerRoot = styled.footer`
  margin-left: -17px;
  width: 390px;
  background-color: var(--primary-0);
  border-top: 1px solid var(--color-sienna-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-10xs) var(--padding-29xl) var(--padding-3xl)
    var(--padding-28xl);
  position: relative;
  max-width: 110%;
  flex-shrink: 0;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;

const Container2 = ({ className = "" }) => {
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

  const onSettingsContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-23");
  }, [navigate]);

  return (
    <ContainerRoot className={className}>
      <HomeWrapper>
        <Home1 onClick={onHomeContainerClick}>
          <HomeContainer>
            <HomeIcon loading="lazy" alt="" src="/home.svg" />
          </HomeContainer>
          <Home>Home</Home>
        </Home1>
      </HomeWrapper>
      <Saved onClick={onSavedContainerClick}>
        <GoogleMapsIcon loading="lazy" alt="" src="/google-maps@2x.png" />
        <Tracking>Tracking</Tracking>
      </Saved>
      <Saved2>
        <HeartIcon alt="" src="/heart.svg" />
        <Saved1>Saved</Saved1>
      </Saved2>
      <CartWrapper>
        <Home1 onClick={onCartContainerClick}>
          <CameraWrapper>
            <CameraIcon loading="lazy" alt="" src="/camera@2x.png" />
          </CameraWrapper>
          <Surveillance>Surveillance</Surveillance>
        </Home1>
      </CartWrapper>
      <SettingsWrapper>
        <Home1 onClick={onSettingsContainerClick}>
          <UserWrapper>
            <UserIcon loading="lazy" alt="" src="/user.svg" />
          </UserWrapper>
          <Account>Account</Account>
        </Home1>
      </SettingsWrapper>
      <Homeindicator>
        <HomeIndicator />
      </Homeindicator>
    </ContainerRoot>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;

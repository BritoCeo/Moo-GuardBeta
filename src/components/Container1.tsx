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
  top: 10px;
  left: 47.5px;
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
  top: 5px;
  left: 122.5px;
  width: 26px;
  height: 59px;
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
  position: absolute;
  top: 6px;
  left: 201.5px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const CameraIcon = styled.img`
  position: absolute;
  top: 11px;
  left: 203.5px;
  width: 38px;
  height: 30px;
  object-fit: cover;
`;
const Surveillance = styled.div`
  position: absolute;
  top: 41px;
  left: 188.5px;
  line-height: 17px;
  display: inline-block;
  min-width: 68px;
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
const Settings = styled.div`
  position: absolute;
  top: 14px;
  left: 296.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
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
  position: absolute;
  bottom: 0px;
  left: calc(50% - 195px);
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
const ContainerRoot = styled.footer`margin-right: -7px;
  width: 390px;
  height: 86px;
  position: relative;
  background-color: var(--primary-0);
  border-top: 1px solid var(--color-sienna-100);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  max-width: 104%;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
  margin-right: ${(p) => p.propMarginRight}
  margin-left: ${(p) => p.propMarginLeft}
`;

const Container1 = ({ className = "", propMarginRight, propMarginLeft }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-16");
  }, [navigate]);

  const onSavedContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-17");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-23");
  }, [navigate]);

  return (
    <ContainerRoot
      propMarginRight={propMarginRight}
      propMarginLeft={propMarginLeft}
      className={className}
    >
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
      <Saved2>
        <HeartIcon alt="" src="/heart.svg" />
        <Saved1>Saved</Saved1>
      </Saved2>
      <CameraIcon loading="lazy" alt="" src="/camera@2x.png" />
      <Surveillance>Surveillance</Surveillance>
      <Settings onClick={onSettingsContainerClick}>
        <UserWrapper>
          <UserIcon loading="lazy" alt="" src="/user.svg" />
        </UserWrapper>
        <Account>Account</Account>
      </Settings>
      <Homeindicator>
        <HomeIndicator />
      </Homeindicator>
    </ContainerRoot>
  );
};

Container1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMarginRight: PropTypes.any,
  propMarginLeft: PropTypes.any,
};

export default Container1;

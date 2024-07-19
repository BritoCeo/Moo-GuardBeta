import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HeartIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Saved = styled.div`
  position: relative;
  line-height: 140%;
`;
const Saved1 = styled.div`
  width: 35px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const HomeIcon = styled.img`
  height: 32px;
  width: 29px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const HomeIcon1 = styled.div`
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
const GoogleMapsIcon = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  object-fit: cover;
`;
const TrackingImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs);
`;
const Tracking = styled.div`
  position: relative;
  line-height: 17px;
  display: inline-block;
  min-width: 48px;
`;
const TrackingIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TrackingButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-12xs);
`;
const CameraIcon = styled.img`
  height: 30px;
  width: 38px;
  position: relative;
  object-fit: cover;
`;
const SurveillanceImage = styled.div`
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
const SurveillanceButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xs) var(--padding-12xs) 0px;
`;
const UserIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const AccountImage = styled.div`
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
const AccountButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs);
  color: var(--color-darkgray-100);
`;
const NavigationButtons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const NavigationItems = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-28xl);
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;
const HomeIndicator = styled.div`
  height: 5px;
  width: 134px;
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--primary-900);
`;
const Homeindicator = styled.div`
  align-self: stretch;
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-xl) var(--padding-5xs);
`;
const ContainerRoot = styled.div`
  margin-left: -8px;
  width: 390px;
  background-color: var(--primary-0);
  border-top: 1px solid var(--color-sienna-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  max-width: 104%;
  flex-shrink: 0;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;

const Container = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-16");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-18");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-23");
  }, [navigate]);

  return (
    <ContainerRoot className={className}>
      <Saved1>
        <HeartIcon alt="" src="/heart.svg" />
        <Saved>Saved</Saved>
      </Saved1>
      <NavigationItems>
        <NavigationButtons>
          <Home1 onClick={onHomeContainerClick}>
            <HomeIcon1>
              <HomeIcon loading="lazy" alt="" src="/home.svg" />
            </HomeIcon1>
            <Home>Home</Home>
          </Home1>
          <TrackingButton>
            <TrackingIcon>
              <TrackingImage>
                <GoogleMapsIcon
                  loading="lazy"
                  alt=""
                  src="/google-maps@2x.png"
                />
              </TrackingImage>
              <Tracking>Tracking</Tracking>
            </TrackingIcon>
          </TrackingButton>
          <SurveillanceButton>
            <Home1 onClick={onCartContainerClick}>
              <SurveillanceImage>
                <CameraIcon loading="lazy" alt="" src="/camera@2x.png" />
              </SurveillanceImage>
              <Surveillance>Surveillance</Surveillance>
            </Home1>
          </SurveillanceButton>
          <AccountButton>
            <Home1 onClick={onSettingsContainerClick}>
              <AccountImage>
                <UserIcon loading="lazy" alt="" src="/user.svg" />
              </AccountImage>
              <Account>Account</Account>
            </Home1>
          </AccountButton>
        </NavigationButtons>
      </NavigationItems>
      <Homeindicator>
        <HomeIndicator />
      </Homeindicator>
    </ContainerRoot>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;

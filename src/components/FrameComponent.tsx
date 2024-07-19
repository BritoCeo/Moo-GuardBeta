import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const WrapperGroup17481Child = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 7px;
  transform: scale(2.282);
`;
const WrapperGroup = styled.div`
  position: absolute;
  top: 8.4px;
  left: 231.6px;
  width: 28.4px;
  height: 23.4px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MaskGroupParent = styled.div`
  align-self: stretch;
  height: 113.7px;
  position: relative;
`;
const OkamboroLivestockStolen = styled.div`
  position: relative;
  font-weight: 600;
`;
const Namlist = styled.div`
  flex: 1;
  position: relative;
`;
const ListIconChild = styled.img`
  width: 10.2px;
  height: 8.4px;
  position: relative;
`;
const ListIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
`;
const ListInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NameList = styled.div`
  width: 75.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
  box-sizing: border-box;
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const StolenInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const StolenInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs);
`;
const FrameParent = styled.div`
  width: 270.2px;
  box-shadow: 15px 15px 30px rgba(211, 209, 216, 0.25);
  border-radius: var(--br-mini);
  background-color: var(--color-sienna-300);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xl-6);
  box-sizing: border-box;
  gap: var(--gap-mini-7);
`;
const WrapperGroup17813Child = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  left: -7px;
  top: 15px;
  transform: scale(1.313);
`;
const WrapperGroup1 = styled.div`
  height: 191.4px;
  width: 270.2px;
  position: absolute;
  margin: 0 !important;
  top: -123.7px;
  right: -101px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const TheEnvironmentalImpact = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
  z-index: 1;
`;
const HeaderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const ImpactInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
`;
const TimeInfoChild = styled.img`
  height: 11.9px;
  width: 14.5px;
  position: absolute;
  margin: 0 !important;
  right: 29.8px;
  bottom: -1.4px;
  z-index: 1;
`;
const Mins = styled.div`
  width: 68.1px;
  position: absolute;
  margin: 0 !important;
  top: -1.7px;
  left: 12.2px;
  line-height: 13.4px;
  display: inline-block;
  z-index: 3;
`;
const Farmedu = styled.div`
  position: relative;
  line-height: 12.5px;
  display: inline-block;
  min-width: 57px;
  z-index: 2;
`;
const SourceName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-3) 0px 0px;
`;
const SourceInfoChild = styled.img`
  height: 10.1px;
  width: 10.9px;
  position: relative;
  z-index: 1;
`;
const SourceInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  font-size: var(--font-size-xs);
`;
const TimeInfo = styled.div`
  width: 101.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  font-size: var(--font-size-smi);
  color: var(--color-slategray);
`;
const ImpactInfoParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs-4);
  flex-shrink: 0;
`;
const NewsContentInner = styled.div`
  width: 157px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-4xl-5);
  box-sizing: border-box;
  font-size: var(--font-size-3xs);
`;
const NewsContent = styled.div`
  margin-left: -37.5px;
  width: 365px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-base-6) var(--padding-mini) var(--padding-40xl);
  box-sizing: border-box;
  gap: var(--gap-8xl-5);
  max-width: 112%;
  flex-shrink: 0;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  font-family: var(--font-lexend);
`;
const Home = styled.div`
  position: relative;
  line-height: 17px;
  display: inline-block;
  min-width: 35px;
  z-index: 5;
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
  width: 26px;
  height: 59px;
  margin: 0 !important;
  position: absolute;
  bottom: 22px;
  left: 109.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 4;
`;
const CameraIcon = styled.img`
  height: 30px;
  width: 38px;
  position: relative;
  object-fit: cover;
`;
const CameraTabIcon = styled.div`
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
  margin: 0 !important;
  position: absolute;
  right: 131.5px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 4;
`;
const UserIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const AccountInfo = styled.div`
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
  margin: 0 !important;
  position: absolute;
  right: 45.5px;
  bottom: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 4;
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
  width: 390px;
  margin: 0 !important;
  position: absolute;
  bottom: 0px;
  left: -13px;
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-xl) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 6;
`;
const NewsContentParentRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) var(--padding-8xl) var(--padding-15xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-2xs-8);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

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
    <NewsContentParentRoot className={className}>
      <NewsContent>
        <FrameParent>
          <MaskGroupParent>
            <MaskGroupIcon alt="" src="/mask-group@2x.png" />
            <WrapperGroup>
              <WrapperGroup17481Child
                loading="lazy"
                alt=""
                src="/group-17481.svg"
              />
            </WrapperGroup>
          </MaskGroupParent>
          <StolenInfoWrapper>
            <StolenInfo>
              <OkamboroLivestockStolen>
                Okamboro Livestock Stolen !!
              </OkamboroLivestockStolen>
              <NameList>
                <ListInfo>
                  <Namlist>Namlist</Namlist>
                  <ListIcon>
                    <ListIconChild
                      loading="lazy"
                      alt=""
                      src="/group-17801.svg"
                    />
                  </ListIcon>
                </ListInfo>
              </NameList>
            </StolenInfo>
          </StolenInfoWrapper>
        </FrameParent>
        <NewsContentInner>
          <ImpactInfoParent>
            <ImpactInfo>
              <HeaderInfo>
                <WrapperGroup1>
                  <WrapperGroup17813Child alt="" src="/group-17813@2x.png" />
                </WrapperGroup1>
                <TheEnvironmentalImpact>
                  The Environmental Impact of Livestock
                </TheEnvironmentalImpact>
              </HeaderInfo>
            </ImpactInfo>
            <TimeInfo>
              <TimeInfoChild loading="lazy" alt="" src="/group-17801-1.svg" />
              <Mins>10-15 mins</Mins>
              <SourceInfo>
                <SourceName>
                  <Farmedu>FarmEdu</Farmedu>
                </SourceName>
                <SourceInfoChild loading="lazy" alt="" src="/group-17503.svg" />
              </SourceInfo>
            </TimeInfo>
          </ImpactInfoParent>
        </NewsContentInner>
      </NewsContent>
      <Home>Home</Home>
      <Saved onClick={onSavedContainerClick}>
        <GoogleMapsIcon loading="lazy" alt="" src="/google-maps@2x.png" />
        <Tracking>Tracking</Tracking>
      </Saved>
      <Cart onClick={onCartContainerClick}>
        <CameraTabIcon>
          <CameraIcon loading="lazy" alt="" src="/camera@2x.png" />
        </CameraTabIcon>
        <Surveillance>Surveillance</Surveillance>
      </Cart>
      <Settings onClick={onSettingsContainerClick}>
        <AccountInfo>
          <UserIcon loading="lazy" alt="" src="/user.svg" />
        </AccountInfo>
        <Account>Account</Account>
      </Settings>
      <Homeindicator>
        <HomeIndicator />
      </Homeindicator>
    </NewsContentParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

import styled from "styled-components";
import PropTypes from "prop-types";

const NotchIcon = styled.img`
  margin-bottom: -804px;
  height: 0px;
  width: 0px;
  position: relative;
  flex-shrink: 0;
`;
const Time = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 21px;
  font-weight: 600;
`;
const StatusbarTime = styled.div`
  flex: 1;
  border-radius: var(--br-5xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const LeftSide = styled.div`
  width: 54px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const IconMobileSignal = styled.img`
  height: 12px;
  width: 18px;
  position: relative;
`;
const WifiIcon = styled.img`
  height: 11.8px;
  width: 17px;
  position: relative;
`;
const StatusbarBatteryIcon = styled.img`
  align-self: stretch;
  width: 27.4px;
  position: relative;
  max-height: 100%;
  min-height: 13px;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs-5);
`;
const StatusBarRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
`;
const StatusBarContent = styled.div`
  width: 364.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex-shrink: 0;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const Statusbar1 = styled.header`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-14xl) var(--padding-8xs)
    var(--padding-15xl);
  box-sizing: border-box;
  gap: var(--gap-683xl-6);
  max-width: 100%;
  text-align: center;
  font-size: var(--callout-bold-size);
  color: var(--primary-900);
  font-family: var(--callout-bold);
`;
const FrameChild = styled.div`
  height: 73px;
  width: 375px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-sienna-200);
  display: none;
  max-width: 100%;
`;
const Image122Icon = styled.img`
  height: 45.3px;
  width: 47.6px;
  position: relative;
  border-radius: var(--br-29xl);
  object-fit: contain;
  z-index: 1;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-sienna-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-4xs) var(--padding-smi) var(--padding-lg-7);
  box-sizing: border-box;
  max-width: 100%;
`;
const Subject2Icon = styled.img`
  height: 69px;
  width: 81px;
  position: relative;
  object-fit: cover;
`;
const MooGuard = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  font-weight: 700;
  color: inherit;
`;
const MooGuardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) 0px 0px;
`;
const Subject2Parent = styled.div`
  width: 246.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg-5);
`;
const Dashboard = styled.h1`
  margin: 0;
  position: absolute;
  top: 3px;
  left: 0px;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  background: linear-gradient(90deg, #b89179, #524136);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  width: 248.7px;
  height: 29px;
`;
const DashboardIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 8.6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-sienna-200);
  width: 232.9px;
  height: 41px;
  z-index: 1;
`;
const DashboardInfo = styled.div`
  height: 41px;
  width: 248.7px;
  position: relative;
  flex-shrink: 0;
`;
const DashboardInfoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-41xl) 0px var(--padding-45xl);
  text-align: center;
`;
const Frame = styled.div`
  width: 307px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  z-index: 1;
  margin-top: -71px;
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const MainContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-7xl) 0px var(--padding-12xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const StatusbarParentRoot = styled.div`
  margin-left: -41px;
  width: 432px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  max-width: 122%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-sienna-100);
  font-family: var(--font-inter);
`;

const FrameComponent2 = ({ className = "" }) => {
  return (
    <StatusbarParentRoot className={className}>
      <Statusbar1>
        <NotchIcon alt="" />
        <StatusBarContent>
          <LeftSide>
            <StatusbarTime>
              <Time>9:41</Time>
            </StatusbarTime>
          </LeftSide>
          <StatusBarRight>
            <RightSide>
              <IconMobileSignal alt="" src="/icon--mobile-signal.svg" />
              <WifiIcon alt="" src="/wifi.svg" />
              <StatusbarBatteryIcon alt="" src="/-statusbarbattery.svg" />
            </RightSide>
          </StatusBarRight>
        </StatusBarContent>
      </Statusbar1>
      <MainContent>
        <FrameParent>
          <RectangleParent>
            <FrameChild />
            <Image122Icon loading="lazy" alt="" src="/image-122@2x.png" />
          </RectangleParent>
          <Frame>
            <Subject2Parent>
              <Subject2Icon loading="lazy" alt="" src="/subject-2@2x.png" />
              <MooGuardWrapper>
                <MooGuard>Moo-Guard</MooGuard>
              </MooGuardWrapper>
            </Subject2Parent>
            <DashboardInfoWrapper>
              <DashboardInfo>
                <Dashboard>DashBoard</Dashboard>
                <DashboardIcon />
              </DashboardInfo>
            </DashboardInfoWrapper>
          </Frame>
        </FrameParent>
      </MainContent>
    </StatusbarParentRoot>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

import styled from "styled-components";
import FrameComponent7 from "../components/FrameComponent7";
import Container2 from "../components/Container2";

const EmergencyAlert = styled.h1`
  margin: 0 !important;
  width: 343px;
  position: absolute;
  top: 54px;
  left: 9px;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
`;
const NotchIcon = styled.img`
  width: 0px;
  height: 0px;
  position: relative;
`;
const NotchWrapper = styled.div`
  margin-left: -1976px;
  margin-bottom: -804px;
  height: 0px;
  width: 1751px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 491%;
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
  flex-shrink: 0;
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
const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
`;
const Statusbar1 = styled.header`
  margin-left: -23px;
  width: 420px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-12xl) var(--padding-xs)
    var(--padding-13xl);
  box-sizing: border-box;
  gap: 225px;
  max-width: 113%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--callout-bold-size);
  color: var(--primary-900);
  font-family: var(--callout-bold);
`;
const PoliceBadgeIcon = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  object-fit: cover;
`;
const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base) 0px var(--padding-3xl);
`;
const Emergency = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
`;
const BadgeContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 36px;
`;
const Iphone11ProX20Inner = styled.section`
  width: 356px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-jura);
`;
const P = styled.p`
  margin: 0;
`;
const Countdown = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
`;
const CountdownContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-sm) 37px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const CountdownContainerParent = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs);
  box-sizing: border-box;
  gap: var(--gap-6xs);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-16xl);
  color: #ee2a2a;
  font-family: var(--callout-bold);
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--primary-0);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60.5px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-16xl);
  color: var(--color-sienna-100);
  font-family: var(--callout-bold);
`;

const IPhone11ProX8 = () => {
  return (
    <Iphone11ProXRoot>
      <EmergencyAlert>Emergency Alert!!</EmergencyAlert>
      <Statusbar1>
        <NotchWrapper>
          <NotchIcon alt="" />
        </NotchWrapper>
        <LeftSide>
          <StatusbarTime>
            <Time>9:41</Time>
          </StatusbarTime>
        </LeftSide>
        <RightSideWrapper>
          <RightSide>
            <IconMobileSignal
              loading="lazy"
              alt=""
              src="/icon--mobile-signal.svg"
            />
            <WifiIcon loading="lazy" alt="" src="/wifi.svg" />
            <StatusbarBatteryIcon
              loading="lazy"
              alt=""
              src="/-statusbarbattery.svg"
            />
          </RightSide>
        </RightSideWrapper>
      </Statusbar1>
      <Iphone11ProX20Inner>
        <BadgeContainerParent>
          <BadgeContainer>
            <PoliceBadgeIcon loading="lazy" alt="" src="/police-badge@2x.png" />
          </BadgeContainer>
          <Emergency>Emergency</Emergency>
        </BadgeContainerParent>
      </Iphone11ProX20Inner>
      <CountdownContainerParent>
        <CountdownContainer>
          <Countdown>
            <P>{`30 `}</P>
            <P>CountDown</P>
          </Countdown>
        </CountdownContainer>
        <FrameComponent7 />
        <Container2 />
      </CountdownContainerParent>
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX8;

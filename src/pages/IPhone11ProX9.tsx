import styled from "styled-components";
import TopContent from "../components/TopContent";
import RightContent from "../components/RightContent";
import BottomContent from "../components/BottomContent";
import NavbarItems from "../components/NavbarItems";
import FrameComponent8 from "../components/FrameComponent8";

const NotchIcon = styled.img`
  margin-top: -177px;
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
const StatusBarLeft = styled.div`
  width: 99.4px;
  display: flex;
  flex-direction: column;
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
const StatusBarRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
`;
const Statusbar1 = styled.header`
  margin-right: -26px;
  width: 432px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-14xl) var(--padding-8xs)
    var(--padding-15xl);
  box-sizing: border-box;
  gap: 187.6px;
  max-width: 116%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--callout-bold-size);
  color: var(--primary-900);
  font-family: var(--callout-bold);
`;
const FrameChild = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  margin-top: -1px;
`;
const LeftContentInner = styled.div`
  width: 354px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi);
  box-sizing: border-box;
  max-width: 100%;
`;
const LeftContent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  max-width: 100%;
`;
const BottomDivider = styled.div`
  width: 358px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
`;
const Content = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 73px;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  max-width: 100%;
`;
const Iphone11ProX23Child = styled.img`
  width: 328px;
  height: 2px;
  position: absolute;
  margin: 0 !important;
  bottom: 404px;
  left: 13px;
  object-fit: contain;
`;
const Iphone11ProX23Item = styled.img`
  width: 328px;
  height: 2px;
  position: absolute;
  margin: 0 !important;
  bottom: 355px;
  left: 13px;
  object-fit: contain;
  z-index: 1;
`;
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
const Container = styled.div`
  margin-right: -2px;
  width: 390px;
  height: 86px;
  background-color: var(--primary-0);
  border-top: 1px solid var(--color-sienna-100);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-11xs) 0px;
  gap: 633px;
  max-width: 104%;
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--primary-0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xs);
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;

const IPhone11ProX9 = () => {
  return (
    <Iphone11ProXRoot>
      <Statusbar1>
        <NotchIcon alt="" />
        <StatusBarLeft>
          <LeftSide>
            <StatusbarTime>
              <Time>9:41</Time>
            </StatusbarTime>
          </LeftSide>
        </StatusBarLeft>
        <StatusBarRight>
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
        </StatusBarRight>
      </Statusbar1>
      <Content>
        <LeftContent>
          <TopContent />
          <RightContent />
          <LeftContentInner>
            <FrameChild loading="lazy" alt="" />
          </LeftContentInner>
        </LeftContent>
        <BottomContent />
        <BottomDivider>
          <FrameChild loading="lazy" alt="" />
        </BottomDivider>
      </Content>
      <Iphone11ProX23Child loading="lazy" alt="" />
      <Iphone11ProX23Item loading="lazy" alt="" />
      <Container>
        <Saved1>
          <HeartIcon alt="" src="/heart.svg" />
          <Saved>Saved</Saved>
        </Saved1>
        <NavbarItems />
        <FrameComponent8 />
      </Container>
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX9;

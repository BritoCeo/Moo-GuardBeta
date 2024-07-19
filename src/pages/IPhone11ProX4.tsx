import styled from "styled-components";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const CommunalAlerts = styled.h3`
  margin: 0 !important;
  width: 198.1px;
  position: absolute;
  bottom: 320.8px;
  left: 24px;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  z-index: 4;
`;
const HomeIcon = styled.img`
  width: 29px;
  height: 32px;
  position: absolute;
  margin: 0 !important;
  bottom: 51px;
  left: 37.5px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 4;
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
  z-index: 2;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-2xl);
  max-width: 100%;
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--primary-0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xs);
  box-sizing: border-box;
  gap: 56.2px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-lg);
  color: #323643;
  font-family: var(--font-lexend);
`;

const IPhone11ProX4 = () => {
  return (
    <Iphone11ProXRoot>
      <CommunalAlerts>Communal Alerts !</CommunalAlerts>
      <HomeIcon loading="lazy" alt="" src="/home.svg" />
      <Saved1>
        <HeartIcon alt="" src="/heart.svg" />
        <Saved>Saved</Saved>
      </Saved1>
      <FrameParent>
        <FrameComponent2 />
        <FrameComponent1 />
      </FrameParent>
      <FrameComponent />
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX4;

import styled from "styled-components";
import CameraAction from "../components/CameraAction";
import BottomScreenshot from "../components/BottomScreenshot";
import FrameComponent6 from "../components/FrameComponent6";

const CameraActionButtonChild = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  border-radius: 50%;
  background-color: var(--accent-red);
  border: 0px solid var(--color-black);
  box-sizing: border-box;
`;
const CameraActionButton = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 !important;
  position: absolute;
  right: 21px;
  bottom: 110px;
  border-radius: var(--br-101xl);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  box-sizing: border-box;
  z-index: 1;
`;
const Iphone11ProXRoot = styled.div`
  position: relative;
  background-color: var(--color-black);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-19xl);
  line-height: normal;
  letter-spacing: normal;
`;

const IPhone11ProX7 = () => {
  return (
    <Iphone11ProXRoot>
      <CameraActionButton>
        <CameraActionButtonChild />
      </CameraActionButton>
      <CameraAction />
      <BottomScreenshot />
      <FrameComponent6 />
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX7;

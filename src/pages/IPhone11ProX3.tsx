import styled from "styled-components";
import Frame from "../components/Frame";

const FrameIcon = styled.img`
  width: 191px;
  flex: 1;
  position: relative;
  max-height: 100%;
  overflow: hidden;
  object-fit: contain;
`;
const FrameIcon1 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const Frame = styled.section`
  align-self: stretch;
  height: 374px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-35xl);
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--primary-0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 101px var(--padding-2xs) 55px;
  box-sizing: border-box;
  gap: var(--gap-19xl);
  line-height: normal;
  letter-spacing: normal;
`;

const IPhone11ProX3 = () => {
  return (
    <Iphone11ProXRoot>
      <Frame>
        <FrameIcon loading="lazy" alt="" src="/frame@2x.png" />
        <FrameIcon1 loading="lazy" alt="" src="/frame-1@2x.png" />
      </Frame>
      <Frame />
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX3;

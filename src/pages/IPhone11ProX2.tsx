import Content from "../components/Content";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: -26px;
  left: -27.7px;
  backdrop-filter: blur(70px);
  width: 428px;
  height: 926px;
`;
const ObjectsIcon = styled.img`
  position: absolute;
  top: -382px;
  left: -392px;
  width: 1113.3px;
  height: 1431.3px;
  z-index: 1;
`;
const HeaderIcon = styled.img`
  position: absolute;
  top: 65px;
  left: 90px;
  width: 183px;
  height: 155px;
  object-fit: contain;
  z-index: 2;
`;
const BackgroundParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  height: 812px;
  position: relative;
  background-color: var(--primary-0);
  overflow: hidden;
  line-height: normal;
  letter-spacing: normal;
`;

const IPhone11ProX2 = () => {
  return (
    <Iphone11ProXRoot>
      <Content />
      <BackgroundParent>
        <Background />
        <ObjectsIcon alt="" src="/objects1.svg" />
        <HeaderIcon loading="lazy" alt="" src="/header@2x.png" />
      </BackgroundParent>
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX2;

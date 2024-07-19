import FrameComponent4 from "../components/FrameComponent4";
import styled from "styled-components";
import FrameComponent3 from "../components/FrameComponent3";
import Container1 from "../components/Container1";

const Screenshot20240425At = styled.img`
  height: 171px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const Screenshot20240425At0941Wrapper = styled.section`
  width: 375px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) var(--padding-mid) var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const CowCctv = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const CowCctv1Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
`;
const FrameParent = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
`;
const Iphone11ProXRoot = styled.div`
  position: relative;
  background-color: var(--color-black);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 43px;
  line-height: normal;
  letter-spacing: normal;
`;

const IPhone11ProX6 = () => {
  return (
    <Iphone11ProXRoot>
      <FrameComponent4 />
      <Screenshot20240425At0941Wrapper>
        <Screenshot20240425At
          loading="lazy"
          alt=""
          src="/screenshot-20240425-at-0941-1@2x.png"
        />
      </Screenshot20240425At0941Wrapper>
      <FrameParent>
        <CowCctv1Parent>
          <CowCctv loading="lazy" alt="" src="/cow-cctv-1@2x.png" />
          <FrameComponent3 />
        </CowCctv1Parent>
        <Container1 />
      </FrameParent>
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX6;

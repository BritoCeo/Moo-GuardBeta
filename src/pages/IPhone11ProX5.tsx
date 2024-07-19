import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import FarmInfo from "../components/FarmInfo";
import Container from "../components/Container";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  background-color: var(--primary-0);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
  z-index: 2;
`;
const EllipseParent = styled.div`
  height: 48px;
  width: 48px;
  position: relative;
`;
const FrameInner = styled.div`
  height: 46px;
  width: 226px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-4xl);
  background-color: var(--primary-0);
  display: none;
`;
const SearchInputChild = styled.img`
  width: 22px;
  height: 22px;
  position: relative;
  z-index: 2;
`;
const SearchInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const Search = styled.div`
  position: relative;
  line-height: 164.5%;
  display: inline-block;
  min-width: 67px;
  z-index: 2;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-4xl);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-mini);
  gap: var(--gap-4xs);
  z-index: 1;
`;
const FrameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 44px;
  left: 3px;
  width: 290px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ScrollHerd = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-7xl);
  max-width: 103%;
  flex-shrink: 0;
  z-index: 1;
`;
const ScrollHerdParent = styled.div`
  position: absolute;
  top: 552px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: -23px;
  left: -608px;
  width: 1201px;
  height: 812px;
  object-fit: cover;
`;
const Image122Icon = styled.img`
  position: absolute;
  top: 46px;
  left: 313px;
  border-radius: var(--br-29xl);
  width: 45px;
  height: 45.3px;
  object-fit: contain;
  z-index: 1;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-firebrick);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const MapsIcon = styled.img`
  position: absolute;
  top: 38px;
  left: 39px;
  width: 100px;
  height: 100px;
  object-fit: contain;
  z-index: 2;
`;
const EllipseGroup = styled.div`
  position: absolute;
  top: 345px;
  left: 51px;
  width: 185px;
  height: 186px;
`;
const MapsIcon1 = styled.img`
  position: absolute;
  top: 29px;
  left: 36px;
  width: 100px;
  height: 100px;
  object-fit: contain;
  z-index: 2;
`;
const EllipseContainer = styled.div`
  position: absolute;
  top: 92px;
  left: 177px;
  width: 185px;
  height: 186px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 789px;
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  height: 812px;
  position: relative;
  background-color: var(--primary-0);
  overflow: auto;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--callout-bold-size);
  color: var(--color-darkgray-200);
  font-family: var(--callout-bold);
`;

const IPhone11ProX5 = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/iphone-11-pro-x-16");
  }, [navigate]);

  return (
    <Iphone11ProXRoot>
      <FrameParent>
        <EllipseParent>
          <FrameChild />
          <FrameItem
            loading="lazy"
            alt=""
            src="/group-100@2x.png"
            onClick={onGroupIconClick}
          />
        </EllipseParent>
        <FrameWrapper>
          <RectangleParent>
            <FrameInner />
            <SearchInput>
              <SearchInputChild alt="" src="/group-7.svg" />
            </SearchInput>
            <Search>Search...</Search>
          </RectangleParent>
        </FrameWrapper>
      </FrameParent>
      <ScrollHerdParent>
        <ScrollHerd>
          <GroupComponent />
          <FarmInfo />
        </ScrollHerd>
        <Container />
      </ScrollHerdParent>
      <FrameGroup>
        <GroupIcon alt="" src="/group-18198@2x.png" />
        <Image122Icon loading="lazy" alt="" src="/image-1221@2x.png" />
        <EllipseGroup>
          <EllipseDiv />
          <MapsIcon loading="lazy" alt="" src="/maps@2x.png" />
        </EllipseGroup>
        <EllipseContainer>
          <EllipseDiv />
          <MapsIcon1 loading="lazy" alt="" src="/maps@2x.png" />
        </EllipseContainer>
      </FrameGroup>
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX5;

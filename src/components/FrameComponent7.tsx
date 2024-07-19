import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PoliceCarLight = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  object-fit: cover;
`;
const LightContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-38xl) 0px var(--padding-46xl);
`;
const PoliceRespones = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
`;
const PoliceResponesWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px var(--padding-smi);
`;
const Rectangle = styled.div`
  height: 34px;
  width: 80px;
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--color-mediumspringgreen);
  display: none;
`;
const DoneIcon = styled.img`
  height: 34px;
  width: 52px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const GoBack = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--color-mediumspringgreen);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xs) 0px var(--padding-base);
`;
const GoBackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs);
`;
const FrameChild = styled.div`
  height: 33.5px;
  width: 71px;
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--color-red);
  display: none;
`;
const MultiplyIcon = styled.img`
  height: 39px;
  width: 53px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const RectangleParent = styled.div`
  width: 71px;
  border-radius: var(--br-7xs);
  background-color: var(--color-red);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs);
  box-sizing: border-box;
  cursor: pointer;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl);
`;
const LightContainerParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-10xl);
`;
const FrameWrapperRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-49xl) 0px var(--padding-48xl);
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-jura);
`;

const FrameComponent7 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-18");
  }, [navigate]);

  return (
    <FrameWrapperRoot className={className}>
      <LightContainerParent>
        <LightContainer>
          <PoliceCarLight
            loading="lazy"
            alt=""
            src="/police-car-light@2x.png"
          />
        </LightContainer>
        <FrameParent>
          <PoliceResponesWrapper>
            <PoliceRespones>Police Respones</PoliceRespones>
          </PoliceResponesWrapper>
          <FrameGroup>
            <GoBackWrapper>
              <GoBack>
                <Rectangle />
                <DoneIcon loading="lazy" alt="" src="/done@2x.png" />
              </GoBack>
            </GoBackWrapper>
            <RectangleParent onClick={onFrameContainerClick}>
              <FrameChild />
              <MultiplyIcon loading="lazy" alt="" src="/multiply@2x.png" />
            </RectangleParent>
          </FrameGroup>
        </FrameParent>
      </LightContainerParent>
    </FrameWrapperRoot>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container1 from "./Container1";
import PropTypes from "prop-types";

const H = styled.h1`
  margin: 0;
  width: 29px;
  position: relative;
  font-size: inherit;
  line-height: 100%;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CameraModeButton = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xl);
  background-color: var(--fill-primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-4xs);
  cursor: pointer;
`;
const CameraModeButtonWrapper = styled.div`
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const SfSymbol = styled.h2`
  margin: 0;
  width: 20px;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.43px;
  line-height: 100%;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
`;
const CameraActionButton = styled.div`
  height: 48px;
  width: 48px;
  border-radius: var(--br-81xl);
  border: 1px solid var(--separator-non-opaque);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm-5) var(--padding-smi) var(--padding-base-5);
`;
const FrameChild = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--separator-non-opaque);
  box-sizing: border-box;
`;
const LineWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-4xl);
`;
const CameraActionButtonParent = styled.div`
  width: 166px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: var(--font-size-lg);
  color: var(--color-gray-500);
`;
const FrameGroup = styled.div`
  width: 338px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const FrameParentRoot = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--primary-0);
  font-family: var(--font-sf-pro);
`;

const FrameComponent6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCameraModeButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-x-20");
  }, [navigate]);

  return (
    <FrameParentRoot className={className}>
      <FrameGroup>
        <CameraModeButtonWrapper>
          <CameraModeButton onClick={onCameraModeButtonClick}>
            <H>􀙨</H>
          </CameraModeButton>
        </CameraModeButtonWrapper>
        <CameraActionButtonParent>
          <CameraActionButton>
            <SfSymbol>􀎡</SfSymbol>
          </CameraActionButton>
          <LineWrapper>
            <FrameChild />
          </LineWrapper>
        </CameraActionButtonParent>
      </FrameGroup>
      <Container1 propMarginRight="unset" propMarginLeft="-19px" />
    </FrameParentRoot>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;

import FrameComponent5 from "./FrameComponent5";
import styled from "styled-components";
import PropTypes from "prop-types";

const A = styled.a`
  text-decoration: none;
  width: 56px;
  position: relative;
  line-height: 20px;
  color: inherit;
  display: inline-block;
  min-width: 56px;
  white-space: nowrap;
`;
const Wrapper = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--accent-red);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-2xl) 0px var(--padding-xl);
`;
const FrameParent = styled.div`
  align-self: stretch;
  height: 118.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-5);
`;
const Screenshot20240425At = styled.img`
  height: 186px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const TopScreenshot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const CameraActionRoot = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-8xl-5);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--primary-0);
  font-family: var(--caption-2);
`;

const CameraAction = ({ className = "" }) => {
  return (
    <CameraActionRoot className={className}>
      <FrameParent>
        <FrameComponent5
          label="RECORD"
          cameraStatusTags
          frameDivPadding="0px 0px 0px 0px"
        />
        <FrameWrapper>
          <Wrapper>
            <A>0:00:02</A>
          </Wrapper>
        </FrameWrapper>
      </FrameParent>
      <TopScreenshot>
        <Screenshot20240425At
          loading="lazy"
          alt=""
          src="/screenshot-20240425-at-0948-1@2x.png"
        />
      </TopScreenshot>
    </CameraActionRoot>
  );
};

CameraAction.propTypes = {
  className: PropTypes.string,
};

export default CameraAction;

import FrameComponent5 from "./FrameComponent5";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContentDivider = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-top: 1px solid var(--primary-100);
  box-sizing: border-box;
  max-width: 100%;
`;
const ContentDividerWrapper = styled.div`
  align-self: stretch;
  height: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px var(--padding-smi);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameParentRoot = styled.section`
  width: 375px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  text-align: center;
  font-size: var(--body-bold-size);
  color: var(--primary-0);
  font-family: var(--callout-bold);
`;

const FrameComponent4 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameComponent5 label="LIVE" cameraStatusTags />
      <ContentDividerWrapper>
        <ContentDivider />
      </ContentDividerWrapper>
    </FrameParentRoot>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

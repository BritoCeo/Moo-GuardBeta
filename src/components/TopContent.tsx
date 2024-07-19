import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.img`
  width: 30px;
  height: 29px;
  position: relative;
`;
const MooGuardContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;
const Subject2Icon = styled.img`
  width: 45px;
  height: 36px;
  position: relative;
  object-fit: cover;
`;
const SubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-7xs) 0px 0px;
`;
const MooGuard = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  font-weight: 700;
  color: inherit;
`;
const MooGuardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const MooGuardContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const SubjectContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs);
  box-sizing: border-box;
  min-width: 155px;
`;
const FluentpersonFeedback24ReguIcon = styled.img`
  height: 33px;
  width: 33px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 33px;
`;
const TablernotificationIcon = styled.img`
  height: 31px;
  width: 31px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const FluentpersonFeedback24ReguParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ContentDivider = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-sienna-200);
  z-index: 1;
`;
const TopContentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-8xs) var(--padding-smi)
    var(--padding-xs);
  position: relative;
  gap: var(--gap-26xl-9);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-sienna-100);
  font-family: var(--font-inter);
`;

const TopContent = ({ className = "" }) => {
  return (
    <TopContentRoot className={className}>
      <SubjectContainer>
        <MooGuardContainer>
          <MooGuardContainerInner>
            <FrameChild loading="lazy" alt="" src="/group-224.svg" />
          </MooGuardContainerInner>
          <SubjectWrapper>
            <Subject2Icon loading="lazy" alt="" src="/subject-21@2x.png" />
          </SubjectWrapper>
          <MooGuardWrapper>
            <MooGuard>Moo-Guard</MooGuard>
          </MooGuardWrapper>
        </MooGuardContainer>
      </SubjectContainer>
      <FluentpersonFeedback24ReguParent>
        <FluentpersonFeedback24ReguIcon
          loading="lazy"
          alt=""
          src="/fluentpersonfeedback24regular.svg"
        />
        <TablernotificationIcon
          loading="lazy"
          alt=""
          src="/tablernotification.svg"
        />
      </FluentpersonFeedback24ReguParent>
      <ContentDivider />
    </TopContentRoot>
  );
};

TopContent.propTypes = {
  className: PropTypes.string,
};

export default TopContent;

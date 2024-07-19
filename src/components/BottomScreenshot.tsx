import styled from "styled-components";
import PropTypes from "prop-types";

const Screenshot20240425At = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const TimeStamp = styled.div`
  width: 65px;
  position: relative;
  letter-spacing: -0.08px;
  line-height: 18px;
  display: inline-block;
  min-width: 65px;
  white-space: nowrap;
`;
const TimeStampWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
`;
const Hour = styled.div`
  height: 25px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--gray-gray-3);
  box-sizing: border-box;
`;
const Quarter = styled.div`
  height: 9px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--gray-gray-4);
  box-sizing: border-box;
`;
const TimelineScale = styled.div`
  height: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: -60.5px;
  border-radius: var(--br-11xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const HourParent = styled.div`
  height: 24px;
  border-radius: var(--br-11xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const HourParent1 = styled.div`
  height: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: 3.5px;
  bottom: 0px;
  border-radius: var(--br-11xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Hour1 = styled.div`
  height: calc(100% + 1px);
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: -1px;
  left: 0px;
  border-right: 1px solid var(--gray-gray-3);
  box-sizing: border-box;
`;
const Quarter1 = styled.div`
  height: 9px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 4px);
  left: 16px;
  border-right: 1px solid var(--gray-gray-4);
  box-sizing: border-box;
`;
const Quarter2 = styled.div`
  height: 9px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 4px);
  right: 15px;
  border-right: 1px solid var(--gray-gray-4);
  box-sizing: border-box;
`;
const Quarter3 = styled.div`
  height: 9px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 4px);
  right: -1px;
  border-right: 1px solid var(--gray-gray-4);
  box-sizing: border-box;
`;
const HourParent2 = styled.div`
  height: 100%;
  width: 48px;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: -60.5px;
  bottom: 0px;
  border-radius: var(--br-11xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const NowStamp = styled.div`
  height: 41px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 20px);
  left: calc(50% - 0.5px);
  border-right: 1px solid var(--primary-0);
  box-sizing: border-box;
  z-index: 2;
`;
const Timeline = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
  position: relative;
  gap: var(--gap-base);
`;
const NounStamp = styled.div`
  width: 26px;
  position: relative;
  letter-spacing: -0.08px;
  line-height: 18px;
  display: inline-block;
  min-width: 26px;
`;
const NounStampWrapper = styled.div`
  width: 264px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
`;
const TimelineParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  color: var(--color-gray-200);
`;
const ArchiveBackground = styled.div`
  height: 4px;
  width: 63px;
  position: relative;
  border-radius: var(--br-11xs);
  background-color: var(--color-darkslategray-200);
`;
const ArchiveActive = styled.div`
  height: 4px;
  width: 16px;
  position: relative;
  border-radius: var(--br-11xs) 0px 0px var(--br-11xs);
  background-color: var(--accent-color);
  z-index: 1;
  margin-left: -15px;
`;
const Archive = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-104xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const MulticamArchive = styled.div`
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 24px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const Timeline1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl) 0px var(--padding-11xs);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-mini);
  max-width: 100%;
  z-index: 1;
  margin-top: -22px;
`;
const BottomScreenshotRoot = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--caption-2-size);
  color: var(--label-secondary);
  font-family: var(--caption-2);
`;

const BottomScreenshot = ({ className = "" }) => {
  return (
    <BottomScreenshotRoot className={className}>
      <Screenshot20240425At
        loading="lazy"
        alt=""
        src="/screenshot-20240425-at-0943-1@2x.png"
      />
      <Timeline1>
        <TimeStampWrapper>
          <TimeStamp>12:52:03 PM</TimeStamp>
        </TimeStampWrapper>
        <TimelineParent>
          <Timeline>
            <TimelineScale>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </TimelineScale>
            <HourParent>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </HourParent>
            <HourParent>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </HourParent>
            <HourParent>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </HourParent>
            <HourParent>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </HourParent>
            <HourParent>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </HourParent>
            <HourParent1>
              <Hour />
              <Quarter />
              <Quarter />
              <Quarter />
            </HourParent1>
            <HourParent2>
              <Hour1 />
              <Quarter1 />
              <Quarter2 />
              <Quarter3 />
            </HourParent2>
            <NowStamp />
          </Timeline>
          <NounStampWrapper>
            <NounStamp>noun</NounStamp>
          </NounStampWrapper>
        </TimelineParent>
        <MulticamArchive>
          <Archive>
            <ArchiveBackground />
            <ArchiveActive />
          </Archive>
        </MulticamArchive>
      </Timeline1>
    </BottomScreenshotRoot>
  );
};

BottomScreenshot.propTypes = {
  className: PropTypes.string,
};

export default BottomScreenshot;

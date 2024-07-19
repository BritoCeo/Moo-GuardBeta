import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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
  padding: 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: var(--gap-base);
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
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
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
const MulticamArchiveParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  max-width: 100%;
  color: var(--color-gray-200);
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
`;
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
  padding: var(--padding-sm-5) 0px 0px;
  box-sizing: border-box;
`;
const RecordCircle = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  border-radius: 50%;
  background-color: var(--label-tertiary);
  border: 0px solid var(--color-black);
  box-sizing: border-box;
`;
const CameraActionButton = styled.div`
  height: 48px;
  width: 48px;
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 24px);
  right: 20px;
  border-radius: var(--br-101xl);
  background-color: var(--label-tertiary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  box-sizing: border-box;
  cursor: pointer;
`;
const ContainerIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const CameraMicButton = styled.div`
  height: 75px;
  width: 75px;
  border-radius: var(--br-101xl);
  background-color: var(--color-sienna-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  box-sizing: border-box;
`;
const CameraActionBar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs-5) var(--padding-xl);
  position: relative;
  gap: var(--gap-63xl);
  font-size: var(--font-size-5xl);
  color: var(--primary-0);
  font-family: var(--font-sf-pro);
`;
const CameraBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-11xs);
  box-sizing: border-box;
  gap: var(--gap-5xl);
  max-width: 102%;
  flex-shrink: 0;
`;
const CameraBarWrapperRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xs) 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  margin-top: -27px;
  text-align: center;
  font-size: var(--caption-2-size);
  color: var(--label-secondary);
  font-family: var(--caption-2);
`;

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCameraModeButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-x-20");
  }, [navigate]);

  const onCameraActionButtonClick = useCallback(() => {
    navigate("/iphone-11-pro-x-19");
  }, [navigate]);

  return (
    <CameraBarWrapperRoot className={className}>
      <CameraBar>
        <Timeline1>
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
          <TimeStampWrapper>
            <TimeStamp>12:52:03 PM</TimeStamp>
          </TimeStampWrapper>
          <MulticamArchiveParent>
            <MulticamArchive>
              <Archive>
                <ArchiveBackground />
                <ArchiveActive />
              </Archive>
            </MulticamArchive>
            <NounStampWrapper>
              <NounStamp>noun</NounStamp>
            </NounStampWrapper>
          </MulticamArchiveParent>
        </Timeline1>
        <CameraActionBar>
          <CameraModeButtonWrapper>
            <CameraModeButton onClick={onCameraModeButtonClick}>
              <H>􀙨</H>
            </CameraModeButton>
          </CameraModeButtonWrapper>
          <CameraActionButton onClick={onCameraActionButtonClick}>
            <RecordCircle />
          </CameraActionButton>
          <CameraMicButton>
            <ContainerIcon loading="lazy" alt="" src="/container.svg" />
          </CameraMicButton>
        </CameraActionBar>
      </CameraBar>
    </CameraBarWrapperRoot>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const H = styled.h1`
  margin: 0;
  width: 17px;
  position: relative;
  font-size: var(--font-size-3xl);
  letter-spacing: -0.43px;
  line-height: 22px;
  font-weight: 500;
  font-family: var(--caption-2);
  text-align: center;
  display: inline-block;
  white-space: nowrap;
`;
const Label = styled.a`
  text-decoration: none;
  position: relative;
  letter-spacing: -0.08px;
  line-height: 18px;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 27px;
`;
const CameraStatusTags = styled.div`
  flex: 1;
  backdrop-filter: var(--material-regular);
  border-radius: var(--br-xs);
  background-color: var(--fill-primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-7xs);
`;
const Icon = styled.div`
  margin-top: -1px;
  position: relative;
  letter-spacing: -0.08px;
  line-height: 18px;
  font-weight: 600;
  display: inline-block;
  min-width: 15px;
`;
const Moon = styled.div`
  height: 16px;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CameraStatusTags1 = styled.div`
  flex: 1;
  backdrop-filter: var(--material-regular);
  border-radius: var(--br-2xs);
  background-color: var(--fill-primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-5xs);
`;
const Label1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.08px;
  line-height: 18px;
  font-weight: 600;
`;
const CameraStatusTags2 = styled.div`
  align-self: stretch;
  backdrop-filter: var(--material-regular);
  border-radius: var(--br-xs);
  background-color: var(--fill-primary);
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-7xs);
`;
const CameraStatusTags3 = styled.div`
  align-self: stretch;
  backdrop-filter: var(--material-regular);
  border-radius: var(--br-xs);
  background-color: var(--fill-primary);
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-7xs);
`;
const Parent1 = styled.div`
  width: 97px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  cursor: pointer;
  text-align: left;
  font-size: var(--caption-2-size);
`;
const Title = styled.div`
  width: 86px;
  position: relative;
  letter-spacing: -0.43px;
  line-height: 22px;
  font-weight: 600;
  display: none;
  white-space: nowrap;
`;
const Subtitle = styled.div`
  width: 50px;
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: -0.1px;
  line-height: 15px;
  font-weight: 600;
  color: var(--accent-green);
  display: none;
`;
const Label2 = styled.div`
  height: 22px;
  width: 36px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.43px;
  line-height: 24px;
  font-weight: 400;
  font-family: inherit;
  white-space: nowrap;
`;
const CameraSettings = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Icon1 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 6px);
  letter-spacing: -0.08px;
  line-height: 18px;
  font-weight: 600;
`;
const Moon1 = styled.div`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  @media screen and (max-width: 56px) {
    width: calc(100% - 40px);
  }
`;
const CameraStatusTags4 = styled.div`
  height: 22px;
  backdrop-filter: var(--material-regular);
  border-radius: var(--br-xs);
  background-color: var(--fill-primary);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-9xs) var(--padding-11xs)
    var(--padding-11xs);
  box-sizing: border-box;
  gap: var(--gap-10xs);
  text-align: left;
  font-size: var(--caption-2-size);
  color: var(--accent-yellow);
  font-family: var(--callout-bold);
`;
const CameraSettingsParent = styled.div`
  width: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-family: var(--caption-2);
`;
const NavigationBar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-38xl) var(--padding-mini) var(--padding-3xs)
    var(--padding-7xs);
  gap: var(--gap-xl);
`;
const Carrier = styled.div`
  width: 54px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const CellularConnectionIcon = styled.img`
  height: 10.7px;
  width: 16.8px;
  position: relative;
`;
const WifiIcon = styled.img`
  height: 11px;
  width: 15.2px;
  position: relative;
  min-height: 11px;
`;
const StatusBarIconsChild = styled.img`
  height: 10.3px;
  width: 23.6px;
  position: relative;
`;
const StatusBarIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  gap: var(--gap-7xs-2);
`;
const StatusBarIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-3) 0px 0px;
`;
const StatusBar1 = styled.header`
  margin-right: -11px;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-sm) var(--padding-base) var(--padding-xs)
    var(--padding-2xl);
  box-sizing: border-box;
  max-width: 107%;
  flex-shrink: 0;
  gap: var(--gap-xl);
  z-index: 1;
  margin-top: -91px;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--primary-0);
  font-family: var(--callout-bold);
`;
const NavigationBarParentRoot = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
  text-align: center;
  font-size: var(--body-bold-size);
  color: var(--primary-0);
  font-family: var(--callout-bold);
  padding: ${(p) => p.frameDivPadding};
`;

const FrameComponent5 = ({
  className = "",
  label,
  cameraStatusTags,
  frameDivPadding,
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/iphone-11-pro-x-17");
  }, [navigate]);

  return (
    <NavigationBarParentRoot
      frameDivPadding={frameDivPadding}
      className={className}
    >
      <NavigationBar>
        <Parent1 onClick={onFrameContainerClick}>
          <H>􀆉</H>
          <CameraStatusTags>
            <Label>LIVE</Label>
          </CameraStatusTags>
          <CameraStatusTags1>
            <Moon>
              <Icon>􀙇</Icon>
            </Moon>
          </CameraStatusTags1>
          {cameraStatusTags && (
            <CameraStatusTags2>
              <Label1>{label}</Label1>
            </CameraStatusTags2>
          )}
          <CameraStatusTags3>
            <Label1>LIVE</Label1>
          </CameraStatusTags3>
        </Parent1>
        <Label2>
          <Title>Front Door</Title>
          <Subtitle>Subtitle</Subtitle>
        </Label2>
        <CameraSettingsParent>
          <CameraSettings>
            <H1>􀍟</H1>
          </CameraSettings>
          <CameraStatusTags4>
            <Moon1>
              <Icon1>􀍟</Icon1>
            </Moon1>
            <Label1>UPDATE</Label1>
          </CameraStatusTags4>
        </CameraSettingsParent>
      </NavigationBar>
      <StatusBar1>
        <Carrier>9:41</Carrier>
        <StatusBarIconsWrapper>
          <StatusBarIcons>
            <CellularConnectionIcon
              loading="lazy"
              alt=""
              src="/cellular-connection.svg"
            />
            <WifiIcon loading="lazy" alt="" src="/wifi.svg" />
            <StatusBarIconsChild loading="lazy" alt="" src="/frame-239.svg" />
          </StatusBarIcons>
        </StatusBarIconsWrapper>
      </StatusBar1>
    </NavigationBarParentRoot>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  cameraStatusTags: PropTypes.bool,

  /** Style props */
  frameDivPadding: PropTypes.any,
};

export default FrameComponent5;

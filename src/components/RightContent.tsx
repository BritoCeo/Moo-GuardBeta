import styled from "styled-components";
import PropTypes from "prop-types";

const SettingsBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 22.2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-sienna-200);
  width: 161.2px;
  height: 34px;
`;
const Settings = styled.a`
  text-decoration: none;
  position: absolute;
  top: 3.2px;
  left: 0px;
  font-weight: 700;
  background: linear-gradient(90deg, #b89179, #524136);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  width: 190px;
  height: 30.8px;
  z-index: 1;
`;
const SettingsContainer = styled.div`
  height: 34px;
  width: 190px;
  position: relative;
`;
const LanguageSetting = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-41xl);
  text-align: center;
  font-size: var(--font-size-5xl);
  font-family: var(--font-inter);
`;
const ClaritylanguageLineIcon = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const SelectLanguage = styled.b`
  position: relative;
`;
const LanguageLabel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-xl) 0px 0px;
`;
const English = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 59px;
`;
const FrameChild = styled.img`
  height: 1px;
  width: 11px;
  position: absolute;
  margin: 0 !important;
  right: -11px;
  bottom: 7px;
  object-fit: contain;
`;
const EnglishParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs) 0px 0px;
  position: relative;
`;
const LocationSettingInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  text-align: center;
  font-size: var(--font-size-mini);
`;
const LocationSetting = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
`;
const LocationContainerChild = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  margin-top: -1px;
`;
const LocationContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-3xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Fa6SolidmapLocationDotIcon = styled.img`
  height: 24px;
  width: 27px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;
const LocationLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-base) 0px 0px;
`;
const Windhoek = styled.b`
  position: relative;
  display: inline-block;
  min-width: 78px;
`;
const WindhoekParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xs) 0px 0px;
  position: relative;
`;
const LocationLabelContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  text-align: right;
  font-size: var(--font-size-mini);
`;
const LocationLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  gap: var(--gap-xl);
`;
const TopRightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs-3);
  max-width: 100%;
`;
const RightContentRoot = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-comfortaa);
`;

const RightContent = ({ className = "" }) => {
  return (
    <RightContentRoot className={className}>
      <TopRightContent>
        <LanguageSetting>
          <SettingsContainer>
            <SettingsBackground />
            <Settings>Settings</Settings>
          </SettingsContainer>
        </LanguageSetting>
        <LocationSetting>
          <ClaritylanguageLineIcon
            loading="lazy"
            alt=""
            src="/claritylanguageline.svg"
          />
          <LanguageLabel>
            <SelectLanguage>Select Language</SelectLanguage>
          </LanguageLabel>
          <LocationSettingInner>
            <EnglishParent>
              <English>English</English>
              <FrameChild loading="lazy" alt="" src="/arrow-4.svg" />
            </EnglishParent>
          </LocationSettingInner>
        </LocationSetting>
        <LocationContainer>
          <LocationContainerChild loading="lazy" alt="" />
        </LocationContainer>
        <LocationLabelContainer>
          <Fa6SolidmapLocationDotIcon
            loading="lazy"
            alt=""
            src="/fa6solidmaplocationdot.svg"
          />
          <LocationLabel>
            <SelectLanguage>Select Location</SelectLanguage>
          </LocationLabel>
          <LocationLabelContainerInner>
            <WindhoekParent>
              <Windhoek>Windhoek</Windhoek>
              <FrameChild loading="lazy" alt="" src="/arrow-4.svg" />
            </WindhoekParent>
          </LocationLabelContainerInner>
        </LocationLabelContainer>
      </TopRightContent>
    </RightContentRoot>
  );
};

RightContent.propTypes = {
  className: PropTypes.string,
};

export default RightContent;

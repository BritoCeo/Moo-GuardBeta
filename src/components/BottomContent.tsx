import styled from "styled-components";
import PropTypes from "prop-types";

const HeroiconssunSolid = styled.img`
  height: 29px;
  width: 29px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 29px;
`;
const DarkTheme = styled.b`
  position: relative;
  display: inline-block;
  min-width: 127px;
`;
const ThemeLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const ThemeLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const NotificationSettingChild = styled.img`
  width: 30px;
  height: 16px;
  position: relative;
`;
const ThemeIconContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const DarkThemeContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const NotificationContentIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  margin-top: -1px;
`;
const ClaritylanguageLineIcon = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Notifications = styled.b`
  position: relative;
`;
const NotificationLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
`;
const NotificationIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-sm);
`;
const NotificationLabelContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NotificationContentParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const DarkThemeSetting = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const FluentpeopleSearch24RegulaIcon = styled.img`
  height: 25px;
  width: 25px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 25px;
`;
const AboutUs = styled.b`
  position: relative;
  display: inline-block;
  min-width: 94px;
`;
const AboutLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const AboutLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;
const AboutSetting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
`;
const AppearanceSettings = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const MenuBottom = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs) var(--padding-8xs) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const ShareIcons = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  margin-top: -1px;
  z-index: 1;
`;
const IcoutlineHeadsetMicIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const ContactUs = styled.b`
  position: relative;
  display: inline-block;
  min-width: 114px;
`;
const ContactLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;
const ContactFeedback = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
`;
const ReferRate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
`;
const MenuIcons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  max-width: 100%;
`;
const MenuTop = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs) var(--padding-8xs) var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FluentpersonFeedback24ReguIcon = styled.img`
  height: 33px;
  width: 33px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 33px;
`;
const Feedback = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 102px;
`;
const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px 0px;
`;
const FluentpersonFeedback24ReguParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const LineParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  max-width: 100%;
`;
const MenuTop1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs) 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const SignOutDivider = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  margin-top: -1px;
`;
const CharmshareIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const ReferTheAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const CharmshareParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-9xl);
`;
const MenuTop2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) var(--padding-10xs);
`;
const VectorIcon = styled.img`
  height: 21px;
  width: 22px;
  position: relative;
`;
const RateUs = styled.b`
  position: relative;
  display: inline-block;
  min-width: 77px;
`;
const VectorParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
`;
const MenuTop3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-smi) var(--padding-10xs);
`;
const SignOut = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  min-width: 88px;
`;
const SignOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs);
`;
const SignOut1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  gap: var(--gap-4xs);
`;
const Menu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const BottomContentRoot = styled.section`
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs) var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-comfortaa);
`;

const BottomContent = ({ className = "" }) => {
  return (
    <BottomContentRoot className={className}>
      <Menu>
        <MenuBottom>
          <AppearanceSettings>
            <DarkThemeSetting>
              <DarkThemeContainer>
                <ThemeIconContainer>
                  <ThemeLabelContainer>
                    <HeroiconssunSolid
                      loading="lazy"
                      alt=""
                      src="/heroiconssunsolid.svg"
                    />
                    <ThemeLabel>
                      <DarkTheme>Dark Theme</DarkTheme>
                    </ThemeLabel>
                  </ThemeLabelContainer>
                  <ThemeLabel>
                    <NotificationSettingChild
                      loading="lazy"
                      alt=""
                      src="/group-245.svg"
                    />
                  </ThemeLabel>
                </ThemeIconContainer>
              </DarkThemeContainer>
              <NotificationContentParent>
                <NotificationContentIcon loading="lazy" alt="" />
                <NotificationLabelContainer>
                  <NotificationIconContainer>
                    <ClaritylanguageLineIcon
                      loading="lazy"
                      alt=""
                      src="/claritylanguageline-1.svg"
                    />
                    <NotificationLabel>
                      <Notifications>Notifications</Notifications>
                    </NotificationLabel>
                  </NotificationIconContainer>
                </NotificationLabelContainer>
                <NotificationContentIcon loading="lazy" alt="" />
              </NotificationContentParent>
            </DarkThemeSetting>
            <AboutSetting>
              <AboutLabelContainer>
                <FluentpeopleSearch24RegulaIcon
                  loading="lazy"
                  alt=""
                  src="/fluentpeoplesearch24regular.svg"
                />
                <AboutLabel>
                  <AboutUs>About us</AboutUs>
                </AboutLabel>
              </AboutLabelContainer>
            </AboutSetting>
          </AppearanceSettings>
        </MenuBottom>
        <MenuTop>
          <MenuIcons>
            <ShareIcons alt="" />
            <ReferRate>
              <ContactFeedback>
                <IcoutlineHeadsetMicIcon
                  loading="lazy"
                  alt=""
                  src="/icoutlineheadsetmic.svg"
                />
                <ContactLabel>
                  <ContactUs>Contact us</ContactUs>
                </ContactLabel>
              </ContactFeedback>
            </ReferRate>
          </MenuIcons>
        </MenuTop>
        <MenuTop1>
          <LineParent>
            <NotificationContentIcon alt="" />
            <ReferRate>
              <FluentpersonFeedback24ReguParent>
                <FluentpersonFeedback24ReguIcon
                  loading="lazy"
                  alt=""
                  src="/fluentpersonfeedback24regular-1.svg"
                />
                <FeedbackWrapper>
                  <Feedback>Feedback</Feedback>
                </FeedbackWrapper>
              </FluentpersonFeedback24ReguParent>
            </ReferRate>
          </LineParent>
        </MenuTop1>
        <MenuTop1>
          <SignOutDivider loading="lazy" alt="" />
        </MenuTop1>
        <MenuTop2>
          <CharmshareParent>
            <CharmshareIcon loading="lazy" alt="" src="/charmshare.svg" />
            <ReferTheAppWrapper>
              <Notifications>Refer the App</Notifications>
            </ReferTheAppWrapper>
          </CharmshareParent>
        </MenuTop2>
        <NotificationContentIcon loading="lazy" alt="" />
        <MenuTop3>
          <VectorParent>
            <VectorIcon loading="lazy" alt="" src="/vector1.svg" />
            <ReferTheAppWrapper>
              <RateUs>Rate us</RateUs>
            </ReferTheAppWrapper>
          </VectorParent>
        </MenuTop3>
        <SignOut1>
          <NotificationContentIcon loading="lazy" alt="" />
          <SignOutContainer>
            <ContactFeedback>
              <IcoutlineHeadsetMicIcon
                loading="lazy"
                alt=""
                src="/akariconssignout.svg"
              />
              <ContactLabel>
                <SignOut>Sign out</SignOut>
              </ContactLabel>
            </ContactFeedback>
          </SignOutContainer>
        </SignOut1>
      </Menu>
    </BottomContentRoot>
  );
};

BottomContent.propTypes = {
  className: PropTypes.string,
};

export default BottomContent;

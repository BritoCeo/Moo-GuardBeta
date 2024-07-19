import styled from "styled-components";
import Form1 from "../components/Form1";
import SocialLogin from "../components/SocialLogin";

const LoginHere = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  z-index: 2;
`;
const LoginHereWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-13xl) 0px var(--padding-14xl);
`;
const WelcomeBackYouve = styled.p`
  margin: 0;
`;
const WelcomeBackYouveContainer = styled.h3`
  margin: 0;
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: inherit;
  z-index: 2;
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const Iphone11ProX14Inner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 69px 0px 63px;
`;
const Background = styled.div`
  position: absolute;
  top: -26px;
  left: -27.7px;
  backdrop-filter: blur(70px);
  width: 428px;
  height: 926px;
`;
const ObjectsIcon = styled.img`
  position: absolute;
  top: -382px;
  left: -392px;
  width: 1113.3px;
  height: 1431.3px;
  z-index: 1;
`;
const Subject1Icon = styled.img`
  position: absolute;
  top: 51px;
  left: 92.7px;
  width: 183px;
  height: 155px;
  object-fit: contain;
  z-index: 2;
`;
const BackgroundParent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const Placeholder = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 45px;
`;
const Input = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite-100);
  border: 2px solid var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-16xl) var(--padding-mid)
    var(--padding-xl);
`;
const Placeholder1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 78px;
`;
const Input1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-ghostwhite-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-16xl) var(--padding-xl)
    var(--padding-xl);
`;
const Inputs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
`;
const ForgotYourPassword = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-black);
`;
const Button = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  min-width: 69px;
`;
const Buttonactive = styled.div`
  align-self: stretch;
  box-shadow: 0px 10px 20px #cbd6ff;
  border-radius: var(--br-3xs);
  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-xl);
  white-space: nowrap;
`;
const Button1 = styled.div`
  position: relative;
  font-weight: 600;
`;
const Buttonsmall = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  white-space: nowrap;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-100);
`;
const Actions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  font-size: var(--font-size-xl);
  color: var(--primary-0);
`;
const Form = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  z-index: 2;
  font-size: var(--callout-bold-size);
  color: var(--color-dimgray-100);
`;
const Iphone11ProXRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--primary-0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 223px var(--padding-6xs) var(--padding-smi) var(--padding-3xs);
  box-sizing: border-box;
  gap: 8.5px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--callout-bold);
`;

const IPhone11ProX1 = () => {
  return (
    <Iphone11ProXRoot>
      <Iphone11ProX14Inner>
        <FrameParent>
          <LoginHereWrapper>
            <LoginHere>Login here</LoginHere>
          </LoginHereWrapper>
          <WelcomeBackYouveContainer>
            <WelcomeBackYouve>Welcome back you’ve</WelcomeBackYouve>
            <WelcomeBackYouve>been missed!</WelcomeBackYouve>
          </WelcomeBackYouveContainer>
        </FrameParent>
      </Iphone11ProX14Inner>
      <BackgroundParent>
        <Background />
        <ObjectsIcon alt="" src="/objects1.svg" />
        <Subject1Icon loading="lazy" alt="" src="/subject-11@2x.png" />
      </BackgroundParent>
      <Form>
        <Inputs>
          <Input>
            <Placeholder>Email</Placeholder>
          </Input>
          <Input1>
            <Placeholder1>Password</Placeholder1>
          </Input1>
        </Inputs>
        <ForgotYourPassword>Forgot your password?</ForgotYourPassword>
        <Actions>
          <Buttonactive>
            <Button>Sign in</Button>
          </Buttonactive>
          <Buttonsmall>
            <Button1>Create new account</Button1>
          </Buttonsmall>
        </Actions>
      </Form>
      <Form1 />
      <SocialLogin propAlignSelf="stretch" />
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX1;

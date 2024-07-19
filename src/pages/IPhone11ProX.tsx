import styled from "styled-components";
import Form from "../components/Form";
import SocialLogin from "../components/SocialLogin";

const Background = styled.div`
  position: absolute;
  top: -112px;
  left: -27.9px;
  backdrop-filter: blur(70px);
  width: 428px;
  height: 926px;
`;
const ObjectsIcon = styled.img`
  position: absolute;
  top: -468px;
  left: -348px;
  width: 1069.1px;
  height: 1417.1px;
  z-index: 1;
`;
const Subject1Icon = styled.img`
  position: absolute;
  top: 44px;
  left: 135px;
  width: 86px;
  height: 72px;
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
const CreateAccount = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 700;
  color: inherit;
  z-index: 2;
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 29px;
`;
const CreateAnAccount = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-black);
  white-space: pre-wrap;
  z-index: 2;
  margin-top: -12px;
`;
const TopForm = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-base) 0px 0px;
`;
const TopFormParent = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  max-width: 100%;
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
  padding: 116px var(--padding-6xs) var(--padding-sm);
  box-sizing: border-box;
  gap: 131px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-gray-300);
  font-family: var(--callout-bold);
`;

const IPhone11ProX = () => {
  return (
    <Iphone11ProXRoot>
      <BackgroundParent>
        <Background />
        <ObjectsIcon alt="" src="/objects.svg" />
        <Subject1Icon loading="lazy" alt="" src="/subject-1@2x.png" />
      </BackgroundParent>
      <TopFormParent>
        <TopForm>
          <AccountInfo>
            <CreateAccount>Create Account</CreateAccount>
          </AccountInfo>
          <CreateAnAccount>Create an account, if a new Farmer</CreateAnAccount>
        </TopForm>
        <Form />
      </TopFormParent>
      <SocialLogin />
    </Iphone11ProXRoot>
  );
};

export default IPhone11ProX;

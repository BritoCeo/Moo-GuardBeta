import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GuardingYourHerd = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
`;
const HerdTitle = styled.div`
  width: 354px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-2xs);
  box-sizing: border-box;
  max-width: 104%;
  flex-shrink: 0;
`;
const ProtectingYourLivestock = styled.div`
  width: 323px;
  position: relative;
  font-size: var(--font-size-sm);
  display: inline-block;
  max-width: 100%;
`;
const Texts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-smi);
  max-width: 100%;
`;
const HerdProtection = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Button = styled.a`
  text-decoration: none;
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--callout-bold);
  color: var(--color-whitesmoke-200);
  text-align: center;
  display: inline-block;
  min-width: 55px;
`;
const Buttonactive = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-33xl);
  background-color: var(--color-sienna-100);
  box-shadow: 0px 10px 20px #cbd6ff;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Button1 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--callout-bold);
  color: var(--color-gray-400);
  text-align: center;
  display: inline-block;
  min-width: 84px;
`;
const Buttondefault = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-19xl);
  background-color: var(--color-whitesmoke-200);
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ActionButtons = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const Actions = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-12xs);
`;
const FrameRoot = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-35xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  font-family: var(--callout-bold);
`;

const Frame = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonactiveClick = useCallback(() => {
    navigate("/iphone-11-pro-x-14");
  }, [navigate]);

  const onButtonDefaultClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <FrameRoot className={className}>
      <HerdProtection>
        <Texts>
          <HerdTitle>
            <GuardingYourHerd>
              Guarding Your Herd, One Moo at a Time!
            </GuardingYourHerd>
          </HerdTitle>
          <ProtectingYourLivestock>
            Protecting your livestock !
          </ProtectingYourLivestock>
        </Texts>
      </HerdProtection>
      <Actions>
        <ActionButtons>
          <Buttonactive onClick={onButtonactiveClick}>
            <Button>Login</Button>
          </Buttonactive>
          <Buttondefault onClick={onButtonDefaultClick}>
            <Button1>Register</Button1>
          </Buttondefault>
        </ActionButtons>
      </Actions>
    </FrameRoot>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;

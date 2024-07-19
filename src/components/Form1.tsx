import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Placeholder = styled.input`
  width: 45px;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--callout-bold);
  font-size: var(--callout-bold-size);
  background-color: transparent;
  height: 24px;
  position: relative;
  color: var(--color-dimgray-100);
  text-align: center;
  display: inline-block;
  padding: 0;
`;
const Input = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-100);
  border: 2px solid var(--color-sienna-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-xl);
`;
const Placeholder1 = styled.div`
  position: relative;
  font-size: var(--callout-bold-size);
  font-weight: 500;
  font-family: var(--callout-bold);
  color: var(--color-dimgray-100);
  text-align: center;
  display: inline-block;
  min-width: 78px;
`;
const Input1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl);
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
  width: 167px;
  position: relative;
  font-size: var(--font-size-sm);
  font-weight: 600;
  font-family: var(--callout-bold);
  color: var(--color-sienna-100);
  text-align: center;
  display: inline-block;
`;
const Button = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--callout-bold);
  color: var(--primary-0);
  text-align: center;
  display: inline-block;
  min-width: 69px;
  cursor: pointer;
`;
const Buttonactive = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-xl);
  background-color: var(--color-sienna-100);
  align-self: stretch;
  box-shadow: 0px 10px 20px #cbd6ff;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
const Button1 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  font-weight: 600;
  font-family: var(--callout-bold);
  color: var(--color-darkslategray-100);
  text-align: center;
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
  cursor: pointer;
`;
const FormRoot = styled.form`
  margin: 0;
  align-self: stretch;
  background-color: var(--primary-0);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  z-index: 3;
`;

const Form1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonTextClick = useCallback(() => {
    navigate("/iphone-11-pro-x-16");
  }, [navigate]);

  const onButtonsmall1ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <FormRoot className={className}>
      <Inputs>
        <Input>
          <Placeholder placeholder="Email" type="text" />
        </Input>
        <Input1>
          <Placeholder1>Password</Placeholder1>
        </Input1>
      </Inputs>
      <ForgotYourPassword>Forgot your password?</ForgotYourPassword>
      <Buttonactive>
        <Button onClick={onButtonTextClick}>Sign in</Button>
      </Buttonactive>
      <Buttonsmall onClick={onButtonsmall1ContainerClick}>
        <Button1>Create new account</Button1>
      </Buttonsmall>
    </FormRoot>
  );
};

Form1.propTypes = {
  className: PropTypes.string,
};

export default Form1;

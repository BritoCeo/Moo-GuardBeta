import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Placeholder = styled.input`
  width: 49px;
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
  background-color: var(--color-whitesmoke-200);
  border: 2px solid var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-xl);
`;
const Input1 = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--color-whitesmoke-200);
  align-self: stretch;
  height: 64px;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl);
  box-sizing: border-box;
  font-family: var(--callout-bold);
  font-weight: 500;
  font-size: var(--callout-bold-size);
  color: var(--color-dimgray-100);
  min-width: 214px;
`;
const Placeholder1 = styled.div`
  position: relative;
  font-size: var(--callout-bold-size);
  font-weight: 500;
  font-family: var(--callout-bold);
  color: var(--color-dimgray-100);
  text-align: center;
  display: inline-block;
  min-width: 45px;
`;
const Input2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-whitesmoke-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl);
`;
const Placeholder2 = styled.div`
  position: relative;
  font-size: var(--callout-bold-size);
  font-weight: 500;
  font-family: var(--callout-bold);
  color: var(--color-dimgray-100);
  text-align: center;
  display: inline-block;
  min-width: 78px;
`;
const Inputs = styled.div`
  width: 357px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  max-width: 105%;
  flex-shrink: 0;
`;
const Button = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--callout-bold);
  color: var(--primary-0);
  text-align: center;
  display: inline-block;
  min-width: 77px;
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
`;
const Actions = styled.div`
  width: 357px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 105%;
  flex-shrink: 0;
`;
const FormRoot = styled.form`
  margin: 0;
  align-self: stretch;
  height: 419px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  z-index: 2;
`;

const Form = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonTextClick = useCallback(() => {
    navigate("/iphone-11-pro-x-25");
  }, [navigate]);

  return (
    <FormRoot className={className}>
      <Inputs>
        <Input>
          <Placeholder placeholder="Name" type="text" />
        </Input>
        <Input1 placeholder="Farm License" type="text" />
        <Input2>
          <Placeholder1>Email</Placeholder1>
        </Input2>
        <Input2>
          <Placeholder2>Password</Placeholder2>
        </Input2>
        <Input1 placeholder="Confirm Password" type="text" />
      </Inputs>
      <Actions>
        <Buttonactive>
          <Button onClick={onButtonTextClick}>Sign up</Button>
        </Buttonactive>
        <Buttonsmall>
          <Button1>Already have an account</Button1>
        </Buttonsmall>
      </Actions>
    </FormRoot>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;

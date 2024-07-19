import styled from "styled-components";
import PropTypes from "prop-types";

const OrContinueWith = styled.div`
  width: 120px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  min-width: 120px;
`;
const PhgoogleLogoBoldIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const PhgoogleLogoBoldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Google = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-whitesmoke-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-lg);
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--gap-3xs);
`;
const SocialMedia1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  z-index: 2;
`;
const SocialLoginRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-52xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  font-family: var(--callout-bold);
  align-self: ${(p) => p.propAlignSelf};
`;

const SocialLogin = ({ className = "", propAlignSelf }) => {
  return (
    <SocialLoginRoot propAlignSelf={propAlignSelf} className={className}>
      <SocialMedia1>
        <OrContinueWith>Or continue with</OrContinueWith>
        <SocialMedia>
          <Google>
            <PhgoogleLogoBoldWrapper>
              <PhgoogleLogoBoldIcon
                loading="lazy"
                alt=""
                src="/phgooglelogobold.svg"
              />
            </PhgoogleLogoBoldWrapper>
          </Google>
          <Google>
            <PhgoogleLogoBoldWrapper>
              <PhgoogleLogoBoldIcon
                loading="lazy"
                alt=""
                src="/icsharpfacebook.svg"
              />
            </PhgoogleLogoBoldWrapper>
          </Google>
          <Google>
            <PhgoogleLogoBoldWrapper>
              <PhgoogleLogoBoldIcon
                loading="lazy"
                alt=""
                src="/icbaselineapple.svg"
              />
            </PhgoogleLogoBoldWrapper>
          </Google>
        </SocialMedia>
      </SocialMedia1>
    </SocialLoginRoot>
  );
};

SocialLogin.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default SocialLogin;

import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ContentChild = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  filter: blur(2px);
  border-radius: var(--br-5xl);
  background-color: var(--color-sienna-400);
`;
const VectorIcon = styled.img`
  width: 18px;
  height: 14px;
  position: relative;
  z-index: 1;
`;
const VectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-7xs);
`;
const ProfileSetUp = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.05em;
  line-height: 133.69%;
  font-weight: 700;
  font-family: inherit;
  z-index: 1;
`;
const FrameParent = styled.div`
  width: 227px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const AddMoreDetails = styled.div`
  position: relative;
  letter-spacing: 0.09em;
  z-index: 1;
`;
const AddMoreDetailsAboutYourLiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg) var(--padding-smi) var(--padding-4xl);
  font-size: var(--font-size-xs);
`;
const Name1 = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--primary-0);
  align-self: stretch;
  height: 35px;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-6xs) var(--padding-xs);
  box-sizing: border-box;
  font-family: var(--font-roboto);
  font-size: var(--font-size-xs);
  color: var(--color-black);
  min-width: 172px;
  z-index: 1;
`;
const DobChild = styled.div`
  height: 35px;
  width: 286px;
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: none;
`;
const NamlistId = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  color: var(--color-black);
  text-align: center;
  display: inline-block;
  min-width: 56px;
  z-index: 1;
`;
const SizeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const WeightDetailsIcon = styled.img`
  height: 22px;
  width: 20px;
  position: relative;
  z-index: 1;
`;
const Dob = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-7xs) var(--padding-3xs) var(--padding-6xs)
    var(--padding-4xs);
  gap: var(--gap-xl);
  z-index: 1;
`;
const SexChild = styled.div`
  height: 35px;
  width: 130px;
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: none;
`;
const NumberOfLivestock = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  color: var(--color-black);
  white-space: pre-wrap;
  text-align: center;
  display: inline-block;
  min-width: 115px;
  z-index: 1;
`;
const Sex = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-6xs) var(--padding-5xs);
  white-space: nowrap;
  z-index: 1;
`;
const TypeOfLivestock = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  color: var(--color-black);
  white-space: pre-wrap;
  text-align: center;
  display: inline-block;
  min-width: 97px;
  z-index: 1;
`;
const Bloodtype = styled.div`
  flex: 1;
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-smi) var(--padding-2xs);
  white-space: nowrap;
  z-index: 1;
`;
const LivestockAttributes = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
`;
const Height = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  color: var(--color-black);
  text-align: center;
  display: none;
  min-width: 36px;
`;
const SizeOfFarm = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  color: var(--color-black);
  text-align: center;
  display: inline-block;
  min-width: 67px;
  z-index: 2;
`;
const Height1 = styled.div`
  flex: 0.8909;
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-base) var(--padding-7xs);
  z-index: 1;
`;
const Weight = styled.div`
  width: 38px;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  color: var(--color-black);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  z-index: 1;
`;
const Weight1 = styled.div`
  flex: 1;
  border-radius: var(--br-7xs);
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-3xs) var(--padding-3xs);
  z-index: 1;
`;
const NextChild = styled.div`
  height: 31px;
  width: 71px;
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--color-black);
  display: none;
`;
const Next = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: 0.01em;
  line-height: 19px;
  font-weight: 500;
  font-family: var(--font-roboto);
  color: var(--color-whitesmoke-300);
  text-align: center;
  display: inline-block;
  min-width: 30px;
  z-index: 1;
`;
const VectorIcon1 = styled.img`
  width: 16px;
  height: 8px;
  position: relative;
  z-index: 1;
`;
const VectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
`;
const Next1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-7xs) var(--padding-3xs) var(--padding-7xs)
    var(--padding-2xs);
  background-color: var(--color-black);
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const LivestockDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xl-3);
`;
const NameParent = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const ContentRoot = styled.div`
  position: absolute;
  top: 244px;
  right: 16px;
  width: 346px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-9xl) var(--padding-7xl);
  box-sizing: border-box;
  gap: var(--gap-18xl);
  z-index: 2;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-roboto);
`;

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate("/iphone-11-pro-x-14");
  }, [navigate]);

  return (
    <ContentRoot className={className}>
      <ContentChild />
      <FrameParent>
        <VectorWrapper>
          <VectorIcon loading="lazy" alt="" src="/vector.svg" />
        </VectorWrapper>
        <ProfileSetUp>Profile Set-up</ProfileSetUp>
      </FrameParent>
      <AddMoreDetailsAboutYourLiWrapper>
        <AddMoreDetails>Add more details about your Livestock.</AddMoreDetails>
      </AddMoreDetailsAboutYourLiWrapper>
      <NameParent>
        <Name1 placeholder=" Name of Farm" type="text" />
        <LivestockDetails>
          <Dob>
            <DobChild />
            <SizeDetails>
              <NamlistId>Namlist ID</NamlistId>
            </SizeDetails>
            <WeightDetailsIcon alt="" src="/vector-1.svg" />
          </Dob>
          <LivestockAttributes>
            <Sex>
              <SexChild />
              <NumberOfLivestock>Number of LiveStock</NumberOfLivestock>
            </Sex>
            <Bloodtype>
              <SexChild />
              <TypeOfLivestock>Type of Livestock</TypeOfLivestock>
            </Bloodtype>
          </LivestockAttributes>
          <LivestockAttributes>
            <Height1>
              <Height>Height</Height>
              <SexChild />
              <SizeOfFarm>Size of Farm</SizeOfFarm>
            </Height1>
            <Weight1>
              <SexChild />
              <Weight>Weight</Weight>
            </Weight1>
          </LivestockAttributes>
          <Next1 onClick={onNextClick}>
            <NextChild />
            <Next>Next</Next>
            <VectorContainer>
              <VectorIcon1 alt="" src="/vector-2.svg" />
            </VectorContainer>
          </Next1>
        </LivestockDetails>
      </NameParent>
    </ContentRoot>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;

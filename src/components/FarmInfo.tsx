import styled from "styled-components";
import PropTypes from "prop-types";

const FarmImageOne = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-mini);
  background-color: var(--primary-0);
  width: 100%;
  height: 100%;
`;
const FarmImageTwo = styled.img`
  position: absolute;
  height: calc(100% - 26px);
  top: 13px;
  bottom: 13px;
  left: 12px;
  border-radius: var(--br-5xs);
  max-height: 100%;
  width: 80px;
  object-fit: cover;
  z-index: 1;
`;
const FarmImage = styled.div`
  width: 271px;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: -197px;
  bottom: 0px;
`;
const PeternakSugi = styled.div`
  width: 111px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const InspectedByFarms = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--color-gray-600);
  z-index: 1;
`;
const FarmName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const FarmButtonsChild = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  min-height: 14px;
  z-index: 1;
`;
const FarmButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-10xs);
`;
const FarmDetails = styled.div`
  width: 119px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const KmDariKamu = styled.div`
  align-self: stretch;
  width: 86px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const UserDistance = styled.div`
  align-self: stretch;
  height: 17px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  font-size: var(--caption-2-size);
`;
const LocationIconChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-sienna-100);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const LocationIconItem = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 16px;
  height: 16px;
  object-fit: contain;
  z-index: 2;
`;
const LocationIcon = styled.div`
  width: 34px;
  height: 34px;
  position: absolute;
  margin: 0 !important;
  right: -179px;
  bottom: 27px;
`;
const FarmInfoRoot = styled.div`
  width: 74px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lgi) 0px var(--padding-12xl) var(--padding-90xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-11xl);
  text-align: left;
  font-size: var(--callout-bold-size);
  color: var(--color-black);
  font-family: var(--callout-bold);
`;

const FarmInfo = ({ className = "" }) => {
  return (
    <FarmInfoRoot className={className}>
      <FarmImage>
        <FarmImageOne />
        <FarmImageTwo loading="lazy" alt="" src="/rectangle-471-1@2x.png" />
      </FarmImage>
      <FarmDetails>
        <FarmName>
          <PeternakSugi>Peternak Sugi</PeternakSugi>
          <InspectedByFarms>Inspected by Farms</InspectedByFarms>
        </FarmName>
        <FarmButtons>
          <FarmButtonsChild alt="" src="/group-128-1.svg" />
          <FarmButtonsChild alt="" src="/group-128-1.svg" />
          <FarmButtonsChild alt="" src="/group-128-1.svg" />
          <FarmButtonsChild alt="" src="/group-128-1.svg" />
        </FarmButtons>
      </FarmDetails>
      <UserDistance>
        <KmDariKamu>1.1km dari kamu</KmDariKamu>
      </UserDistance>
      <LocationIcon>
        <LocationIconChild />
        <LocationIconItem loading="lazy" alt="" src="/group-134-1@2x.png" />
      </LocationIcon>
    </FarmInfoRoot>
  );
};

FarmInfo.propTypes = {
  className: PropTypes.string,
};

export default FarmInfo;

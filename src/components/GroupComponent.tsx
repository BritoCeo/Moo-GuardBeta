import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  height: 166px;
  width: 271px;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--primary-0);
  display: none;
`;
const HerdImageIcon = styled.img`
  height: 140px;
  width: 80px;
  position: relative;
  border-radius: var(--br-5xs);
  object-fit: cover;
  z-index: 1;
`;
const GoatLocated = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  min-width: 118px;
  z-index: 1;
`;
const FarmspectInfoChild = styled.img`
  height: 14px;
  width: 14px;
  position: absolute;
  margin: 0 !important;
  right: 53px;
  bottom: -13px;
  z-index: 1;
`;
const InspectedByFarmspect = styled.div`
  position: relative;
  z-index: 2;
`;
const FarmspectInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  font-size: var(--caption-2-size);
  color: var(--color-darkgray-200);
`;
const HerdButtonsChild = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  min-height: 14px;
  z-index: 1;
`;
const HerdButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const HerdStatus = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs) 0px 0px;
  gap: var(--gap-12xs-5);
`;
const KmAway = styled.div`
  position: relative;
  display: inline-block;
  min-width: 68px;
  z-index: 1;
`;
const DistanceValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
`;
const DistanceIconChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-sienna-100);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const DistanceIconItem = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 16px;
  height: 16px;
  object-fit: contain;
  z-index: 2;
`;
const DistanceIcon = styled.div`
  height: 34px;
  width: 34px;
  position: relative;
`;
const HerdDistance = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  font-size: var(--font-size-xs);
`;
const HerdTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl);
`;
const HerdDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const RectangleParentRoot = styled.div`
  width: 271px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: var(--br-mini);
  background-color: var(--primary-0);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-mid);
  text-align: left;
  font-size: var(--callout-bold-size);
  color: var(--color-black);
  font-family: var(--callout-bold);
`;

const GroupComponent = ({ className = "" }) => {
  return (
    <RectangleParentRoot className={className}>
      <FrameChild />
      <HerdImageIcon loading="lazy" alt="" src="/rectangle-471@2x.png" />
      <HerdDetails>
        <HerdTitle>
          <HerdStatus>
            <GoatLocated>Goat Located !</GoatLocated>
            <FarmspectInfo>
              <FarmspectInfoChild alt="" src="/group-135.svg" />
              <InspectedByFarmspect>
                Inspected by Farmspect
              </InspectedByFarmspect>
            </FarmspectInfo>
            <HerdButtons>
              <HerdButtonsChild loading="lazy" alt="" src="/group-135.svg" />
              <HerdButtonsChild loading="lazy" alt="" src="/group-135.svg" />
              <HerdButtonsChild loading="lazy" alt="" src="/group-135.svg" />
              <HerdButtonsChild loading="lazy" alt="" src="/group-135.svg" />
            </HerdButtons>
          </HerdStatus>
          <HerdDistance>
            <DistanceValue>
              <KmAway>1,7km away</KmAway>
            </DistanceValue>
            <DistanceIcon>
              <DistanceIconChild />
              <DistanceIconItem loading="lazy" alt="" src="/group-134@2x.png" />
            </DistanceIcon>
          </HerdDistance>
        </HerdTitle>
      </HerdDetails>
    </RectangleParentRoot>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;

import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DaysInfoChild = styled.div`
  width: 137px;
  height: 41px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-whitesmoke-100);
  display: none;
  z-index: 1;
`;
const TheftFreeDays = styled.b`
  align-self: stretch;
  height: 19px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Days = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-weight: 700;
  color: inherit;
  z-index: 1;
`;
const DaysCount = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs);
  margin-top: -10px;
  font-size: var(--font-size-sm);
  color: var(--color-sienna-100);
`;
const DaysInfo = styled.div`
  width: 137px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-5xs) var(--padding-10xs)
    var(--padding-mini);
  box-sizing: border-box;
`;
const FarmInfoChild = styled.div`
  height: 37px;
  width: 159px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-whitesmoke-100);
  display: none;
`;
const OkamboroFarm = styled.b`
  position: relative;
  font-size: var(--callout-bold-size);
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: left;
  z-index: 1;
`;
const FarmInfo = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-5xs) var(--padding-xs) var(--padding-3xs);
  background-color: var(--color-whitesmoke-100);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
`;
const FarmInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const DaysInfoParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-20xl);
`;
const MarkerBackgroundChild = styled.div`
  height: 123px;
  width: 129px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-whitesmoke-200);
  display: none;
`;
const MapMarkerIcon = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  object-fit: contain;
  cursor: pointer;
  z-index: 1;
`;
const MarkerBackground = styled.div`
  flex: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-whitesmoke-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-sm) var(--padding-2xs)
    var(--padding-mini);
`;
const MarkerIcon = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-10xs) 0px 0px;
`;
const LiveTracking = styled.div`
  width: 125px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const MapPin = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const MapPinWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  min-width: 86px;
`;
const CameraBackground = styled.div`
  height: 123px;
  width: 129px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--br-12xl);
  background-color: var(--color-whitesmoke-100);
`;
const BulletCameraIcon = styled.img`
  height: 130px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  z-index: 1;
`;
const CameraIcons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const AiSurveillance = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
  display: inline-block;
  min-width: 109px;
`;
const SurveillanceLabel = styled.div`
  width: 109px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-111xl) 0px 0px;
  box-sizing: border-box;
  margin-left: -123px;
`;
const CameraIconsParent = styled.div`
  flex: 0.8986;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-sm) 0px 0px;
  box-sizing: border-box;
  min-width: 90px;
  @media screen and (max-width: 148px) {
    flex: 1;
  }
`;
const TrackingInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-28xl);
`;
const TrackingInfoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs);
  text-align: center;
  font-size: var(--font-size-mini);
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-14xl);
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMapMarkerImageClick = useCallback(() => {
    navigate("/iphone-11-pro-x-17");
  }, [navigate]);

  const onBulletCameraImageClick = useCallback(() => {
    navigate("/iphone-11-pro-x-18");
  }, [navigate]);

  return (
    <FrameParentRoot className={className}>
      <DaysInfoParent>
        <DaysInfo>
          <DaysInfoChild />
          <TheftFreeDays>Theft free Days:</TheftFreeDays>
          <DaysCount>
            <Days>10 days</Days>
          </DaysCount>
        </DaysInfo>
        <FarmInfoWrapper>
          <FarmInfo>
            <FarmInfoChild />
            <OkamboroFarm>Okamboro Farm</OkamboroFarm>
          </FarmInfo>
        </FarmInfoWrapper>
      </DaysInfoParent>
      <TrackingInfoWrapper>
        <TrackingInfo>
          <MapPinWrapper>
            <MapPin>
              <MarkerIcon>
                <MarkerBackground>
                  <MarkerBackgroundChild />
                  <MapMarkerIcon
                    loading="lazy"
                    alt=""
                    src="/map-marker@2x.png"
                    onClick={onMapMarkerImageClick}
                  />
                </MarkerBackground>
              </MarkerIcon>
              <LiveTracking>Live-Tracking</LiveTracking>
            </MapPin>
          </MapPinWrapper>
          <CameraIconsParent>
            <CameraIcons>
              <CameraBackground />
              <BulletCameraIcon
                loading="lazy"
                alt=""
                src="/bullet-camera@2x.png"
                onClick={onBulletCameraImageClick}
              />
            </CameraIcons>
            <SurveillanceLabel>
              <AiSurveillance>Ai Surveillance</AiSurveillance>
            </SurveillanceLabel>
          </CameraIconsParent>
        </TrackingInfo>
      </TrackingInfoWrapper>
    </FrameParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

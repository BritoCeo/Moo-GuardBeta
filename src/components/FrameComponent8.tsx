import styled from "styled-components";
import PropTypes from "prop-types";

const HeartIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Saved = styled.div`
  position: relative;
  line-height: 140%;
`;
const Saved1 = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Container = styled.div`
  height: 57px;
  width: 46px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HomeIndicator = styled.div`
  height: 5px;
  width: 134px;
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--primary-900);
`;
const Homeindicator = styled.div`
  flex: 1;
  background-color: var(--primary-0);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-xl) var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
`;
const Container1 = styled.footer`
  width: 390px;
  background-color: var(--primary-0);
  border-top: 1px solid var(--color-sienna-100);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-38xl) 0px 0px;
  max-width: 108%;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--primary-400);
  font-family: var(--callout-bold);
`;
const ContainerWrapperRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xs);
  box-sizing: border-box;
  max-width: 100%;
`;

const FrameComponent8 = ({ className = "" }) => {
  return (
    <ContainerWrapperRoot className={className}>
      <Container1>
        <Container>
          <Saved1>
            <HeartIcon alt="" src="/heart.svg" />
            <Saved>Saved</Saved>
          </Saved1>
        </Container>
        <Homeindicator>
          <HomeIndicator />
        </Homeindicator>
      </Container1>
    </ContainerWrapperRoot>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;

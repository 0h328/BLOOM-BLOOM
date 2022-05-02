import React from 'react';
import FlowerChooseText from '../components/Choose/FlowerChooseText'
import RoseContainer from '../containers/RoseContainer';
import TulipContainer from '../containers/TulipContainer';
import CarnationContainer from '../containers/CarnationContainer';
import FreesiaContainer from '../containers/FreesiaContainer';
import GerbaraContainer from '../containers/GerberaContainer';
import HyacinthContainer from '../containers/HyacinthContainer';
import LilyContainer from '../containers/LilyContainer';
import LisianthusContainer from '../containers/LisianthusContainer';
import PeonyContainer from '../containers/PeonyContainer';
import RanunculusContainer from '../containers/RanunculusContainer';

export default function flowerPage() {
  return (
    <>
      <FlowerChooseText></FlowerChooseText>
      <RoseContainer></RoseContainer>
      <TulipContainer></TulipContainer>
      <CarnationContainer></CarnationContainer>
      <FreesiaContainer></FreesiaContainer>
      <GerbaraContainer></GerbaraContainer>
      <HyacinthContainer></HyacinthContainer>
      <LilyContainer></LilyContainer>
      <LisianthusContainer></LisianthusContainer>
      <PeonyContainer></PeonyContainer>
      <RanunculusContainer></RanunculusContainer>
    </>
  );
}
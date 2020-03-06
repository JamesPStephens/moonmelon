import React from 'react';
import night from '../../assets/videos/video.mp4';
import * as S from './styles';

const BackgroundVideo = () => {
  return (
    <S.Wrapper>
      <video autoPlay="autoplay" loop="loop" muted reverse>
        <source src={night} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </S.Wrapper>
  );
};

export default BackgroundVideo;

import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(18, 18, 18, 1);
  .container-fluid {
    height: 100vh !important;
    color: white;
    font-style: italic;
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(18, 18, 18, 0.75);
    .flipped {
      -moz-transform: scale(1, -1);
      -webkit-transform: scale(1, -1);
      -o-transform: scale(1, -1);
      -ms-transform: scale(1, -1);
      transform: scale(1, -1);
      unicode-bidi: bidi-override;
      direction: rtl;
    }
    .lead {
      font-style: normal;
    }
  }
  .jumbotron {
    background-color: unset;
    h1 {
      color: #c6d65b;
    }
  }
`;

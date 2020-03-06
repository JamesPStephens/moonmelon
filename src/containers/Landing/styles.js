import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #35394d;
  .container-fluid {
    height: 100vh !important;
    color: white;
    font-style: italic;
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    text-align: center;
    .display-3 {
      margin-right: 5%;
    }
    h1 {
      color: #c6d65b;
      font-size: 3.5rem;
    }
    .flipped {
      -moz-transform: scale(1, -1);
      -webkit-transform: scale(1, -1);
      -o-transform: scale(1, -1);
      -ms-transform: scale(1, -1);
      transform: scale(1, -1);
      unicode-bidi: bidi-override;
       direction: rtl;
      margin-left: 5%;
    }
    .lead {
      font-style: normal;
      font-family: Rounded-Thin !important;
    }
  }
`;

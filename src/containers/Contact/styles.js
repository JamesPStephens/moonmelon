import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #efefef;
  .container-fluid {
    height: 60vh !important;
    color: black;
    text-align: center;
    margin: 0;
    padding: 0;
    .row {
      height: 100%;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
    .information {
      p {
        font-family: Rounded-Thin !important;
        margin: 0;
      }
    }
  }
`;

export const modalStyles = `
  .ReactModalPortal .row {
    padding: 0;
  }

  .ReactModalPortal .column {
    padding-right: 20px;
  }

  .ReactModalPortal input[type=text], 
  .ReactModalPortal textarea,
  .ReactModalPortal label {
    width: 100%;
  }

  .ReactModalPortal input[type=text],
  .ReactModalPortal textarea {
    border: 1px solid #b3b3b3;
    border-radius: 2px;
    margin-top: 5px;
    padding-left: 10px;
  }

  .ReactModalPortal input {
    height: 30px;
    width: 185px;
  }

  .ReactModalPortal textarea {
    height: 55px;
    padding-top: 10px;
    resize: none;
  }

  .ReactModalPortal > div > div {
    left: 0 !important;
    right: 0 !important;
    top: 65px !important;
    bottom: 0 !important;
    border: none !important;
    border-radius: 0 !important;
    -moz-box-shadow: 2px 2px 20px #333;
    -webkit-box-shadow: 2px 2px 20px #333;
    box-shadow: 2px 2px 20px #333;
  }

  @media screen and (min-width: 991px) {
    .ReactModalPortal > div > div {
      height: 430px !important;
      left: 250px !important;
      right: 250px !important;
      top: 150px !important;
      bottom: auto !important;
      border-radius: 4px !important;
    }
  }

  @media screen and (min-width: 1199px) {
    .ReactModalPortal > div > div {
      left: 350px !important;
      right: 350px !important;
    }
  }
  
  @media screen and (min-width: 1399px) {
    .ReactModalPortal > div > div {
      left: 450px !important;
      right: 450px !important;
    }
  }
`;

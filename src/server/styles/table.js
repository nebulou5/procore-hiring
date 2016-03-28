export const tableStyles = `

  table {
    border: 1px solid #676767;
    border-collapse: collapse;
    text-align: left; 
  }

  td {
    font-size: 12px; 
    vertical-align: middle;
  }

  th {
    font-size: 11px;
  }

  th:hover {
    background: #777;
    cursor: pointer;
    transition: all 250ms ease;
  }

  th:nth-of-type(5) {
    border-right: 1px solid #676767;
  }

  @media screen and (min-width: 991px) {
    th:nth-of-type(5) {
      border-right: 1px inset #e7e7e7;
    }
  }

  th, td {
    border: 1px inset #e7e7e7;
    font-weight: 100;
    padding: 10px 0 10px 15px; 
  }

`;

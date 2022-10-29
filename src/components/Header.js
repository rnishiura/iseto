import styled from "styled-components";

const Header = styled.div`
  background-color: #1b66e6;
  color: white;

  padding-bottom: 10px;

  * {
    margin: 0px;
    padding: 0px;
  }

  h1 {
    margin: 0px;
    padding: 0px;
  }
  h1 img {
    width: 100%;
    margin: 0px;
  }
  h2 {
    font-size: 31px;
    width: 100%;
    /* height: 50px; */
    padding: 0px;
    margin-top: 0px;
    /* margin-bottom: 20px; */
    text-align: center;
  }

  hr {
    border: white 3px solid;
  }
`;

export default Header;

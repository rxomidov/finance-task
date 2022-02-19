import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 1rem;
  background: #ffffff;
  color: ${({theme}) => theme.primary};
  backdrop-filter: blur(35px);
  border-radius: 4px;
  transition: var(--main-transition);
  
  .page-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border-bottom: 2px solid lightskyblue;
    .page-buttons{
      display: flex;
      margin-bottom:0px;
      //div{
      //  margin-left: 0.5rem;
      //}
    }
  }
`;
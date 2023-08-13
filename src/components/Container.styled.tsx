import styled from "styled-components";

type ContainerPropsType = {
    bg?: string
}
export const Container = styled.div<ContainerPropsType>`
  display: flex;
  //flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.bg || '#fff'};
  padding: 1rem;
  
  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`
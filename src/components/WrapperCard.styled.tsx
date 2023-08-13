import styled from "styled-components";

type WrapperCardPropsType ={
    bg?: string
}

export const WrapperCard = styled.div<WrapperCardPropsType>`
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #cccaca;
  display: flex;
  flex-direction: column;
  background: ${props => props.bg || '#fff'};
`
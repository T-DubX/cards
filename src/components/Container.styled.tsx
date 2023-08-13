import styled from "styled-components";

type ContainerPropsType = {
    bg?: string
}
export const Container = styled.div<ContainerPropsType>`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.bg || '#fff'};
`
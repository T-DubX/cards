import styled from "styled-components";

type CardBodyPropsType = {
    color?: string
}
export const CardBody = styled.p<CardBodyPropsType>`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.color || "#ABB3BA"};
  margin-bottom: 20px;
`
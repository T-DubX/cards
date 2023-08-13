import styled from "styled-components";

type CardTitlePropsType = {
    color?: string
}

export const CardTitle = styled.h2<CardTitlePropsType>`
  font-weight: bold;
  font-size: 16px;
  margin: 20px 0;
  color: ${props => props.color || '#000'}
`
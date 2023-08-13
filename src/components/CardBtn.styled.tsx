import styled, {css} from "styled-components";

type CardBtnPropsType = {
    /*primary?: boolean,
    secondary?: boolean*/
    btnType: 'primary' | 'secondary'
    color?: string
    bg?: string
    border?: string
    hoverColor?: string

}
export const CardBtn = styled.button<CardBtnPropsType>`
  padding: 0.5rem 0;
  font-weight: 700;
  border-radius: 5px;
  border: 2px solid ${props => props.border || props.bg || props.color || "#4E71FE"};
  width: 86px;
  cursor: pointer;
  
  
  
  ${props => props.btnType === 'primary' && css<CardBtnPropsType>`
    background-color: ${props => props.bg || "#4E71FE"};
    color: ${props => props.color || '#fff'};
    margin-right: 12px;
    transition:  background-color .1s linear;
  
    
    
    &:hover,
    &:focus {
      background-color: ${props => props.hoverColor || '#082081FF'};
      border-color: ${props => props.hoverColor || '#082081FF'};
    }
  `}
  
  ${props => props.btnType === 'secondary' && css<CardBtnPropsType>`
    background: transparent;
    color: ${props => props.color || "#4E71FE"};
    transition: color .1s linear;

    &:hover,
    &:focus {
      border-color: ${props => props.hoverColor || '#082081FF'};
      color: ${props => props.hoverColor || '#082081FF'};
    }

  `}
`

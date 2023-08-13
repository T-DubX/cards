import React from 'react';
import './App.css';
import {Container} from "./components/Container.styled";
import {WrapperCard} from "./components/WrapperCard.styled";
import { CardTitle } from './components/CardTitle.styled';
import { CardBody } from './components/CardBody.styled';
import {CardBtn} from "./components/CardBtn.styled";
import { WrapperBtn } from './components/WrapperBtn.styled';
import {myTheme} from "./styles/Theme.styled";
import img from './images/Rectangle.jpg'
import {ImagesCard} from "./components/ImagesCard.styled";



function App() {

  return (
      <Container bg={myTheme.colors.containerBg}>
          <WrapperCard>
              <ImagesCard src={img} alt=""/>
              <CardTitle>Headline</CardTitle>
              <CardBody>Faucibus. Faucibus. Sit sit sapien sit<br/> tempusrisu ut. Sit molestie ornare in venen.</CardBody>
              <WrapperBtn>
                  <CardBtn color={'white'} bg={'#008080'} hoverColor={'#016B6BFF'} btnType={'primary'}>See more</CardBtn>
                  <CardBtn color={'#008080'} bg={'#008080'} hoverColor={'#016B6BFF'} btnType={'secondary'}>Save</CardBtn>
              </WrapperBtn>

          </WrapperCard>
          <WrapperCard bg={myTheme.colors.wrapperCardBg}>
              <ImagesCard src={img} alt=""/>
              <CardTitle color={myTheme.colors.title}>Headline</CardTitle>
              <CardBody color={myTheme.colors.text} >Faucibus. Faucibus. Sit sit sapien sit<br/> tempusrisu ut. Sit molestie ornare in venen.</CardBody>
              <WrapperBtn>
                  <CardBtn color={myTheme.colors.btnPrimaryColor} bg={myTheme.colors.btnPrimaryBg} border={myTheme.colors.btnPrimaryBorder} hoverColor={myTheme.colors.hoverBtnColor} btnType={'primary'}>See more</CardBtn>
                  <CardBtn color={myTheme.colors.btnSecondaryColor} bg={myTheme.colors.btnSecondaryBg} border={myTheme.colors.btnSecondaryBorder} hoverColor={myTheme.colors.hoverBtnColor} btnType={'secondary'}>Save</CardBtn>
              </WrapperBtn>

          </WrapperCard>

          <WrapperCard bg={'#FF7800'}>
              <ImagesCard src={img} alt=""/>
              <CardTitle color={'#eceaea'}>Headline</CardTitle>
              <CardBody color={'#ecd6d6'} >Faucibus. Faucibus. Sit sit sapien sit<br/> tempusrisu ut. Sit molestie ornare in venen.</CardBody>
              <WrapperBtn>
                  <CardBtn color={'#ecd6d6'} bg={'#319D17'} hoverColor={'#1a6409'} btnType={'primary'}>See more</CardBtn>
                  <CardBtn color={'#ecd6d6'} border={'#319D17'} hoverColor={'#1a6409'} btnType={'secondary'}>Save</CardBtn>
              </WrapperBtn>

          </WrapperCard>
      </Container>
  );
}

export default App;

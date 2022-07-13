import React from 'react'
// import { Button } from '../ButtonElement'
// import styled from 'styled-components'
import {  InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img } from './MoreInfoElements'

const MoreInfo = ({ imgStart, topLine, headLine, description, primary, id, img, alt}) => {
  return (
    <>
        <InfoContainer id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{headLine}</Heading>
                            <Subtitle>{description}</Subtitle>
                            {/* <BtnWrap>
                                <BtnLink to='/signin' primary={primary ? 1 : 0}>{buttonLabel}</BtnLink>
                            </BtnWrap> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default MoreInfo
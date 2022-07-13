import React from 'react'
import styled from 'styled-components'
import Video from'../videos/lowerbody2.mp4'
import { Link as LinkR } from 'react-router-dom'

const UpperWrapper = styled.div`
display: flex;
overflow-y: scroll;
position: fixed;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
`
const UpperBox = styled.div`
background: white;
/* overflow-y: scroll; */
max-width: 1000px;
padding: 30px;
background: transparent;
margin-top: 250px;
/* @media screen and (max-width: 480px){
  margin-top: 50px;
} */
@media screen and (max-width: 380px){
  margin-top: 300px;
} 
`

const UpperH1 = styled.h1`
font-weight: 700;
font-size: 2rem;
color: black;
display: flex;
margin-top: 70px;
margin-bottom: 12px;
text-shadow: 2px 2px 0 white, 2px -2px 0 white, -2px 2px 0 white, -2px -2px 0 white, 2px 0px 0 white, 0px 2px 0 white, -2px 0px 0 white, 0px -2px 0 white;
@media screen and (max-width: 1280px){
  margin-top: 230px;
}
@media screen and (max-width: 1080px){
  margin-top: 430px;
}
@media screen and (max-width: 768px){
  margin-top: 200px;
}
@media screen and (max-width: 580px){
  margin-top: 450px;
}
@media screen and (max-width: 380px){
  margin-top: 500px;
  padding-left: 10px;
  padding-top: 10px;
}
@media screen and (max-width: 280px){
  margin-top: 600px;
  padding-left: 10px;
  padding-top: 10px;
}
`

const LowerH1 = styled.h1`
display: flex;
color: black;
font-size: 1.7rem;
padding: 20px;
text-shadow: 2px 2px 0 white, 2px -2px 0 white, -2px 2px 0 white, -2px -2px 0 white, 2px 0px 0 white, 0px 2px 0 white, -2px 0px 0 white, 0px -2px 0 white;
`
const UpperP1 = styled.p`
font-size: 1.3rem;
display: flex;
margin-bottom: 60px;
padding-top: 20px;
padding-right: 30px;
padding-left: 30px;
`

const UpperPhoto = styled.video`
height: 650px;
width: 700px;

@media screen and (max-width: 650px){
    height: 550px;
    width: 450px;
}
@media screen and (max-width: 480px){
    height: 300px;
    width: auto;
}
`;

const Home = styled(LinkR)`
justify-content: center;
align-items: center;
text-align: center;
display: flex;
border-radius: 20px;
width: 140px;
height: 40px;
background: white;
text-decoration: none;
font-weight: 700;
color: pink;

&:hover{
  color: white;
  background: pink; 
} `


function LowerBody() {
  return (
    <UpperWrapper>
        <UpperBox>
            <UpperH1>Effective Upper Body Workouts</UpperH1>
            <LowerH1>Squats</LowerH1>
            <UpperP1>Start standing with feet hip-distance apart, toes pointed out slightly. Keeping the head in line with the tailbone, shift hips back and bend at knees. Lower down until thighs are parallel with floor. Drive up through heels to return to standing. That's one rep. Perform 15, then continue on to your next move, resting as needed. After you've finished all of your exercises (three total), repeat the entire workout twice more for a total of three rounds.</UpperP1>
            <UpperPhoto autoPlay loop muted src={Video} type='video/mp4'></UpperPhoto>
            <UpperP1>If you want to get more awesome workouts like this please click here to continue...</UpperP1>
            <Home to='signin'>More ></Home>
        </UpperBox>
    </UpperWrapper>
  )
}

export default LowerBody
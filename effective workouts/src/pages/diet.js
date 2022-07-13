import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import img from '../images/diet.jpg'

const UpperWrapper = styled.div`
display: flex;
overflow-y: scroll;
position: fixed;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
`
const UpperBox = styled.div`
background: white;
/* overflow-y: scroll; */
max-width: 1000px;
padding: 30px;
background: transparent;
margin-top: 300px;
@media screen and (max-width: 480px){
  max-width: 400px; 
  margin-top: 950px;
}
@media screen and (max-width: 380px){
  margin-top: 1400px;
} 
@media screen and (max-width: 280px){
  max-width: 350px; 
  margin-top: 1600px;
}
`

const UpperH1 = styled.h1`
font-weight: 700;
font-size: 2rem;
color: black;
display: flex;
margin-top: 70px;
margin-bottom: 12px;
margin-left: 10px;
margin-right: 10px;
text-shadow: 2px 2px 0 white, 2px -2px 0 white, -2px 2px 0 white, -2px -2px 0 white, 2px 0px 0 white, 0px 2px 0 white, -2px 0px 0 white, 0px -2px 0 white;

`

const LowerH1 = styled.h1`
display: flex;
color: black;
font-size: 1.7rem;
padding: 20px;
text-shadow: 2px 2px 0 white, 2px -2px 0 white, -2px 2px 0 white, -2px -2px 0 white, 2px 0px 0 white, 0px 2px 0 white, -2px 0px 0 white, 0px -2px 0 white;
`
const UpperP1 = styled.p`
font-size: 1.1rem;
display: flex;
margin-bottom: 60px;
padding-top: 20px;
padding-right: 30px;
padding-left: 30px;

`

const UpperPhoto = styled.img`
height: 450px;
width: 700px;
margin-left: 40px;

@media screen and (max-width: 650px){
    height: 250px;
    width: 450px;
}
@media screen and (max-width: 480px){
    height: 200px;
    width: 250px;
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
color: lightseagreen;

&:hover{
  color: white;
  background: lightseagreen; 
} `


function Diet() {
  return (
    <UpperWrapper>
        <UpperBox>
            <UpperH1>Effective Upper Body Workouts</UpperH1>
            <LowerH1>Diet</LowerH1>
            <UpperP1>The purpose of post-workout nutrition is two-fold, firstly, to promote muscle recovery and secondly to replenish energy. Therefore, the focus should once again be on consuming good quality protein and carb foods.

As previously reflected on, the stress of training causes micro tears to occur to the muscles that must be repaired. So, consuming protein will cause a process known as muscle protein synthesis (MPS) to occur accordingly. It will also begin the repairing process and prevent muscle breakdown.

Furthermore, there is a widely held belief that protein timing is extremely important for maximizing growth. However, a number of recently based studies have indicated that total daily protein intake is of greater importance than the timing.

Therefore, High-protein foods such as lean beef, chicken, pork, turkey, eggs, dairy, seeds, quinoa, and nuts should be prioritized. Also, protein supplements, like protein shakes and bars, can serve as a convenient tool for effectively boosting protein intake.

Carbohydrates should also form part of post-workout nutrition as the energy that has been expended during exercise must be replaced. Your Gym Diet plan for muscle gain must include the necessary nutrients.

Also for a proper Gym diet plan, it is advised to consume protein and carbs together as this will have the most pronounced impact on recovery. Thus, this enhances protein and glycogen (energy) synthesis. Moreover, a ratio of 3:1 carb to protein is prescribed for optimizing recovery.</UpperP1>
            <UpperPhoto src={img} alt='diet'/>
            <UpperP1>If you want an ideal 7 day gym diet chart plan click here...</UpperP1>
            <Home to='signin'>More ></Home>
        </UpperBox>
    </UpperWrapper>
  )
}

export default Diet
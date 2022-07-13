import React from 'react'
import { ServicesContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesCard, ServicesH2, ServicesP } from '../Services/ServicesElements'
import Icon1 from '../../images/svg-upper.svg'
import Icon2 from '../../images/svg-lower.svg'
import Icon3 from '../../images/svg-diet.svg'
// import { Link as LinkR } from 'react-router-dom'

function Services() {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard to='upperbody'>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Upper-Body</ServicesH2>
                <ServicesP>Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.</ServicesP>
            </ServicesCard>
            <ServicesCard to='lowerbody'>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Lower-Body</ServicesH2>
                <ServicesP>Lower body workouts should target all the major muscles in your legs, including your calves, glutes, and hips. Many leg day exercises will also work to stabilize your core.<br/><br/></ServicesP>
            </ServicesCard>
            <ServicesCard to='dietmeal'>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Diet</ServicesH2>
                <ServicesP>Yet fueling up for activity is as easy as following the well-established rules of a healthy diet: Eat plenty of fruits and vegetables, consume lean proteins, eat healthy fats, get your whole-grain carbohydrates, and drink plenty of fluids, especially water.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
import React from 'react'
import FeaturedProducts from '../../../components/featured-products/FeaturedProducts'
import { IndexContainer, Intro, Content, CircleContainer, Circle, Inner } from './components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStore } from "@fortawesome/free-solid-svg-icons"
import "./style.css"


const Index = () => {
    return (
        <IndexContainer>
            <Intro>
                <Content>
                    <p>Shake with Happiness</p>
                    <span>Best Tasting Donuts</span>
                </Content>

                <CircleContainer>
                    <Circle>
                        <Inner>
                            <FontAwesomeIcon icon={faStore} className={'icon_color'} />
                            <p>Order Online</p>
                        </Inner>
                    </Circle>
                    <Circle>
                        <Inner>
                            <FontAwesomeIcon icon={faStore} className={'icon_color'} />
                            <p>Order Online</p>
                        </Inner>
                    </Circle>
                    <Circle>
                        <Inner>
                            <FontAwesomeIcon icon={faStore} className={'icon_color'} />
                            <p>Order Online</p>
                        </Inner>
                    </Circle>
                </CircleContainer>
            </Intro>
            <FeaturedProducts />
        </IndexContainer>
    )
}

export default Index
import React from "react"
import { FaRegHeart } from "react-icons/fa"
import styled from "styled-components"

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #fff;
  border-radius: 100%;
`

export const FeatureItem = () => {
  return (
    <div>
      <IconWrapper>
        <FaRegHeart />
      </IconWrapper>
      <h3>World Class Vets</h3>
      <p>
        Each and every one of us has that moment when we are suddenly stunned
        when we come face to face with the enormity of the universe.
      </p>
      <p>Learn more</p>
    </div>
  )
}

import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'

const MainContainer = styled.div`
  background: #0061a7;
  border-radius: 10px;
  padding: 24px;
`

const ItemDiv = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  display: flex;
  line-height: 1.1em;
`
const LabelDiv = styled.div`
  width: 80%;
`
const ValueDiv = styled.div`
  width: 20%;
`

const LPWorth = () => {
  const [hel3Bnb,setHel3Bnb] = useState(0)
  return (
    <MainContainer>
      <Heading color="text" size="xl" style={{ width:"100%",textAlign: "center" }}>Helium 3 LP Worth</Heading>
      <div style={{width: "80%",margin: "0 auto", marginTop: "3em"}}>
      <ItemDiv>
        <LabelDiv>
          Hel3-BNB
        </LabelDiv>
        <ValueDiv>
          ${ hel3Bnb }
        </ValueDiv>
      </ItemDiv>
        <ItemDiv>
          <LabelDiv>
            Hel3-BUSD
          </LabelDiv>
          <ValueDiv>
            ${ hel3Bnb }
          </ValueDiv>
        </ItemDiv>
      </div>
      </MainContainer>
    )
}
export default LPWorth
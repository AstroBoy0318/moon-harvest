import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'

const MainContainer = styled.div`
  background: #0061a7;
  grid-row-start: 2;
  grid-row-end: 5;
  border-radius: 10px;
  padding: 24px;
`

const ItemDiv = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`

const Announcement = () => {
  const [marketCap,setMarketCap] = useState("")
  return (
    <MainContainer>
      <Heading color="text" size="xl" style={{ width:"100%",textAlign: "center",marginTop: "10px" }}>Announcments</Heading>
      <div style={{width: "80%",margin: "0 auto", marginTop: "3em"}}>
        <ItemDiv>
          Market Cap: { marketCap }
        </ItemDiv>
      </div>
    </MainContainer>
  )
}
export default Announcement
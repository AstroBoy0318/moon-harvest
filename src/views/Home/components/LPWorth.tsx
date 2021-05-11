import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Card, Heading } from '@pancakeswap-libs/uikit'
import { useLPBnbamount1, useLPBnbamount2, useGetTotalSupply } from 'hooks/useTokenBalance'
import { useFarms, usePriceBnbBusd } from '../../../state/hooks'

const MainContainer = styled(Card)`
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

  const bnbPrice = usePriceBnbBusd();
  const bnbPricevalue = bnbPrice.toNumber()

  const lpBnb1 = useLPBnbamount1();  
  const lpBnbamount1 = lpBnb1.toNumber()

  const lptotalsupply1 = useGetTotalSupply();
  const lptotalsupplyamount1 = lptotalsupply1.toNumber()

  const lpprice1 = (bnbPricevalue*lpBnbamount1*2)/lptotalsupplyamount1
  const showlpprice1 = lpprice1 === 0?'0':lpprice1.toLocaleString('en-US', {minimumFractionDigits: 3});

  const lpBnb2 = useLPBnbamount2();  
  const lpBnbamount2 = lpBnb2.toNumber()

  const lptotalsupply2 = useGetTotalSupply();
  const lptotalsupplyamount2 = lptotalsupply2.toNumber()

  const lpprice2 = (lpBnbamount2*2)/lptotalsupplyamount2
  const showlpprice2 = lpprice2 === 0?'0':lpprice2.toLocaleString('en-US', {minimumFractionDigits: 3});


  return (
    <MainContainer>
      <Heading color="primary" size="xl" style={{ width:"100%",textAlign: "center" }}>Helium 3 LP Worth</Heading>
      <div style={{width: "80%",margin: "0 auto", marginTop: "3em"}}>
      <ItemDiv>
        <LabelDiv>
          Hel3-BNB
        </LabelDiv>
        <ValueDiv>
          ${ showlpprice1 }
        </ValueDiv>
      </ItemDiv>
        <ItemDiv>
          <LabelDiv>
            Hel3-BUSD
          </LabelDiv>
          <ValueDiv>
            ${ showlpprice2 }
          </ValueDiv>
        </ItemDiv>
      </div>
      </MainContainer>
    )
}
export default LPWorth
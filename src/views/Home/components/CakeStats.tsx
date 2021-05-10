import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  text-align: center;
  border-radius: 0;
  max-width: 400px !important;  
  /*width: min( 365px, 100% ) !important;*/
  // background-color:rgba(0,0,0,1);
  background-image: url('/images/stats_back.png');
  margin: auto !important;
  height: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: max-content;
    margin-top: 50px;
  }
  & *{
    font-family: "Trajan Pro";
    font-weight: bold;
    }
  `

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;  
  margin-right: 15px;
  margin-left: 15px;
  color: #f4dfab;
  & *{
    color: #f4dfab !important;
  }
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody style={{padding: "24px 10px",paddingBottom: "5px"}}>
        <Heading size="lg" mb="24px" color="#ceac27" style={{marginTop: '10px'}}>
          AOF Stats
        </Heading>
        <Row>
          <Text fontSize="14px" color="#f4dfab">Total AOF Supply</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px" color="#f4dfab">Total Minted</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="#f4dfab">Total Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px" color="#f4dfab">Circulating Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="#f4dfab">New AOF/block</Text>
          <Text bold fontSize="14px">{eggPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats

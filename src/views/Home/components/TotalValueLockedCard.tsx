import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
	margin-left: auto;
  margin-right: auto;
  width: 320px;
  height: 160px;
  text-align: center;
  border-radius: 0px;
  background-image: url('/images/smallcard_back.png');
  background-size: 100% 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: none;
  }
  & *{
    font-family: "Trajan Pro";
    font-weight: bold;
  }
`

const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  line-height: 1.1em;
  padding-top: 10px;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading color="black" size="sm">
          {TranslateString(999, 'Total Value Locked (TVL)')}
        </Heading>
	      <CardMidContent color="#7f080e">        
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
        </CardMidContent>
        <Heading color="black" size="sm" style={{ marginTop: "10px"}}>
	   	    Across all Farms and Pools
	      </Heading>
	    </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard

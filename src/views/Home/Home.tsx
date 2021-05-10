import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100px 30px;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 5px;
  padding-top: 0px;
  text-align: center;
  @media (max-width: 768px) {
    min-height: 3vw;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    background-size: 30px;
    height: 30px;
    padding-top: 0;
  }
`

const showtimer = styled.div`
  align-items: center;  
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center; 
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 8;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: 2/span 10;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: 2/span 10;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Label = styled.div`
  color: #ff0000;
  font-size: 20px;
  padding-bottom: 10px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page style={{backgroundImage: "url(/images/mainback_home.jpg)"}}>
      <Hero/>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
          <LotteryCard />
	      </Cards>
	      <CTACards>
          <TotalValueLockedCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
      </div>
    </Page>
  )
}

export default Home

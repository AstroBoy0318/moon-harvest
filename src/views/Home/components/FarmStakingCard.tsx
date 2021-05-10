import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/cardback_home.png');
  background-repeat: no-repeat;
  background-size:100% 100%;
  border-radius: 0;
  text-align: center;
  height: 360px;
  ${({ theme }) => theme.mediaQueries.sm}{
    height: 320px;
  }
  & *{
    font-family: "Trajan Pro";
    font-weight: bold;
  }
`

const Block = styled.div`
  margin-top: -25px;
  z-index: 1;
  position: relative;
`

const CardImage = styled.img`
  // box-shadow: -10px 10px 0 0 #d69f42;
  border-radius: 50%;
  margin-top: 5px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`

const Actions = styled.div`
  position: absolute;
  bottom: 12%;
  width: 88%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Left = styled.div`
  width: 45%;
  margin-right: 10%;
`

const Right = styled.div`
  width: 45%;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg" mb="24px"  color="#7f080e" style={{width: "7em", margin: "0 auto", fontFamily: "Trajan Pro", marginTop: '10px' }}>
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <CardImage src="/images/cardBack.png" alt="AOF logo" width={70}/>
        <Block>
 		      <Row>
		        <Left>
		          <CakeHarvestBalance earningsSum={earningsSum}/>
              <Label>AOF to Harvest</Label>
	            <Label>~${(eggPrice * earningsSum).toFixed(2)}</Label>
            </Left>
            <Right>
	            <CakeWalletBalance cakeBalance={cakeBalance} />
	            <Label>AOF in Wallet</Label>
	            <Label>~${(eggPrice * cakeBalance).toFixed(2)}</Label>
	          </Right>
	        </Row>
        </Block>

        <Actions>
          {account ? (
            <Button
              className="imgBtn"
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting AOF')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton className="imgBtn"/>
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard

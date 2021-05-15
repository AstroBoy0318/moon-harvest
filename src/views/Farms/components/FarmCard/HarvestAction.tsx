import React, { useContext, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useCanHarvest, useHarvest, useHarvestTime } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useStake from '../../../../hooks/useStake'
import { RefferalContext } from '../../../../contexts/RefferalContext'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestButton = styled(Button)`
  box-shadow: none !important;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { account } = useWallet()
  const { refferalAddress } = useContext(RefferalContext)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  const [canHarvest,setCanHarvest] = useState(false)

  /* useCanHarvest(pid).then((res)=>{
    setCanHarvest(res)
  }) */

  const [harvestTime,setHarvestTime] = useState(0)

  useHarvestTime(pid).then((res)=>{
    setHarvestTime(res)
    if(res === 0)
      setCanHarvest(true)
  })

  useEffect(()=>{
    if(harvestTime > 0)
    {
      setTimeout(()=> {
        setHarvestTime(harvestTime - 1)
      },1000)
    }
    if(harvestTime === 1)
    {
      setCanHarvest(true)
    }
  },[harvestTime])

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center" style={{marginTop: "-5px"}}>
      <Heading color={rawEarningsBalance === 0 ? 'text' : 'text'}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 10 ?
          <HarvestButton
            disabled={rawEarningsBalance === 0 || pendingTx || !canHarvest}
            size='sm'
            variant='secondary'
            marginBottom='15px'
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString(),(refferalAddress===""?account:refferalAddress))
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </HarvestButton>
          : null}
        <HarvestButton
          disabled={rawEarningsBalance === 0 || pendingTx || !canHarvest}
          onClick={async () => {
            setPendingTx(true)
            await onReward((refferalAddress===""?account:refferalAddress))
            setPendingTx(false)
          }}
        >
          {TranslateString(999, 'Harvest')}
        </HarvestButton>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction

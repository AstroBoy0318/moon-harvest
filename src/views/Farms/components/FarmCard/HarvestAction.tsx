import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

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
  background: url('/images/${({ disabled, color, theme }) => (disabled ? 'harvestbtn_back.png' : 'farmunlockbtn_back.png')}') !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat;
  padding-top: 5px;
  box-shadow: none !important;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center" style={{marginTop: "-5px"}}>
      <Heading color={rawEarningsBalance === 0 ? 'primary' : 'primary'} style={{fontFamily:"Por Siempre Gti", fontSize:"24px", marginTop: "1em"}}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 12 ?
          <HarvestButton
            disabled={rawEarningsBalance === 0 || pendingTx}
            size='sm'
            variant='secondary'
            marginBottom='15px'
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </HarvestButton>
          : null}
        <HarvestButton
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
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

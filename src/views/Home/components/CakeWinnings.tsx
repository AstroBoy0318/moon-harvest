import React from 'react'
import { useWallet } from "@binance-chain/bsc-use-wallet"
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { Text } from '@pancakeswap-libs/uikit'
import CardValue from './CardValue'
import { TranslateString } from '../../../utils/translateTextHelpers'

const CakeWinnings = () => {
	const { account } = useWallet()
  const { claimAmount } = useTotalClaim()
  if (!account) {
    return (
      <Text color="black" style={{ lineHeight: '30px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }
  return <CardValue value={getBalanceNumber(claimAmount)} />
}

export default CakeWinnings
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [  
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HE3-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9600971287A167560AF95fCeA1CeD86eDFe530e7',
    },
    tokenSymbol: 'HE3',
    tokenAddresses: {
      97: '',
      56: '0x9364d5DF826c588866D9eada82eCa5199539B2dc',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'HE3-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'HE3',
    tokenAddresses: {
      97: '',
      56: '0x9364d5DF826c588866D9eada82eCa5199539B2dc',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'HE3',
    lpAddresses: {
      97: '',
      56: '0x9364d5DF826c588866D9eada82eCa5199539B2dc', // EGG-BUSD LP
    },
    tokenSymbol: 'HE3',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      // 56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

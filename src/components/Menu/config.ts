import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  /* {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  }, */
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Craters',
    icon: 'PoolIcon',
    href: '/craters',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: 'Refferals',
    icon: 'GroupsIcon',
    href: '/refferals',
  },
  // {
  //   label: "Audits",
  //   icon: "AuditIcon",
  //   href: "https://docs.moonharvest.net/"
  // },
  {
    label: 'Features',
    icon: 'PriceGuardIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.moonharvest.net/untitled-1',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.moonharvest.net/automatic-burning',
      },
      {
        label: 'Referral Program',
        href: 'https://docs.moonharvest.net/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://docs.moonharvest.net/anti-whale',
      },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/address/0x8d9087a2B7E446bb69343542e1430E974f12a18F',
      },
      // {
      //   label: 'DappRadar',
      //   href: 'https://dappradar.com/binance-smart-chain/defi/moonharvest',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/moonharvest',
      // },
      // {
      //   label: 'LiveCoinWatch',
      //   href: 'https://www.livecoinwatch.com/price/PantherSwap-PANTHER',
      // },
      // {
      //   label: 'Vfat',
      //   href: 'https://vfat.tools/bsc/moonharvest/',
      // },
    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  /* {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  }, */
  // {
  //   label: 'Analytic',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pantherswap.info/',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pantherswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pantherswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pantherswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MoonHarvest/',
      },
      {
        label: 'Docs',
        href: 'https://docs.moonharvest.net/',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.moonharvest.net/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://moonharvestnet.medium.com',
      },
      // {
      //   label: 'Voting',
      //   href: '#',
      // },
    ],
  },
  /* {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  }, */
]

export default config

// Include JavaScript Functionality Here...

  import {
    TokenMATIC,
    TokenETH,
    TokenUSDT,
    NetworkBinanceSmartChain,
    NetworkEthereum,
    NetworkPolygon,
    WalletMetamask,
    ExchangeCoinbase,
    ExchangePancakeSwap,
    ExchangeBalancer,
    ExchangeBinance
  } from '@web3icons/react'
  
  const cryptoIcons = () => {
    return (
      <>
        <div>
          {/* Token Icons */}
          <TokenMATIC size={64} variant="branded" className="my-custom-class" />
          <TokenETH size={64} variant="branded" className="my-custom-class" />
          <TokenUSDT size={64} variant="branded" className="my-custom-class" />
        </div>
        <div>
          {/* Network Icons */}
          <NetworkEthereum
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          <NetworkPolygon
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          <NetworkPulsechain
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          <NetworkBinanceSmartChain
            size={64}
            variant="branded"
            className="my-custom-class"
          />
        </div>
        <div>
          {/* Wallet Icons */}
         
          <WalletMetamask
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          
        </div>
        <div>
          {/* Exchange Icons */}
          <ExchangeMexC
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          <ExchangeBalancer
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          <ExchangePancakeSwap
            size={64}
            variant="branded"
            className="my-custom-class"
          />
           <ExchangeCoinbase
            size={64}
            variant="branded"
            className="my-custom-class"
          />
          <ExchangeBinance
            size={64}
            variant="branded"
            className="my-custom-class"
          />
        </div>
      </>
    )
  }
  
  export default cryptoIcons
  
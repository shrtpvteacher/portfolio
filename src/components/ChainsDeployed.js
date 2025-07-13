// src/components/ChainsDeployed.js
import React from 'react';
import './ChainsDeployed.css'; // Optional: for custom styling

const chains = [
  {
    name: 'PulseChain',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/PulseChainLogoTransparent.png',
    link: 'https://pulsechain.com/',
  },
  {
    name: 'Binance Smart Chain',
    logo: 'https://seeklogo.com/images/B/binance-smart-chain-bsc-logo-446621D3D1-seeklogo.com.svg',
    link: 'https://www.bnbchain.org/',
  },
  {
    name: 'Arbitrum',
    logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg',
    link: 'https://arbitrum.io/',
  },
  {
    name: 'Sepolia (Ethereum Testnet)',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
    link: 'https://sepolia.etherscan.io/',
  },
  {
    name: 'Polygon',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
    link: 'https://polygon.technology/',
  },
];

const ChainsDeployed = () => {
  return (
    <section className="chains-deployed-section">
      <h2>🚀 Deployed Chains</h2>
      <div className="chains-container">
        {chains.map((chain) => (
          <a
            key={chain.name}
            href={chain.link}
            target="_blank"
            rel="noopener noreferrer"
            className="chain-item"
          >
            <img src={chain.logo} alt={`${chain.name} logo`} className="chain-logo" />
            <span>{chain.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ChainsDeployed;

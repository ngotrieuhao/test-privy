'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  console.log('NEXT_PUBLIC_APP_ID, ', process.env.NEXT_PUBLIC_APP_ID);
  console.log('NEXT_PUBLIC_CLIENT_ID, ', process.env.NEXT_PUBLIC_CLIENT_ID);
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_APP_ID || ''}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID || ''}
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          showWalletLoginFirst: false,
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        loginMethods: ['email', 'wallet'],
        defaultChain: {
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ['https://mainnet.infura.io/v3/'] },
          },
        },
        supportedChains: [
          {
            id: 1,
            name: 'Ethereum',
            nativeCurrency: {
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: {
              default: { http: ['https://mainnet.infura.io/v3/'] },
            },
          },
        ],
      }}
    >
      {children}
    </PrivyProvider>
  );
}

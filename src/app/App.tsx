'use client';
import { Player } from '@/player';
import { Header } from '@/components/Header';

export function App({ children }: React.PropsWithChildren) {
  return (
    <>
      <body>
        <Header />
        <main className='mainContainer'>
          <div>{children}</div>
        </main>
        <Player />
      </body>
    </>
  );
}

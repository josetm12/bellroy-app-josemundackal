import { ThemeToggler } from '@/components/theme-toggler';
import Game from '@/components/Game';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="nav fixed top-0 mb-4 flex w-full p-2 justify-end">
        <ThemeToggler />
      </div>
      <Game />
    </main>
  );
}

import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import WelcomeModal from './WelcomeModal';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomeModal />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

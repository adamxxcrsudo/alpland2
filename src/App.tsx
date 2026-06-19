import HeroSection from './components/HeroSection';
import SocialProofBar from './components/SocialProofBar';
import ProductPreview from './components/ProductPreview';
import AppPreview from './components/AppPreview';
import LaunchTimeline from './components/LaunchTimeline';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-alpine-950 text-white overflow-x-hidden">
      <HeroSection />
      <SocialProofBar />
      <ProductPreview />
      <AppPreview />
      <LaunchTimeline />
      <WaitlistCTA />
      <Footer />
    </div>
  );
}

export default App;

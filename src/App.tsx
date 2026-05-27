import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductCatalog from './components/ProductCatalog';
import CategoryDetail from './components/CategoryDetail';

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (route.startsWith('#/catalog/')) {
      const categoryId = route.replace('#/catalog/', '');
      return <CategoryDetail categoryId={categoryId} />;
    }
    
    if (route.startsWith('#/catalog')) {
      return <ProductCatalog />;
    }

    return (
      <>
        <Hero />
        <About />
        <Services />
        <Products />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-secondary/30">
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

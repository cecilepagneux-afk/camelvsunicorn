import Nav from './components/Nav';
import Hero from './components/Hero';
import Why from './components/Why';
import Approach from './components/Approach';
import ForWho from './components/ForWho';
import Model from './components/Model';
import Focus from './components/Focus';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#080c14] text-slate-100 font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Why />
      <Approach />
      <ForWho />
      <Model />
      <Focus />
      <Contact />
      <Footer />
    </div>
  );
}


import Nav from './components/Nav';
import Hero from './components/Hero';
import Why from './components/Why';
import AssessmentInvite from './components/AssessmentInvite';
import Approach from './components/Approach';
import ForWho from './components/ForWho';
import About from './components/About';
import Model from './components/Model';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#070d19] text-slate-100 font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Why />
      <AssessmentInvite />
      <Approach />
      <ForWho />
      <About />
      <Model />
      <Contact />
      <Footer />
    </div>
  );
}

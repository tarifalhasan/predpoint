import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Solutions from '@/components/Solutions/Solutions';
import dynamic from 'next/dynamic';
const ContactUs = dynamic(() => import('@/components/ContactUs/ContactUs'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <ContactUs />
      <Footer />
    </>
  );
}

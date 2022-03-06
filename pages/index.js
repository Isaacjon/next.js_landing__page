import Header from '../src/components/Header'
import Reviews from '../src/components/Reviews-section/Reviews'
import Download from '../src/components/download-section/Download'
import HowItWorks from '../src/components/how it works/HowItWorks'
import Number_Facts from '../src/components/Number&Facts/Number_Facts'
import MyTello from '../src/components/mytello/MyTello'
import Countries from '../src/components/countries/Countries'
import CheapCalls from '../src/components/cheap calls/CheapCalls'
import About from '../src/components/about us/About'
import Faqs from '../src/components/Faqs/Faqs'
import Support from '../src/components/support/Support'
import Footer from '../src/components/footer/Footer'
import FooterTop from '../src/components/footer/FooterTop'

export default function Home() {
  return (
    <div>
      <Header />
      <Reviews/>
      <Download />
      <HowItWorks />
      <Number_Facts />
      <MyTello />
      <Countries />
      <CheapCalls />
      <About />
      <Faqs />
      <Support />
      <FooterTop />
      <Footer />
    </div>
  )
}

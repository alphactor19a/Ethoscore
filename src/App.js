import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Contacts from './Contacts';
import Blog from './Blog';
import About from './About';
import Careers from './Careers';
import Footer from './Footer';
import Header from './Header';
import Tools from './Tools';
import Methodology from './Methodology';
import LiteracyEuropeWW3 from './LiteracyEuropeWW3';
import LiteracyGermanyNazis from './LiteracyGermanyNazis';
import LiteracyKenyaAbortion from './LiteracyKenyaAbortion';
import LiteracyUSSoftPower from './LiteracyUSSoftPower';
import LiteracyTrumpEnvironment from './LiteracyTrumpEnvironment';
import LiteracyViatrisFraud from './LiteracyViatrisFraud';
import LiteracyTropicalForest from './LiteracyTropicalForest';
import LiteracyPutinRoulette from './LiteracyPutinRoulette';
import LiteracyStockCrash from './LiteracyStockCrash';
import LiteracySloveniaConspiracy from './LiteracySloveniaConspiracy';
import LiteracyBlackrod from './LiteracyBlackrod';
import LiteracyZuckerberg from './LiteracyZuckerberg';
import LiteracyTrumpBidenStocks from './LiteracyTrumpBidenStocks';
import LiteracyRomaniaHungary from './LiteracyRomaniaHungary';
import LiteracyAfghanistan from './LiteracyAfghanistan';
import LiteracyStalinBJP from './LiteracyStalinBJP';
import LiteracyTrumpPutinStocks from './LiteracyTrumpPutinStocks';
import LiteracyRFKVaccine from './LiteracyRFKVaccine';
import LiteracyAmazonSpaceX from './LiteracyAmazonSpaceX';
import LiteracyGuernica from './LiteracyGuernica';
import LiteracySyriaTrump from './LiteracySyriaTrump';
import LiteracyRedfin from './LiteracyRedfin';
import LiteracyUKTrade from './LiteracyUKTrade';
import LiteracyCarbonSingapore from './LiteracyCarbonSingapore';
import LiteracyUNIFIL from './LiteracyUNIFIL';
import LiteracyPopeLeo from './LiteracyPopeLeo';
import LiteracyAbuDhabiJapan from './LiteracyAbuDhabiJapan';
import LiteracySADCCongo from './LiteracySADCCongo';
import LiteracyParaguayIndia from './LiteracyParaguayIndia';
import LiteracyRichemont from './LiteracyRichemont';
import imageGenerationFeedbackImage from './Gemini Generated Image (6).png';

function TestimonialsSection() {
  const [hasSpilled, setHasSpilled] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Observe the sticky section itself (cardsRef), not the outer container
    if (!cardsRef.current || hasSpilled) return;

    const handleScroll = () => {
      if (hasSpilled) return;
      
      const rect = cardsRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Trigger when cards are 35% visible from above - using higher threshold to trigger earlier
      // Using 68% of viewport height so animation starts a bit later
      const entryThreshold = viewportHeight * 0.68;
      
      // Trigger when the top of the cards crosses the threshold from above
      if (rect.top <= entryThreshold) {
        setHasSpilled(true);
      }
    };

    // Check immediately in case already past threshold
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hasSpilled]);

  const testimonials = [
    {
      text: (
        <>
          A <span style={{backgroundColor: '#c8e6c9', display: 'inline'}}>comprehensive study</span> published in Nature Climate Change reveals that global average temperatures have increased by 1.1°C since pre-industrial levels, with the rate of warming accelerating over the past decade.
          <br/><br/>
          The research <span style={{backgroundColor: '#c8e6c9', display: 'inline'}}>analyzed temperature data</span> from 1850 to 2023 and <span style={{backgroundColor: '#c8e6c9', display: 'inline'}}>found the warming trend consistent</span> across all major climate indicators.
        </>
      ),
      author: "New Climate Report Shows Accelerating Global Warming Trends"
    },
    {
      text: (
        <>
          The world is <span style={{backgroundColor: '#fff9c4', display: 'inline'}}>hurtling toward climate catastrophe</span> as new data reveals that global temperatures are rising at an <span style={{backgroundColor: '#fff9c4', display: 'inline'}}>alarming rate</span>, threatening to push the planet past <span style={{backgroundColor: '#fff9c4', display: 'inline'}}>critical tipping points</span>.
          <br/><br/>
          Scientists are <span style={{backgroundColor: '#fff9c4', display: 'inline'}}>sounding the alarm</span> over an accelerating climate emergency, with temperature records being <span style={{backgroundColor: '#fff9c4', display: 'inline'}}>shattered</span> year after year across the globe.
        </>
      ),
      author: "Climate Crisis Deepens as Global Temperatures Soar"
    },
    {
      text: (
        <>
          The Earth is <span style={{backgroundColor: '#ffcccc', display: 'inline'}}>literally burning</span> as temperatures <span style={{backgroundColor: '#ffcccc', display: 'inline'}}>skyrocket</span> to unprecedented, life-threatening levels that could trigger the <span style={{backgroundColor: '#ffcccc', display: 'inline'}}>complete collapse of human civilization</span>!
          <br/><br/>
          We are witnessing the <span style={{backgroundColor: '#ffcccc', display: 'inline'}}>DEATH OF OUR PLANET</span> in real-time - a <span style={{backgroundColor: '#ffcccc', display: 'inline'}}>nightmarish scenario</span> where rising temperatures are creating an <span style={{backgroundColor: '#ffcccc', display: 'inline'}}>uninhabitable hellscape</span> that will make large portions of Earth completely unlivable!
        </>
      ),
      author: "CLIMATE APOCALYPSE: Planet on Brink of Total Collapse"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="cards-section"
      style={{
        width: 556,
        minHeight: '442px',
        position: 'relative',
        marginTop: 48
      }}
    >
      <div 
        ref={cardsRef}
        className={`cards ${hasSpilled ? 'spill' : ''}`}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="card-wrap"
            data-index={index + 1}
          >
            <div className="card" style={{
              width: '100%',
              height: '100%',
              padding: 8,
              background: 'white',
              borderRadius: 20,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              display: 'inline-flex',
              position: 'relative'
            }}>
              {/* Corner dots */}
              <div style={{
                position: 'absolute',
                top: 13,
                left: 13,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1C1917',
                zIndex: 1
              }} />
              <div style={{
                position: 'absolute',
                top: 13,
                right: 13,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1C1917',
                zIndex: 1
              }} />
              <div style={{
                position: 'absolute',
                bottom: 13,
                left: 13,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1C1917',
                zIndex: 1
              }} />
              <div style={{
                position: 'absolute',
                bottom: 13,
                right: 13,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1C1917',
                zIndex: 1
              }} />
              <div style={{alignSelf: 'stretch', flex: '1 1 0', padding: 13, borderRadius: 16, border: '1px var(--color-grey-91, #E5E7EB) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 348, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                  {/* Author name at the top */}
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-10, #1C1917)', fontSize: 18, fontFamily: 'SF Pro Text', fontWeight: '500', lineHeight: '27px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                      {testimonial.author}
                    </div>
                  </div>
                  {/* Testimonial text */}
                  <div style={{alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{
                      alignSelf: 'stretch', 
                      color: 'var(--color-grey-32, #57534E)', 
                      fontSize: 18, 
                      fontFamily: 'Klim Type Foundry', 
                      fontWeight: '400', 
                      lineHeight: '21.60px', 
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      ...(typeof testimonial.text === 'string' ? {
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        whiteSpace: 'pre-line'
                      } : {})
                    }}>
                      {testimonial.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  // Map URL paths to page names
  const getPageFromPath = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '') return 'home';
    // Remove leading slash and convert to page name
    const page = path.slice(1).replace(/\//g, '-');
    return page || 'home';
  };

  // Map page names to URL paths
  const getPathFromPage = (page) => {
    if (page === 'home') return '/';
    return `/${page}`;
  };

  const [currentPage, setCurrentPage] = useState(() => getPageFromPath());
  const [isRhetoricalHover, setIsRhetoricalHover] = useState(false);
  const isNavigatingRef = React.useRef(false);

  // Sync URL with page state when currentPage changes (but not on initial mount or popstate)
  useEffect(() => {
    // Skip if this is from a popstate event (handled separately)
    if (isNavigatingRef.current) {
      isNavigatingRef.current = false;
      return;
    }
    
    const path = getPathFromPage(currentPage);
    const currentPath = window.location.pathname;
    
    // Only update URL if it's different (avoid unnecessary updates)
    if (currentPath !== path) {
      window.history.pushState({ page: currentPage }, '', path);
    }
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      isNavigatingRef.current = true; // Flag to prevent URL update in other useEffect
      const page = event.state?.page || getPageFromPath();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Enhanced navigate function that updates both state and URL
  const handleNavigate = (page) => {
    setCurrentPage(page);
    const path = getPathFromPage(page);
    window.history.pushState({ page }, '', path);
  };

  // If on contacts page, show Contacts component
  if (currentPage === 'contact') {
    return <Contacts onNavigate={handleNavigate} />;
  }

  // If on about page, show About component
  if (currentPage === 'about') {
    return <About onNavigate={handleNavigate} />;
  }

  // If on blog page, show Blog component
  if (currentPage === 'blog') {
    return <Blog onNavigate={handleNavigate} />;
  }

  // If on literacy page, show Careers component
  if (currentPage === 'literacy') {
    return <Careers onNavigate={handleNavigate} />;
  }

  // If on literacy article page, show LiteracyEuropeWW3 component
  if (currentPage === 'literacy-europe-ww3') {
    return <LiteracyEuropeWW3 onNavigate={handleNavigate} />;
  }

  // Alarmist article pages
  if (currentPage === 'literacy-germany-nazis') {
    return <LiteracyGermanyNazis onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-kenya-abortion') {
    return <LiteracyKenyaAbortion onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-us-soft-power') {
    return <LiteracyUSSoftPower onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-trump-environment') {
    return <LiteracyTrumpEnvironment onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-viatris-fraud') {
    return <LiteracyViatrisFraud onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-tropical-forest') {
    return <LiteracyTropicalForest onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-putin-roulette') {
    return <LiteracyPutinRoulette onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-stock-crash') {
    return <LiteracyStockCrash onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-slovenia-conspiracy') {
    return <LiteracySloveniaConspiracy onNavigate={handleNavigate} />;
  }

  // Loaded article pages (Batch 2)
  if (currentPage === 'literacy-blackrod') {
    return <LiteracyBlackrod onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-zuckerberg') {
    return <LiteracyZuckerberg onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-trump-biden-stocks') {
    return <LiteracyTrumpBidenStocks onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-romania-hungary') {
    return <LiteracyRomaniaHungary onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-afghanistan') {
    return <LiteracyAfghanistan onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-stalin-bjp') {
    return <LiteracyStalinBJP onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-trump-putin-stocks') {
    return <LiteracyTrumpPutinStocks onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-rfk-vaccine') {
    return <LiteracyRFKVaccine onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-amazon-spacex') {
    return <LiteracyAmazonSpaceX onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-guernica') {
    return <LiteracyGuernica onNavigate={handleNavigate} />;
  }

  // Neutral article pages (Batch 3)
  if (currentPage === 'literacy-syria-trump') {
    return <LiteracySyriaTrump onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-redfin') {
    return <LiteracyRedfin onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-uk-trade') {
    return <LiteracyUKTrade onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-carbon-singapore') {
    return <LiteracyCarbonSingapore onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-unifil') {
    return <LiteracyUNIFIL onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-pope-leo') {
    return <LiteracyPopeLeo onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-abu-dhabi-japan') {
    return <LiteracyAbuDhabiJapan onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-sadc-congo') {
    return <LiteracySADCCongo onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-paraguay-india') {
    return <LiteracyParaguayIndia onNavigate={handleNavigate} />;
  }
  if (currentPage === 'literacy-richemont') {
    return <LiteracyRichemont onNavigate={handleNavigate} />;
  }

  // If on methodology page, show Methodology component
  if (currentPage === 'methodology') {
    return <Methodology onNavigate={handleNavigate} />;
  }

  // If on tool page, show Tools component
  if (currentPage === 'tool') {
    return <Tools onNavigate={handleNavigate} />;
  }

  // Original landing page
  return (
    <div style={{width: '100%', minHeight: '100vh', background: 'transparent', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative', zIndex: 2}}>
      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 23px, #E7E5E4 23px, #E7E5E4 24px)', backgroundPosition: '0 0', backgroundSize: '100% 24px'}}>
        <div style={{width: 528, minHeight: 893, paddingRight: 1, borderRight: '1px var(--color-grey-90, #E7E5E4) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative'}}>
          
          {/* Header Section */}
          <Header currentPage={currentPage} onNavigate={handleNavigate} />

          {/* Hero Section */}
          <div style={{alignSelf: 'stretch', paddingTop: 8, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 120, display: 'flex'}}>
            {/* Hero Text with Side Images */}
            <div style={{alignSelf: 'stretch', paddingRight: 8, paddingTop: 40, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
              {/* Windmill on the left side of title */}
              <div style={{width: 320, left: -360, top: 20, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', zIndex: 1}}>
                <img style={{width: '100%', height: 'auto', maxWidth: 320, position: 'relative'}} src="/windmill_no_reeds.png" alt="Windmill" />
              </div>
              
              {/* Tree on the right side of title */}
              <div style={{width: 350, right: -300, top: 40, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', zIndex: 1}}>
                <img style={{width: '100%', height: 'auto', maxWidth: 350, position: 'relative'}} src="/tree1.png" alt="Tree" />
              </div>

              <div style={{alignSelf: 'stretch', paddingTop: 0, paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative', zIndex: 2}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 40.70, fontFamily: 'Klim Type Foundry', fontWeight: '550', lineHeight: '48px', wordWrap: 'break-word'}}>
                    Sense the pattern between<br/>words and meaning.
                  </div>
                </div>
              </div>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative', zIndex: 2}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>
                  Discover the hidden bias patterns and rhetorical framing in your news. Use Ethoscore to uncover how media shapes your perspective; so you can think for yourself.
                </div>
              </div>
              <div style={{alignSelf: 'stretch', paddingTop: 8, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', position: 'relative', zIndex: 2}}>
                <div 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('tool');
                  }}
                  style={{paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#1C1917', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer'}}
                >
                  <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-white-solid, white)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>Try for yourself</div>
                </div>
                <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#D6D3D1', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', gap: 6}}>
                  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 190.5 190.5" style={{width: 16, height: 16}}>
                    <path fill="#1C1917" d="M95.252 142.873c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z"/>
                    <path fill="#229342" d="m54.005 119.07-41.24-71.43a95.227 95.227 0 0 0-.003 95.25 95.234 95.234 0 0 0 82.496 47.61l41.24-71.43v-.011a47.613 47.613 0 0 1-17.428 17.443 47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z"/>
                    <path fill="#fbc116" d="m136.495 119.067-41.239 71.43a95.229 95.229 0 0 0 82.489-47.622A95.24 95.24 0 0 0 190.5 95.248a95.237 95.237 0 0 0-12.772-47.623H95.249l-.01.007a47.62 47.62 0 0 1 23.819 6.372 47.618 47.618 0 0 1 17.439 17.431 47.62 47.62 0 0 1-.001 47.633z"/>
                    <path fill="#1a73e8" d="M95.252 132.961c20.824 0 37.705-16.881 37.705-37.706S116.076 57.55 95.252 57.55 57.547 74.431 57.547 95.255s16.881 37.706 37.705 37.706z"/>
                    <path fill="#e33b2e" d="M95.252 47.628h82.479A95.237 95.237 0 0 0 142.87 12.76 95.23 95.23 0 0 0 95.245 0a95.222 95.222 0 0 0-47.623 12.767 95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633 47.61 47.61 0 0 1 41.252-23.815z"/>
                  </svg>
                  <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-10, #1C1917)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>Extension</div>
                </div>
              </div>
            </div>

            {/* Top Protocols Section */}
            <div style={{alignSelf: 'stretch', minHeight: 983.59, position: 'relative', paddingBottom: 0, paddingTop: 60}}>
              {/* Testimonials Section */}
              <div style={{paddingTop: 54}}>
                <TestimonialsSection />
              </div>

            {/* Methodology Section */}
            <div style={{alignSelf: 'stretch', paddingRight: 8, paddingTop: 0, marginTop: -20, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingTop: 0, paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative', zIndex: 2}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', marginTop: 24}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 28, fontFamily: 'Klim Type Foundry', fontWeight: '550', lineHeight: '28.80px', wordWrap: 'break-word'}}>Why emotional framing?</div>
                </div>
              </div>

              <img src="/garden.png" alt="Garden" style={{width: 526.99, height: 526.15, position: 'relative', marginTop: -1}} />

              {/* Feature Cards in Column */}
              <div style={{alignSelf: 'stretch', paddingTop: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', gap: 20, marginRight: 24}}>
                <div style={{alignSelf: 'stretch', paddingTop: 13, paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '500', lineHeight: '21px', wordWrap: 'break-word'}}>
                      Our mediated reality
                    </div>
                  </div>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word', textAlign: 'justify'}}>
                      Media literacy goes beyond truth versus disinformation; it is also about understanding how media makes us feel, and how we respond to both information and emotion. Especially in our current mediated reality, emotions are often pre-framed for us, silently shaping our perception without us even realizing it.
                    </div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 13, paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '500', lineHeight: '21px', wordWrap: 'break-word'}}>
                      Making the invisible visible
                    </div>
                  </div>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word', textAlign: 'justify'}}>
                      Framing operates below conscious awareness. Words like "crisis," "catastrophe," or "breakthrough" don't just describe—they shape how we feel and what we think matters. By quantifying this framing, Ethoscore makes the rhetorical machinery of news visible.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Battle-tested Governor Section */}
            <div style={{alignSelf: 'stretch', position: 'relative', paddingTop: 0, paddingBottom: 0, marginTop: -54}}>
              <div style={{width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', fontSize: 19.70, fontFamily: 'Inter', fontWeight: '400', lineHeight: '28.80px', wordWrap: 'break-word'}}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    whiteSpace: 'nowrap'
                  }}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('methodology');
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        color: '#1C1917',
                        fontWeight: 400,
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setIsRhetoricalHover(true)}
                      onMouseLeave={() => setIsRhetoricalHover(false)}
                    >
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#1C1917',
                        fontSize: 28,
                        fontWeight: isRhetoricalHover ? 500 : 400,
                        textDecoration: 'underline',
                        textDecorationColor: '#1C1917',
                        textDecorationThickness: isRhetoricalHover ? '1.5px' : '1px',
                        textUnderlineOffset: 3,
                        transition: 'font-weight 0.3s ease, text-decoration-thickness 0.3s ease'
                      }}>Get rhetorical framing analysis</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M3 9L9 3M9 3H4.5M9 3V7.5"
                          stroke="#1C1917"
                          strokeWidth={isRhetoricalHover ? "2" : "1.5"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div style={{width: 527, paddingTop: 2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>
                  Ethoscore uses transformer models trained on 125,000+ articles from major<br/>news sources, used by researchers and educators to analyze emotional framing.<br/>
                </div>
              </div>
              <div style={{width: '100%', paddingTop: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex', position: 'relative'}}>
                <img style={{width: 700, height: 'auto', maxWidth: '100%', position: 'relative', marginLeft: -30}} src={imageGenerationFeedbackImage} alt="Governance Chart" />
                
                {/* Decorative Tree Container with Flying Birds - positioned per Figma */}
                <div style={{width: 420, left: 395, top: -100.07, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  {/* Flying Bird 1 */}
                  <div style={{width: 32, height: 18.74, left: 228, top: 128, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <img style={{width: '100%', height: '100%', maxWidth: 32, position: 'relative'}} src="/flying-bird-1.png" alt="Flying Bird 1" />
                  </div>
                  
                  {/* Flying Bird 2 */}
                  <div style={{width: 24, height: 14.05, left: 252, top: 144, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <img style={{width: '100%', height: '100%', maxWidth: 24, position: 'relative'}} src="/flying-bird-1.png" alt="Flying Bird 2" />
                  </div>
                  
                  {/* Flying Bird 3 */}
                  <div style={{width: 20, height: 11.71, left: 272, top: 128, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <img style={{width: '100%', height: '100%', maxWidth: 20, position: 'relative'}} src="/flying-bird-3.png" alt="Flying Bird 3" />
                  </div>
                  
                  {/* Decorative Tree */}
                  <img style={{width: 420, height: 420, maxWidth: 420, position: 'relative'}} src="/decorative-tree-with-birds.png" alt="Decorative Tree" />
                </div>
                
                {/* Mailbox - positioned per Figma */}
                <img style={{width: 104.95, height: 160, left: 502.05, top: 159.93, position: 'absolute'}} src="/mailbox.png" alt="Mailbox" />
              </div>
              <div style={{width: 527, paddingTop: 24, paddingBottom: 0, justifyContent: 'center', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingTop: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 20.10, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '28.80px', wordWrap: 'break-word'}}>89.7% accuracy</div>
                  </div>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>Held-out validated performance</div>
                  </div>
                </div>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingTop: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 19.90, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '28.80px', wordWrap: 'break-word'}}>149 topics analyzed</div>
                  </div>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>Wide-coverage evaluation</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{alignSelf: 'stretch', position: 'relative', paddingBottom: 0, paddingTop: 0, marginTop: -40}}>
              <div style={{width: 527, paddingTop: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 28, fontFamily: 'Klim Type Foundry', fontWeight: '550', lineHeight: '28.80px', wordWrap: 'break-word'}}>
                  How can we understand media framing?
                </div>
              </div>

              {/* Feature Cards */}
              <div style={{width: 527, paddingRight: 16, paddingTop: 8, justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingTop: 0, paddingBottom: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '500', lineHeight: '21px', wordWrap: 'break-word'}}>1. Rhetorical analysis</div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>
                    Pay attention to the rhetorical moves that subtly steer emotion, emphasis, and what feels salient.
                  </div>
                </div>
                </div>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingTop: 0, paddingBottom: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '500', lineHeight: '21px', wordWrap: 'break-word'}}>2. Vested meaning</div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>
                    Notice how the narrative arranges causes, conflicts, and consequences to shape a particular sense of meaning.
                  </div>
                </div>
                </div>
              </div>

              {/* Protocol Links */}
              <div style={{width: 527, paddingTop: 20, paddingBottom: 0, marginBottom: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                {(() => {
                  const logoMap = {
                    'The Guardian': 'https://logo.clearbit.com/theguardian.com',
                    'Reuters': 'https://logo.clearbit.com/reuters.com',
                    'The New York Times': 'https://logo.clearbit.com/nytimes.com',
                    'The Washington Post': 'https://logo.clearbit.com/washingtonpost.com',
                    'CNN': 'https://logo.clearbit.com/cnn.com',
                    'Financial Times': 'https://logo.clearbit.com/ft.com',
                    'The Economist': 'https://logo.clearbit.com/economist.com',
                    'BBC': 'https://logo.clearbit.com/bbc.com',
                    'Associated Press': 'https://logo.clearbit.com/ap.org',
                    'Wall Street Journal': 'https://logo.clearbit.com/wsj.com'
                  };
                  
                  return [
                    ['The Guardian', 'Reuters'],
                    ['The New York Times', 'The Washington Post'],
                    ['CNN', 'Financial Times'],
                    ['The Economist', 'BBC'],
                    ['Associated Press', 'Wall Street Journal']
                  ].map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      <div style={{width: 527, paddingTop: rowIndex === 4 ? 0 : 2, paddingBottom: rowIndex === 4 ? 0 : 2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', paddingTop: rowIndex === 4 ? 0 : 2, paddingBottom: rowIndex === 4 ? 0 : 2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <img style={{width: 32, height: 32, maxWidth: 261.50, position: 'relative', objectFit: 'contain'}} src={logoMap[row[0]]} alt={`${row[0]} Logo`} />
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                              <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-25, #44403C)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>{row[0]}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{flex: '1 1 0', paddingTop: rowIndex === 4 ? 0 : 2, paddingBottom: rowIndex === 4 ? 0 : 2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <img style={{width: 32, height: 32, maxWidth: 261.50, position: 'relative', objectFit: 'contain'}} src={logoMap[row[1]]} alt={`${row[1]} Logo`} />
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                              <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-25, #44403C)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>{row[1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {rowIndex === 4 && (
                        <div key="pill" style={{width: 527, paddingTop: 24, paddingBottom: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                          <div 
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigate('literacy');
                            }}
                            style={{justifyContent: 'center', display: 'inline-flex', padding: '4px 12px', background: 'rgb(28, 25, 23)', borderRadius: 9999, alignItems: 'center', cursor: 'pointer'}}
                          >
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-white-solid, white)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>Get started</div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ));
                })()}
              </div>
            </div>

            {/* Final CTA Section */}
            <div style={{alignSelf: 'stretch', position: 'relative', paddingTop: 0, marginTop: -48, paddingBottom: 48}}>
              <div style={{width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-15, #292524)', fontSize: 40.10, fontFamily: 'Inter', fontWeight: '400', lineHeight: '48px', wordWrap: 'break-word'}}>
                  See beyond the words.
                </div>
              </div>
              <div style={{width: 527, paddingBottom: 4, paddingTop: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginRight: 24}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>
                  <span style={{whiteSpace: 'nowrap'}}>Featured in <a href="https://mediacloud.org" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-grey-32, #57534E)', textDecoration: 'underline'}}>MediaCloud</a> research—a Harvard and MIT incubated consortium</span><br />collaboration. The goal is to create a new standard to push media literacy forward.
                </div>
              </div>
              <div style={{paddingTop: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative'}}>
                <a href="https://airtable.com/appuh6zjiSqCFCcT6/shrRYFGnore81KkxF/tblbadaKMZ8o4tUHV/viwu9iaflnEh4rHTt/recZd1qqpkgiZ8dfj" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                  <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#D6D3D1', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', position: 'relative', zIndex: 2}}>
                    <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-grey-10, #1C1917)', fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: '21px', wordWrap: 'break-word'}}>View Research</div>
                  </div>
                </a>
                <img style={{width: 527, height: 478.25, position: 'relative', marginTop: 8}} src="/Treehouse Illustration.png" alt="Treehouse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;




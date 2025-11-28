import React, { useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function Careers({ onNavigate }) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const articles = [
    {
      title: 'Europe is drilling for World War III',
      url: 'https://ethoscore.org/literacy/europe-world-war-iii',
      internalLink: 'literacy-europe-ww3'
    },
    {
      title: 'Germany\'s Nazis Exclude Russians from May 8th Victory Day WW2 Celebration',
      url: 'https://ethoscore.org/literacy/germany-nazis-exclude-russia',
      internalLink: 'literacy-germany-nazis'
    },
    {
      title: 'Shock of 800,000 abortions, married women biggest culprits',
      url: 'https://ethoscore.org/literacy/kenya-abortion-crisis',
      internalLink: 'literacy-kenya-abortion'
    },
    {
      title: 'Starving Babies: The Self-Liquidation of U.S. Global Soft Power',
      url: 'https://ethoscore.org/literacy/us-soft-power-collapse',
      internalLink: 'literacy-us-soft-power'
    },
    {
      title: 'Trump has launched more attacks on the environment in 100 days than his first term',
      url: 'https://ethoscore.org/literacy/trump-environment-assault',
      internalLink: 'literacy-trump-environment'
    },
    {
      title: 'VTRS FRAUD: Suffer Losses on Viatris Inc.? You may have been Affected by Fraud',
      url: 'https://ethoscore.org/literacy/viatris-fraud',
      internalLink: 'literacy-viatris-fraud'
    },
    {
      title: 'Fires drive tropical forest loss to record high: \'Red alert\'',
      url: 'https://ethoscore.org/literacy/tropical-forest-destruction',
      internalLink: 'literacy-tropical-forest'
    },
    {
      title: 'Russian roulette and world politics',
      url: 'https://ethoscore.org/literacy/putin-russian-roulette',
      internalLink: 'literacy-putin-roulette'
    },
    {
      title: 'This stock trader called a bottom for the S&P 500. Here\'s what he\'s saying now',
      url: 'https://ethoscore.org/literacy/stock-market-flash-crash',
      internalLink: 'literacy-stock-crash'
    },
    {
      title: 'Police sends yet another local criminal with task to obtain anti-Roma statements',
      url: 'https://ethoscore.org/literacy/slovenian-genocide-conspiracy',
      internalLink: 'literacy-slovenia-conspiracy'
    },
    {
      title: '\'Because of these men, I will never be able to live a normal life again\'',
      url: 'https://ethoscore.org/literacy/blackrod-grooming-gang',
      internalLink: 'literacy-blackrod'
    },
    {
      title: 'Mark Zuckerberg is going full tech bro, and it\'s been a long time coming',
      url: 'https://ethoscore.org/literacy/zuckerberg-tech-bro',
      internalLink: 'literacy-zuckerberg'
    },
    {
      title: 'Trump stocks vs. Biden stocks: Here\'s who\'s winning since the election',
      url: 'https://ethoscore.org/literacy/trump-biden-stocks',
      internalLink: 'literacy-trump-biden-stocks'
    },
    {
      title: 'Romania\'s Hungarians fear losing their identity',
      url: 'https://ethoscore.org/literacy/romania-hungary-identity',
      internalLink: 'literacy-romania-hungary'
    },
    {
      title: 'Afghanistan is becoming a narco-state again',
      url: 'https://ethoscore.org/literacy/afghanistan-narco-state',
      internalLink: 'literacy-afghanistan'
    },
    {
      title: 'Stalin dares BJP to arrest him',
      url: 'https://ethoscore.org/literacy/stalin-bjp-arrest',
      internalLink: 'literacy-stalin-bjp'
    },
    {
      title: 'Stocks surge after Trump-Putin call raises hopes for Ukraine peace',
      url: 'https://ethoscore.org/literacy/trump-putin-stocks',
      internalLink: 'literacy-trump-putin-stocks'
    },
    {
      title: 'RFK Jr. questions vaccine safety as HHS nominee',
      url: 'https://ethoscore.org/literacy/rfk-vaccine-safety',
      internalLink: 'literacy-rfk-vaccine'
    },
    {
      title: 'Amazon\'s Project Kuiper finally launches satellites to compete with SpaceX',
      url: 'https://ethoscore.org/literacy/amazon-spacex-kuiper',
      internalLink: 'literacy-amazon-spacex'
    },
    {
      title: 'Guernica: The painting that shocked the world into seeing war\'s horror',
      url: 'https://ethoscore.org/literacy/guernica-war-horror',
      internalLink: 'literacy-guernica'
    },
    {
      title: 'Trump\'s meeting with Syria\'s new president could mark a turning point for the Mideast',
      url: 'https://ethoscore.org/literacy/trump-syria-meeting',
      internalLink: 'literacy-syria-trump'
    },
    {
      title: 'Redfin Reports Economic Jitters, High Costs Stifle Spring Home Sales',
      url: 'https://ethoscore.org/literacy/redfin-home-sales',
      internalLink: 'literacy-redfin'
    },
    {
      title: 'Trump, Starmer hail limited US-UK trade deal, but 10% duties remain',
      url: 'https://ethoscore.org/literacy/us-uk-trade-deal',
      internalLink: 'literacy-uk-trade'
    },
    {
      title: 'Why more Singaporeans are joining the carbon services and trading sector',
      url: 'https://ethoscore.org/literacy/carbon-trading-singapore',
      internalLink: 'literacy-carbon-singapore'
    },
    {
      title: 'UNIFIL condemns attack on patrol in southern Lebanon',
      url: 'https://ethoscore.org/literacy/unifil-lebanon-attack',
      internalLink: 'literacy-unifil'
    },
    {
      title: '\'De cara al mundo\': international analysis on Onda Madrid',
      url: 'https://ethoscore.org/literacy/new-pope-leo-xiv',
      internalLink: 'literacy-pope-leo'
    },
    {
      title: 'Abu Dhabi to forge stronger investment ties with Japan as free trade deal talks progress',
      url: 'https://ethoscore.org/literacy/abu-dhabi-japan-trade',
      internalLink: 'literacy-abu-dhabi-japan'
    },
    {
      title: 'SADC troops begin withdrawal from eastern DR Congo',
      url: 'https://ethoscore.org/literacy/sadc-troops-withdraw-congo',
      internalLink: 'literacy-sadc-congo'
    },
    {
      title: 'Paraguayan President Santiago Peña to make first state visit to India',
      url: 'https://ethoscore.org/literacy/paraguay-india-visit',
      internalLink: 'literacy-paraguay-india'
    },
    {
      title: 'Richemont posts robust performance for the year ended 31 March 2025',
      url: 'https://ethoscore.org/literacy/richemont-annual-results',
      internalLink: 'literacy-richemont'
    }
  ];

  const categories = [
    {
      label: 'Alarmist',
      description: 'Heightens urgency or fear to steer reaction.',
      articles: articles.slice(0, 10)
    },
    {
      label: 'Loaded',
      description: 'Charged language nudging the reader toward a stance.',
      articles: articles.slice(10, 20)
    },
    {
      label: 'Neutral',
      description: 'Straightforward framing with lower emotional pull.',
      articles: articles.slice(20, 30)
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState(null);
  const [isEmailHover, setIsEmailHover] = React.useState(false);

  const emailInlineGroupStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    whiteSpace: 'nowrap'
  };

  const emailLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    color: '#4338CA',
    fontWeight: 600,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  };

  const emailTextStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    color: isEmailHover ? '#FFFFFF' : '#4338CA',
    padding: isEmailHover ? '4px 10px' : '2px 0',
    borderRadius: isEmailHover ? 999 : 0,
    background: isEmailHover ? '#4F46E5' : 'transparent',
    textDecoration: isEmailHover ? 'none' : 'underline',
    textDecorationColor: isEmailHover ? 'transparent' : '#4338CA',
    textDecorationThickness: isEmailHover ? 'auto' : '2px',
    textUnderlineOffset: isEmailHover ? 'auto' : 4,
    transition: 'background 0.15s ease, color 0.15s ease, padding 0.15s ease'
  };

  const arrowStroke = isEmailHover ? '#FFFFFF' : '#4338CA';
  const [hoveredCategory, setHoveredCategory] = React.useState(null);

  const categoryHoverColors = {
    Alarmist: '#dc2626',
    Loaded: '#facc15',
    Neutral: '#16a34a'
  };

  const toggleCategory = (label) => {
    setActiveCategory((prev) => (prev === label ? null : label));
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'transparent',
                                fontFamily: "'Klim Type Foundry', 'Inter', sans-serif",
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'inline-flex',
      position: 'relative'
    }}>
      <div style={{
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 23px, #E7E5E4 23px, #E7E5E4 24px)',
        backgroundPosition: '0 0',
        backgroundSize: '100% 24px'
      }}>
        <div className="page-container" style={{
          width: '100%',
          maxWidth: 1304,
          minHeight: '100vh',
          paddingRight: 1,
          borderRight: '1px var(--color-grey-90, #E7E5E4) solid',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex',
          position: 'relative'
        }}>
          
          {/* Header Section */}
          <div style={{width: '100%', maxWidth: 528, margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
            <Header currentPage="literacy" onNavigate={onNavigate} />
          </div>

          {/* Main Content Section */}
          <div className="page-content-wrapper" style={{
            alignSelf: 'stretch',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 0,
            paddingBottom: 48,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div className="category-container" style={{
              width: '100%',
              maxWidth: 528,
              paddingLeft: 0,
              paddingRight: 0,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 33,
              display: 'flex'
            }}>
              {/* Heading */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex'
              }}>
                <div className="page-heading" style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 40.7,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '550',
                  lineHeight: '48px',
                  textAlign: 'left',
                  letterSpacing: '0.5px'
                }}>
                  Unpacking rhetorical patterns
                </div>
              </div>

              {/* Description */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginTop: -20
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 14,
                  fontFamily: 'SF Pro Text',
                  fontWeight: '400',
                  lineHeight: '21px',
                  wordWrap: 'break-word'
                }}>
                  Articles analyzed for rhetorical patterns. Learn to identify alarmist, loaded, and neutral framing in news media. Have another idea? Shoot an{' '}
                  <span style={emailInlineGroupStyle}>
                    email to
                    <a
                      href="mailto:arora95448@gapps.uwcsea.edu.sg"
                      style={emailLinkStyle}
                      onMouseEnter={() => setIsEmailHover(true)}
                      onMouseLeave={() => setIsEmailHover(false)}
                    >
                      <span style={emailTextStyle}>arora95448@gapps.uwcsea.edu.sg</span>
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
                          stroke={arrowStroke}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/* Job Listings */}
              <div style={{
                alignSelf: 'stretch',
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 1,
                paddingRight: 1,
                background: 'linear-gradient(to bottom, #E7E5E4, #FAFAF9)',
                borderRadius: 12,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  paddingTop: 12,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingBottom: 1,
                  background: '#FAFAF9',
                  borderRadius: 11.52,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    paddingTop: 1,
                    paddingLeft: 1,
                    paddingRight: 1,
                    paddingBottom: 0,
                    border: '1px solid #E5E7EB',
                    borderRadius: 6,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex'
                  }}>
                    {categories.map((category, index) => {
                      const isActive = activeCategory === category.label;
                      const isHovered = hoveredCategory === category.label;
                      const accentColor = categoryHoverColors[category.label];
                      const liftShadow = '0 10px 24px rgba(41,37,36,0.12)';
                      const isLast = index === categories.length - 1;

                      return (
                        <div
                          key={category.label}
                          style={{
                            alignSelf: 'stretch',
                            width: '100%',
                            background: '#FFFFFF',
                            borderBottom: '1px solid #E5E7EB',
                            borderRadius: 6,
                            marginBottom: isLast ? 0 : 12,
                            overflow: 'hidden',
                            boxShadow: isActive || isHovered ? liftShadow : 'none',
                            transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                            transition: 'box-shadow 0.2s ease, transform 0.22s ease'
                          }}
                        >
                          <button
                            onClick={() => toggleCategory(category.label)}
                            onMouseEnter={() => setHoveredCategory(category.label)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            style={{
                              width: '100%',
                              padding: 16,
                              border: 'none',
                              background: 'transparent',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              textAlign: 'left',
                              cursor: 'pointer'
                            }}
                          >
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 4
                            }}>
                              <div style={{
                                fontSize: 18,
                                fontFamily: 'SF Pro Text',
                                fontWeight: 400,
                                lineHeight: '24px',
                                transition: 'color 0.45s ease',
                                color: isHovered && accentColor ? accentColor : 'var(--color-grey-15, #292524)'
                              }}>
                                {category.label}
                              </div>
                              <div style={{
                                color: 'var(--color-grey-64, #A8A29E)',
                                fontSize: 12,
                                fontFamily: 'SF Pro Text',
                                fontWeight: 400,
                                lineHeight: '18px'
                              }}>
                                {category.description}
                              </div>
                            </div>
                            <div style={{
                              fontSize: 18,
                              transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s, color 0.45s ease',
                              color: isHovered && accentColor ? accentColor : 'var(--color-grey-32, #57534E)'
                            }}>
                              →
                            </div>
                          </button>
                          {isActive && (
                            <div style={{
                              borderTop: '1px solid #E5E7EB',
                              background: '#FFFEFA',
                              paddingLeft: 16
                            }}>
                              {category.articles.map((job, index) => (
                                <a
                                  key={job.url}
                                  href={job.url}
                                  target={job.internalLink ? undefined : "_blank"}
                                  rel={job.internalLink ? undefined : "noopener noreferrer"}
                                  onClick={(e) => {
                                    if (job.internalLink) {
                                      e.preventDefault();
                                      onNavigate(job.internalLink);
                                    }
                                  }}
                                  style={{
                                    display: 'flex',
                                    alignSelf: 'stretch',
                                    padding: '16px 16px 16px 28px',
                                    background: '#FFFFFF',
                                    borderBottom: index < category.articles.length - 1 ? '1px solid #E5E7EB' : 'none',
                                    textDecoration: 'none',
                                    flexDirection: 'column',
                                    gap: 8,
                                    transition: 'background-color 0.2s',
                                    cursor: 'pointer'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAFAF9'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                                >
                                  <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                  }}>
                                    <div style={{
                                      flexDirection: 'column',
                                      justifyContent: 'flex-start',
                                      alignItems: 'flex-start',
                                      gap: 4,
                                      display: 'flex'
                                    }}>
                                      <div style={{
                                        color: 'var(--color-grey-32, #57534E)',
                                        fontSize: 14,
                                        fontFamily: 'SF Pro Text',
                                        fontWeight: 500,
                                        lineHeight: '21px'
                                      }}>
                                        {job.title}
                                      </div>
                                    </div>
                                    <div style={{
                                      color: 'var(--color-grey-32, #57534E)',
                                      fontSize: 14,
                                      fontFamily: 'SF Pro Text',
                                      fontWeight: 400,
                                      lineHeight: '21px'
                                    }}>
                                      ↗
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default Careers;

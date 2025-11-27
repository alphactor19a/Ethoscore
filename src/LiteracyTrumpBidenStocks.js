import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyTrumpBidenStocks({ onNavigate }) {
  const [viewMode, setViewMode] = useState('source'); // 'source' or 'analysis'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'transparent',
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
        <div style={{
          width: 1304,
          maxWidth: '100%',
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
          <div style={{ marginLeft: 388 }}>
            <Header currentPage="literacy" onNavigate={onNavigate} />
          </div>

          {/* Main Content Section */}
          <div style={{
            alignSelf: 'stretch',
            paddingLeft: 388,
            paddingRight: 48, 
            paddingTop: 0,
            paddingBottom: 48,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex',
            gap: 48
          }}>
            
            {/* Left Column: Article Content */}
            <div style={{
              width: 528,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex',
              gap: 24
            }}>
              
              {/* Breadcrumb / Meta */}
              <div style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 8,
                display: 'inline-flex'
              }}>
                <div 
                  onClick={() => onNavigate('literacy')}
                  style={{
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 4,
                    display: 'flex'
                  }}
                >
                  <div style={{
                    color: 'var(--color-grey-32, #57534E)',
                    fontSize: 14,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400',
                    lineHeight: '21px'
                  }}>
                    ← Back to Gallery
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 12,
                display: 'inline-flex'
              }}>
                <div style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 2,
                  paddingBottom: 2,
                  background: '#fff9c4',
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex'
                }}>
                  <div style={{
                    color: '#1C1917',
                    fontSize: 12,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400',
                    lineHeight: '18px'
                  }}>
                    Loaded • 6.9
                  </div>
                </div>
                <div style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 2,
                  paddingBottom: 2,
                  background: 'var(--color-grey-90, #E7E5E4)',
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex'
                }}>
                  <div style={{
                    color: '#1C1917',
                    fontSize: 12,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400',
                    lineHeight: '18px'
                  }}>
                    MarketWatch · Case Study
                  </div>
                </div>
              </div>

              {/* Title Section */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 8,
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 40.7,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '550',
                  lineHeight: '48px'
                }}>
                  Trump stocks vs. Biden stocks: Here's who's winning since the election
                </div>
                <div style={{
                  alignSelf: 'stretch',
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 18,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '27px'
                }}>
                  Media Literacy Analysis
                </div>
              </div>

              {/* Intro Paragraph */}
              <div style={{
                alignSelf: 'stretch',
                color: '#1C1917',
                fontSize: 18,
                fontFamily: 'Klim Type Foundry',
                fontWeight: '400',
                lineHeight: '28px',
                borderLeft: '3px solid var(--color-grey-90, #E7E5E4)',
                paddingLeft: 16
              }}>
                This case study explores how language, framing, and rhetorical techniques can shape perception and emotional response.
              </div>

              {/* Divider */}
              <div style={{
                alignSelf: 'stretch',
                height: 1,
                background: 'var(--color-grey-90, #E7E5E4)'
              }} />

              {/* View Toggle */}
              <div style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 12,
                display: 'flex'
              }}>
                <button
                  onClick={() => setViewMode('source')}
                  style={{
                    padding: '8px 16px',
                    background: viewMode === 'source' ? '#1C1917' : '#E7E5E4',
                    color: viewMode === 'source' ? '#FFFFFF' : '#1C1917',
                    border: 'none',
                    borderRadius: 9999,
                    fontSize: 14,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Source Article
                </button>
                <button
                  onClick={() => setViewMode('analysis')}
                  style={{
                    padding: '8px 16px',
                    background: viewMode === 'analysis' ? '#1C1917' : '#E7E5E4',
                    color: viewMode === 'analysis' ? '#FFFFFF' : '#1C1917',
                    border: 'none',
                    borderRadius: 9999,
                    fontSize: 14,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  View Analysis
                </button>
              </div>

              {/* Conditional Content Based on View Mode */}
              {viewMode === 'source' ? (
                <>
                  {/* Source Article Title */}
                  <div style={{
                    alignSelf: 'stretch',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    display: 'flex'
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Source Article
                    </div>
                    <div style={{
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 2,
                      paddingBottom: 2,
                      background: 'var(--color-grey-90, #E7E5E4)',
                      borderRadius: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex'
                    }}>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 12,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '400',
                        lineHeight: '18px'
                      }}>
                        Original Content
                      </div>
                    </div>
                  </div>

                  {/* Article Text */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 20,
                    display: 'flex',
                    color: '#1C1917',
                    fontSize: 18,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400',
                    lineHeight: '30px'
                  }}>
                    <p style={{margin: 0}}>
                      The battle between "Trump stocks" and "Biden stocks" has become one of Wall Street's favorite games since the election. Investors are betting big on which sectors will thrive under the new administration—and the scoreboard is already showing clear winners and losers.
                    </p>
                    <p style={{margin: 0}}>
                      Trump stocks—energy companies, defense contractors, and financial firms—surged immediately after the election results. Meanwhile, Biden stocks—renewable energy, cannabis, and infrastructure plays—have seen more mixed results.
                    </p>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px',
                      marginTop: 12,
                      marginBottom: 4
                    }}>
                      The Winners' Circle
                    </div>
                    <p style={{margin: 0}}>
                      Traditional energy stocks have been the biggest beneficiaries. Oil and gas companies saw double-digit gains as investors anticipated deregulation and expanded drilling permits.
                    </p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>
                      "This is a clear signal that the market is pricing in a very different policy environment," said one portfolio manager.
                    </p>
                    <p style={{margin: 0}}>
                      Defense stocks also rallied on expectations of increased military spending. Major contractors posted significant gains in the weeks following the election.
                    </p>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px',
                      marginTop: 12,
                      marginBottom: 4
                    }}>
                      The Losers
                    </div>
                    <p style={{margin: 0}}>
                      Clean energy stocks took a hit as investors worried about reduced subsidies and support for renewable projects. Solar and wind companies saw their valuations decline.
                    </p>
                    <p style={{margin: 0}}>
                      Cannabis stocks, which had rallied on hopes of federal legalization, retreated as those prospects dimmed under the new administration.
                    </p>
                  </div>
                </>
              ) : (
                /* Analysis View */
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  gap: 32,
                  display: 'flex'
                }}>
                  {/* Loaded Score Card */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 24,
                    background: '#FAFAF9',
                    borderRadius: 12,
                    border: '1px solid #E5E7EB',
                    flexDirection: 'column',
                    gap: 20,
                    display: 'flex'
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Media Analysis
                    </div>
                    <div style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      display: 'flex'
                    }}>
                      <div style={{
                        color: '#44403C',
                        fontSize: 16,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '400'
                      }}>
                        Loaded Score
                      </div>
                      <div style={{
                        color: '#CA8A04',
                        fontSize: 32,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '600'
                      }}>
                        6.9/10
                      </div>
                    </div>
                    {/* Score Bar */}
                    <div style={{
                      width: '100%',
                      height: 8,
                      background: '#E7E5E4',
                      borderRadius: 4,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '69%',
                        height: '100%',
                        background: '#CA8A04',
                        borderRadius: 4
                      }} />
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 16,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '24px'
                    }}>
                      This article uses gamification framing and competitive language to present market movements as a political contest.
                    </div>
                  </div>

                  {/* Headline Analysis */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 12,
                    display: 'flex'
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Headline Analysis
                    </div>
                    <div style={{
                      padding: 8,
                      background: '#FEFCE8',
                      borderRadius: 4,
                      border: '1px solid #FEF08A',
                      color: '#854D0E',
                      fontSize: 12,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      marginBottom: 8
                    }}>
                      Moderate Impact
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      The headline frames market analysis as a competition ("vs.", "who's winning"), creating artificial drama and encouraging readers to view investing through a partisan lens rather than fundamental analysis.
                    </div>
                  </div>

                  {/* Framing Strategy */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 12,
                    display: 'flex'
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 20,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Framing Strategy
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      The article employs a <strong>gamification/sports</strong> frame, presenting market movements as a political competition:
                    </div>
                    <ul style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px',
                      paddingLeft: 24,
                      margin: 0
                    }}>
                      <li style={{marginBottom: 8}}>Uses competition metaphors ("battle," "scoreboard," "winners")</li>
                      <li style={{marginBottom: 8}}>Creates artificial political categories for stocks</li>
                      <li style={{marginBottom: 8}}>Encourages partisan investment thinking</li>
                      <li style={{marginBottom: 8}}>Oversimplifies complex market dynamics</li>
                    </ul>
                  </div>

                  {/* Key Language Patterns */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 16,
                    display: 'flex'
                  }}>
                    <div style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      display: 'flex'
                    }}>
                      <div style={{
                        color: '#1C1917',
                        fontSize: 22,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '500',
                        lineHeight: '28px'
                      }}>
                        Key Language Patterns
                      </div>
                      <div style={{
                        color: '#A8A29E',
                        fontSize: 14,
                        fontFamily: 'Klim Type Foundry'
                      }}>
                        5 identified
                      </div>
                    </div>
                    
                    {[
                      { term: '"battle"', desc: 'Military/competition metaphor that dramatizes routine market movements.' },
                      { term: '"scoreboard"', desc: 'Sports framing that encourages viewing investing as a game with winners and losers.' },
                      { term: '"winners\' circle"', desc: 'Racing metaphor that celebrates certain investments while stigmatizing others.' },
                      { term: '"betting big"', desc: 'Gambling language that frames investment as speculation rather than analysis.' },
                      { term: '"the losers"', desc: 'Negative labeling that creates emotional associations with certain sectors.' }
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: 16,
                        background: '#FAFAF9',
                        borderRadius: 8,
                        border: '1px solid #E5E7EB',
                        flexDirection: 'column',
                        gap: 8,
                        display: 'flex'
                      }}>
                        <div style={{
                          color: '#1C1917',
                          fontSize: 16,
                          fontFamily: 'Klim Type Foundry',
                          fontWeight: '600',
                          background: '#fff9c4',
                          alignSelf: 'flex-start',
                          padding: '4px 8px',
                          borderRadius: 4
                        }}>
                          {item.term}
                        </div>
                        <div style={{
                          color: '#1C1917',
                          fontSize: 18,
                          fontFamily: 'Klim Type Foundry',
                          fontWeight: '400',
                          lineHeight: '30px'
                        }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Rhetorical Techniques */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 16,
                    display: 'flex'
                  }}>
                    <div style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      display: 'flex'
                    }}>
                      <div style={{
                        color: '#1C1917',
                        fontSize: 22,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '500',
                        lineHeight: '28px'
                      }}>
                        Rhetorical Techniques
                      </div>
                      <div style={{
                        color: '#A8A29E',
                        fontSize: 14,
                        fontFamily: 'Klim Type Foundry'
                      }}>
                        5 identified
                      </div>
                    </div>
                    <div style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      gap: 10,
                      display: 'flex'
                    }}>
                      {[
                        'gamification', 'false dichotomy', 'sports metaphor', 
                        'political framing', 'oversimplification'
                      ].map((tag, i) => (
                        <div key={i} style={{
                          padding: '6px 14px',
                          background: '#F5F5F4',
                          borderRadius: 99,
                          border: '1px solid #E7E5E4',
                          color: '#1C1917',
                          fontSize: 14,
                          fontFamily: 'Klim Type Foundry'
                        }}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emotional Manipulation Techniques */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 12,
                    display: 'flex'
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Emotional Framing Techniques
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      The article employs several emotional framing techniques:
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      gap: 16,
                      display: 'flex'
                    }}>
                      {[
                        { title: 'Tribal Identity', desc: 'Categorizing stocks by political affiliation encourages partisan investing' },
                        { title: 'Competition Framing', desc: 'Presenting markets as a contest creates urgency and emotional engagement' },
                        { title: 'Winner/Loser Binary', desc: 'Black-and-white categorization ignores market complexity' },
                        { title: 'FOMO Activation', desc: 'Implying readers might be missing out on winning stocks' }
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 16,
                          background: '#FAFAF9',
                          borderRadius: 8,
                          border: '1px solid #E5E7EB'
                        }}>
                          <div style={{
                            color: '#1C1917',
                            fontSize: 16,
                            fontFamily: 'Klim Type Foundry',
                            fontWeight: '500',
                            marginBottom: 8
                          }}>
                            {item.title}
                          </div>
                          <div style={{
                            color: '#1C1917',
                            fontSize: 18,
                            fontFamily: 'Klim Type Foundry',
                            fontWeight: '400',
                            lineHeight: '30px'
                          }}>
                            {item.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Missing Context */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 12,
                    display: 'flex'
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Missing Context & Omissions
                    </div>
                    <div style={{
                      padding: 20,
                      background: '#FAFAF9',
                      borderRadius: 8,
                      border: '1px solid #E5E7EB'
                    }}>
                      <div style={{
                        color: '#1C1917',
                        fontSize: 18,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '400',
                        lineHeight: '30px',
                        marginBottom: 16
                      }}>
                        The article omits context that would provide a more balanced view:
                      </div>
                      <ul style={{
                        color: '#1C1917',
                        fontSize: 18,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '400',
                        lineHeight: '30px',
                        paddingLeft: 24,
                        margin: 0
                      }}>
                        <li style={{marginBottom: 8}}>Market movements driven by many factors beyond politics</li>
                        <li style={{marginBottom: 8}}>Long-term performance often differs from short-term reactions</li>
                        <li style={{marginBottom: 8}}>Global economic factors affecting all sectors</li>
                        <li style={{marginBottom: 8}}>Historical patterns of market reactions to elections</li>
                        <li style={{marginBottom: 8}}>Diversification principles that transcend political categories</li>
                      </ul>
                    </div>
                  </div>

                  {/* Case Study Conclusion */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 24,
                    background: '#FEFCE8',
                    borderRadius: 12,
                    border: '1px solid #FEF08A',
                    flexDirection: 'column',
                    gap: 16,
                    display: 'flex'
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Case Study Conclusion
                    </div>
                    <div style={{
                      color: '#854D0E',
                      fontSize: 12,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: 8
                    }}>
                      Moderate Emotional Impact
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      This article exemplifies gamified financial journalism that uses sports and competition metaphors to generate engagement. By framing market movements as a political contest, it encourages readers to view investing through a partisan rather than analytical lens.
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px',
                      marginTop: 16
                    }}>
                      <strong>Reader Advisory:</strong> Investment decisions should be based on fundamental analysis, not political tribalism. This framing oversimplifies market dynamics.
                    </div>
                  </div>

                  {/* Media Literacy Insights */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    gap: 12,
                    display: 'flex',
                    marginTop: 16
                  }}>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 22,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      lineHeight: '28px'
                    }}>
                      Media Literacy Insights
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      When reading financial news, consider: Is the framing designed to inform investment decisions or generate engagement through political drama?
                    </div>
                    <div style={{
                      flexDirection: 'row',
                      gap: 16,
                      marginTop: 12,
                      display: 'flex'
                    }}>
                       <div 
                        onClick={() => onNavigate('literacy')}
                        style={{
                          color: '#1C1917',
                          fontSize: 15,
                          fontFamily: 'Klim Type Foundry',
                          fontWeight: '500',
                          textDecoration: 'underline',
                          cursor: 'pointer'
                        }}
                      >
                        Explore More Examples
                      </div>
                      <div 
                        onClick={() => onNavigate('methodology')}
                        style={{
                          color: '#1C1917',
                          fontSize: 15,
                          fontFamily: 'Klim Type Foundry',
                          fontWeight: '500',
                          textDecoration: 'underline',
                          cursor: 'pointer'
                        }}
                      >
                        Methodology
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Score Card (Always Visible) */}
            <div style={{
              width: 280,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 24,
              display: 'flex',
              position: 'sticky',
              top: 24
            }}>
              
              {/* Loaded Score Card */}
              <div style={{
                alignSelf: 'stretch',
                padding: 20,
                background: '#FAFAF9',
                borderRadius: 12,
                border: '1px solid #E5E7EB',
                flexDirection: 'column',
                gap: 16,
                display: 'flex'
              }}>
                <div style={{
                  color: '#1C1917',
                  fontSize: 18,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '500',
                  lineHeight: '24px'
                }}>
                  Media Analysis
                </div>
                <div style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'flex'
                }}>
                  <div style={{
                    color: '#44403C',
                    fontSize: 14,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '400'
                  }}>
                    Loaded Score
                  </div>
                  <div style={{
                    color: '#CA8A04',
                    fontSize: 24,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '600'
                  }}>
                    6.9/10
                  </div>
                </div>
                {/* Score Bar */}
                <div style={{
                  width: '100%',
                  height: 6,
                  background: '#E7E5E4',
                  borderRadius: 3,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '69%',
                    height: '100%',
                    background: '#CA8A04',
                    borderRadius: 3
                  }} />
                </div>
                
                {/* Quick Stats */}
                <div style={{
                  borderTop: '1px solid #E5E7EB',
                  paddingTop: 12,
                  flexDirection: 'column',
                  gap: 8,
                  display: 'flex'
                }}>
                  <div style={{
                    justifyContent: 'space-between',
                    display: 'flex'
                  }}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Language Patterns</span>
                    <span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span>
                  </div>
                  <div style={{
                    justifyContent: 'space-between',
                    display: 'flex'
                  }}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Techniques</span>
                    <span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span>
                  </div>
                  <div style={{
                    justifyContent: 'space-between',
                    display: 'flex'
                  }}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Impact Level</span>
                    <span style={{color: '#CA8A04', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Moderate</span>
                  </div>
                </div>
              </div>

              {/* View Analysis CTA */}
              {viewMode === 'source' && (
                <button
                  onClick={() => setViewMode('analysis')}
                  style={{
                    alignSelf: 'stretch',
                    padding: '12px 20px',
                    background: '#1C1917',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 9999,
                    fontSize: 15,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  View Full Analysis →
                </button>
              )}

              {/* Quick Links */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                gap: 8,
                display: 'flex'
              }}>
                <div 
                  onClick={() => onNavigate('literacy')}
                  style={{
                    color: '#57534E',
                    fontSize: 14,
                    fontFamily: 'Klim Type Foundry',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  ← More Examples
                </div>
                <div 
                  onClick={() => onNavigate('methodology')}
                  style={{
                    color: '#57534E',
                    fontSize: 14,
                    fontFamily: 'Klim Type Foundry',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Our Methodology
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

export default LiteracyTrumpBidenStocks;




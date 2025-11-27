import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyViatrisFraud({ onNavigate }) {
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
                  background: '#ffcccc',
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
                    Alarmist • 8.9
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
                    Business Upturn · Case Study
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
                  VTRS FRAUD: Suffer Losses on Viatris Inc.? You may have been Affected by Fraud
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
                      Leading securities law firm announces lawsuit against Viatris Inc. for potential violations of federal securities laws. If you invested in Viatris, you are encouraged to obtain additional information and assist the investigation.
                    </p>
                    <p style={{margin: 0}}>
                      IMPORTANT DEADLINE: Investors who purchased VTRS shares during the class period and suffered losses are urged to contact the firm before the lead plaintiff deadline. Time is running out to protect your rights.
                    </p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>
                      "If you suffered a loss on your Viatris investment, you may have been the victim of fraud. Our investigation suggests the company may have misled investors about material facts."
                    </p>
                    <p style={{margin: 0}}>
                      The investigation focuses on whether Viatris and certain of its officers and/or directors made false and/or misleading statements and/or failed to disclose material information to investors. These alleged misrepresentations artificially inflated the price of the company's securities.
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
                      What You Can Do
                    </div>
                    <p style={{margin: 0}}>
                      If you purchased or otherwise acquired Viatris securities during the class period, you may move the Court no later than the deadline to request appointment as lead plaintiff. Your ability to share in any recovery does not require that you serve as lead plaintiff.
                    </p>
                    <p style={{margin: 0}}>
                      To learn more about the investigation and your rights, contact our securities litigation team immediately. There is no cost or obligation to you. Don't let the deadline pass without taking action to protect your investment.
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
                      About the Firm
                    </div>
                    <p style={{margin: 0}}>
                      Our firm has recovered hundreds of millions of dollars for defrauded investors. We have been recognized as one of the leading securities litigation firms in the country, with a track record of success in complex securities class actions.
                    </p>
                    <p style={{margin: 0}}>
                      Contact us today for a free consultation. Remember: the deadline is approaching fast. Act now to protect your rights.
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
                  {/* Alarmist Score Card */}
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
                        Alarmist Score
                      </div>
                      <div style={{
                        color: '#DC2626',
                        fontSize: 32,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '600'
                      }}>
                        8.9/10
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
                        width: '89%',
                        height: '100%',
                        background: '#DC2626',
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
                      This article scores high on the alarmist scale, using fear-based urgency tactics, unproven fraud allegations, and pressure language typical of securities lawsuit advertising.
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
                      background: '#FEF2F2',
                      borderRadius: 4,
                      border: '1px solid #FECACA',
                      color: '#991B1B',
                      fontSize: 12,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      marginBottom: 8
                    }}>
                      High Impact
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      The headline uses "FRAUD" in all caps to maximize alarm, while the question format ("You may have been Affected") creates personal anxiety without making provable claims. This is classic legal advertising designed to recruit plaintiffs.
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
                      The article employs a <strong>legal advertisement</strong> frame disguised as news, using urgency and victim language to recruit plaintiffs for a class action lawsuit. This framing technique:
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
                      <li style={{marginBottom: 8}}>Presents allegations as established facts ("FRAUD" in headline)</li>
                      <li style={{marginBottom: 8}}>Creates artificial urgency with deadline pressure</li>
                      <li style={{marginBottom: 8}}>Uses victim language to make readers feel wronged</li>
                      <li style={{marginBottom: 8}}>Disguises advertising as investigative journalism</li>
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
                      { term: '"FRAUD"', desc: 'All-caps accusation in headline that presents allegation as fact before any legal determination.' },
                      { term: '"IMPORTANT DEADLINE"', desc: 'Urgency language designed to pressure immediate action and prevent careful consideration.' },
                      { term: '"victim of fraud"', desc: 'Victim framing that assumes wrongdoing and positions readers as harmed parties.' },
                      { term: '"Time is running out"', desc: 'Scarcity pressure tactic common in advertising to drive immediate response.' },
                      { term: '"Act now"', desc: 'Classic call-to-action language that prioritizes speed over informed decision-making.' }
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
                          background: '#ffcccc',
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
                        6 identified
                      </div>
                    </div>
                    <div style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      gap: 10,
                      display: 'flex'
                    }}>
                      {[
                        'urgency pressure', 'victim framing', 'authority appeal', 
                        'deadline scarcity', 'allegation as fact', 'advertorial disguise'
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
                      Emotional Manipulation Techniques
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      The article employs several psychological manipulation techniques:
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      gap: 16,
                      display: 'flex'
                    }}>
                      {[
                        { title: 'Fear of Loss', desc: 'Emphasizing financial losses to trigger protective instincts' },
                        { title: 'Urgency/Scarcity', desc: 'Deadline pressure to prevent careful evaluation' },
                        { title: 'Victim Identity', desc: 'Positioning readers as wronged parties deserving compensation' },
                        { title: 'Authority Trust', desc: 'Citing firm credentials to establish credibility' }
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
                        The article omits critical context that would provide a more balanced view:
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
                        <li style={{marginBottom: 8}}>This is paid legal advertising, not independent journalism</li>
                        <li style={{marginBottom: 8}}>No fraud has been proven - these are allegations under investigation</li>
                        <li style={{marginBottom: 8}}>Many securities lawsuits are dismissed or settled for minimal amounts</li>
                        <li style={{marginBottom: 8}}>Stock losses can occur for many reasons unrelated to fraud</li>
                        <li style={{marginBottom: 8}}>The law firm benefits financially from recruiting plaintiffs</li>
                      </ul>
                    </div>
                  </div>

                  {/* Case Study Conclusion */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 24,
                    background: '#FFF1F2',
                    borderRadius: 12,
                    border: '1px solid #FECDD3',
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
                      color: '#DC2626',
                      fontSize: 12,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: 8
                    }}>
                      High Emotional Impact
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px'
                    }}>
                      This article exemplifies legal advertising disguised as news, using fraud accusations, urgency pressure, and victim framing to recruit plaintiffs for a class action lawsuit. The alarmist language serves the law firm's business interests rather than informing readers.
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px',
                      marginTop: 16
                    }}>
                      <strong>Reader Advisory:</strong> This is paid legal advertising, not independent journalism. The fraud allegations are unproven, and the urgency language is designed to recruit plaintiffs, not inform readers.
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
                      When encountering articles about securities fraud, consider: Is this news or advertising? Who benefits from this framing? Are allegations being presented as proven facts?
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
              
              {/* Alarmist Score Card */}
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
                    Alarmist Score
                  </div>
                  <div style={{
                    color: '#DC2626',
                    fontSize: 24,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '600'
                  }}>
                    8.9/10
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
                    width: '89%',
                    height: '100%',
                    background: '#DC2626',
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
                    <span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>6</span>
                  </div>
                  <div style={{
                    justifyContent: 'space-between',
                    display: 'flex'
                  }}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Impact Level</span>
                    <span style={{color: '#DC2626', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>High</span>
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

export default LiteracyViatrisFraud;




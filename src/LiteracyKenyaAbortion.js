import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyKenyaAbortion({ onNavigate }) {
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
          <div style={{width: '100%', maxWidth: 528, margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
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
                    Alarmist • 9.4
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
                    Standard Digital News - Kenya · Case Study
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
                  Shock of 800,000 abortions, married women biggest culprits
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
                      A new report shows that married women account for 80 percent of all reported abortion cases in the country. The African Population and Health Research Center estimates at least 792,694 induced abortions took place in Kenya in 2023, representing a shocking crisis of moral proportions.
                    </p>
                    <p style={{margin: 0}}>
                      The revelation has sent shockwaves through Kenyan society, with religious leaders and conservative groups condemning what they describe as a "moral emergency" affecting the nation's families. The data suggests that the practice is far more widespread than previously acknowledged.
                    </p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>
                      "These numbers represent a crisis of values in our society. When married women are the biggest culprits, it shows that the sanctity of marriage and family is under attack from within."
                    </p>
                    <p style={{margin: 0}}>
                      Health experts have raised concerns about the framing of the issue, noting that the high numbers may reflect inadequate access to contraception and family planning services rather than moral failings. However, critics argue that focusing on access deflects from personal responsibility.
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
                      The Hidden Epidemic
                    </div>
                    <p style={{margin: 0}}>
                      The report reveals that abortion rates have been climbing steadily over the past decade, with unsafe procedures accounting for a significant portion of maternal deaths. Many women resort to dangerous methods due to the restrictive legal environment surrounding abortion in Kenya.
                    </p>
                    <p style={{margin: 0}}>
                      Despite abortion being largely illegal except to save the mother's life, the practice continues at alarming rates. The underground nature of most procedures means that many women face serious health complications without access to proper medical care.
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
                      Calls for Action
                    </div>
                    <p style={{margin: 0}}>
                      Religious organizations have called for stricter enforcement of existing laws and greater moral education in schools. Some have proposed mandatory counseling for married couples and increased church involvement in family planning discussions.
                    </p>
                    <p style={{margin: 0}}>
                      Meanwhile, reproductive health advocates argue that the focus should be on improving access to contraception and comprehensive sex education. They point out that countries with better access to family planning services typically have lower abortion rates.
                    </p>
                    <p style={{margin: 0}}>
                      The debate continues to divide Kenyan society, with little consensus on how to address what all sides agree is a significant public health concern.
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
                        9.4/10
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
                        width: '94%',
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
                      This article scores extremely high on the alarmist scale, using morally charged language, shame-based framing, and sensationalist statistics to generate outrage rather than inform.
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
                      The headline "Shock of 800,000 abortions, married women biggest culprits" combines sensationalist statistics with criminalizing language. The word "culprits" frames women as criminals, while "shock" primes readers for moral outrage rather than thoughtful analysis.
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
                      The article employs a <strong>moral panic</strong> frame, presenting abortion statistics as evidence of societal moral decay rather than a public health issue. This framing technique:
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
                      <li style={{marginBottom: 8}}>Uses criminal language ("culprits") to stigmatize women</li>
                      <li style={{marginBottom: 8}}>Frames the issue as a "crisis" and "epidemic" to maximize alarm</li>
                      <li style={{marginBottom: 8}}>Emphasizes married women to suggest family values are under attack</li>
                      <li style={{marginBottom: 8}}>Minimizes discussion of healthcare access and systemic factors</li>
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
                      { term: '"biggest culprits"', desc: 'Criminal framing that assigns blame and guilt to women seeking healthcare. This language transforms a medical procedure into a crime.' },
                      { term: '"shocking crisis"', desc: 'Sensationalist language designed to provoke emotional reaction rather than thoughtful consideration of complex issues.' },
                      { term: '"moral emergency"', desc: 'Frames a public health issue as a moral failing, shifting focus from systemic solutions to individual blame.' },
                      { term: '"sanctity of marriage under attack"', desc: 'Religious framing that positions abortion as an assault on traditional values rather than a healthcare decision.' },
                      { term: '"hidden epidemic"', desc: 'Disease metaphor that pathologizes reproductive choices and suggests something shameful that must be exposed.' }
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
                        'moral panic', 'shame framing', 'statistical alarm', 
                        'religious authority', 'blame attribution', 'crisis rhetoric'
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
                        { title: 'Shame and Stigma', desc: 'Using "culprits" language to induce guilt and shame in readers' },
                        { title: 'Moral Outrage', desc: 'Framing statistics as evidence of societal moral collapse' },
                        { title: 'Fear of Breakdown', desc: 'Suggesting family and marriage institutions are under threat' },
                        { title: 'Religious Authority', desc: 'Invoking religious leaders to add moral weight to condemnation' }
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
                        <li style={{marginBottom: 8}}>Limited access to contraception and family planning services</li>
                        <li style={{marginBottom: 8}}>Economic factors that influence family planning decisions</li>
                        <li style={{marginBottom: 8}}>Health risks of unsafe abortions due to restrictive laws</li>
                        <li style={{marginBottom: 8}}>Comparative data from countries with better reproductive healthcare</li>
                        <li style={{marginBottom: 8}}>Women's autonomy and right to make healthcare decisions</li>
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
                      This article exemplifies moral panic journalism, using criminalizing language and shame-based framing to transform a public health issue into a moral crisis. The focus on married women as "culprits" is designed to maximize shock value and reinforce traditional gender expectations rather than inform readers about reproductive health realities.
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px',
                      marginTop: 16
                    }}>
                      <strong>Reader Advisory:</strong> This article should be read with awareness of its moralistic framing. The language used stigmatizes women and obscures the public health dimensions of reproductive healthcare access.
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
                      When encountering articles about sensitive health topics, consider: Does the language assign blame or seek understanding? Are systemic factors being addressed or ignored? Who benefits from this framing?
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
                    9.4/10
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
                    width: '94%',
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

export default LiteracyKenyaAbortion;





import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracySloveniaConspiracy({ onNavigate }) {
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
                    Alarmist • 7.9
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
                    The Auser Times · Case Study
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
                  Police sends yet another local criminal with task to obtain anti-Roma statements
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
                      Slovenian police had local Serbs stalk again - appointed by Vojislav Šešelj personally. What Joe Biden commenced has grown into even greater ethnic cleansing/genocide. Americans are getting ready for a total dictatorship.
                    </p>
                    <p style={{margin: 0}}>
                      The coordinated campaign against Roma communities in Slovenia has reached new heights of depravity. Police forces, working in conjunction with criminal elements, have been systematically targeting Roma families in what can only be described as state-sponsored persecution.
                    </p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>
                      "This is genocide unfolding before our eyes. The international community remains silent while an entire people faces extermination."
                    </p>
                    <p style={{margin: 0}}>
                      Evidence has emerged that police officers are recruiting local criminals to gather false statements against Roma community members. These fabricated testimonies are then used to justify forced relocations and property seizures.
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
                      International Conspiracy
                    </div>
                    <p style={{margin: 0}}>
                      The persecution of Roma in Slovenia is part of a broader international conspiracy orchestrated by American intelligence agencies. The Biden administration's fingerprints are all over this operation, which aims to destabilize Europe and prepare the ground for authoritarian takeover.
                    </p>
                    <p style={{margin: 0}}>
                      Serbian nationalists, working under direction from foreign powers, have infiltrated Slovenian institutions at every level. The police, judiciary, and local government have all been compromised by this network of agents.
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
                      The Coming Storm
                    </div>
                    <p style={{margin: 0}}>
                      What is happening to the Roma today will happen to all free peoples tomorrow. The machinery of totalitarian control is being assembled piece by piece, and the persecution of minorities is always the first step.
                    </p>
                    <p style={{margin: 0}}>
                      Those who speak out against this conspiracy are targeted for harassment and silencing. The author of this article has personally faced threats and surveillance for daring to expose the truth.
                    </p>
                    <p style={{margin: 0}}>
                      The world must wake up before it is too late. The genocide of the Roma is the canary in the coal mine for global tyranny.
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
                        7.9/10
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
                        width: '79%',
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
                      This article scores high on the alarmist scale, combining conspiracy theories, genocide accusations, and international plot narratives without substantiation.
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
                      The headline makes serious accusations against police without evidence, claiming they "send criminals" to obtain statements. The framing assumes guilt and conspiracy without substantiation, priming readers for conspiratorial content.
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
                      The article employs a <strong>grand conspiracy</strong> frame, connecting local events to international plots involving multiple governments and secret operations. This framing technique:
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
                      <li style={{marginBottom: 8}}>Uses "genocide" to describe unsubstantiated persecution claims</li>
                      <li style={{marginBottom: 8}}>Connects local events to US government conspiracy</li>
                      <li style={{marginBottom: 8}}>Claims author is personally targeted to add credibility</li>
                      <li style={{marginBottom: 8}}>Presents speculation as established fact</li>
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
                      { term: '"ethnic cleansing/genocide"', desc: 'Extreme accusation applied without evidence to local disputes, invoking historical atrocities.' },
                      { term: '"total dictatorship"', desc: 'Apocalyptic political framing that presents current events as precursor to totalitarianism.' },
                      { term: '"international conspiracy"', desc: 'Grand conspiracy framing that connects unrelated events into unified plot.' },
                      { term: '"fingerprints all over"', desc: 'Conspiratorial language suggesting hidden involvement without evidence.' },
                      { term: '"canary in the coal mine"', desc: 'Warning metaphor that frames local events as harbinger of global catastrophe.' }
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
                        'conspiracy theory', 'genocide accusation', 'persecution narrative', 
                        'foreign agent claim', 'victim positioning', 'apocalyptic warning'
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
                        { title: 'Genocide Invocation', desc: 'Using extreme historical atrocity language for local disputes' },
                        { title: 'Conspiracy Narrative', desc: 'Connecting unrelated events into unified global plot' },
                        { title: 'Persecution Complex', desc: 'Claiming author is targeted to add credibility' },
                        { title: 'Apocalyptic Warning', desc: 'Framing local events as precursor to global tyranny' }
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
                        <li style={{marginBottom: 8}}>Any verifiable evidence for the claims made</li>
                        <li style={{marginBottom: 8}}>Official responses from authorities mentioned</li>
                        <li style={{marginBottom: 8}}>Independent verification of alleged events</li>
                        <li style={{marginBottom: 8}}>Context about the source's credibility and history</li>
                        <li style={{marginBottom: 8}}>Alternative explanations for described events</li>
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
                      This article exemplifies conspiracy-theory journalism, making extreme accusations (genocide, international plots) without evidence while connecting unrelated events into a grand narrative. The use of genocide language for unsubstantiated local disputes trivializes actual historical atrocities.
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px',
                      marginTop: 16
                    }}>
                      <strong>Reader Advisory:</strong> This article should be read with extreme skepticism. The claims made are extraordinary and presented without evidence. The conspiracy framing and genocide accusations are hallmarks of unreliable sources.
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
                      When encountering articles with conspiracy narratives, consider: What evidence is provided? Are claims verifiable? Does the framing connect unrelated events into implausible unified plots?
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
                    7.9/10
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
                    width: '79%',
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

export default LiteracySloveniaConspiracy;




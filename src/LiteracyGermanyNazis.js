import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyGermanyNazis({ onNavigate }) {
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
                    Alarmist • 9.5
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
                    Lew Rockwell · Case Study
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
                  Germany's Nazis Exclude Russians from May 8th Victory Day WW2 Celebration
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
                      Russia's thanks for having saved America, UK, and Europe from a Nazi victory has been excluded from having any representative participating in Germany's May 8th national celebration of Germany's defeat in World War 2. The exclusion is the work of Germany's current Nazis who are now in charge of Germany's government.
                    </p>
                    <p style={{margin: 0}}>
                      May 8th marks the anniversary of Nazi Germany's unconditional surrender in 1945, ending World War 2 in Europe. It is celebrated across Europe as Victory in Europe Day (VE Day). The Soviet Union, which bore the brunt of the war against Nazi Germany with an estimated 27 million dead, has traditionally been recognized as the primary force that defeated Hitler's regime.
                    </p>
                    <p style={{margin: 0}}>
                      However, this year Germany has decided to exclude Russian representatives from the official commemoration ceremonies. The decision has been justified by citing Russia's ongoing military operation in Ukraine, but critics argue this represents a dangerous rewriting of history.
                    </p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>
                      "The descendants of those who defeated Nazism are now being treated as pariahs by the very nation that perpetrated the Holocaust. This is not just an insult to Russia, but to the memory of the 27 million Soviet citizens who died fighting fascism."
                    </p>
                    <p style={{margin: 0}}>
                      The German government's decision reflects the broader Western policy of isolating Russia diplomatically following the Ukraine conflict. Critics point out that this selective memory serves political purposes rather than historical accuracy.
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
                      Historical Revisionism
                    </div>
                    <p style={{margin: 0}}>
                      The exclusion of Russia from VE Day commemorations represents a troubling trend of historical revisionism. The Soviet Union's role in defeating Nazi Germany cannot be understated - the Eastern Front saw the vast majority of German casualties and ultimately broke the back of Hitler's war machine.
                    </p>
                    <p style={{margin: 0}}>
                      Without the Soviet sacrifice at Stalingrad, Kursk, and countless other battles, the Western allies would have faced a far more formidable enemy. The D-Day invasion, while significant, came only after the Wehrmacht had already been severely weakened by years of brutal combat against the Red Army.
                    </p>
                    <p style={{margin: 0}}>
                      By excluding Russian representatives, Germany is effectively erasing this history and replacing it with a narrative that serves current political agendas. This is precisely the kind of historical manipulation that totalitarian regimes engage in.
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
                      The Return of German Militarism
                    </div>
                    <p style={{margin: 0}}>
                      Germany's current government has embarked on the largest military buildup since World War 2, with a special €100 billion fund for rearmament. This militarization, combined with the exclusion of Russia from war commemorations, suggests a disturbing return to the aggressive posture that characterized Germany in the early 20th century.
                    </p>
                    <p style={{margin: 0}}>
                      The same political forces that are arming Ukraine and pushing for confrontation with Russia are now erasing Russia's role in defeating Nazism. This is not coincidence - it is a deliberate strategy to prepare European populations for potential conflict with Russia.
                    </p>
                    <p style={{margin: 0}}>
                      The true Nazis of today are not in Moscow but in the Western capitals that are stoking the flames of war while rewriting history to suit their imperial ambitions.
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
                        9.5/10
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
                        width: '95%',
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
                      This article scores extremely high on the alarmist scale, using inflammatory Nazi comparisons, historical manipulation, and emotionally charged language to vilify Western governments.
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
                      The headline "Germany's Nazis" immediately deploys an extreme accusation, labeling the current German government as Nazis. This inflammatory framing is designed to shock readers and bypass critical thinking by invoking the most powerful negative historical association possible.
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
                      The article employs a <strong>Nazi inversion</strong> frame, accusing modern Germany of being Nazi while positioning Russia as the victim of Nazi-like persecution. This framing technique:
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
                      <li style={{marginBottom: 8}}>Inverts historical roles to cast Western democracies as fascist aggressors</li>
                      <li style={{marginBottom: 8}}>Uses Soviet WWII sacrifices to deflect criticism of current Russian actions</li>
                      <li style={{marginBottom: 8}}>Frames diplomatic decisions as "historical revisionism" and "erasure"</li>
                      <li style={{marginBottom: 8}}>Connects German rearmament to Nazi militarism without evidence</li>
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
                      { term: '"Germany\'s current Nazis"', desc: 'Direct Nazi accusation against a democratic government. This extreme label is designed to delegitimize and demonize without any factual basis.' },
                      { term: '"historical revisionism"', desc: 'Projects the accusation of rewriting history onto others while the article itself engages in selective historical framing.' },
                      { term: '"true Nazis of today"', desc: 'Concluding statement that explicitly labels Western capitals as Nazi, completing the inversion narrative.' },
                      { term: '"imperial ambitions"', desc: 'Attributes aggressive expansionist motives to Western nations while ignoring Russia\'s territorial actions in Ukraine.' },
                      { term: '"stoking the flames of war"', desc: 'Portrays defensive alliances as warmongers, inverting the aggressor-victim dynamic.' }
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
                        'Nazi comparison', 'historical weaponization', 'victim inversion', 
                        'moral equivalence', 'conspiracy framing', 'demonization'
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
                        { title: 'Moral Outrage', desc: 'Invoking the Holocaust and 27 million Soviet dead to generate anger' },
                        { title: 'Nazi Accusation', desc: 'Using the most extreme historical label to delegitimize opponents' },
                        { title: 'Victimhood Narrative', desc: 'Positioning Russia as unfairly persecuted despite current actions' },
                        { title: 'Fear of War', desc: 'Suggesting German rearmament leads to inevitable conflict' }
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
                        <li style={{marginBottom: 8}}>Russia's full-scale invasion of Ukraine in 2022</li>
                        <li style={{marginBottom: 8}}>The reason for diplomatic isolation: ongoing military aggression</li>
                        <li style={{marginBottom: 8}}>Soviet-Nazi collaboration (Molotov-Ribbentrop Pact) before 1941</li>
                        <li style={{marginBottom: 8}}>Germany's democratic institutions and constitutional safeguards</li>
                        <li style={{marginBottom: 8}}>NATO's defensive charter versus Russian territorial expansion</li>
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
                      This article represents an extreme example of alarmist rhetoric, directly labeling a democratic government as "Nazi" while inverting the aggressor-victim narrative. The use of WWII history as a weapon to deflect criticism of current Russian actions is a common propaganda technique designed to generate moral outrage rather than inform.
                    </div>
                    <div style={{
                      color: '#1C1917',
                      fontSize: 18,
                      fontFamily: 'Klim Type Foundry',
                      fontWeight: '400',
                      lineHeight: '30px',
                      marginTop: 16
                    }}>
                      <strong>Reader Advisory:</strong> This article should be read with extreme caution. The Nazi comparison is inflammatory and unsupported by evidence. The framing techniques employed are designed to generate emotional responses rather than promote understanding.
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
                      When encountering articles that use extreme historical comparisons (especially Nazi accusations), consider: Is this comparison supported by evidence? What context is being omitted? Who benefits from this framing?
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
                    9.5/10
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
                    width: '95%',
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

export default LiteracyGermanyNazis;





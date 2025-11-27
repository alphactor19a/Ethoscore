import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import topicsDistribution from './topics-distribution.png';
import validationDiagram from './validation-diagram.jpeg';
import trainTestPartitionImage from './Gemini Generated Image (7).png';
import trainingDataDistributionImage from './Gemini Generated Image (8).png';

function Methodology({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('softmax');

  // Scroll to top when component mounts
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
            <Header currentPage="methodology" onNavigate={onNavigate} />
          </div>

          {/* Main Content Section */}
          <div style={{
            alignSelf: 'stretch',
            paddingLeft: 404,
            paddingRight: 364,
            paddingBottom: 48,
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div style={{
              width: 528,
              maxWidth: '100%',
              position: 'relative',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex',
              gap: 0
            }}>
              {/* Hero Section */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 12,
                marginBottom: 32
              }}>
                <div style={{
                  color: 'var(--color-grey-64, #A8A29E)',
                  fontSize: 14,
                  fontFamily: 'SF Pro Text',
                  fontWeight: '400',
                  lineHeight: '21px',
                  marginBottom: 4
                }}>
                  Technical documentation
                </div>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  marginBottom: 8
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 40.7,
                    fontFamily: 'Klim Type Foundry',
                    fontWeight: '550',
                    lineHeight: '48px',
                    wordWrap: 'break-word'
                  }}>
                    Methodology
                  </div>
                </div>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  marginBottom: 16
                }}>
                  <div style={{
                    color: 'var(--color-grey-32, #57534E)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '400',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>
                    A comprehensive framework for measuring article framing along a calibrated spectrum— Neutral, Loaded, and Alarmist—using transfer learning, ordinal classification, and held-out validation on 125,014 news articles.
                  </div>
                </div>
                <div style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 8,
                  display: 'flex'
                }}>
                  <div 
                    onClick={() => onNavigate && onNavigate('tool')}
                    style={{
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 4,
                      paddingBottom: 4,
                      background: '#1C1917',
                      borderRadius: 9999,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'inline-flex',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      color: 'var(--color-white-solid, white)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Try the tool
                    </div>
                  </div>
                  <div 
                    onClick={() => onNavigate && onNavigate('research')}
                    style={{
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 4,
                      paddingBottom: 4,
                      background: 'transparent',
                      borderRadius: 9999,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'inline-flex',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      color: 'var(--color-grey-10, #1C1917)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      See research →
                    </div>
                  </div>
                </div>
              </div>

              {/* Section I: Conceptual Framework */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 20.3,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    wordWrap: 'break-word'
                  }}>
                    I. Conceptual Framework
                  </div>
                </div>

                {/* Framing Spectrum */}
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Framing Spectrum
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Ethoscore measures framing—the rhetorical posture and emotional intensity of written content—independent of factual accuracy or political orientation. The system quantifies linguistic urgency, threat language, and dramatic framing.
                    </div>
                  </div>

                  {/* Three Categories */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      padding: 12,
                      background: 'var(--color-grey-98, #FAFAF9)',
                      borderRadius: 6,
                      border: '1px var(--color-grey-91, #E5E7EB) solid',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Neutral
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px'
                      }}>
                        Measured, sourced, proportionate tone
                      </div>
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      padding: 12,
                      background: 'var(--color-grey-98, #FAFAF9)',
                      borderRadius: 6,
                      border: '1px var(--color-grey-91, #E5E7EB) solid',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Loaded
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px'
                      }}>
                        Emotionally charged, moralizing language
                      </div>
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      padding: 12,
                      background: 'var(--color-grey-98, #FAFAF9)',
                      borderRadius: 6,
                      border: '1px var(--color-grey-91, #E5E7EB) solid',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Alarmist
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px'
                      }}>
                        Imminent threat, catastrophic framing
                      </div>
                    </div>
                  </div>
                </div>

                {/* Linguistic Signals */}
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Linguistic Signals
                    </div>
                  </div>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 24
                  }}>
                    <div style={{
                      flex: '1 1 0',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 8
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px',
                        marginBottom: 4
                      }}>
                        Increases Score
                      </div>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        flexDirection: 'column',
                        display: 'flex',
                        gap: 8
                      }}>
                        <li style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: 8
                        }}>
                          <span style={{ color: 'var(--color-grey-32, #57534E)' }}>↑</span>
                          <span style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            Doom/threat language intensity
                          </span>
                        </li>
                        <li style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: 8
                        }}>
                          <span style={{ color: 'var(--color-grey-32, #57534E)' }}>↑</span>
                          <span style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            High-certainty catastrophe predictions
                          </span>
                        </li>
                        <li style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: 8
                        }}>
                          <span style={{ color: 'var(--color-grey-32, #57534E)' }}>↑</span>
                          <span style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            Temporal urgency framing
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div style={{
                      flex: '1 1 0',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 8
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px',
                        marginBottom: 4
                      }}>
                        Decreases Score
                      </div>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        flexDirection: 'column',
                        display: 'flex',
                        gap: 8
                      }}>
                        <li style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: 8
                        }}>
                          <span style={{ color: 'var(--color-grey-32, #57534E)' }}>↓</span>
                          <span style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            Source attribution and transparency
                          </span>
                        </li>
                        <li style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: 8
                        }}>
                          <span style={{ color: 'var(--color-grey-32, #57534E)' }}>↓</span>
                          <span style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            Uncertainty acknowledgment
                          </span>
                        </li>
                        <li style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          gap: 8
                        }}>
                          <span style={{ color: 'var(--color-grey-32, #57534E)' }}>↓</span>
                          <span style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            Balanced risk presentation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Model Outputs */}
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Model Outputs
                    </div>
                  </div>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      padding: 12,
                      background: 'var(--color-grey-98, #FAFAF9)',
                      borderRadius: 6,
                      border: '1px var(--color-grey-91, #E5E7EB) solid',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Discrete Classification
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px'
                      }}>
                        Categorical label with confidence probability
                      </div>
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      padding: 12,
                      background: 'var(--color-grey-98, #FAFAF9)',
                      borderRadius: 6,
                      border: '1px var(--color-grey-91, #E5E7EB) solid',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Continuous Scale Score
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px'
                      }}>
                        Normalized 0–100 intensity metric
                      </div>
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      padding: 12,
                      background: 'var(--color-grey-98, #FAFAF9)',
                      borderRadius: 6,
                      border: '1px var(--color-grey-91, #E5E7EB) solid',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Class Probabilities
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px'
                      }}>
                        Full probability distribution across categories
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section II: Model Architecture and Training Protocol */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 20.3,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    wordWrap: 'break-word'
                  }}>
                    II. Model Architecture and Training Protocol
                  </div>
                </div>

                {/* Transfer Learning Architecture */}
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Transfer Learning Architecture
                    </div>
                  </div>

                  {/* Teacher Model Annotation */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 8
                    }}>
                      <div style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        background: 'var(--color-grey-10, #1C1917)',
                        color: 'var(--color-white-solid, white)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0
                      }}>
                        1
                      </div>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Teacher Model Annotation
                      </div>
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word',
                      marginLeft: 32
                    }}>
                      125,014 articles from NewsAPI.ai Event Registry were annotated using Llama 3.3 (70 billion parameters) as the teacher model. Articles were sourced across 149 topic categories selected to maximize framing diversity.
                    </div>
                    <div style={{
                      marginLeft: 32,
                      flexDirection: 'column',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'Menlo',
                        fontWeight: '400',
                        lineHeight: '16.8px'
                      }}>
                        Model: Llama-3.3-70B-Instruct-Turbo
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'Menlo',
                        fontWeight: '400',
                        lineHeight: '16.8px'
                      }}>
                        Parameters: ~70B
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'Menlo',
                        fontWeight: '400',
                        lineHeight: '16.8px'
                      }}>
                        Task: Three-class framing annotation
                      </div>
                    </div>
                  </div>

                  {/* Student Model Training */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 8
                    }}>
                      <div style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        background: 'var(--color-grey-10, #1C1917)',
                        color: 'var(--color-white-solid, white)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0
                      }}>
                        2
                      </div>
                      <div style={{
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Student Model Training
                      </div>
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word',
                      marginLeft: 32
                    }}>
                      Two student models based on DeBERTa-v3-xsmall were trained via knowledge distillation. The architecture trades embedding breadth for network depth, enabling better integration of abstract semantic content.
                    </div>
                    <div style={{
                      marginLeft: 32,
                      flexDirection: 'column',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'Menlo',
                        fontWeight: '400',
                        lineHeight: '16.8px'
                      }}>
                        Base: microsoft/deberta-v3-xsmall
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'Menlo',
                        fontWeight: '400',
                        lineHeight: '16.8px'
                      }}>
                        Context window: 1,500 tokens
                      </div>
                      <div style={{
                        color: 'var(--color-grey-32, #57534E)',
                        fontSize: 14,
                        fontFamily: 'Menlo',
                        fontWeight: '400',
                        lineHeight: '16.8px'
                      }}>
                        Training set: 121,888 articles
                      </div>
                    </div>
                  </div>

                  {/* Dual Model Architecture */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 16
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Dual Model Architecture
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 16
                    }}>
                      <div style={{
                        flex: '1 1 0',
                        padding: 12,
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 8
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          Ordinal Classification Model
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '21px',
                          marginBottom: 4
                        }}>
                          Projects article representations onto a one-dimensional latent scale with learned threshold parameters. Outputs cumulative probabilities converted to class probabilities and continuous scale scores.
                        </div>
                        <div style={{
                          flexDirection: 'column',
                          display: 'flex',
                          gap: 4
                        }}>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            Accuracy: 89.73%
                          </div>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            F1 (Macro): 83.12%
                          </div>
                        </div>
                      </div>
                      <div style={{
                        flex: '1 1 0',
                        padding: 12,
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 8
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          Softmax Classification Model
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '21px',
                          marginBottom: 4
                        }}>
                          Standard three-class classifier with softmax activation. Outputs discrete probabilities for each category without ordinal constraint. Optimized for categorical accuracy.
                        </div>
                        <div style={{
                          flexDirection: 'column',
                          display: 'flex',
                          gap: 4
                        }}>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            Accuracy: 89.51%
                          </div>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            F1 (Macro): 81.19%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Training Protocol Alert */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 12,
                    background: 'var(--color-grey-98, #FAFAF9)',
                    borderRadius: 6,
                    border: '1px var(--color-grey-91, #E5E7EB) solid',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Training Protocol:
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px'
                    }}>
                      Models were trained using standard cross-entropy loss with AdamW optimizer. Early stopping based on validation set performance prevented overfitting. The ordinal model showed slight performance advantages due to the inherent ordinal structure of the framing spectrum.
                    </div>
                  </div>

                  {/* Training Data Distribution */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Training Data Distribution
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Article distribution across 149 topic categories selected to represent contemporary news coverage patterns. Categories span politics, technology, health, environment, economics, and social issues.
                    </div>
                    <div style={{ paddingBottom: '10px' }}>
                      <img 
                        src={trainingDataDistributionImage} 
                        alt="Training data distribution across 149 topic areas showing article counts per category"
                        style={{
                          width: '100%',
                          maxWidth: 528,
                          height: 'auto',
                          borderRadius: 6
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section III: Score Normalization System */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 20.3,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    wordWrap: 'break-word'
                  }}>
                    III. Score Normalization System
                  </div>
                </div>

                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Calibrated 0–100 Scale
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      The ordinal model's latent scale scores (ranging approximately -15 to +20) are transformed to a standardized 0–100 normalized scale via region-based linear interpolation. This normalization preserves ordinal relationships while providing intuitive interpretability.
                    </div>
                  </div>

                  {/* Normalization Mapping */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Normalization Mapping
                    </div>
                    <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                    }}>
                      <div style={{
                        alignSelf: 'stretch',
                        padding: 12,
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 4
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          0–30: Neutral
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'Menlo',
                          fontWeight: '400',
                          lineHeight: '16.8px'
                        }}>
                          Raw range: -10.0 to +2.0
                        </div>
                      </div>
                      <div style={{
                        alignSelf: 'stretch',
                        padding: 12,
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 4
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          25–65: Loaded
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'Menlo',
                          fontWeight: '400',
                          lineHeight: '16.8px'
                        }}>
                          Raw range: +1.0 to +6.0
                        </div>
                      </div>
                      <div style={{
                        alignSelf: 'stretch',
                        padding: 12,
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 4
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          60–100: Alarmist
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'Menlo',
                          fontWeight: '400',
                          lineHeight: '16.8px'
                        }}>
                          Raw range: +5.0 to +15.0+
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Transition Points */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Key Transition Points
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      flexDirection: 'column',
                      display: 'flex',
                      gap: 8
                    }}>
                      <li style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 8
                      }}>
                        <span style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'Menlo',
                          fontWeight: '400',
                          lineHeight: '16.8px',
                          minWidth: 40
                        }}>
                          -0.5
                        </span>
                        <span style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '21px'
                        }}>
                          Neutral ↔ Loaded boundary (~27.5/100)
                        </span>
                      </li>
                      <li style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 8
                      }}>
                        <span style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'Menlo',
                          fontWeight: '400',
                          lineHeight: '16.8px',
                          minWidth: 40
                        }}>
                          +6.0
                        </span>
                        <span style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '21px'
                        }}>
                          Loaded ↔ Alarmist boundary (~65/100)
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Boundary Smoothing */}
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Boundary Smoothing
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Scores within ±1.0 unit of class boundaries receive smoothing to ensure continuous transitions and prevent artificial cliffs in the normalized scale. This maintains model confidence fidelity.
                    </div>
                  </div>

                  {/* Methodological Note Alert */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 12,
                    background: 'var(--color-grey-98, #FAFAF9)',
                    borderRadius: 6,
                    border: '1px var(--color-grey-91, #E5E7EB) solid',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Methodological Note:
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px'
                    }}>
                      Small overlaps between class ranges (e.g., 25–30 appears in both Neutral and Loaded) acknowledge boundary ambiguity inherent in ordinal classification. Articles near boundaries may reasonably belong to adjacent categories depending on context.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section IV: Validation and Performance Metrics */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 20.3,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    wordWrap: 'break-word'
                  }}>
                    IV. Validation and Performance Metrics
                  </div>
                </div>

                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Held-Out Validation Protocol
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      To ensure generalization, 3,126 articles (2.5%) were held out as a validation set never exposed during training. Models were evaluated on this independent test set to measure real-world performance.
                    </div>
                  </div>

                  {/* Ordinal Model Performance */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Ordinal Model Performance
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      background: 'var(--color-grey-90, #E7E5E4)',
                      borderRadius: 6,
                      padding: 13,
                      flexDirection: 'column',
                      display: 'flex',
                      gap: 8
                    }}>
                      <div style={{
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        padding: 13,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        display: 'flex',
                        gap: 8
                      }}>
                        {/* Metric rows */}
                        {[
                          ['Overall Accuracy', '89.73%'],
                          ['F1 Score (Macro)', '83.12%'],
                          ['F1 Score (Weighted)', '89.66%'],
                          ['Neutral F1:', '94.01%'],
                          ['Loaded F1:', '81.89%'],
                          ['Alarmist F1:', '73.44%']
                        ].map(([label, value], idx) => (
                          <div key={idx} style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            display: 'flex'
                          }}>
                            <div style={{
                              color: 'var(--color-grey-32, #57534E)',
                              fontSize: 14,
                              fontFamily: idx < 3 ? 'SF Pro Text' : 'Menlo',
                              fontWeight: '400',
                              lineHeight: '21px'
                            }}>
                              {label}
                            </div>
                            <div style={{
                              flex: '1 1 0',
                              borderBottom: '1px dashed var(--color-grey-83, #D6D3D1)',
                              height: 17,
                              marginLeft: 8,
                              marginRight: 8
                            }} />
                            <div style={{
                              color: 'var(--color-grey-32, #57534E)',
                              fontSize: 14,
                              fontFamily: 'SF Pro Text',
                              fontWeight: '400',
                              lineHeight: '21px',
                              textAlign: 'right'
                            }}>
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Softmax Model Performance */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Softmax Model Performance
                    </div>
                    <div style={{
                      alignSelf: 'stretch',
                      background: 'var(--color-grey-90, #E7E5E4)',
                      borderRadius: 6,
                      padding: 13,
                      flexDirection: 'column',
                      display: 'flex',
                      gap: 8
                    }}>
                      <div style={{
                        background: 'var(--color-grey-98, #FAFAF9)',
                        borderRadius: 6,
                        padding: 13,
                        border: '1px var(--color-grey-91, #E5E7EB) solid',
                        flexDirection: 'column',
                        display: 'flex',
                        gap: 8
                      }}>
                        {[
                          ['Overall Accuracy', '89.51%'],
                          ['F1 Score (Macro)', '81.19%'],
                          ['F1 Score (Weighted)', '89.18%'],
                          ['Neutral F1:', '94.06%'],
                          ['Loaded F1:', '80.93%'],
                          ['Alarmist F1:', '68.59%']
                        ].map(([label, value], idx) => (
                          <div key={idx} style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            display: 'flex'
                          }}>
                            <div style={{
                              color: 'var(--color-grey-32, #57534E)',
                              fontSize: 14,
                              fontFamily: idx < 3 ? 'SF Pro Text' : 'Menlo',
                              fontWeight: '400',
                              lineHeight: '21px'
                            }}>
                              {label}
                            </div>
                            <div style={{
                              flex: '1 1 0',
                              borderBottom: '1px dashed var(--color-grey-83, #D6D3D1)',
                              height: 17,
                              marginLeft: 8,
                              marginRight: 8
                            }} />
                            <div style={{
                              color: 'var(--color-grey-32, #57534E)',
                              fontSize: 14,
                              fontFamily: 'SF Pro Text',
                              fontWeight: '400',
                              lineHeight: '21px',
                              textAlign: 'right'
                            }}>
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Performance Analysis Alert */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 12,
                    background: 'var(--color-grey-98, #FAFAF9)',
                    borderRadius: 6,
                    border: '1px var(--color-grey-91, #E5E7EB) solid',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Performance Analysis:
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px'
                    }}>
                      Both models achieve approximately 90% accuracy with strong performance on Neutral articles. Lower F1 scores on Alarmist content reflect the inherent subjectivity and context-dependence of extreme framing detection. The ordinal model's slight edge suggests that ordinal constraints improve generalization.
                    </div>
                  </div>

                  {/* Train-Test Partition Schema */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 19.7,
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '28.8px',
                      wordWrap: 'break-word'
                    }}>
                      Train-Test Partition Schema
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Visualization of the training and validation split methodology ensuring independent evaluation.
                    </div>
                    <img 
                      src={trainTestPartitionImage} 
                      alt="Train-test split diagram showing features, target, and ML model pipeline"
                      style={{
                        width: '100%',
                        maxWidth: 528,
                        height: 'auto',
                        borderRadius: 6
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Section V: Probability and Confidence Computation */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 20.3,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    wordWrap: 'break-word'
                  }}>
                    V. Probability and Confidence Computation
                  </div>
                </div>

                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8
                }}>
                  {/* Tab Interface */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 16
                  }}>
                    <div style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 8,
                      borderBottom: '1px var(--color-grey-90, #E7E5E4) solid'
                    }}>
                      <div
                        onClick={() => setActiveTab('softmax')}
                        style={{
                          padding: '8px 12px',
                          cursor: 'pointer',
                          borderBottom: activeTab === 'softmax' ? '2px var(--color-grey-10, #1C1917) solid' : '2px transparent solid',
                          marginBottom: -1
                        }}
                      >
                        <div style={{
                          color: activeTab === 'softmax' ? 'var(--color-grey-10, #1C1917)' : 'var(--color-grey-64, #A8A29E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: activeTab === 'softmax' ? '500' : '400',
                          lineHeight: '21px'
                        }}>
                          Softmax Model
                        </div>
                      </div>
                      <div
                        onClick={() => setActiveTab('ordinal')}
                        style={{
                          padding: '8px 12px',
                          cursor: 'pointer',
                          borderBottom: activeTab === 'ordinal' ? '2px var(--color-grey-10, #1C1917) solid' : '2px transparent solid',
                          marginBottom: -1
                        }}
                      >
                        <div style={{
                          color: activeTab === 'ordinal' ? 'var(--color-grey-10, #1C1917)' : 'var(--color-grey-64, #A8A29E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: activeTab === 'ordinal' ? '500' : '400',
                          lineHeight: '21px'
                        }}>
                          Ordinal Model
                        </div>
                      </div>
                    </div>

                    {activeTab === 'softmax' && (
                      <div style={{
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 12
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          Standard Softmax Classification
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '21px',
                          wordWrap: 'break-word',
                          marginBottom: 8
                        }}>
                          The model outputs raw logits for each class, which are transformed via the softmax function into a probability distribution summing to 1.0. The highest probability determines the predicted class, and its value represents confidence.
                        </div>
                        <div style={{
                          padding: 12,
                          background: 'var(--color-grey-98, #FAFAF9)',
                          borderRadius: 6,
                          border: '1px var(--color-grey-91, #E5E7EB) solid',
                          flexDirection: 'column',
                          display: 'flex',
                          gap: 4
                        }}>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            Input logits: [2.0, 1.0, 0.1]
                          </div>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            → Softmax transformation
                          </div>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            Output probabilities: [0.65, 0.24, 0.11]
                          </div>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'Menlo',
                            fontWeight: '400',
                            lineHeight: '16.8px'
                          }}>
                            Prediction: Neutral (65% confidence)
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'ordinal' && (
                      <div style={{
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 12
                      }}>
                        <div style={{
                          color: 'var(--color-grey-15, #292524)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          Ordinal Classification
                        </div>
                        <div style={{
                          color: 'var(--color-grey-32, #57534E)',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '21px',
                          wordWrap: 'break-word'
                        }}>
                          The ordinal model projects article representations onto a one-dimensional latent scale with learned threshold parameters. Cumulative probabilities are converted to class probabilities and continuous scale scores.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confidence Interpretation Guidelines */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Confidence Interpretation Guidelines
                    </div>
                    <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                    }}>
                      {[
                        ['High (≥80%)', 'Strong model certainty; suitable for automated classification workflows'],
                        ['Medium (50–80%)', 'Moderate certainty; article may exhibit mixed signals or boundary characteristics'],
                        ['Low (<50%)', 'High ambiguity; manual review recommended for critical applications']
                      ].map(([level, description], idx) => (
                        <div key={idx} style={{
                          alignSelf: 'stretch',
                          padding: 12,
                          background: 'var(--color-grey-98, #FAFAF9)',
                          borderRadius: 6,
                          border: '1px var(--color-grey-91, #E5E7EB) solid',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          display: 'flex',
                          gap: 4
                        }}>
                          <div style={{
                            color: 'var(--color-grey-15, #292524)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '500',
                            lineHeight: '21px'
                          }}>
                            {level}
                          </div>
                          <div style={{
                            color: 'var(--color-grey-32, #57534E)',
                            fontSize: 14,
                            fontFamily: 'SF Pro Text',
                            fontWeight: '400',
                            lineHeight: '21px'
                          }}>
                            {description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section VI: Limitations and Transparency */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 20,
                marginBottom: 32
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-15, #292524)',
                    fontSize: 20.3,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    wordWrap: 'break-word'
                  }}>
                    VI. Limitations and Transparency
                  </div>
                </div>

                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 24
                }}>
                  {/* Inherited Biases */}
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Inherited Biases
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Labels originate from a teacher model (Llama 3.3), meaning any systematic biases in the teacher's classifications are partially inherited by the student models. While the teacher model was instructed to focus on framing rather than content, topic-specific annotation patterns may persist.
                    </div>
                  </div>

                  {/* Context Window Truncation */}
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Context Window Truncation
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Articles are truncated to 1,500 tokens for computational efficiency. Extended articles may lose nuance from later sections, potentially affecting classification accuracy for documents with evolving framing patterns.
                    </div>
                  </div>

                  {/* Domain-Specific Language Variations */}
                  <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      Domain-Specific Language Variations
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>
                      Certain topics (e.g., disaster reporting, public health emergencies) naturally employ more urgent language. The model attempts to distinguish between contextually appropriate urgency and exaggerated framing, but edge cases require human judgment.
                    </div>
                  </div>

                  {/* Critical Disclaimer Alert */}
                  <div style={{
                    alignSelf: 'stretch',
                    padding: 12,
                    background: 'var(--color-grey-98, #FAFAF9)',
                    borderRadius: 6,
                    border: '1px var(--color-grey-91, #E5E7EB) solid',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 4
                  }}>
                    <div style={{
                      color: 'var(--color-grey-15, #292524)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '500',
                      lineHeight: '21px'
                    }}>
                      ⚠ Critical Disclaimer:
                    </div>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px'
                    }}>
                      Ethoscore quantifies framing and rhetorical tone, not factual accuracy or authorial intent. High alarmism scores do not imply falsehood, nor do low scores guarantee accuracy. This system should complement—not replace—human editorial judgment in consequential decision-making contexts.
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 12,
                marginBottom: 32
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 19.7,
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  lineHeight: '28.8px',
                  wordWrap: 'break-word'
                }}>
                  Try the tool
                </div>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 14,
                  fontFamily: 'SF Pro Text',
                  fontWeight: '400',
                  lineHeight: '21px',
                  wordWrap: 'break-word'
                }}>
                  Analyze any article in your browser. Paste a link or text and get framing scores instantly.
                </div>
                <div 
                  onClick={() => onNavigate && onNavigate('tool')}
                  style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 4,
                    paddingBottom: 4,
                    background: '#1C1917',
                    borderRadius: 9999,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-white-solid, white)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text',
                    fontWeight: '400',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>
                    Try the tool
                  </div>
                </div>
              </div>

              {/* Acknowledgments */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 32
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 14,
                  fontFamily: 'SF Pro Text',
                  fontWeight: '400',
                  lineHeight: '21px',
                  wordWrap: 'break-word'
                }}>
                  Our sincere thanks to Dr. Matthias for his indispensable work on model training and for making this research possible.
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

export default Methodology;


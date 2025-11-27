import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function About({ onNavigate }) {
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
            <Header currentPage="about" onNavigate={onNavigate} />
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
              {/* Decorative Postcard Component */}
              <div style={{
                width: 528,
                position: 'relative',
                marginBottom: 48,
                marginTop: 0
              }}>
                <img 
                  src={require('./Postcard Image from Agora.webp')}
                  alt="Postcard illustration"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: 8,
                    display: 'block'
                  }}
                />
              </div>

              {/* Heading 1 */}
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
                  fontSize: 24,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '34px',
                  textAlign: 'left'
                }}>
                  Where did we lose our clarity?
                </div>
              </div>

              {/* Paragraph 1 */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The project converged on a simple observation: the way news is framed shapes how we see the world, and we've lost the ability to tell the difference between measured reporting and manufactured urgency.
                </div>
              </div>

              {/* Paragraph 2 */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Instead, out came pouring a torrent of clickbait headlines and doom-scrolling feeds, algorithmic amplification of outrage, and eye-watering levels of sensationalism. It was all exciting and attention-grabbing, but it's hard not to feel like something was lost along the way.
                </div>
              </div>

              {/* Paragraph 3 */}
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
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  We've pushed information to new frontiers, but lost our clarity along the way. We started Ethoscore because we're convinced that news can be much more transparent and reader-centric—if only we could measure how it's framed.
                </div>
              </div>

              {/* Heading 2 */}
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
                  fontSize: 24,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '34px',
                  textAlign: 'left'
                }}>
                  It's time to read (between the lines)
                </div>
              </div>

              {/* Paragraph 4 with links */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  So what are we doing about it? In short, we've built the first comprehensive framework for measuring article framing—quantifying the rhetorical posture and emotional intensity of news content along a calibrated spectrum from{' '}
                  <span style={{fontWeight: '500'}}>Neutral</span>
                  {' '}to{' '}
                  <span style={{fontWeight: '500'}}>Loaded</span>
                  {' '}to{' '}
                  <span style={{fontWeight: '500'}}>Alarmist</span>
                  . Using transfer learning on 125,014 articles across 149 topic categories, we've trained models that can detect linguistic urgency, threat language, and dramatic framing—independent of factual accuracy or political orientation.
                </div>
              </div>

              {/* Paragraph 5 */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Why? Because for the first time in history, we have the computational tools to systematically analyze how information is presented, not just what it says. The combination of natural language processing and large-scale validation means we can finally give readers the transparency they deserve—a way to see the framing machinery behind the headlines.
                </div>
              </div>

              {/* Paragraph 6 */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  But just because it's measurable doesn't mean it's going to change anything. Media literacy is one of the oldest unsolved problems of our <span style={{fontStyle: 'italic'}}>homo digitalis</span> age. Except this time, machine learning has given us programmable pattern recognition, and so we tackle these old problems with new tools to expand the frontiers of informed reading.
                </div>
              </div>

              {/* Paragraph 7 */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 16,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  We've got quite a lot started already—89.73% accuracy on held-out validation, a normalized 0–100 scale that makes framing intensity intuitive, and models that distinguish between contextually appropriate urgency and exaggerated alarmism. But there's much more to the story here, and we'd be honored if you'd join us in telling it.
                </div>
              </div>

              {/* User Metrics Section */}
              <div style={{
                alignSelf: 'stretch',
                background: 'var(--color-grey-90, #E7E5E4)',
                borderRadius: 6,
                padding: 13,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 8,
                marginTop: 0
              }}>
                <div style={{
                  background: 'var(--color-grey-98, #FAFAF9)',
                  border: '1px var(--color-grey-91, #E5E7EB) solid',
                  borderRadius: 6,
                  padding: 13,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 8,
                  width: '100%'
                }}>
                  {/* Metric Row 1 */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    display: 'flex'
                  }}>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      textAlign: 'left'
                    }}>
                      Total visitors
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
                      -
                    </div>
                  </div>

                  {/* Metric Row 2 */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    display: 'flex'
                  }}>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      textAlign: 'left'
                    }}>
                      Schools involved
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
                      -
                    </div>
                  </div>

                  {/* Metric Row 3 */}
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    display: 'flex'
                  }}>
                    <div style={{
                      color: 'var(--color-grey-32, #57534E)',
                      fontSize: 14,
                      fontFamily: 'SF Pro Text',
                      fontWeight: '400',
                      lineHeight: '21px',
                      textAlign: 'left'
                    }}>
                      Monthly unique visitors
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
                      -
                    </div>
                  </div>
                </div>

                {/* Metrics footer */}
                <div style={{
                  alignSelf: 'stretch',
                  paddingTop: 4,
                  paddingLeft: 12,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--color-grey-64, #A8A29E)',
                    fontSize: 12,
                    fontFamily: 'Menlo',
                    fontWeight: '400',
                    lineHeight: '18px',
                    textAlign: 'left'
                  }}>
                    Metrics as of
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

export default About;








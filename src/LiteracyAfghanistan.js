import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyAfghanistan({ onNavigate }) {
  const [viewMode, setViewMode] = useState('source');

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
          
          <div style={{ marginLeft: 388 }}>
            <Header currentPage="literacy" onNavigate={onNavigate} />
          </div>

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
            
            <div style={{
              width: 528,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex',
              gap: 24
            }}>
              
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div onClick={() => onNavigate('literacy')} style={{cursor: 'pointer', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
                  <div style={{color: 'var(--color-grey-32, #57534E)', fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '21px'}}>← Back to Gallery</div>
                </div>
              </div>

              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: '#fff9c4', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#1C1917', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>Loaded • 6.4</div>
                </div>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: 'var(--color-grey-90, #E7E5E4)', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#1C1917', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>Foreign Policy · Case Study</div>
                </div>
              </div>

              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--color-grey-15, #292524)', fontSize: 40.7, fontFamily: 'Klim Type Foundry', fontWeight: '550', lineHeight: '48px'}}>
                  Afghanistan is becoming a narco-state again
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--color-grey-32, #57534E)', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '27px'}}>Media Literacy Analysis</div>
              </div>

              <div style={{alignSelf: 'stretch', color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '28px', borderLeft: '3px solid var(--color-grey-90, #E7E5E4)', paddingLeft: 16}}>
                This case study explores how language, framing, and rhetorical techniques can shape perception and emotional response.
              </div>

              <div style={{alignSelf: 'stretch', height: 1, background: 'var(--color-grey-90, #E7E5E4)'}} />

              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                <button onClick={() => setViewMode('source')} style={{padding: '8px 16px', background: viewMode === 'source' ? '#1C1917' : '#E7E5E4', color: viewMode === 'source' ? '#FFFFFF' : '#1C1917', border: 'none', borderRadius: 9999, fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', cursor: 'pointer', transition: 'all 0.2s ease'}}>Source Article</button>
                <button onClick={() => setViewMode('analysis')} style={{padding: '8px 16px', background: viewMode === 'analysis' ? '#1C1917' : '#E7E5E4', color: viewMode === 'analysis' ? '#FFFFFF' : '#1C1917', border: 'none', borderRadius: 9999, fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', cursor: 'pointer', transition: 'all 0.2s ease'}}>View Analysis</button>
              </div>

              {viewMode === 'source' ? (
                <>
                  <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                    <div style={{color: 'var(--color-grey-15, #292524)', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Source Article</div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: 'var(--color-grey-90, #E7E5E4)', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: 'var(--color-grey-32, #57534E)', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>Original Content</div>
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex', color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>
                    <p style={{margin: 0}}>
                      The Taliban's promises to eradicate opium production have proven hollow. Afghanistan is once again on track to become the world's leading producer of heroin, threatening global security and fueling addiction crises worldwide.
                    </p>
                    <p style={{margin: 0}}>
                      After briefly banning poppy cultivation, the Taliban has quietly allowed farmers to return to their fields. The result has been predictable: a surge in opium production that dwarfs previous records.
                    </p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>
                      "The international community was naive to believe the Taliban would abandon their most reliable source of revenue," said one regional expert.
                    </p>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px', marginTop: 12, marginBottom: 4}}>The Economics of Addiction</div>
                    <p style={{margin: 0}}>
                      For Afghan farmers, poppy cultivation offers returns that no legal crop can match. With the economy in freefall and international aid frozen, many see no alternative to growing the raw material for heroin.
                    </p>
                    <p style={{margin: 0}}>
                      The Taliban, despite their public pronouncements, have little incentive to crack down. The drug trade provides billions in revenue that keeps their regime afloat.
                    </p>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px', marginTop: 12, marginBottom: 4}}>Global Consequences</div>
                    <p style={{margin: 0}}>
                      The flood of Afghan heroin is already being felt in Europe and beyond. Overdose deaths are climbing, and law enforcement agencies are struggling to stem the tide.
                    </p>
                  </div>
                </>
              ) : (
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 32, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', padding: 24, background: '#FAFAF9', borderRadius: 12, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 20, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Media Analysis</div>
                    <div style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#44403C', fontSize: 16, fontFamily: 'Klim Type Foundry', fontWeight: '400'}}>Loaded Score</div>
                      <div style={{color: '#CA8A04', fontSize: 32, fontFamily: 'Klim Type Foundry', fontWeight: '600'}}>6.4/10</div>
                    </div>
                    <div style={{width: '100%', height: 8, background: '#E7E5E4', borderRadius: 4, overflow: 'hidden'}}>
                      <div style={{width: '64%', height: '100%', background: '#CA8A04', borderRadius: 4}} />
                    </div>
                    <div style={{color: '#1C1917', fontSize: 16, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '24px'}}>
                      This article uses definitive language and threat framing to present a complex situation as a clear-cut security crisis.
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Headline Analysis</div>
                    <div style={{padding: 8, background: '#FEFCE8', borderRadius: 4, border: '1px solid #FEF08A', color: '#854D0E', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '500', display: 'inline-block', alignSelf: 'flex-start', marginBottom: 8}}>Moderate Impact</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>
                      The headline uses "narco-state"—a highly charged term—and "again" to suggest a return to chaos. This framing presents the situation as definitive rather than evolving.
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 20, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Framing Strategy</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>
                      The article employs a <strong>security threat/failed state</strong> frame:
                    </div>
                    <ul style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px', paddingLeft: 24, margin: 0}}>
                      <li style={{marginBottom: 8}}>Labels Afghanistan as "narco-state" (loaded political term)</li>
                      <li style={{marginBottom: 8}}>Emphasizes global threat to Western audiences</li>
                      <li style={{marginBottom: 8}}>Presents Taliban as deceptive and untrustworthy</li>
                      <li style={{marginBottom: 8}}>Uses economic determinism to explain farmer behavior</li>
                    </ul>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Key Language Patterns</div>
                      <div style={{color: '#A8A29E', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>5 identified</div>
                    </div>
                    
                    {[
                      { term: '"narco-state"', desc: 'Loaded political label that defines a country by criminal activity.' },
                      { term: '"proven hollow"', desc: 'Definitive judgment that forecloses nuance about policy implementation.' },
                      { term: '"threatening global security"', desc: 'Threat amplification connecting local issues to reader safety.' },
                      { term: '"naive to believe"', desc: 'Condescension toward alternative viewpoints.' },
                      { term: '"flood of heroin"', desc: 'Natural disaster metaphor that emphasizes uncontrollable danger.' }
                    ].map((item, i) => (
                      <div key={i} style={{padding: 16, background: '#FAFAF9', borderRadius: 8, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 8, display: 'flex'}}>
                        <div style={{color: '#1C1917', fontSize: 16, fontFamily: 'Klim Type Foundry', fontWeight: '600', background: '#fff9c4', alignSelf: 'flex-start', padding: '4px 8px', borderRadius: 4}}>{item.term}</div>
                        <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Rhetorical Techniques</div>
                      <div style={{color: '#A8A29E', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>5 identified</div>
                    </div>
                    <div style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10, display: 'flex'}}>
                      {['threat amplification', 'labeling', 'expert authority', 'economic determinism', 'global framing'].map((tag, i) => (
                        <div key={i} style={{padding: '6px 14px', background: '#F5F5F4', borderRadius: 99, border: '1px solid #E7E5E4', color: '#1C1917', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>{tag}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Missing Context & Omissions</div>
                    <div style={{padding: 20, background: '#FAFAF9', borderRadius: 8, border: '1px solid #E5E7EB'}}>
                      <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px', marginBottom: 16}}>The article omits context that would provide a more balanced view:</div>
                      <ul style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px', paddingLeft: 24, margin: 0}}>
                        <li style={{marginBottom: 8}}>Impact of frozen international aid on economic alternatives</li>
                        <li style={{marginBottom: 8}}>Historical role of Western intervention in drug trade</li>
                        <li style={{marginBottom: 8}}>Complexity of Taliban factions and policy debates</li>
                        <li style={{marginBottom: 8}}>Alternative development programs and their outcomes</li>
                        <li style={{marginBottom: 8}}>Demand-side factors in Western countries</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', padding: 24, background: '#FEFCE8', borderRadius: 12, border: '1px solid #FEF08A', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Case Study Conclusion</div>
                    <div style={{color: '#854D0E', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8}}>Moderate Emotional Impact</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>
                      This article uses security threat framing and loaded terminology to present Afghanistan's drug situation. While concerns may be valid, the "narco-state" label and threat amplification oversimplify complex dynamics.
                    </div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px', marginTop: 16}}>
                      <strong>Reader Advisory:</strong> Seek sources that address demand-side factors and the impact of international policy on Afghan economic alternatives.
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex', marginTop: 16}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Media Literacy Insights</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>
                      When reading security-focused coverage, consider: Are loaded labels being used? Is the threat being amplified for Western audiences?
                    </div>
                    <div style={{flexDirection: 'row', gap: 16, marginTop: 12, display: 'flex'}}>
                      <div onClick={() => onNavigate('literacy')} style={{color: '#1C1917', fontSize: 15, fontFamily: 'Klim Type Foundry', fontWeight: '500', textDecoration: 'underline', cursor: 'pointer'}}>Explore More Examples</div>
                      <div onClick={() => onNavigate('methodology')} style={{color: '#1C1917', fontSize: 15, fontFamily: 'Klim Type Foundry', fontWeight: '500', textDecoration: 'underline', cursor: 'pointer'}}>Methodology</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={{width: 280, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex', position: 'sticky', top: 24}}>
              <div style={{alignSelf: 'stretch', padding: 20, background: '#FAFAF9', borderRadius: 12, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 16, display: 'flex'}}>
                <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '24px'}}>Media Analysis</div>
                <div style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#44403C', fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400'}}>Loaded Score</div>
                  <div style={{color: '#CA8A04', fontSize: 24, fontFamily: 'Klim Type Foundry', fontWeight: '600'}}>6.4/10</div>
                </div>
                <div style={{width: '100%', height: 6, background: '#E7E5E4', borderRadius: 3, overflow: 'hidden'}}>
                  <div style={{width: '64%', height: '100%', background: '#CA8A04', borderRadius: 3}} />
                </div>
                <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 12, flexDirection: 'column', gap: 8, display: 'flex'}}>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Language Patterns</span>
                    <span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span>
                  </div>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Techniques</span>
                    <span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span>
                  </div>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}>
                    <span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Impact Level</span>
                    <span style={{color: '#CA8A04', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Moderate</span>
                  </div>
                </div>
              </div>

              {viewMode === 'source' && (
                <button onClick={() => setViewMode('analysis')} style={{alignSelf: 'stretch', padding: '12px 20px', background: '#1C1917', color: '#FFFFFF', border: 'none', borderRadius: 9999, fontSize: 15, fontFamily: 'Klim Type Foundry', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s ease'}}>
                  View Full Analysis →
                </button>
              )}

              <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 8, display: 'flex'}}>
                <div onClick={() => onNavigate('literacy')} style={{color: '#57534E', fontSize: 14, fontFamily: 'Klim Type Foundry', cursor: 'pointer', textDecoration: 'underline'}}>← More Examples</div>
                <div onClick={() => onNavigate('methodology')} style={{color: '#57534E', fontSize: 14, fontFamily: 'Klim Type Foundry', cursor: 'pointer', textDecoration: 'underline'}}>Our Methodology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default LiteracyAfghanistan;




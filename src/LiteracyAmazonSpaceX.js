import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyAmazonSpaceX({ onNavigate }) {
  const [viewMode, setViewMode] = useState('source');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{width: '100%', minHeight: '100vh', background: 'transparent', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', position: 'relative'}}>
      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 23px, #E7E5E4 23px, #E7E5E4 24px)', backgroundPosition: '0 0', backgroundSize: '100% 24px'}}>
        <div style={{width: 1304, maxWidth: '100%', minHeight: '100vh', paddingRight: 1, borderRight: '1px var(--color-grey-90, #E7E5E4) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative'}}>
          <div style={{width: '100%', maxWidth: 528, margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
            <Header currentPage="literacy" onNavigate={onNavigate} />
          </div>
          <div style={{alignSelf: 'stretch', paddingLeft: 388, paddingRight: 48, paddingTop: 0, paddingBottom: 48, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', gap: 48}}>
            <div style={{width: 528, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', gap: 24}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div onClick={() => onNavigate('literacy')} style={{cursor: 'pointer', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
                  <div style={{color: '#57534E', fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '21px'}}>← Back to Gallery</div>
                </div>
              </div>

              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: '#fff9c4', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#1C1917', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>Loaded • 5.2</div>
                </div>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: '#E7E5E4', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#1C1917', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>The Verge · Case Study</div>
                </div>
              </div>

              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: '#292524', fontSize: 40.7, fontFamily: 'Klim Type Foundry', fontWeight: '550', lineHeight: '48px'}}>Amazon's Project Kuiper finally launches satellites to compete with SpaceX</div>
                <div style={{alignSelf: 'stretch', color: '#57534E', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '27px'}}>Media Literacy Analysis</div>
              </div>

              <div style={{alignSelf: 'stretch', color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '28px', borderLeft: '3px solid #E7E5E4', paddingLeft: 16}}>
                This case study explores how language, framing, and rhetorical techniques can shape perception and emotional response.
              </div>

              <div style={{alignSelf: 'stretch', height: 1, background: '#E7E5E4'}} />

              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                <button onClick={() => setViewMode('source')} style={{padding: '8px 16px', background: viewMode === 'source' ? '#1C1917' : '#E7E5E4', color: viewMode === 'source' ? '#FFFFFF' : '#1C1917', border: 'none', borderRadius: 9999, fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', cursor: 'pointer'}}>Source Article</button>
                <button onClick={() => setViewMode('analysis')} style={{padding: '8px 16px', background: viewMode === 'analysis' ? '#1C1917' : '#E7E5E4', color: viewMode === 'analysis' ? '#FFFFFF' : '#1C1917', border: 'none', borderRadius: 9999, fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', cursor: 'pointer'}}>View Analysis</button>
              </div>

              {viewMode === 'source' ? (
                <>
                  <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                    <div style={{color: '#292524', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px'}}>Source Article</div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: '#E7E5E4', borderRadius: 4}}><div style={{color: '#57534E', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400'}}>Original Content</div></div>
                  </div>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 20, display: 'flex', color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '30px'}}>
                    <p style={{margin: 0}}>After years of delays, Amazon has finally launched its first operational satellites for Project Kuiper, its ambitious plan to bring broadband internet to underserved areas around the globe.</p>
                    <p style={{margin: 0}}>The launch marks Amazon's entry into a market currently dominated by SpaceX's Starlink, which has already deployed thousands of satellites and signed up millions of customers.</p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>"This is just the beginning," said Amazon's VP of Project Kuiper. "We're committed to connecting the unconnected."</p>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px', marginTop: 12, marginBottom: 4}}>Playing Catch-Up</div>
                    <p style={{margin: 0}}>SpaceX has a significant head start, with over 5,000 satellites already in orbit. Amazon plans to deploy 3,236 satellites but faces a deadline from the FCC to launch half by 2026.</p>
                    <p style={{margin: 0}}>The rivalry between Jeff Bezos and Elon Musk adds a personal dimension to the competition, with both billionaires trading barbs on social media.</p>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px', marginTop: 12, marginBottom: 4}}>Technical Challenges</div>
                    <p style={{margin: 0}}>Amazon claims its satellites will offer competitive speeds and lower latency, though independent testing has yet to verify these claims.</p>
                  </div>
                </>
              ) : (
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 32, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', padding: 24, background: '#FAFAF9', borderRadius: 12, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 20, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Media Analysis</div>
                    <div style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#44403C', fontSize: 16, fontFamily: 'Klim Type Foundry'}}>Loaded Score</div>
                      <div style={{color: '#CA8A04', fontSize: 32, fontFamily: 'Klim Type Foundry', fontWeight: '600'}}>5.2/10</div>
                    </div>
                    <div style={{width: '100%', height: 8, background: '#E7E5E4', borderRadius: 4, overflow: 'hidden'}}><div style={{width: '52%', height: '100%', background: '#CA8A04', borderRadius: 4}} /></div>
                    <div style={{color: '#1C1917', fontSize: 16, fontFamily: 'Klim Type Foundry', lineHeight: '24px'}}>This article uses competitive framing and personality focus to present a business story as a billionaire rivalry.</div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Headline Analysis</div>
                    <div style={{padding: 8, background: '#FEFCE8', borderRadius: 4, border: '1px solid #FEF08A', color: '#854D0E', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '500', display: 'inline-block', alignSelf: 'flex-start', marginBottom: 8}}>Moderate Impact</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>The headline uses "finally" to emphasize delays and frames the story as competition with SpaceX rather than Amazon's independent achievement.</div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 20, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Framing Strategy</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>The article employs a <strong>competitive/underdog</strong> frame:</div>
                    <ul style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', paddingLeft: 24, margin: 0}}>
                      <li style={{marginBottom: 8}}>Emphasizes Amazon's delays and SpaceX's lead</li>
                      <li style={{marginBottom: 8}}>Uses "playing catch-up" to position Amazon as behind</li>
                      <li style={{marginBottom: 8}}>Introduces billionaire rivalry as narrative hook</li>
                      <li style={{marginBottom: 8}}>Notes unverified claims to cast doubt</li>
                    </ul>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Key Language Patterns</div>
                      <div style={{color: '#A8A29E', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>5 identified</div>
                    </div>
                    {[
                      { term: '"finally"', desc: 'Emphasizes delays and implies tardiness or incompetence.' },
                      { term: '"playing catch-up"', desc: 'Sports metaphor positioning Amazon as behind.' },
                      { term: '"trading barbs"', desc: 'Personalizes business competition as personal feud.' },
                      { term: '"ambitious plan"', desc: 'Subtly questions feasibility of Amazon\'s goals.' },
                      { term: '"yet to verify"', desc: 'Casts doubt on Amazon\'s technical claims.' }
                    ].map((item, i) => (
                      <div key={i} style={{padding: 16, background: '#FAFAF9', borderRadius: 8, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 8, display: 'flex'}}>
                        <div style={{color: '#1C1917', fontSize: 16, fontFamily: 'Klim Type Foundry', fontWeight: '600', background: '#fff9c4', alignSelf: 'flex-start', padding: '4px 8px', borderRadius: 4}}>{item.term}</div>
                        <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Rhetorical Techniques</div>
                      <div style={{color: '#A8A29E', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>5 identified</div>
                    </div>
                    <div style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10, display: 'flex'}}>
                      {['competitive framing', 'personality focus', 'doubt casting', 'sports metaphor', 'delay emphasis'].map((tag, i) => (
                        <div key={i} style={{padding: '6px 14px', background: '#F5F5F4', borderRadius: 99, border: '1px solid #E7E5E4', color: '#1C1917', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>{tag}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Missing Context & Omissions</div>
                    <div style={{padding: 20, background: '#FAFAF9', borderRadius: 8, border: '1px solid #E5E7EB'}}>
                      <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', marginBottom: 16}}>The article omits context that would provide a more balanced view:</div>
                      <ul style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', paddingLeft: 24, margin: 0}}>
                        <li style={{marginBottom: 8}}>Amazon's technical innovations and differentiators</li>
                        <li style={{marginBottom: 8}}>Market size allowing multiple competitors</li>
                        <li style={{marginBottom: 8}}>SpaceX's own challenges and delays</li>
                        <li style={{marginBottom: 8}}>Consumer benefits of increased competition</li>
                        <li style={{marginBottom: 8}}>Amazon's infrastructure and distribution advantages</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', padding: 24, background: '#FEFCE8', borderRadius: 12, border: '1px solid #FEF08A', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Case Study Conclusion</div>
                    <div style={{color: '#854D0E', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8}}>Moderate Emotional Impact</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>This article uses competitive framing and billionaire personality focus to tell a business story. While competition is real, the framing emphasizes rivalry over technical achievement.</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', marginTop: 16}}><strong>Reader Advisory:</strong> Seek technical analysis that evaluates Project Kuiper on its own merits rather than primarily as a SpaceX competitor.</div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex', marginTop: 16}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Media Literacy Insights</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>When reading tech business coverage, consider: Is the story framed around personalities or products? Does competitive framing overshadow substantive analysis?</div>
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
                <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Media Analysis</div>
                <div style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#44403C', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>Loaded Score</div>
                  <div style={{color: '#CA8A04', fontSize: 24, fontFamily: 'Klim Type Foundry', fontWeight: '600'}}>5.2/10</div>
                </div>
                <div style={{width: '100%', height: 6, background: '#E7E5E4', borderRadius: 3, overflow: 'hidden'}}><div style={{width: '52%', height: '100%', background: '#CA8A04', borderRadius: 3}} /></div>
                <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 12, flexDirection: 'column', gap: 8, display: 'flex'}}>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}><span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Language Patterns</span><span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span></div>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}><span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Techniques</span><span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span></div>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}><span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Impact Level</span><span style={{color: '#CA8A04', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Moderate</span></div>
                </div>
              </div>
              {viewMode === 'source' && (<button onClick={() => setViewMode('analysis')} style={{alignSelf: 'stretch', padding: '12px 20px', background: '#1C1917', color: '#FFFFFF', border: 'none', borderRadius: 9999, fontSize: 15, fontFamily: 'Klim Type Foundry', fontWeight: '500', cursor: 'pointer'}}>View Full Analysis →</button>)}
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

export default LiteracyAmazonSpaceX;





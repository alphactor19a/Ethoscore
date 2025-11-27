import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function LiteracyPopeLeo({ onNavigate }) {
  const [viewMode, setViewMode] = useState('source');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{width: '100%', minHeight: '100vh', background: 'transparent', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', position: 'relative'}}>
      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 23px, #E7E5E4 23px, #E7E5E4 24px)', backgroundPosition: '0 0', backgroundSize: '100% 24px'}}>
        <div style={{width: 1304, maxWidth: '100%', minHeight: '100vh', paddingRight: 1, borderRight: '1px var(--color-grey-90, #E7E5E4) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', position: 'relative'}}>
          <div style={{ marginLeft: 388 }}><Header currentPage="literacy" onNavigate={onNavigate} /></div>
          <div style={{alignSelf: 'stretch', paddingLeft: 388, paddingRight: 48, paddingTop: 0, paddingBottom: 48, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', gap: 48}}>
            <div style={{width: 528, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', gap: 24}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div onClick={() => onNavigate('literacy')} style={{cursor: 'pointer', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex'}}>
                  <div style={{color: '#57534E', fontSize: 14, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '21px'}}>← Back to Gallery</div>
                </div>
              </div>

              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: '#d4edda', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#1C1917', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>Neutral • 1.9</div>
                </div>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 2, paddingBottom: 2, background: '#E7E5E4', borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{color: '#1C1917', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '400', lineHeight: '18px'}}>Onda Madrid · Case Study</div>
                </div>
              </div>

              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: '#292524', fontSize: 40.7, fontFamily: 'Klim Type Foundry', fontWeight: '550', lineHeight: '48px'}}>'De cara al mundo': international analysis on Onda Madrid</div>
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
                    <p style={{margin: 0}}>The weekly international affairs program "De cara al mundo" featured analysis of the papal election and its implications for the Catholic Church's direction.</p>
                    <p style={{margin: 0}}>Guests discussed the new pope's background, including his career in the Vatican diplomatic corps and his positions on key theological and social issues.</p>
                    <p style={{margin: 0, paddingLeft: 20, borderLeft: '3px solid #E7E5E4', fontStyle: 'italic', color: '#44403C'}}>"The choice of name—Leo XIV—signals continuity with certain traditions while potentially indicating new directions," noted one commentator.</p>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px', marginTop: 12, marginBottom: 4}}>Expert Perspectives</div>
                    <p style={{margin: 0}}>The program included perspectives from theologians, Vatican correspondents, and political analysts. Each offered different interpretations of the election's significance.</p>
                    <p style={{margin: 0}}>Discussion covered the conclave process, the new pope's likely priorities, and potential implications for Catholic communities worldwide.</p>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500', lineHeight: '28px', marginTop: 12, marginBottom: 4}}>Global Context</div>
                    <p style={{margin: 0}}>The program placed the election in the context of challenges facing the Church, including declining membership in some regions and ongoing reform debates.</p>
                  </div>
                </>
              ) : (
                <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 32, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', padding: 24, background: '#FAFAF9', borderRadius: 12, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 20, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Media Analysis</div>
                    <div style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#44403C', fontSize: 16, fontFamily: 'Klim Type Foundry'}}>Neutral Score</div>
                      <div style={{color: '#16a34a', fontSize: 32, fontFamily: 'Klim Type Foundry', fontWeight: '600'}}>1.9/10</div>
                    </div>
                    <div style={{width: '100%', height: 8, background: '#E7E5E4', borderRadius: 4, overflow: 'hidden'}}><div style={{width: '19%', height: '100%', background: '#16a34a', borderRadius: 4}} /></div>
                    <div style={{color: '#1C1917', fontSize: 16, fontFamily: 'Klim Type Foundry', lineHeight: '24px'}}>This article summarizes expert analysis with multiple perspectives, presenting interpretations without editorial advocacy.</div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Headline Analysis</div>
                    <div style={{padding: 8, background: '#d4edda', borderRadius: 4, border: '1px solid #c3e6cb', color: '#155724', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '500', display: 'inline-block', alignSelf: 'flex-start', marginBottom: 8}}>Low Impact</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>The headline simply describes the program format and topic. It makes no claims about the content's conclusions, allowing readers to approach the material without predetermined expectations.</div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 20, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Framing Strategy</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>The article employs a <strong>multi-perspective/analytical</strong> frame:</div>
                    <ul style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', paddingLeft: 24, margin: 0}}>
                      <li style={{marginBottom: 8}}>Presents multiple expert viewpoints</li>
                      <li style={{marginBottom: 8}}>Notes interpretive differences</li>
                      <li style={{marginBottom: 8}}>Provides contextual background</li>
                      <li style={{marginBottom: 8}}>Avoids editorial conclusions</li>
                    </ul>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                      <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Key Language Patterns</div>
                      <div style={{color: '#A8A29E', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>5 identified</div>
                    </div>
                    {[
                      { term: '"featured analysis"', desc: 'Describes program content without characterizing quality.' },
                      { term: '"different interpretations"', desc: 'Acknowledges plurality of expert views.' },
                      { term: '"potentially indicating"', desc: 'Conditional language that avoids definitive claims.' },
                      { term: '"discussion covered"', desc: 'Neutral summary of topics without editorializing.' },
                      { term: '"placed in context"', desc: 'Describes analytical approach without advocacy.' }
                    ].map((item, i) => (
                      <div key={i} style={{padding: 16, background: '#FAFAF9', borderRadius: 8, border: '1px solid #E5E7EB', flexDirection: 'column', gap: 8, display: 'flex'}}>
                        <div style={{color: '#1C1917', fontSize: 16, fontFamily: 'Klim Type Foundry', fontWeight: '600', background: '#d4edda', alignSelf: 'flex-start', padding: '4px 8px', borderRadius: 4}}>{item.term}</div>
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
                      {['multi-perspective framing', 'conditional language', 'expert attribution', 'contextual analysis', 'descriptive summary'].map((tag, i) => (
                        <div key={i} style={{padding: '6px 14px', background: '#F5F5F4', borderRadius: 99, border: '1px solid #E7E5E4', color: '#1C1917', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>{tag}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>What Makes This Neutral</div>
                    <div style={{padding: 20, background: '#FAFAF9', borderRadius: 8, border: '1px solid #E5E7EB'}}>
                      <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', marginBottom: 16}}>This article demonstrates neutral reporting practices:</div>
                      <ul style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', paddingLeft: 24, margin: 0}}>
                        <li style={{marginBottom: 8}}>Multiple expert perspectives included</li>
                        <li style={{marginBottom: 8}}>No single interpretation privileged</li>
                        <li style={{marginBottom: 8}}>Background context provided</li>
                        <li style={{marginBottom: 8}}>Conditional language for uncertain claims</li>
                        <li style={{marginBottom: 8}}>No editorial advocacy</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{alignSelf: 'stretch', padding: 24, background: '#d4edda', borderRadius: 12, border: '1px solid #c3e6cb', flexDirection: 'column', gap: 16, display: 'flex'}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Case Study Conclusion</div>
                    <div style={{color: '#155724', fontSize: 12, fontFamily: 'Klim Type Foundry', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8}}>Low Emotional Impact</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>This article exemplifies balanced coverage of expert analysis. It summarizes multiple perspectives without privileging one interpretation or advocating for particular conclusions.</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px', marginTop: 16}}><strong>Reader Note:</strong> Compare with coverage that frames the papal election through a particular ideological lens to see how framing choices shape perception.</div>
                  </div>

                  <div style={{alignSelf: 'stretch', flexDirection: 'column', gap: 12, display: 'flex', marginTop: 16}}>
                    <div style={{color: '#1C1917', fontSize: 22, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Media Literacy Insights</div>
                    <div style={{color: '#1C1917', fontSize: 18, fontFamily: 'Klim Type Foundry', lineHeight: '30px'}}>Balanced analysis coverage presents multiple expert perspectives without privileging one interpretation or advocating conclusions.</div>
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
                  <div style={{color: '#44403C', fontSize: 14, fontFamily: 'Klim Type Foundry'}}>Neutral Score</div>
                  <div style={{color: '#16a34a', fontSize: 24, fontFamily: 'Klim Type Foundry', fontWeight: '600'}}>1.9/10</div>
                </div>
                <div style={{width: '100%', height: 6, background: '#E7E5E4', borderRadius: 3, overflow: 'hidden'}}><div style={{width: '19%', height: '100%', background: '#16a34a', borderRadius: 3}} /></div>
                <div style={{borderTop: '1px solid #E5E7EB', paddingTop: 12, flexDirection: 'column', gap: 8, display: 'flex'}}>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}><span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Language Patterns</span><span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span></div>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}><span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Techniques</span><span style={{color: '#1C1917', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>5</span></div>
                  <div style={{justifyContent: 'space-between', display: 'flex'}}><span style={{color: '#57534E', fontSize: 13, fontFamily: 'Klim Type Foundry'}}>Impact Level</span><span style={{color: '#16a34a', fontSize: 13, fontFamily: 'Klim Type Foundry', fontWeight: '500'}}>Low</span></div>
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

export default LiteracyPopeLeo;




import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import blogImage from './Gemini Generated Image (9).png';

function BlogPostEmotions({ onNavigate }) {
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
            <Header currentPage="blog" onNavigate={onNavigate} />
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
              {/* Title */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0,
                marginTop: 32
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 25,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '36px',
                  textAlign: 'left'
                }}>
                  Why your emotions are never just your own.
                </div>
              </div>

              {/* Subtitle */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left',
                  fontStyle: 'italic'
                }}>
                  You're not a person, you're a data point
                </div>
              </div>

              {/* Author and Date */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0
              }}>
                <div style={{
                  color: 'var(--color-grey-64, #A8A29E)',
                  fontSize: 13,
                  fontFamily: 'Menlo, monospace',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Arush Arora - November 14, 2025
                </div>
              </div>

              {/* Blog Image */}
              <div style={{
                width: 528,
                position: 'relative',
                marginBottom: 48,
                marginTop: 0
              }}>
                <img 
                  src={blogImage}
                  alt="Blog illustration"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: 8,
                    display: 'block'
                  }}
                />
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The dominant framework for understanding human behavior right now is homo economicus: rational actors pursuing self-interest, consumers making transaction decisions, attention-havers whose eyeball-minutes can be monetized. According to some estimates, your attention is worth roughly $0.000023 per impression. Scale that across millions of people, and suddenly our capacity to feel things together becomes extraordinarily profitable.
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Let me take a step back: this reductionist model is intended to model human behaviour only in terms of consuming as taught in high school economics classes all over the world. Yet, the homo economicus framework isn't just treating us as economic units in an economy. It's treating the emotions of homo politicus—the feelings that connect us to each other, that make us care, that drive collective action—as extractable resources.
                </div>
              </div>

              {/* Paragraph 3 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Reductionism has become a business model. And it's working.
                </div>
              </div>

              {/* Heading 1: How the extraction works */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0,
                marginTop: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 25,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '36px',
                  textAlign: 'left'
                }}>
                  How the extraction works
                </div>
              </div>

              {/* Paragraph 4 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Here's what I think is actually happening, broken into three layers:
                </div>
              </div>

              {/* The Pre-Frame (Bold) */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '500',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The Pre-Frame
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Before you even see the content, your emotional response has been architected. Internal research at major platforms has shown that outrage-inducing content keeps people scrolling significantly longer than neutral content. Posts triggering anger drive engagement multiples higher than posts triggering joy. The optimization target is "emotional arousal"—doesn't matter if it's positive or negative, just needs to spike your nervous system.
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The headline isn't neutral. The thumbnail isn't accidental. The timing—first thing in the morning when you're groggiest, right after work when you're most depleted—that's all engineered.
                </div>
              </div>

              {/* The Personal Experience (Bold) */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '500',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The Personal Experience
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  This is where it gets tricky. The anger you feel reading a news article is yours. The anxiety that wells up when you open your phone is real. The joy from certain content does feel authentic.
                </div>
              </div>

              {/* Paragraph 8 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  And it is! Sort of.
                </div>
              </div>

              {/* Paragraph 9 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  But it's also the product of that pre-framing. Systems worth hundreds of billions of dollars have been built to elicit exactly these responses from you, because these responses are profitable at scale. The more personal and authentic your reaction feels, the more valuable you are as a source of engagement metrics.
                </div>
              </div>

              {/* The Collective Force (Bold) */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '500',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The Collective Force
                </div>
              </div>

              {/* Paragraph 10 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  This is where individual feelings become political reality. When millions of people feel the same curated outrage at approximately the same time, that's not just personal experience. That's the raw material of political movements, policy changes, cultural shifts.
                </div>
              </div>

              {/* Paragraph 11 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Research from NYU's Center for Social Media and Politics found that emotionally charged content travels about 70% faster through social networks than neutral content. Pew Research found that 64% of Americans say social media has a mostly negative effect on how things are going in the country.
                </div>
              </div>

              {/* Paragraph 12 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  But here's what's wild: we know this, and we're still in it.
                </div>
              </div>

              {/* Paragraph 13 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Your feelings, multiplied by millions and synchronized through algorithmic curation, become the substrate on which political reality gets built. Which shapes what content gets created and promoted. Which shapes what feelings get amplified next. The cycle feeds itself.
                </div>
              </div>

              {/* Heading 1: What gets lost */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0,
                marginTop: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 25,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '36px',
                  textAlign: 'left'
                }}>
                  What gets lost
                </div>
              </div>

              {/* Paragraph 14 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  Here's what happens when homo economicus treats homo politicus emotions as extractable resources:
                </div>
              </div>

              {/* Paragraph 15 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  In the political framework, emotions connect people. They form bonds of solidarity and care. They help communities decide what matters and what's worth fighting for. They're essential to sustaining movements, building coalitions, imagining alternatives.
                </div>
              </div>

              {/* Paragraph 16 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  In the economic framework, emotions are just signals to exploit. The systems don't care if your outrage is politically productive or destructive. They don't care if your anxiety brings you closer to your community or isolates you further. They don't care if your feelings help you understand the world or trap you in confusion.
                </div>
              </div>

              {/* Paragraph 17 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  They only care if those feelings keep you scrolling.
                </div>
              </div>

              {/* Paragraph 18 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  According to The Center for Humane Technology, the average person checks their phone 96 times per day. Each check is a little hit of emotion—anticipation, anxiety, validation, outrage. Each emotional spike is a data point. Each data point is worth money.
                </div>
              </div>

              {/* Heading 1: What might help */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 0,
                marginTop: 24
              }}>
                <div style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 25,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '36px',
                  textAlign: 'left'
                }}>
                  What might help
                </div>
              </div>

              {/* Paragraph 19 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  I've been thinking about something I'm calling emotional media literacy. We've talked a lot about media literacy—distinguishing reliable sources from misinformation, understanding how journalism works, recognizing propaganda. All critical. But we need something adjacent.
                </div>
              </div>

              {/* Paragraph 20 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  When you scroll through your feed and see something that makes you angry—your heart rate increases, your jaw tightens, your fingers start typing—pause for a few seconds and ask:
                </div>
              </div>

              {/* Questions list */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 24,
                paddingLeft: 16
              }}>
                <div style={{
                  color: 'var(--color-grey-32, #57534E)',
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  <div style={{ marginBottom: 0 }}>Why did I encounter this at this moment?</div>
                  <div style={{ marginBottom: 0 }}>What about the presentation was engineered for this exact response?</div>
                  <div style={{ marginBottom: 0 }}>Would I feel the same if this was presented differently?</div>
                  <div style={{ marginBottom: 0 }}>Am I a demographic target for this specific emotion?</div>
                </div>
              </div>

              {/* Paragraph 21 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  These questions aren't meant to invalidate your feelings. They're meant to reveal that your feelings exist in a context—a political, economic, technological context that has interests and incentives that might not align with your wellbeing or your community's flourishing.
                </div>
              </div>

              {/* Paragraph 22 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  The choice between these two conflicting frameworks—are we political animals embedded in community, or economic units to be optimized—is itself political. It's messy and uncertain and there's no finish line where anyone has finally figured it out.
                </div>
              </div>

              {/* Paragraph 23 */}
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
                  fontSize: 17,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left'
                }}>
                  But it's the work that being a political animal in the twenty-first century requires. Especially when so many forces would prefer we think of ourselves as something simpler.
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

export default BlogPostEmotions;


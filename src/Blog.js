import React from 'react';
import ethoscoreLogo from './ethoscore logo.png';
import Footer from './Footer';

// Arrow icon component (right arrow)
function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#A8A29E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Blog post item component
function BlogPostItem({ title, author, date, url }) {
  return (
    <a 
      href={url}
      style={{
        alignSelf: 'stretch',
        paddingTop: 24,
        paddingRight: 20,
        paddingBottom: 0,
        paddingLeft: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 0,
        display: 'inline-flex',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      <div style={{
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 4,
        display: 'flex'
      }}>
        {/* Title */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'var(--color-grey-15, #292524)',
            fontSize: 20.6,
            fontFamily: 'Klim Type Foundry, serif',
            fontWeight: '400',
            lineHeight: '28.8px',
            wordWrap: 'break-word',
            whiteSpace: 'pre'
          }}>
            {title}
          </div>
        </div>
        {/* Author and Date */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'var(--color-grey-64, #A8A29E)',
            fontSize: 12,
            fontFamily: 'Menlo, monospace',
            fontWeight: '400',
            lineHeight: '18px',
            wordWrap: 'break-word',
            whiteSpace: 'pre'
          }}>
            {author} - {date}
          </div>
        </div>
      </div>
      {/* Arrow Icon */}
      <div style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
        flexShrink: 0
      }}>
        <ArrowIcon />
      </div>
    </a>
  );
}

function Blog({ onNavigate }) {
  const blogPosts = [
    {
      title: 'The Idea Everyone Misses in the AI Debate',
      author: 'Arush Arora',
      date: 'September 27, 2025',
      url: 'https://vennture.substack.com/p/the-idea-everyone-misses-in-the-ai'
    },
    {
      title: 'A Country Broken (by choice)',
      author: 'Arush Arora',
      date: 'September 3, 2025',
      url: 'https://vennture.substack.com/p/a-country-broken-by-choice'
    },
    {
      title: 'Where Money Flows, Attention Goes',
      author: 'Arush Arora',
      date: 'July 10, 2025',
      url: 'https://vennture.substack.com/p/where-money-flows-attention-goes'
    },
    {
      title: 'On the Department of Education.',
      author: 'Arush Arora',
      date: 'March 29, 2025',
      url: 'https://vennture.substack.com/p/is-education-beyond-politics'
    }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'transparent',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'inline-flex',
      position: 'relative',
      zIndex: 2
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
          width: 528,
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
          <div style={{
            alignSelf: 'stretch',
            paddingTop: 64,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 48,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 170.55,
            display: 'inline-flex'
          }}>
            {/* Logo */}
            <div 
              onClick={() => onNavigate && onNavigate('home')}
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex',
                cursor: 'pointer'
              }}
            >
              <div style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'inline-flex'
              }}>
                <div style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    maxWidth: 32,
                    overflow: 'hidden',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex'
                  }}>
                    <img 
                      src={ethoscoreLogo} 
                      alt="Ethoscore Logo" 
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div style={{
              padding: 4,
              background: 'var(--color-grey-90, #E7E5E4)',
              borderRadius: 9999,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap'
            }}>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div 
                  onClick={() => onNavigate && onNavigate('home')}
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 9999,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-grey-10, #1C1917)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text, sans-serif',
                    fontWeight: '400',
                    lineHeight: '21px',
                    whiteSpace: 'nowrap'
                  }}>
                    Tool
                  </div>
                </div>
              </div>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 4,
                  paddingBottom: 4,
                  background: 'black',
                  borderRadius: 9999,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  whiteSpace: 'nowrap'
                }}>
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-white-solid, white)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text, sans-serif',
                    fontWeight: '400',
                    lineHeight: '21px',
                    whiteSpace: 'nowrap'
                  }}>
                    Blog
                  </div>
                </div>
              </div>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div 
                  onClick={() => onNavigate && onNavigate('about')}
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 9999,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-grey-10, #1C1917)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text, sans-serif',
                    fontWeight: '400',
                    lineHeight: '21px',
                    whiteSpace: 'nowrap'
                  }}>
                    About
                  </div>
                </div>
              </div>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div 
                  onClick={() => onNavigate && onNavigate('literacy')}
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 9999,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-grey-10, #1C1917)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text, sans-serif',
                    fontWeight: '400',
                    lineHeight: '21px',
                    whiteSpace: 'nowrap'
                  }}>
                    Literacy
                  </div>
                </div>
              </div>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                <div 
                  onClick={() => onNavigate && onNavigate('contact')}
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 9999,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-grey-10, #1C1917)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text, sans-serif',
                    fontWeight: '400',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 0,
            display: 'flex',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
          }}>
            {/* Heading */}
            <div style={{
              alignSelf: 'stretch',
              paddingTop: 32,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 40.9,
                  fontFamily: 'Klim Type Foundry, serif',
                  fontWeight: '400',
                  lineHeight: '48px',
                  letterSpacing: '-1.2px',
                  wordWrap: 'break-word'
                }}>
                  Venn Blog
                </div>
              </div>
            </div>

            {/* Blog Posts List */}
            <div style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 0,
              display: 'flex',
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0
            }}>
              {blogPosts.map((post, index) => (
                <BlogPostItem
                  key={index}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  url={post.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default Blog;


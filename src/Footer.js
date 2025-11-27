import React from 'react';

function Footer({ onNavigate }) {
  return (
    <div style={{
      width: '100%',
      minWidth: '100%',
      paddingTop: 1,
      paddingLeft: 388,
      paddingRight: 388,
      borderTop: '1px var(--color-grey-91, #E5E7EB) solid',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
      background: 'var(--color-grey-98, #FAFAF9)',
      position: 'relative',
      zIndex: 3,
      boxSizing: 'border-box',
      marginLeft: 0,
      marginRight: 0
    }}>
      <div style={{
        alignSelf: 'stretch',
        paddingRight: 1,
        borderRight: '1px var(--color-grey-91, #E5E7EB) solid',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex'
      }}>
        <div style={{
          alignSelf: 'stretch',
          paddingTop: 32,
          paddingBottom: 32,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex'
          }}>
            {[
              { text: 'Github', url: 'https://github.com/alphactor19a/ethoscore-backend', external: true },
              { text: 'LinkedIn', url: 'https://www.linkedin.com/in/arusharora19/', external: true },
              { text: 'Methodology', url: 'methodology', external: false }
            ].map((link, index) => {
              const content = (
                <div style={{
                  width: 96,
                  paddingTop: 5,
                  paddingBottom: 4,
                  borderTop: '1px #E5E7EB solid',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'var(--color-grey-32, #57534E)',
                    fontSize: 14,
                    fontFamily: 'SF Pro Text, sans-serif',
                    fontWeight: '400',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>
                    {link.text}
                  </div>
                </div>
              );

              if (link.external) {
                return (
                  <a
                    key={index}
                    href={link.url}
                    style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      textDecoration: 'none'
                    }}
                  >
                    {content}
                  </a>
                );
              } else {
                return (
                  <div
                    key={index}
                    onClick={() => onNavigate && onNavigate(link.url)}
                    style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      cursor: 'pointer'
                    }}
                  >
                    {content}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


import React from 'react';
import ethoscoreLogo from './ethoscore logo.png';

function Header({ currentPage, onNavigate }) {
  const isActive = (page) => {
    if (page === 'home' && currentPage === 'home') return true;
    if (page === 'tool' && currentPage === 'tool') return true;
    if (page === 'blog' && currentPage === 'blog') return true;
    if (page === 'about' && currentPage === 'about') return true;
    if (page === 'literacy' && currentPage === 'literacy') return true;
    if (page === 'contact' && currentPage === 'contact') return true;
    return false;
  };

  const navItemStyle = (page) => ({
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
    background: isActive(page) ? 'black' : 'transparent',
    whiteSpace: 'nowrap'
  });

  const textStyle = (page) => ({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: isActive(page) ? 'var(--color-white-solid, white)' : 'var(--color-grey-10, #1C1917)',
    fontSize: 14,
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    lineHeight: '21px',
    whiteSpace: 'nowrap'
  });

  return (
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
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onNavigate && onNavigate('home');
        }}
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
                style={{width: 32, height: 32, objectFit: 'contain'}}
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
        {/* Tool */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNavigate && onNavigate('tool');
            }}
            style={navItemStyle('tool')}
          >
            <div style={textStyle('tool')}>Tool</div>
          </div>
        </div>

        {/* Blog */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNavigate && onNavigate('blog');
            }}
            style={navItemStyle('blog')}
          >
            <div style={textStyle('blog')}>Blog</div>
          </div>
        </div>

        {/* About */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNavigate && onNavigate('about');
            }}
            style={navItemStyle('about')}
          >
            <div style={textStyle('about')}>About</div>
          </div>
        </div>

        {/* Literacy */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNavigate && onNavigate('literacy');
            }}
            style={navItemStyle('literacy')}
          >
            <div style={textStyle('literacy')}>Literacy</div>
          </div>
        </div>

        {/* Contact */}
        <div style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex'
        }}>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNavigate && onNavigate('contact');
            }}
            style={navItemStyle('contact')}
          >
            <div style={textStyle('contact')}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;


import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function Contacts({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data directly to email without opening mail client
      const response = await fetch('https://formsubmit.co/ajax/arora95448@gapps.uwcsea.edu.sg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name || 'Not provided',
          email: formData.email || 'Not provided',
          phone: formData.phone || 'Not provided',
          linkedin: formData.linkedin || 'Not provided',
          message: formData.message || 'No message provided'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Thanks for reaching out! Your message has been sent.');

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('Sorry, there was a problem sending your message. Please try again later or email us directly at arora95448@gapps.uwcsea.edu.sg.');
    }
  };


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
            <Header currentPage="contact" onNavigate={onNavigate} />
          </div>

          {/* Main Content Section */}
          <div style={{
            alignSelf: 'stretch',
            paddingLeft: 194,
            paddingRight: 194,
            paddingBottom: 48,
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div style={{
              width: 916,
              maxWidth: '100%',
              height: 603,
              position: 'relative',
              alignSelf: 'center'
            }}>
              {/* Border Image Container - decorative border frame */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '25px solid #E7E5E4',
                borderRadius: 16,
                pointerEvents: 'none',
                boxSizing: 'border-box',
                background: 'transparent',
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, #E7E5E4 10px, #E7E5E4 11px)',
                backgroundSize: '100% 20px'
              }} />
              
              {/* Background Card */}
              <div style={{
                position: 'absolute',
                top: 20,
                left: 25,
                width: 'calc(100% - 50px)',
                height: 'calc(100% - 40px)',
                background: '#FFFFFF',
                borderRadius: 16,
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                padding: '31.25px 32px 6.8px 32px',
                display: 'flex',
                gap: 32,
                alignItems: 'flex-start',
                boxSizing: 'border-box'
              }}>
                {/* Left Content Section */}
                <div style={{
                  width: 322,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 12
                }}>
                  <div style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 12
                  }}>
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#000000',
                        fontSize: 36.4,
                        fontFamily: 'Klim Type Foundry',
                        fontWeight: '550',
                        lineHeight: '46.2px',
                        wordWrap: 'break-word'
                      }}>
                        Get in Touch
                      </div>
                    </div>
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      marginBottom: 8
                    }}>
                      <div style={{
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#000000',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '24px',
                        wordWrap: 'break-word'
                      }}>
                        We'd love to hear from you. Whether you're interested in research collaboration, literacy curriculum, or anything else.
                      </div>
                    </div>
                  </div>

                  <div style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    gap: 20
                  }}>
                    {/* Arush Arora */}
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex'
                      }}>
                        <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#000000',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '700',
                          lineHeight: '24px',
                          wordWrap: 'break-word'
                        }}>
                          Arush Arora
                        </div>
                        <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#57534E',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '24px',
                          wordWrap: 'break-word',
                          marginTop: 2
                        }}>
                          Co-Founder
                        </div>
                      </div>
                      <div style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        maxWidth: '100%'
                      }}>
                        <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#57534E',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '20px',
                          wordWrap: 'break-word',
                          maxWidth: '100%'
                        }}>
                          Arush researches affective polarization and its societal implications. He has published peer-reviewed work on social-media polarization and won awards at Sigma Xi conferences.
                        </div>
                      </div>
                    </div>

                    {/* Yaj Tetambe */}
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4
                    }}>
                      <div style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex'
                      }}>
                        <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#000000',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '700',
                          lineHeight: '24px',
                          wordWrap: 'break-word'
                        }}>
                          Yaj Tetambe
                        </div>
                        <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#57534E',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '24px',
                          wordWrap: 'break-word',
                          marginTop: 2
                        }}>
                          Co-Founder
                        </div>
                      </div>
                      <div style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        maxWidth: '100%'
                      }}>
                        <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: '#57534E',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '400',
                          lineHeight: '20px',
                          wordWrap: 'break-word',
                          maxWidth: '100%'
                        }}>
                          Yaj is an incoming undergraduate at the National University of Singapore, majoring in Artificial Intelligence (matriculating 2026). He currently serves as a Security Trooper in the Singapore Armed Forces.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Form Section */}
                <div style={{
                  width: 448,
                  background: '#FAFAFA',
                  borderRadius: 8,
                  padding: '24px 32px',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                  gap: 16
                }}>
                  <form onSubmit={handleSubmit} style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                  }}>
                    {/* Name Field */}
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4,
                      width: '100%'
                    }}>
                      <label style={{
                        color: '#000000',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        style={{
                          width: '100%',
                          height: 48,
                          padding: '14.5px 17px',
                          border: '1px solid #E7E5E4',
                          borderRadius: 8,
                          background: '#FFFFFF',
                          fontSize: 16,
                          fontFamily: 'Helvetica',
                          color: '#6B7280',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Email Field */}
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4,
                      width: '100%'
                    }}>
                      <label style={{
                        color: '#000000',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        style={{
                          width: '100%',
                          height: 48,
                          padding: '14.5px 17px',
                          border: '1px solid #E7E5E4',
                          borderRadius: 8,
                          background: '#FFFFFF',
                          fontSize: 16,
                          fontFamily: 'Helvetica',
                          color: '#6B7280',
                          outline: 'none'
                        }}
                      />
                    </div>

                      {/* Phone and LinkedIn Row */}
                    <div style={{
                      display: 'flex',
                      gap: 8,
                      width: '100%'
                    }}>
                      {/* Phone Field */}
                      <div style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 4,
                        flex: '1 1 0',
                        minWidth: 0
                      }}>
                        <label style={{
                          color: '#000000',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          Phone
                        </label>
                        <div style={{
                          position: 'relative',
                          width: '100%'
                        }}>
                          <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: 38,
                            background: '#E7E5E4',
                            border: '1px solid #E7E5E4',
                            borderRight: 'none',
                            borderRadius: '3px 0 0 3px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                          }}>
                            <div style={{
                              width: 16,
                              height: 11,
                              borderTop: '4px solid #555555',
                              borderLeft: '3px solid #555555',
                              borderRight: '3px solid #555555',
                              borderRadius: '3px 3px 0 0'
                            }} />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+65"
                            style={{
                              width: '100%',
                              height: 48,
                              padding: '14.75px 13px 14.75px 49px',
                              border: '1px solid #E7E5E4',
                              borderRadius: 8,
                              background: '#FFFFFF',
                              fontSize: 16,
                              fontFamily: 'Helvetica',
                              color: '#000000',
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>

                      {/* LinkedIn Field */}
                      <div style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: 4,
                        flex: '1 1 0',
                        minWidth: 0
                      }}>
                        <label style={{
                          color: '#000000',
                          fontSize: 14,
                          fontFamily: 'SF Pro Text',
                          fontWeight: '500',
                          lineHeight: '21px'
                        }}>
                          LinkedIn
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/username"
                          style={{
                            width: '100%',
                            height: 48,
                            padding: '14.5px 15px',
                            border: '1px solid #E7E5E4',
                            borderRadius: 8,
                            background: '#FFFFFF',
                            fontSize: 16,
                            fontFamily: 'Helvetica',
                            color: '#6B7280',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      display: 'flex',
                      gap: 4,
                      width: '100%'
                    }}>
                      <label style={{
                        color: '#000000',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Tell us how we can help!
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking for..."
                        rows={4}
                        style={{
                          width: '100%',
                          minHeight: 96,
                          padding: '13px 17px',
                          border: '1px solid #E7E5E4',
                          borderRadius: 8,
                          background: '#FFFFFF',
                          fontSize: 16,
                          fontFamily: 'Helvetica',
                          color: '#6B7280',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        height: 37,
                        padding: '8px 16px',
                        background: '#000000',
                        borderRadius: 9999,
                        border: 'none',
                        color: '#FFFFFF',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '400',
                        lineHeight: '21px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      Submit
                    </button>
                  </form>
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

export default Contacts;


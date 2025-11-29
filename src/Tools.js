import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import lighthouseImage from './ChatGPT Image Nov 15 2025 Illustration (1).png';

const RAW_API_BASE_URL = process.env.REACT_APP_ETHOSCORE_API_URL || 'http://localhost:8000';
const API_BASE_URL = RAW_API_BASE_URL.endsWith('/') ? RAW_API_BASE_URL.slice(0, -1) : RAW_API_BASE_URL;
const RESULTS_LIMIT = 3;

const formatReadableDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return typeof value === 'string' ? value : null;
  }
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
};

const toPercent = (value) => {
  if (value === null || value === undefined) return null;
  const numeric = typeof value === 'number' ? value : parseFloat(value);
  if (Number.isNaN(numeric)) return null;
  const scaled = numeric <= 1 ? numeric * 100 : numeric;
  return Number(scaled.toFixed(1));
};

const formatScoreValue = (value) => {
  if (value === null || value === undefined) return null;
  const numeric = typeof value === 'number' ? value : parseFloat(value);
  if (Number.isNaN(numeric)) return null;
  return Number(numeric.toFixed(2));
};

const truncatePreview = (text) => {
  if (!text) return '';
  return text.length > 600 ? `${text.slice(0, 600)}…` : text;
};

const normalizeSource = (source) => {
  if (!source) return null;
  if (typeof source === 'string') return source;
  if (typeof source === 'object') {
    if (source.title) return source.title;
    if (source.name) return source.name;
    if (source.uri) return source.uri;
  }
  return String(source);
};

const buildResultId = (record, prefix = 'result') => {
  if (record?.source_url) return record.source_url;
  if (record?.sourceUrl) return record.sourceUrl;
  if (record?.id) return String(record.id);
  const base = record?.title || record?.concept || record?.source || prefix;
  return `${prefix}-${base}-${Math.random().toString(36).slice(2, 8)}`;
};

const formatBackendResult = (record, context = {}) => {
  const ordinalRaw = record?.analysis?.ordinal_analysis || record?.ordinal_analysis || {};
  const classificationRaw = record?.analysis?.classification_analysis || record?.classification_analysis || {};
  const fallbackConcept = context.fallbackConcept || record?.concept || record?.source || 'Article';
  const fallbackTitle = context.fallbackTitle || record?.title || fallbackConcept;
  const preview = truncatePreview(
    record?.body_preview ||
      record?.body_full ||
      record?.body ||
      context.fallbackPreview ||
      ''
  );

  return {
    id: buildResultId(record, context.prefix),
    concept: fallbackConcept,
    headline: fallbackTitle,
    preview: preview || 'No preview available for this article.',
    ordinal: {
      label: ordinalRaw?.predicted_label || classificationRaw?.predicted_label || context.fallbackLabel || 'Neutral',
      confidence: toPercent(ordinalRaw?.confidence),
      score: formatScoreValue(ordinalRaw?.scale_score),
    },
    threeClass: {
      label: classificationRaw?.predicted_label || ordinalRaw?.predicted_label || context.fallbackLabel || 'Neutral',
      confidence: toPercent(classificationRaw?.confidence),
    },
    source: normalizeSource(record?.source) || normalizeSource(context.fallbackSource) || null,
    sourceUrl: record?.source_url || record?.sourceUrl || context.sourceUrl || null,
    publishDate: record?.publish_date || record?.publishDate || null,
  };
};

const deriveDomain = (input) => {
  if (!input) return '';
  try {
    const normalized = input.startsWith('http://') || input.startsWith('https://')
      ? input
      : `https://${input}`;
    const url = new URL(normalized);
    return url.hostname.replace(/^www\./, '');
  } catch {
    return input;
  }
};

const callAnalyzerApi = async (endpoint, payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      const detail = data?.detail || data?.message || response.statusText;
      throw new Error(typeof detail === 'string' ? detail : 'Analyzer request failed');
    }

    return data || {};
  } catch (error) {
    if (error instanceof Error && error.name === 'TypeError') {
      throw new Error('Unable to reach analyzer service. Is the backend running?');
    }
    throw error instanceof Error ? error : new Error('Analyzer request failed');
  }
};

// Search Result Card Component
const SearchResultCard = ({ result }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSentimentColor = (label) => {
    switch (label) {
      case 'Alarmist':
        return '#ffcccc';
      case 'Loaded':
        return '#fff9c4';
      case 'Neutral':
        return '#c8e6c9';
      default:
        return '#E7E5E4';
    }
  };

  const ordinalLabel = result?.ordinal?.label || 'Neutral';
  const ordinalConfidence = result?.ordinal?.confidence;
  const ordinalScore = result?.ordinal?.score;
  const classificationLabel = result?.threeClass?.label || 'Neutral';
  const classificationConfidence = result?.threeClass?.confidence;
  const previewText = result?.preview || 'No preview provided yet.';
  const publishDate = formatReadableDate(result?.publishDate);
  const sentimentColor = getSentimentColor(ordinalLabel);
  const articleLink = result?.sourceUrl || null;

  const actionContent = (
    <div
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4,
        display: 'flex',
        cursor: articleLink ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          color: 'var(--color-grey-10, #1C1917)',
          fontSize: 14,
          fontFamily: 'SF Pro Text',
          fontWeight: '500',
          lineHeight: '21px',
        }}
      >
        Show full article
      </div>
      <div
        style={{
          width: 16,
          height: 16,
          position: 'relative',
        }}
      >
        →
      </div>
    </div>
  );

  return (
    <div
      style={{
        width: '100%',
        padding: 24,
        background: 'white',
        borderRadius: 16,
        border: '1px solid var(--color-grey-91, #E5E7EB)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 24,
        display: 'flex',
        position: 'relative',
        transition:
          'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered ? '0px 12px 24px rgba(0, 0, 0, 0.08)' : '0px 2px 8px rgba(0, 0, 0, 0.04)',
        cursor: 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Tag */}
      <div
        style={{
          alignSelf: 'stretch',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            color: 'var(--color-grey-32, #57534E)',
            fontSize: 14,
            fontFamily: 'SF Pro Text',
            fontWeight: '400',
            lineHeight: '21px',
          }}
        >
          Exploring: {result?.concept || 'Article'}
        </div>
        <div
          style={{
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 4,
            paddingBottom: 4,
            background: sentimentColor,
            borderRadius: 9999,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: 'var(--color-grey-15, #292524)',
              fontSize: 12,
              fontFamily: 'SF Pro Text',
              fontWeight: '500',
              lineHeight: '18px',
            }}
          >
            {ordinalLabel}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          alignSelf: 'stretch',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 16,
          display: 'flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            color: 'var(--color-grey-15, #292524)',
            fontSize: 24,
            fontFamily: 'Klim Type Foundry',
            fontWeight: '550',
            lineHeight: '32px',
            letterSpacing: '0.5px',
          }}
        >
          {result?.headline || 'Untitled article'}
        </div>
        {(result?.source || publishDate) && (
          <div
            style={{
              alignSelf: 'stretch',
              color: 'var(--color-grey-32, #57534E)',
              fontSize: 12,
              fontFamily: 'SF Pro Text',
              fontWeight: '500',
              lineHeight: '18px',
            }}
          >
            {result?.source}
            {result?.source && publishDate && ' • '}
            {publishDate}
          </div>
        )}
        <div
          style={{
            alignSelf: 'stretch',
            color: 'var(--color-grey-32, #57534E)',
            fontSize: 14,
            fontFamily: 'SF Pro Text',
            fontWeight: '400',
            lineHeight: '21px',
          }}
        >
          {previewText}
        </div>
        {articleLink ? (
          <a
            href={articleLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            {actionContent}
          </a>
        ) : (
          actionContent
        )}
      </div>

      {/* Data Cards */}
      <div
        style={{
          alignSelf: 'stretch',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 16,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {/* Ordinal Model Card */}
        <div
          style={{
            flex: '1 1 200px',
            padding: 16,
            background: 'var(--color-grey-98, #FAFAF9)',
            borderRadius: 8,
            border: '1px solid var(--color-grey-91, #E5E7EB)',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 12,
            display: 'flex',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              color: 'var(--color-grey-25, #44403C)',
              fontSize: 12,
              fontFamily: 'SF Pro Text',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            ORDINAL
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'var(--color-grey-32, #57534E)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '400',
              }}
            >
              Label
            </div>
            <div
              style={{
                color: 'var(--color-grey-15, #292524)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '600',
              }}
            >
              {ordinalLabel}
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'var(--color-grey-32, #57534E)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '400',
              }}
            >
              Confidence
            </div>
            <div
              style={{
                color: 'var(--color-grey-15, #292524)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '600',
              }}
            >
              {ordinalConfidence !== null && ordinalConfidence !== undefined
                ? `${ordinalConfidence}%`
                : '—'}
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'var(--color-grey-32, #57534E)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '400',
              }}
            >
              Scale score
            </div>
            <div
              style={{
                color: '#2563EB',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '600',
              }}
            >
              {ordinalScore !== null && ordinalScore !== undefined ? ordinalScore : '—'}
            </div>
          </div>
        </div>

        {/* 3-Class Model Card */}
        <div
          style={{
            flex: '1 1 200px',
            padding: 16,
            background: 'var(--color-grey-98, #FAFAF9)',
            borderRadius: 8,
            border: '1px solid var(--color-grey-91, #E5E7EB)',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 12,
            display: 'flex',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              color: 'var(--color-grey-25, #44403C)',
              fontSize: 12,
              fontFamily: 'SF Pro Text',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            3-CLASS
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'var(--color-grey-32, #57534E)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '400',
              }}
            >
              Label
            </div>
            <div
              style={{
                color: 'var(--color-grey-15, #292524)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '600',
              }}
            >
              {classificationLabel}
            </div>
          </div>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                color: 'var(--color-grey-32, #57534E)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '400',
              }}
            >
              Confidence
            </div>
            <div
              style={{
                color: 'var(--color-grey-15, #292524)',
                fontSize: 14,
                fontFamily: 'SF Pro Text',
                fontWeight: '600',
              }}
            >
              {classificationConfidence !== null && classificationConfidence !== undefined
                ? `${classificationConfidence}%`
                : '—'}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Metadata */}
      <div
        style={{
          alignSelf: 'stretch',
          paddingTop: 16,
          borderTop: '1px dashed var(--color-grey-83, #D6D3D1)',
          justifyContent: 'flex-start',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            color: 'var(--color-grey-32, #57534E)',
            fontSize: 12,
            fontFamily: 'Menlo',
            fontWeight: '400',
            lineHeight: '18px',
          }}
        >
          Concept: {result?.concept || 'Article'} • Annotation: {ordinalLabel.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

function Tools({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('topic');
  const [topicFilter, setTopicFilter] = useState('Any framing');
  const [hoveredFilter, setHoveredFilter] = useState(null);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasSpilled, setHasSpilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const activeRequestId = useRef(0);

  useEffect(() => {
    if (hasSearched) {
      // Trigger spill animation shortly after results appear
      const timer = setTimeout(() => {
        setHasSpilled(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setHasSpilled(false);
    }
  }, [hasSearched]);

  const prepareForRequest = () => {
    setIsSearching(true);
    setHasSearched(false);
    setSearchResults([]);
    setHasSpilled(false);
    setErrorMessage('');
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    const requestId = activeRequestId.current + 1;
    activeRequestId.current = requestId;
    prepareForRequest();

    try {
      const payload = {
        keyword: searchQuery.trim(),
        limit: RESULTS_LIMIT,
      };
      if (topicFilter !== 'Any framing') {
        payload.label = topicFilter.toLowerCase();
      }

      const data = await callAnalyzerApi('/explore/topic', payload);
      const results = Array.isArray(data?.results) ? data.results : [];
      if (activeRequestId.current !== requestId) {
        return;
      }
      setSearchResults(
        results.map((item, index) =>
          formatBackendResult(item, {
            prefix: `topic-${index}`,
            fallbackConcept: item?.concept || searchQuery.trim(),
            fallbackTitle: item?.title || searchQuery.trim(),
          })
        )
      );
      setHasSearched(true);
    } catch (error) {
      if (activeRequestId.current !== requestId) {
        return;
      }
      const message =
        error instanceof Error && error.message
          ? error.message
          : 'Unable to explore this topic right now.';
      setErrorMessage(message);
    } finally {
      if (activeRequestId.current === requestId) {
        setIsSearching(false);
      }
    }
  };

  const handleUrlAnalysis = async () => {
    if (!urlInput.trim()) return;
    const requestId = activeRequestId.current + 1;
    activeRequestId.current = requestId;
    prepareForRequest();
    let normalizedUrl = urlInput.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = `https://${normalizedUrl}`;
    }
    const domain = deriveDomain(normalizedUrl);

    try {
      const response = await callAnalyzerApi('/analyze/url', { url: normalizedUrl });
      if (activeRequestId.current !== requestId) {
        return;
      }
      // Extract the analysis data from the response
      const analysisData = response?.data || response;
      setSearchResults([
        formatBackendResult(analysisData, {
          prefix: 'url',
          fallbackConcept: analysisData?.concept || domain || 'Submitted URL',
          fallbackTitle: analysisData?.title || domain || 'Article from URL',
          fallbackSource: analysisData?.metadata?.source || analysisData?.source || domain,
          sourceUrl: analysisData?.source_url || normalizedUrl,
          fallbackPreview: analysisData?.body?.slice(0, 600) || '',
        }),
      ]);
      setHasSearched(true);
    } catch (error) {
      if (activeRequestId.current !== requestId) {
        return;
      }
      const message =
        error instanceof Error && error.message
          ? error.message
          : 'Unable to analyze this URL right now.';
      setErrorMessage(message);
    } finally {
      if (activeRequestId.current === requestId) {
        setIsSearching(false);
      }
    }
  };

  const handleTextAnalysis = async () => {
    if (!textInput.trim()) return;
    const requestId = activeRequestId.current + 1;
    activeRequestId.current = requestId;
    prepareForRequest();
    const preparedTitle = textTitle.trim() || 'Untitled article';

    try {
      const response = await callAnalyzerApi('/analyze/text', {
        title: preparedTitle,
        body: textInput.trim(),
      });
      if (activeRequestId.current !== requestId) {
        return;
      }
      // Extract the analysis data from the response
      const analysisData = response?.data || response;
      setSearchResults([
        formatBackendResult(analysisData, {
          prefix: 'text',
          fallbackConcept: analysisData?.concept || 'Submitted text',
          fallbackTitle: analysisData?.title || preparedTitle,
          fallbackPreview: textInput.trim().slice(0, 600),
        }),
      ]);
      setHasSearched(true);
    } catch (error) {
      if (activeRequestId.current !== requestId) {
        return;
      }
      const message =
        error instanceof Error && error.message
          ? error.message
          : 'Unable to analyze this text right now.';
      setErrorMessage(message);
    } finally {
      if (activeRequestId.current === requestId) {
        setIsSearching(false);
      }
    }
  };

  const filterHoverColors = {
    Neutral: '#16a34a',   // green
    Loaded: '#facc15',    // yellow
    Alarmist: '#dc2626'   // red
  };

  const tabStyle = (tabName) => ({
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    background: activeTab === tabName ? 'var(--color-grey-10, #1C1917)' : 'transparent',
    color: activeTab === tabName ? 'var(--color-white-solid, #FFFFFF)' : 'var(--color-grey-32, #57534E)',
    fontFamily: 'SF Pro Text',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: '21px',
    transition: 'all 0.2s ease'
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setHasSearched(false);
    setSearchResults([]);
    setHasSpilled(false);
    setErrorMessage('');
    activeRequestId.current += 1;
    setIsSearching(false);
  };

  const filterPillStyle = (filterName) => {
    const isActive = topicFilter === filterName;
    const accentColor = filterHoverColors[filterName];
    const isHovered = hoveredFilter === filterName && accentColor;
    const baseTextColor = isActive ? 'var(--color-white-solid, #FFFFFF)' : 'var(--color-grey-32, #57534E)';

    return {
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      borderRadius: 9999,
      border: `1px solid ${isActive ? 'var(--color-grey-10, #1C1917)' : 'var(--color-grey-91, #E5E7EB)'}`,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      cursor: 'pointer',
      background: isActive ? 'var(--color-grey-10, #1C1917)' : 'transparent',
      color: isHovered ? accentColor : baseTextColor,
      fontFamily: 'SF Pro Text',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: '18px',
      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: isHovered ? '0px 10px 24px rgba(0, 0, 0, 0.12)' : 'none',
      transition: 'transform 0.22s ease, color 0.45s ease, box-shadow 0.22s ease, background-color 0.2s ease, border-color 0.2s ease'
    };
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
        <div className="page-container" style={{
          width: '100%',
          maxWidth: 1304,
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
          <div style={{width: '100%', maxWidth: 528, margin: '0 auto', display: 'flex', flexDirection: 'column'}}>
            <Header currentPage="tool" onNavigate={onNavigate} />
          </div>

          {/* Main Content Section */}
          <div className="page-content-wrapper" style={{
            alignSelf: 'stretch',
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 48,
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex'
          }}>
            <div style={{
              width: '100%',
              maxWidth: 528,
              position: 'relative',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex',
              gap: 0
            }}>
              
              {/* Heading */}
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                marginBottom: 8,
                marginTop: 60
              }}>
                <div className="page-heading" style={{
                  color: 'var(--color-grey-15, #292524)',
                  fontSize: 40.7,
                  fontFamily: 'Klim Type Foundry',
                  fontWeight: '550',
                  lineHeight: '48px',
                  textAlign: 'left',
                  letterSpacing: '0.5px'
                }}>
                  Analyze articles
                </div>
              </div>

              {/* Subheading */}
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
                  textAlign: 'left'
                }}>
                  Detect framing patterns or explore how different sources cover the same topic.
                </div>
              </div>

              {/* Tabs */}
              <div style={{
                padding: 4,
                background: 'var(--color-grey-90, #E7E5E4)',
                borderRadius: 9999,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex',
                marginBottom: 24
              }}>
                <div onClick={() => handleTabChange('topic')} style={tabStyle('topic')}>
                  Search Topic
                </div>
                <div onClick={() => handleTabChange('url')} style={tabStyle('url')}>
                  URL
                </div>
                <div onClick={() => handleTabChange('text')} style={tabStyle('text')}>
                  Paste Text
                </div>
              </div>

              {/* Tab Content */}
              <div style={{
                alignSelf: 'stretch',
                padding: 24,
                background: 'var(--color-grey-98, #FAFAF9)',
                borderRadius: 12,
                border: '1px solid var(--color-grey-91, #E5E7EB)',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                gap: 16
              }}>
                
                {activeTab === 'topic' && (
                  <>
                    <div style={{
                      alignSelf: 'stretch',
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
                        Search topic
                      </div>
                      <input 
                        type="text" 
                        placeholder="Search for a topic..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        style={{
                          alignSelf: 'stretch',
                          padding: '10px 12px',
                          borderRadius: 6,
                          border: '1px solid var(--color-grey-91, #E5E7EB)',
                          background: 'white',
                          color: 'var(--color-grey-15, #292524)',
                          fontFamily: 'SF Pro Text',
                          fontSize: 14,
                          outline: 'none'
                        }}
                      />
                    </div>
                    
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      display: 'flex',
                      gap: 8,
                      flexWrap: 'wrap'
                    }}>
                      {['Any framing', 'Neutral', 'Loaded', 'Alarmist'].map((filter) => (
                        <div 
                          key={filter} 
                          onClick={() => setTopicFilter(filter)} 
                          onMouseEnter={() => setHoveredFilter(filter)}
                          onMouseLeave={() => setHoveredFilter(null)}
                          style={filterPillStyle(filter)}
                        >
                          {filter}
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={handleSearch}
                      style={{
                        alignSelf: 'stretch',
                        padding: '10px 16px',
                        marginTop: 8,
                        background: 'var(--color-grey-10, #1C1917)',
                        borderRadius: 9999,
                        border: 'none',
                        color: 'white',
                        fontFamily: 'SF Pro Text',
                        fontSize: 14,
                        fontWeight: '500',
                        cursor: searchQuery.trim() ? 'pointer' : 'default',
                        opacity: searchQuery.trim() ? 1 : 0.5,
                        transition: 'opacity 0.2s ease'
                      }} 
                      disabled={!searchQuery.trim() || isSearching}
                    >
                      {isSearching ? 'Searching...' : 'Search'}
                    </button>
                  </>
                )}

                {activeTab === 'url' && (
                  <>
                    <div style={{
                      alignSelf: 'stretch',
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
                        Analyze by URL
                      </div>
                      <input 
                        type="text" 
                        placeholder="https://example.com/article"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleUrlAnalysis()}
                        style={{
                          alignSelf: 'stretch',
                          padding: '10px 12px',
                          borderRadius: 6,
                          border: '1px solid var(--color-grey-91, #E5E7EB)',
                          background: 'white',
                          color: 'var(--color-grey-15, #292524)',
                          fontFamily: 'SF Pro Text',
                          fontSize: 14,
                          outline: 'none'
                        }}
                      />
                    </div>

                    <button 
                      onClick={handleUrlAnalysis}
                      style={{
                        alignSelf: 'stretch',
                        padding: '10px 16px',
                        marginTop: 8,
                        background: 'var(--color-grey-10, #1C1917)',
                        borderRadius: 9999,
                        border: 'none',
                        color: 'white',
                        fontFamily: 'SF Pro Text',
                        fontSize: 14,
                        fontWeight: '500',
                        cursor: urlInput.trim() ? 'pointer' : 'default',
                        opacity: urlInput.trim() ? 1 : 0.5,
                        transition: 'opacity 0.2s ease'
                      }} 
                      disabled={!urlInput.trim() || isSearching}
                    >
                      {isSearching ? 'Analyzing...' : 'Analyze Article'}
                    </button>
                  </>
                )}

                {activeTab === 'text' && (
                  <>
                    <div style={{
                      alignSelf: 'stretch',
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
                        Article title <span style={{fontWeight: '400', color: 'var(--color-grey-40, #7C746F)'}}>(optional)</span>
                      </div>
                      <input
                        type="text"
                        placeholder="e.g., Climate change update"
                        value={textTitle}
                        onChange={(e) => setTextTitle(e.target.value)}
                        style={{
                          alignSelf: 'stretch',
                          padding: '10px 12px',
                          borderRadius: 6,
                          border: '1px solid var(--color-grey-91, #E5E7EB)',
                          background: 'white',
                          color: 'var(--color-grey-15, #292524)',
                          fontFamily: 'SF Pro Text',
                          fontSize: 14,
                          outline: 'none'
                        }}
                      />
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
                        color: 'var(--color-grey-15, #292524)',
                        fontSize: 14,
                        fontFamily: 'SF Pro Text',
                        fontWeight: '500',
                        lineHeight: '21px'
                      }}>
                        Paste article text
                      </div>
                      <textarea 
                        placeholder="Paste article text here..."
                        rows={8}
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        style={{
                          alignSelf: 'stretch',
                          padding: '10px 12px',
                          borderRadius: 6,
                          border: '1px solid var(--color-grey-91, #E5E7EB)',
                          background: 'white',
                          color: 'var(--color-grey-15, #292524)',
                          fontFamily: 'SF Pro Text',
                          fontSize: 14,
                          resize: 'vertical',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <button 
                      onClick={handleTextAnalysis}
                      style={{
                        alignSelf: 'stretch',
                        padding: '10px 16px',
                        marginTop: 8,
                        background: 'var(--color-grey-10, #1C1917)',
                        borderRadius: 9999,
                        border: 'none',
                        color: 'white',
                        fontFamily: 'SF Pro Text',
                        fontSize: 14,
                        fontWeight: '500',
                        cursor: textInput.trim() ? 'pointer' : 'default',
                        opacity: textInput.trim() ? 1 : 0.5,
                        transition: 'opacity 0.2s ease'
                      }} 
                      disabled={!textInput.trim() || isSearching}
                    >
                      {isSearching ? 'Analyzing...' : 'Analyze Framing'}
                    </button>
                  </>
                )}

              </div>

              {errorMessage && (
                <div style={{
                  alignSelf: 'stretch',
                  marginTop: 16,
                  padding: '12px 16px',
                  borderRadius: 10,
                  border: '1px solid #fecaca',
                  background: '#fef2f2',
                  color: '#991b1b',
                  fontFamily: 'SF Pro Text',
                  fontSize: 13,
                  lineHeight: '20px'
                }}>
                  {errorMessage}
                </div>
              )}

              {hasSearched && searchResults.length === 0 && !errorMessage && (
                <div style={{
                  alignSelf: 'stretch',
                  marginTop: 24,
                  padding: 16,
                  borderRadius: 10,
                  border: '1px dashed var(--color-grey-91, #E5E7EB)',
                  background: 'var(--color-grey-98, #FAFAF9)',
                  color: 'var(--color-grey-32, #57534E)',
                  fontFamily: 'SF Pro Text',
                  fontSize: 14,
                  lineHeight: '21px'
                }}>
                  We couldn't find any articles that match this request yet. Try a different keyword,
                  framing filter, or paste another article.
                </div>
              )}

              {/* Search Results */}
              {hasSearched && searchResults.length > 0 && (
                <div className="search-cards-section">
                  <div className={`search-cards ${hasSpilled ? 'spill' : ''}`}>
                    {searchResults.map((result, index) => (
                      <div 
                        key={result.id}
                        className="search-card-wrap"
                        data-index={index}
                      >
                        <SearchResultCard result={result} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Footer with Image */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Footer onNavigate={onNavigate} />
        
        {/* Lighthouse Image - Bottom Right, aligned with footer line */}
        <div style={{
          position: 'absolute',
          bottom: 100,
          right: 0,
          zIndex: 2,
          pointerEvents: 'none'
        }}>
          <img 
            src={lighthouseImage} 
            alt="Lighthouse illustration"
            style={{
              height: 'auto',
              maxWidth: '400px',
              width: 'auto',
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Tools;


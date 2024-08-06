import { useEffect } from 'react'
import './App.css'
import ShowRenderedHTML from './ShowRenderedHTML'

const metaTags = [
  { property: 'og:url', content: 'https://sharathxct.github.io/OGTest/' },
  { property: 'og:type', content: 'website' },
  { property: 'og:title', content: 'OG Test' },
  { property: 'og:description', content: 'This is for medial assignment' },
  { property: 'og:image', content: 'https://opengraph.b-cdn.net/production/images/5f014040-f32d-46d4-8579-901dc78a9e94.jpg?token=ebaJtKJgWFJO9DzUDL8y6EW37kCQZuMD1GZeJLotai8&height=799&width=1200&expires=33258895473' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { property: 'twitter:domain', content: 'sharathxct.github.io' },
  { property: 'twitter:url', content: 'https://sharathxct.github.io/OGTest/' },
  { name: 'twitter:title', content: 'OG Test' },
  { name: 'twitter:description', content: 'This is for medial assignment' },
  { name: 'twitter:image', content: 'https://opengraph.b-cdn.net/production/images/5f014040-f32d-46d4-8579-901dc78a9e94.jpg?token=ebaJtKJgWFJO9DzUDL8y6EW37kCQZuMD1GZeJLotai8&height=799&width=1200&expires=33258895473' },
];

function insertMetaTags() {
  const head = document.head;
  metaTags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.setAttribute(tag.name, tag.content);
    head.appendChild(meta);
  });
}

function App() {

  useEffect(() => {
    insertMetaTags()

    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  return (
    <>
      <ShowRenderedHTML>
        <meta name="keywords" content="React, JavaScript, semantic markup, html" />
        <h1>Site Map</h1>
        <p>...</p>
      </ShowRenderedHTML>
    </>
  )
}

export default App

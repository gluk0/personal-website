import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState(['']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // Cat ASCII art
  const logo = [
    "  /\\___/\  ",
    " (  o o  )  ",
    " (  =^=  )  ",
    " (_______)  ",
    "             ",
    "             "
  ];

  const terminalLines = [
    `                --------------------------------------------------`,
    `${logo[0]}      ⚙️ rich@host`,
    `${logo[1]}    --------------------------------------------------`,
    `${logo[2]}     👤  name: rich clarke`,
    `${logo[3]}     🔧  languages: python, bash, terraform, sql`,
    `${logo[4]}    🌱  learning: go, k8s, react, js`,
    "                 💬  expertise: data platforms, data ops, devops on gcp",
    "                 ✏️  skills: ci/cd, iac, networking, data modelling.",
    "                 📘  blog: https://rich-clarke.dev/blog",
    " ",
    "                i'm rich 👋, a life long learner and engineer who",
    "                enjoys solving problems with programming and data.",
  ];

  useEffect(() => {
    // Validate current index is less than the total input list length of terminal content. 
    if (currentLineIndex < terminalLines.length) {
      const currentText = terminalLines[currentLineIndex];
      
      // Do the same for the current lines character length. 
      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentText.slice(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 15);
        
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          setLines(prev => [...prev, '']);
        }, 15);
        
        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div style={containerStyle}>
      <div style={scanlineStyle}></div>
      <div style={screenStyle}>
        {lines.map((line, index) => (
          <div key={index} style={{...lineStyle, whiteSpace: 'pre'}}>
            <span style={promptStyle}>&gt;</span>
            <span 
              style={textStyle} 
              dangerouslySetInnerHTML={{ __html: line }}
            />
            {index === currentLineIndex && <span style={cursorStyle}>_</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '1000px',
  width: '90%',
  margin: '30px auto',
  padding: '15px',
  backgroundColor: '#fafafa',
  position: 'relative',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 'clamp(12px, 3vw, 16px)',
  overflow: 'auto',
  borderRadius: '1px',
  borderColor: '#fafafa'
};

const mobileContainerStyle = {
  ...containerStyle,
  '@media (max-width: 768px)': {
    margin: '15px auto',
    padding: '10px',
    fontSize: '12px',
  }
};

const screenStyle = {
  position: 'relative',
  zIndex: 2
};

const scanlineStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(transparent 50%, rgba(172, 172, 172, 0.02) 50%)',
  backgroundSize: '100% 4px',
  zIndex: 3,
  pointerEvents: 'none',
  animation: 'scanline 1s linear infinite',
  opacity: 0.1
};

const lineStyle = {
  marginBottom: '6px',
  display: 'flex',
  alignItems: 'flex-start',
  textShadow: '0 0 2px rgba(255, 255, 255, 0.3)',
};

const promptStyle = {
  color: '#2f363d',
  marginRight: '8px'
};

const textStyle = {
  color: '#2f363d',
  fontStyle: 'normal'
};

const cursorStyle = {
  color: '#2f363d',
  marginLeft: '2px',
  animation: 'blink 0.5s step-end infinite'
};

const Home = () => {
  return (
    <div style={{ 
      backgroundColor: '#fff',
      minHeight: '100vh',
      margin: 0,
      padding: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <Terminal />
    </div>
  );
};

export default Home; 
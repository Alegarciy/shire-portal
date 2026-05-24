import React from 'react';

export default function Home() {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#333',
      textAlign: 'center',
      padding: '0 20px'
    },
    title: {
      fontSize: '4rem',
      margin: '0 0 16px 0',
      letterSpacing: '-1px'
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 0 32px 0'
    },
    button: {
      padding: '12px 24px',
      fontSize: '1.1rem',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.subtitle}>
        Welcome to the Shire
      </p>
      <a style={styles.button} href="https://github.com/Alegarciy/shire-portal"> 
        Ready to build? 
      </a>
    </div>
  );

}

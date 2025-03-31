import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      background: '#f5f5f5'
    }}>
      <Link href="/generate" style={{
        fontSize: '1.5rem',
        padding: '1rem 2rem',
        borderRadius: '8px',
        backgroundColor: '#2e7dd7',
        color: 'white',
        textDecoration: 'none'
      }}>
        Go to Generate
      </Link>
    </div>
  );
}
import Link from 'next/link';
import './index.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-inner">
        <h1 className="home-title">제1회 새내기 공학캠프</h1>
        <p className="home-subtitle">경품 추첨</p>
        <div className="home-link-container">
          <Link href="/generate" className="home-link">
            Go to Generate
          </Link>
        </div>
      </div>
    </div>
  );
}
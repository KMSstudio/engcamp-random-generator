import Link from 'next/link';
import './index.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-inner">
        <img src="/image/title.png" alt="Title" className="home-title-image" />
        <h1 className="home-title">제1회 새내기 공학캠프 경품 추첨</h1>
        <div className="home-link-container">
          <Link href="/generate" className="home-link">
            Go to Generate
          </Link>
        </div>
      </div>
    </div>
  );
}
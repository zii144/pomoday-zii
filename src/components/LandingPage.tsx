import * as React from 'react';
import logo from '../../logo.png';

type LandingPageProps = {
  onLaunch: () => void;
};

const features = [
  {
    title: '鍵盤優先的任務管理',
    description: '使用指令快速新增、開始與完成任務，保持工作流程順暢無比。',
  },
  {
    title: '沉浸式專注模式',
    description: '專注視圖與快捷鍵讓你把注意力放在今天最重要的事情上。',
  },
  {
    title: '跨裝置同步',
    description: '透過雲端同步保持裝置一致，隨時隨地繼續你的工作節奏。',
  },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <div className="landing font-sans">
      <header className="landing__header border-b border-control">
        <div className="landing__container landing__header-inner">
          <div className="landing__brand">
            <img src={logo} alt="Pomoday" className="landing__logo" />
            <span className="landing__title">Pomoday</span>
          </div>
          <button onClick={onLaunch} className="landing__cta">
            立即開始
          </button>
        </div>
      </header>

      <main>
        <section className="landing__hero">
          <div className="landing__container">
            <div className="landing__hero-card">
              <h1 className="landing__hero-title">專注完成今天最重要的任務</h1>
              <p className="landing__hero-subtitle">
                Pomoday
                是為鍵盤工作者打造的任務管理與番茄鐘工具。透過直覺指令、快捷鍵與清晰的日誌，你可以輕鬆掌握進度，保持專注與效率。
              </p>
              <div className="landing__hero-actions">
                <button onClick={onLaunch} className="landing__hero-primary">
                  開始使用 Pomoday
                </button>
                <a href="#app" className="landing__hero-secondary">
                  直接進入應用
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="landing__section">
          <div className="landing__container">
            <h2 className="landing__section-title">你會愛上 Pomoday 的理由</h2>
            <div className="landing__feature-grid">
              {features.map(feature => (
                <div key={feature.title} className="landing__feature-card">
                  <h3 className="landing__feature-title">{feature.title}</h3>
                  <p className="landing__feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing__section">
          <div className="landing__container">
            <div className="landing__highlight">
              <h2 className="landing__section-title">不只是一個待辦清單</h2>
              <p className="landing__highlight-text">
                Pomoday
                支援標籤、快速搜尋、時間統計以及自訂樣式。你可以透過鍵盤控制一切，讓工作流程保持快速且不中斷。
              </p>
              <button onClick={onLaunch} className="landing__highlight-cta">
                馬上體驗工作流
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing__footer border-t border-control">
        <div className="landing__container landing__footer-inner">
          <span className="landing__footer-text">
            © {new Date().getFullYear()} Pomoday. 專注就是力量。
          </span>
          <button onClick={onLaunch} className="landing__footer-link">
            進入應用程式
          </button>
        </div>
      </footer>
    </div>
  );
};

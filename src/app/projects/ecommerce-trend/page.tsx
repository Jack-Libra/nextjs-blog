import Image from 'next/image';
import Link from 'next/link';

export default function EcommerceTrendPage() {
  return (
    <div className="min-h-screen py-6" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
            首頁
          </Link>
          <span className="mx-2" style={{ color: 'var(--text-secondary)' }}>/</span>
          <Link href="/projects" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
            專案
          </Link>
          <span className="mx-2" style={{ color: 'var(--text-secondary)' }}>/</span>
          <span style={{ color: 'var(--accent)' }}>電商趨勢分析平台</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl">📊</span>
            <h1 className="text-4xl lg:text-6xl font-bold" style={{
              background: `linear-gradient(135deg, var(--accent), var(--primary))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              電商趨勢分析平台
            </h1>
          </div>
          <div className="px-8 lg:px-16">
            <p className="text-xl mx-auto leading-relaxed text-center" style={{ color: 'var(--text-secondary)' }}>
              整合 Supabase、n8n、自動化爬蟲與 GitHub Actions，每日自動抓取與更新電商熱門趨勢，
              並透過 Vercel 快速部署展示的全自動化數據分析平台。
            </p>
          </div>
        </div>

        {/* Main Image */}
        <section className="mb-16">
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl max-w-4xl w-full">
              <a
                href="https://ecommerce-trend-analyzer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/ecommerce-preview.png"
                  alt="電商趨勢分析平台預覽"
                  width={1100}
                  height={690}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer shadow-2xl border-2 rounded-2xl"
                  style={{ borderColor: 'var(--border)' }}
                  priority
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="text-center mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://ecommerce-trend-analyzer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              🚀 查看專案網站
            </a>
            <a
              href="https://github.com/Jack-Libra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              💻 GitHub 原始碼
            </a>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--accent)' }}>專案特色</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">🤖</span>
                  <div>
                    <h3 className="font-semibold text-white">全自動化爬蟲</h3>
                    <p className="text-secondary">使用 n8n 建立自動化工作流程，定時抓取電商平台數據</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">📊</span>
                  <div>
                    <h3 className="font-semibold text-white">趨勢視覺化</h3>
                    <p className="text-secondary">透過圖表清楚呈現商品熱度變化和市場趨勢</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-white">即時更新</h3>
                    <p className="text-secondary">GitHub Actions 自動部署，確保數據即時性</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">🗄️</span>
                  <div>
                    <h3 className="font-semibold text-white">雲端儲存</h3>
                    <p className="text-secondary">使用 Supabase 作為資料倉儲，確保數據安全性</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--accent)' }}>技術架構</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                  <span className="text-2xl">🐍</span>
                  <div>
                    <h3 className="font-semibold text-primary">Python & FastAPI</h3>
                    <p className="text-sm text-secondary">後端 API 開發與數據處理</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <h3 className="font-semibold text-secondary">Next.js</h3>
                    <p className="text-sm text-secondary">現代化前端框架與 SSG</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="font-semibold text-accent">Tailwind CSS</h3>
                    <p className="text-sm text-secondary">響應式 UI 設計</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                  <span className="text-2xl">🗄️</span>
                  <div>
                    <h3 className="font-semibold text-green-400">Supabase</h3>
                    <p className="text-sm text-secondary">PostgreSQL 資料庫服務</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h3 className="font-semibold text-orange-400">n8n</h3>
                    <p className="text-sm text-secondary">自動化工作流程</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="font-semibold text-purple-400">GitHub Actions</h3>
                    <p className="text-sm text-secondary">CI/CD 自動部署</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">開發流程</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-lg text-center" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>數據收集</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                使用 n8n 建立自動化爬蟲，定時從電商平台收集商品數據和熱度指標。
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg text-center" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>數據處理</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                透過 Python 和 FastAPI 處理原始數據，計算趨勢指標並儲存至 Supabase。
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg text-center" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>視覺化展示</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                使用 Next.js 建立響應式前端，以圖表形式呈現趨勢分析結果。
              </p>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'var(--accent)', color: '#1f2937' }}
          >
            ← 返回專案列表
          </Link>
        </section>
    </div>
  );
}


import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" py-6">
      {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="JackLibra Logo"
              width={120}
              height={120}
              className="mx-auto rounded-2xl shadow-2xl bg-black"
            />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6" style={{
            background: `linear-gradient(135deg, var(--accent), var(--primary))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            JackLibra
          </h1>
          <p className="text-xl lg:text-2xl mb-8 mx-auto leading-relaxed text-center" style={{ color: 'var(--text-secondary)' }}>
            分享我在資料分析、自動化、前後端開發上的實作經驗與學習筆記 🚀
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 font-medium text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              🚀 查看專案
            </Link>
            <a
              href="https://github.com/Jack-Libra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 font-medium text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--secondary)' }}
            >
              <Image
                src="/images/github-icon.png"
                alt="GitHub"
                width={20}
                height={20}
                className="filter invert"
              />
              <span>GitHub</span>
            </a>
            <a
              href="https://medium.com/@dafsf60804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--accent)', color: '#1f2937' }}
            >
              <Image
                src="/images/Medium-Icon-Black.png"
                alt="Medium"
                width={20}
                height={20}
              />
              <span>Medium 文章</span>
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">精選專案</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/projects/ecommerce-trend" className="card hover:scale-105 transition-transform">
              <div className="mb-4">
                <Image
                  src="/images/ecommerce-preview.png"
                  alt="電商趨勢分析平台"
                  width={400}
                  height={200}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">📊 電商趨勢分析平台</h3>
              <p className="text-secondary mb-4">
                透過定時爬蟲與趨勢快照，分析電商平台上商品熱度變化，並以圖表方式視覺化呈現。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">Next.js</span>
              </div>
            </Link>

            {/* Placeholder for future projects */}
            <div className="card opacity-50">
              <div className="mb-4 bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                <span className="text-4xl">🚧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">即將推出</h3>
              <p className="text-secondary mb-4">
                更多精彩專案正在開發中...
              </p>
            </div>

            <div className="card opacity-50">
              <div className="mb-4 bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">敬請期待</h3>
              <p className="text-secondary mb-4">
                持續更新中，敬請期待更多創新專案！
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">技術棧</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Python</h3>
              <p className="text-secondary text-sm">資料分析、爬蟲、API 開發</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-lg font-semibold mb-2 text-accent">React/Next.js</h3>
              <p className="text-secondary text-sm">現代化前端開發</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Database</h3>
              <p className="text-secondary text-sm">Supabase、PostgreSQL</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Cloud</h3>
              <p className="text-secondary text-sm">Vercel、GitHub Actions</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">聯絡我</h2>
          <p className="mb-8 mx-auto text-center" style={{ color: 'var(--text-secondary)' }}>
            對我的專案有興趣？想要合作或交流技術？歡迎透過以下方式聯絡我！
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/Jack-Libra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/images/github-icon.png"
                alt="GitHub"
                width={20}
                height={20}
                className="filter invert"
              />
              <span>GitHub</span>
            </a>
            <a
              href="https://medium.com/@dafsf60804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Image
                src="/images/Medium-Icon-Black.png"
                alt="Medium"
                width={20}
                height={20}
                className="filter invert"
              />
              <span>Medium</span>
            </a>
          </div>
        </section>
    </div>
  );
}


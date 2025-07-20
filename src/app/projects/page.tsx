import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-6" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 gradient-text">
            專案展示
          </h1>
          <p className="text-xl mx-auto text-center" style={{ color: 'var(--text-secondary)' }}>
            探索我的技術專案，從資料分析到全端開發的實作經驗分享
          </p>
        </div>

        {/* Featured Project */}
        <section className="mb-16">
          <div className="card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📊</span>
                  <h2 className="text-3xl font-bold text-accent">電商趨勢分析平台</h2>
                </div>
                <p className="text-secondary mb-4 leading-relaxed">
                  透過定時爬蟲與趨勢快照，分析電商平台上商品熱度變化，並以圖表方式視覺化呈現。
                  使用 Supabase 作為資料倉儲，FastAPI 建立 API，並透過 Next.js 前端動態顯示。
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A platform that analyzes the popularity of ecommerce products through web crawling
                  and scheduled snapshots. Built with Supabase, Python FastAPI, and visualized via Next.js.
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-accent">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">FastAPI</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">Supabase</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full">n8n</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">GitHub Actions</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://ecommerce-trend-analyzer.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    🚀 查看專案網站
                  </a>
                  <Link
                    href="/projects/ecommerce-trend"
                    className="btn-secondary"
                  >
                    📖 詳細介紹
                  </Link>
                </div>
              </div>

              <div className="order-first lg:order-last">
                <Link href="/projects/ecommerce-trend">
                  <Image
                    src="/images/ecommerce-preview.png"
                    alt="電商趨勢分析平台預覽"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">其他專案</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder projects */}
            <div className="card opacity-75">
              <div className="mb-4 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-lg h-48 flex items-center justify-center">
                <span className="text-5xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-accent">AI 聊天機器人</h3>
              <p className="text-secondary mb-4">
                整合 OpenAI API 的智能對話系統，支援多輪對話和上下文理解。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">OpenAI</span>
                <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">Streamlit</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">開發中...</span>
              </div>
            </div>

            <div className="card opacity-75">
              <div className="mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg h-48 flex items-center justify-center">
                <span className="text-5xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent text-center">股票分析儀表板</h3>
              <p className="text-secondary mb-4">
                即時股票數據分析與視覺化，包含技術指標和趨勢預測。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">Pandas</span>
                <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">Plotly</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">規劃中...</span>
              </div>
            </div>

            <div className="card opacity-75">
              <div className="mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg h-48 flex items-center justify-center">
                <span className="text-5xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent text-center">個人部落格系統</h3>
              <p className="text-secondary mb-4">
                基於 Next.js 的現代化部落格平台，支援 Markdown 和 SEO 優化。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">MDX</span>
                <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded">Tailwind</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-400">構思中...</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-6 rounded-xl shadow-lg w-full" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>想要了解更多？</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              歡迎查看我的 GitHub 或 Medium 文章，了解更多技術細節和開發心得。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/Jack-Libra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 font-medium text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: 'var(--primary)' }}
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
                className="inline-flex items-center space-x-2 px-6 py-3 font-medium text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: 'var(--secondary)' }}
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
          </div>
        </section>
    </div>
  );
}

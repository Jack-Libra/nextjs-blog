

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-2xl text-center bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">JackLibra的技術筆記</h1>
        <p className="text-lg text-gray-700 mb-6">
          分享我在資料分析、自動化、前後端開發上的實作經驗與學習筆記 🚀
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://medium.com/@dafsf60804"
            target="_blank"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Medium 技術文章
          </a>
          <a
            href="https://github.com/Jack-Libra"
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            GitHub 專案
          </a>
        </div>
      </div>
    </main>
  );
}


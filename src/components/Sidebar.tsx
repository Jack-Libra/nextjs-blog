'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getImagePath } from '@/utils/paths';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      <aside
        className={`${isCollapsed ? 'w-16' : 'w-64'} bg-card hidden lg:block min-h-screen transition-all duration-300 p-4`}
      >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full flex justify-center mb-6 p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
      >
        <span className="text-lg">
          {isCollapsed ? '→' : '←'}
        </span>
      </button>

      <div className={`space-y-6 ${isCollapsed ? 'hidden' : 'block'} px-2`} >
        {/* 快速導航 */}
        <div>
          <h3 className="text-sm font-semibold mb-3 " style={{ color: 'var(--accent)' }}>快速導航</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              >
                <span>🏠</span>
                <span>首頁</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex items-center space-x-2 hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              >
                <span>📁</span>
                <span>專案列表</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 專案列表 */}
        <div>
          <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>專案</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/projects/ecommerce-trend"
                className="flex items-center space-x-2 hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              >
                <span>📊</span>
                <span className="text-sm">電商趨勢分析</span>
              </Link>
            </li>
            {/* 未來可以添加更多專案 */}
          </ul>
        </div>

        {/* 外部連結 */}
        <div>
          <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>外部連結</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://medium.com/@dafsf60804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              >
                <img src={getImagePath("/images/Medium-Icon-Black.png")} alt="Medium" className="w-6 h-5" />
                <span className="text-sm">  Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jack-Libra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-800/50"
              >
                <img src={getImagePath("/images/github-icon.png")} alt="GitHub" className="w-10 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        {/* 技能標籤 */}
        <div>
          <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>技能</h3>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-1 bg-gray-600 text-xs rounded-full">Python</span>
            <span className="px-2 py-1 bg-gray-600 text-xs rounded-full">Next.js</span>
            <span className="px-2 py-1 bg-gray-600 text-xs rounded-full">FastAPI</span>
            <span className="px-2 py-1 bg-gray-600 text-xs rounded-full">Supabase</span>
            <span className="px-2 py-1 bg-gray-600 text-xs rounded-full">Tailwind</span>
          </div>
        </div>
      </div>
      </aside>
      {/* 右邊距區域，與背景色一致 */}
      <div
        className="w-4 min-h-screen hidden lg:block"
        style={{ backgroundColor: 'var(--bg)' }}
      ></div>
    </div>
  );
}

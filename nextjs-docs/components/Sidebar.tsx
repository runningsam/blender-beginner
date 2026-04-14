import { chapters } from '@/lib/chapters';
import Link from 'next/link';

interface SidebarProps {
  lang: 'en' | 'zh';
  currentSlug?: string;
}

export function Sidebar({ lang, currentSlug }: SidebarProps) {
  const baseUrl = lang === 'zh' ? '/zh' : '';

  return (
    <nav className="w-64 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto sticky top-0">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">
          {lang === 'zh' ? '目录' : 'Contents'}
        </h2>
        <ul className="space-y-1">
          <li>
            <Link
              href={`${baseUrl}/`}
              className={`block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                !currentSlug ? 'bg-blue-100 dark:bg-blue-900' : ''
              }`}
            >
              {lang === 'zh' ? '简介' : 'Introduction'}
            </Link>
          </li>
          {chapters.map((chapter) => (
            <li key={chapter.slug}>
              <Link
                href={`${baseUrl}/chapters/${chapter.slug}`}
                className={`block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-sm ${
                  currentSlug === chapter.slug ? 'bg-blue-100 dark:bg-blue-900' : ''
                }`}
              >
                {lang === 'zh' ? chapter.titleZh : chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
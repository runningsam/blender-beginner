import Link from 'next/link';

interface NavbarProps {
  lang: 'en' | 'zh';
}

export function Navbar({ lang }: NavbarProps) {
  const otherLang = lang === 'en' ? 'zh' : 'en';
  const otherUrl = lang === 'en' ? '/zh' : '/';

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          {lang === 'zh' ? 'Blender 初学者指南' : 'Blender Beginner Guide'}
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href={otherUrl}
            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </Link>
        </div>
      </div>
    </header>
  );
}
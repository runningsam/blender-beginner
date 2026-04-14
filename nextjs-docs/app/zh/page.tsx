import { getHomeContent } from '@/lib/chapters';
import { MdxContent } from '@/lib/mdx';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

export default async function ZhHomePage() {
  const content = getHomeContent('zh');

  return (
    <div className="flex min-h-screen">
      <Sidebar lang="zh" />
      <div className="flex-1 flex flex-col">
        <Navbar lang="zh" />
        <main className="flex-1 p-8 max-w-4xl">
          <MdxContent source={content} />
        </main>
      </div>
    </div>
  );
}
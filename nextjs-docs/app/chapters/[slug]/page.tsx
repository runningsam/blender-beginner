import { getChapterContent, chapters, getAllChapterSlugs } from '@/lib/chapters';
import { MdxContent } from '@/lib/mdx';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllChapterSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const chapter = chapters.find(c => c.slug === slug);

  return {
    title: chapter?.title || 'Chapter',
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getChapterContent(slug, 'en');
  const chapter = chapters.find(c => c.slug === slug);

  return (
    <div className="flex min-h-screen">
      <Sidebar lang="en" currentSlug={slug} />
      <div className="flex-1 flex flex-col">
        <Navbar lang="en" />
        <main className="flex-1 p-8 max-w-4xl">
          <MdxContent source={content} />
        </main>
      </div>
    </div>
  );
}
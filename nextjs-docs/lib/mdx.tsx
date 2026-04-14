import { MDXRemote } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface MdxContentProps {
  source: string;
}

export async function MdxContent({ source }: MdxContentProps) {
  if (!source) {
    return <div className="text-gray-500">Content not found</div>;
  }

  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        },
      }}
    />
  );
}
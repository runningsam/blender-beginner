import { MDXRemote } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';

const basePath = '/blender-beginner';

interface MdxContentProps {
  source: string;
}

// Custom image component that prepends basePath
function MdxImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null;

  // If src starts with /images/, prepend basePath
  const imageSrc = src.startsWith('/images/')
    ? `${basePath}${src}`
    : src.startsWith('images/')
    ? `${basePath}/${src}`
    : src;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt={alt || ''}
      className="max-w-full h-auto my-4 rounded"
    />
  );
}

// Custom components for MDX
const mdxComponents = {
  img: MdxImage,
};

export async function MdxContent({ source }: MdxContentProps) {
  if (!source) {
    return <div className="text-gray-500">Content not found</div>;
  }

  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        },
      }}
    />
  );
}
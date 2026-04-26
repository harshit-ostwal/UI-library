import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  };
}

export function getAllDocs() {
  const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else if (file.endsWith('.mdx')) {
        arrayOfFiles.push(filePath);
      }
    });

    return arrayOfFiles;
  };

  const files = getAllFiles(contentDirectory);
  
  return files.map((filePath) => {
    const slug = filePath
      .replace(contentDirectory, '')
      .replace(/^\//, '')
      .replace(/\.mdx$/, '');
    
    return getDocBySlug(slug);
  });
}

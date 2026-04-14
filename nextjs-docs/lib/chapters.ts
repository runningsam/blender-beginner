import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');
const chaptersDir = path.join(contentDir, 'chapters');

export interface Chapter {
  slug: string;
  title: string;
  titleZh: string;
  filename: string;
  filenameZh: string;
}

// Chapter metadata extracted from sidebar
export const chapters: Chapter[] = [
  { slug: 'chapter_01', title: 'Chapter 1: Why should you choose Blender if you are learning 3D modeling?', titleZh: '第1章：为什么学习 3D建模应该选择 Blender？', filename: 'chapter_01.md', filenameZh: 'chapter_01-zh.md' },
  { slug: 'chapter_02', title: 'Chapter 2: Installing Blender on your computer', titleZh: '第2章：在电脑上安装 Blender', filename: 'chapter_02.md', filenameZh: 'chapter_02-zh.md' },
  { slug: 'chapter_03', title: 'Chapter 3: You Installed Blender, Now What? - Moving and Deleting Objects', titleZh: '第3章：安装好 Blender后该做什么？——移动和删除物体', filename: 'chapter_03.md', filenameZh: 'chapter_03-zh.md' },
  { slug: 'chapter_04', title: 'Chapter 4: Rotating and Scaling (Resizing) Objects', titleZh: '第4章：旋转和缩放（调整大小）物体', filename: 'chapter_04.md', filenameZh: 'chapter_04-zh.md' },
  { slug: 'chapter_05', title: 'Chapter 5: Transform, annotate, measure, and add a cube button', titleZh: '第5章：变换、标注、测量和添加立方体按钮', filename: 'chapter_05.md', filenameZh: 'chapter_05-zh.md' },
  { slug: 'chapter_06', title: 'Chapter 6: What is a 3D Cursor For?', titleZh: '第6章：3D游标有什么用？', filename: 'chapter_06.md', filenameZh: 'chapter_06-zh.md' },
  { slug: 'chapter_07', title: 'Chapter 7: Adding the object to the scene', titleZh: '第7章：向场景添加物体', filename: 'chapter_07.md', filenameZh: 'chapter_07-zh.md' },
  { slug: 'chapter_08', title: 'Chapter 8: Copying an object to the scene', titleZh: '第8章：复制物体到场景', filename: 'chapter_08.md', filenameZh: 'chapter_08-zh.md' },
  { slug: 'chapter_09', title: 'Chapter 9: Edit mode', titleZh: '第9章：编辑模式', filename: 'chapter_09.md', filenameZh: 'chapter_09-zh.md' },
  { slug: 'chapter_10', title: 'Chapter 10: Extrude', titleZh: '第10章：挤出', filename: 'chapter_10.md', filenameZh: 'chapter_10-zh.md' },
  { slug: 'chapter_11', title: 'Chapter 11: Inset', titleZh: '第11章：内插', filename: 'chapter_11.md', filenameZh: 'chapter_11-zh.md' },
  { slug: 'chapter_12', title: 'Chapter 12: Bevel', titleZh: '第12章：倒角', filename: 'chapter_12.md', filenameZh: 'chapter_12-zh.md' },
  { slug: 'chapter_13', title: 'Chapter 13: Loop cut', titleZh: '第13章：环切', filename: 'chapter_13.md', filenameZh: 'chapter_13-zh.md' },
  { slug: 'chapter_14', title: 'Chapter 14: Your first 3D model', titleZh: '第14章：你的第一个 3D模型', filename: 'chapter_14.md', filenameZh: 'chapter_14-zh.md' },
  { slug: 'chapter_15', title: 'Chapter 15: Let\'s model a plate', titleZh: '第15章：让我们建模一个盘子', filename: 'chapter_15.md', filenameZh: 'chapter_15-zh.md' },
  { slug: 'chapter_16', title: 'Chapter 16: Let\'s model a cake', titleZh: '第16章：让我们建模一个蛋糕', filename: 'chapter_16.md', filenameZh: 'chapter_16-zh.md' },
  { slug: 'chapter_17', title: 'Chapter 17: Let\'s learn how to render', titleZh: '第17章：学习如何渲染', filename: 'chapter_17.md', filenameZh: 'chapter_17-zh.md' },
  { slug: 'chapter_18', title: 'Chapter 18: Your first animation', titleZh: '第18章：你的第一个动画', filename: 'chapter_18.md', filenameZh: 'chapter_18-zh.md' },
  { slug: 'chapter_19', title: 'Chapter 19: Rendering your first animation', titleZh: '第19章：渲染你的第一个动画', filename: 'chapter_19.md', filenameZh: 'chapter_19-zh.md' },
  { slug: 'chapter_20', title: 'Chapter 20: Modeling a book', titleZh: '第20章：建模一本书', filename: 'chapter_20.md', filenameZh: 'chapter_20-zh.md' },
  { slug: 'chapter_21', title: 'Chapter 21a: Texturing a book', titleZh: '第21a章：给书本添加纹理', filename: 'chapter_21.md', filenameZh: 'chapter_21-zh.md' },
  { slug: 'chapter_21_b', title: 'Chapter 21b: Modeling a hay bale', titleZh: '第21b章：建模一个干草捆', filename: 'chapter_21_b.md', filenameZh: 'chapter_21_b-zh.md' },
  { slug: 'chapter_22', title: 'Chapter 22: Texturing a hay bale', titleZh: '第22章：给干草捆添加纹理', filename: 'chapter_22.md', filenameZh: 'chapter_22-zh.md' },
  { slug: 'chapter_23', title: 'Chapter 23: Modeling and texturing of a pumpkin', titleZh: '第23章：南瓜的建模和纹理', filename: 'chapter_23.md', filenameZh: 'chapter_23-zh.md' },
  { slug: 'chapter_24', title: 'Chapter 24: Modeling and texturing of a bowl with a pasta', titleZh: '第24章：碗和意面的建模与纹理', filename: 'chapter_24.md', filenameZh: 'chapter_24-zh.md' },
  { slug: 'chapter_25', title: 'Chapter 25: Modeling, texturing and animating a magic potion', titleZh: '第25章：魔法药水的建模、纹理和动画制作', filename: 'chapter_25.md', filenameZh: 'chapter_25-zh.md' },
  { slug: 'chapter_26', title: 'Chapter 26a: Modeling, and texturing a Bucket', titleZh: '第26a章：水桶的建模与纹理', filename: 'chapter_26.md', filenameZh: 'chapter_26-zh.md' },
  { slug: 'chapter_26_b', title: 'Chapter 26b: Modeling, and texturing a Cartoony Plant', titleZh: '第26b章：卡通植物的建模与纹理', filename: 'chapter_26_b.md', filenameZh: 'chapter_26_b-zh.md' },
  { slug: 'chapter_27', title: 'Chapter 27: Rigging a cute 3D Mushroom character', titleZh: '第27章：可爱的 3D 蘑菇角色绑骨', filename: 'chapter_27.md', filenameZh: 'chapter_27-zh.md' },
  { slug: 'chapter_28', title: 'Chapter 28: Modeling and texturing a cute 3D cartoony grain sack', titleZh: '第28章：可爱的 3D 卡通谷物袋建模与纹理', filename: 'chapter_28.md', filenameZh: 'chapter_28-zh.md' },
  { slug: 'chapter_29', title: 'Chapter 29: Modeling and texturing of an empty and inflated 3D balloon', titleZh: '第29章：空的和充气的 3D 气球建模与纹理', filename: 'chapter_29.md', filenameZh: 'chapter_29-zh.md' },
  { slug: 'chapter_30', title: 'Chapter 30a: How to import 3D models from CGTrader to Blender', titleZh: '第30a章：如何从 CGTrader 导入 3D 模型到 Blender', filename: 'chapter_30.md', filenameZh: 'chapter_30-zh.md' },
  { slug: 'chapter_30_b', title: 'Chapter 30b: New Blender 5.0 feature: circle array - modeling a flower', titleZh: '第30b章：新 Blender 5.0 功能：圆形阵列 - 制作花朵', filename: 'chapter_30_b.md', filenameZh: 'chapter_30_b-zh.md' },
  { slug: 'chapter_31', title: 'Chapter 31: New Blender 5.0 feature: faster scattering', titleZh: '第31章：新 Blender 5.0 功能：更快的散布', filename: 'chapter_31.md', filenameZh: 'chapter_31-zh.md' },
];

export function getChapterContent(slug: string, lang: 'en' | 'zh'): string {
  const chapter = chapters.find(c => c.slug === slug);
  if (!chapter) return '';

  const filename = lang === 'zh' ? chapter.filenameZh : chapter.filename;
  const filePath = path.join(chaptersDir, filename);

  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

export function getHomeContent(lang: 'en' | 'zh'): string {
  const filename = lang === 'zh' ? 'README-zh.md' : 'README.md';
  const filePath = path.join(contentDir, filename);

  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

export function getAllChapterSlugs(): string[] {
  return chapters.map(c => c.slug);
}
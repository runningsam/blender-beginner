#!/usr/bin/env python3
"""
改进的 PDF 转 Markdown 脚本
在 block 层面判断小节标题（独立、全大写、较短）
"""

import fitz
import re
from pathlib import Path
import glob
import shutil

# PDF 1 章节配置
CHAPTER_PAGES_V1 = {
    1: (7, 9), 2: (9, 13), 3: (13, 26), 4: (26, 37), 5: (37, 41),
    6: (41, 44), 7: (44, 46), 8: (46, 51), 9: (51, 57), 10: (57, 79),
    11: (79, 82), 12: (82, 88), 13: (88, 92), 14: (92, 126), 15: (126, 141),
    16: (141, 167), 17: (167, 170), 18: (170, 183), 19: (183, 193),
    20: (193, 212), "21a": (212, 247), "21b": (247, 262), 22: (262, 273), 23: (273, 299),
}
CHAPTER_TITLES_V1 = {
    1: "Why should you choose Blender if you are learning 3D modeling?",
    2: "Installing Blender on your computer",
    3: "You Installed Blender, Now What? - Moving and Deleting Objects",
    4: "Rotating and Scaling (Resizing) Objects",
    5: "Transform, annotate, measure, and add a cube button",
    6: "What is a 3D Cursor For?",
    7: "Adding the object to the scene",
    8: "Copying an object to the scene",
    9: "Edit mode",
    10: "Extrude",
    11: "Inset",
    12: "Bevel",
    13: "Loop cut",
    14: "Your first 3D model",
    15: "Let's model a plate",
    16: "Let's model a cake",
    17: "Let's learn how to render",
    18: "Your first animation",
    19: "Rendering your first animation",
    20: "Modeling a book",
    "21a": "Texturing a book",
    "21b": "Modeling a hay bale",
    22: "Texturing a hay bale",
    23: "Modeling and texturing of a pumpkin",
}

CHAPTER_PAGES_V2 = {
    24: (6, 77), 25: (77, 110), "26a": (110, 175), "26b": (175, 215),
    27: (215, 244), 28: (244, 274), 29: (274, 310), "30a": (310, 327),
    "30b": (327, 338), 31: (338, 364),
}
CHAPTER_TITLES_V2 = {
    24: "Modeling and texturing of a bowl with a pasta",
    25: "Modeling, texturing and animating a magic potion",
    "26a": "Modeling, and texturing a Bucket",
    "26b": "Modeling, and texturing a Cartoony Plant",
    27: "Rigging a cute 3D Mushroom character",
    28: "Modeling and texturing a cute 3D cartoony grain sack",
    29: "Modeling and texturing of an empty and inflated 3D balloon",
    "30a": "How to import 3D models from CGTrader to Blender",
    "30b": "New Blender 5.0 feature: circle array - modeling a flower",
    31: "New Blender 5.0 feature: faster scattering",
}

BOTTOM_THRESHOLD = 700
# 常见缩写，不应该成为标题
ABBREVIATIONS = {'LMB', 'RMB', 'TAB', 'ALT', 'CTRL', 'SHIFT', 'ESC', 'DEL', 'RGB', 'XYZ', 'UV', 'ICO'}

def is_page_number(text, y0, page_num):
    text = text.replace('\u200b', '').strip()
    if not re.match(r'^\d+$', text):
        return False
    if y0 < BOTTOM_THRESHOLD:
        return False
    num = int(text)
    return abs(num - page_num) <= 5

def is_section_title(text):
    """判断是否是小节标题"""
    text = text.replace('\u200b', '').strip()
    # 去掉常见的章节标题格式 "Chapter X - Title"
    if re.match(r'^Chapter \d+[a-z]? -', text):
        return False
    # 必须全大写（允许少量小写如 '&'）
    upper_ratio = sum(c.isupper() for c in text if c.isalpha()) / max(1, sum(c.isalpha() for c in text))
    if upper_ratio < 0.9:
        return False
    # 不应该是缩写
    if text in ABBREVIATIONS:
        return False
    # 长度适中（标题通常 10-60 字符）
    if len(text) < 8 or len(text) > 60:
        return False
    # 不应该是纯数字
    if re.match(r'^\d+$', text):
        return False
    return True

def format_text(text):
    """格式化单个文本"""
    # 清除零宽空格
    text = text.replace('\u200b', '')

    # 处理快捷键
    text = re.sub(r'"([A-Z](?:\+[A-Z\d])?)"', r'`"\1"`', text)
    text = re.sub(r'(?<![a-zA-Z`])([A-Z]\+[A-Z\d])(?![a-zA-Z`])', r'`\1`', text)

    # 处理菜单路径
    text = re.sub(
        r'(\w+)\s*→\s*(\w+)(?:\s*→\s*(\w+))?',
        lambda m: f'*`{m.group(1)} → {m.group(2)}' + (f' → {m.group(3)}' if m.group(3) else '') + '`*',
        text
    )

    return text

def extract_pdf(pdf_path, output_dir):
    doc = fitz.open(pdf_path)
    images_dir = Path(output_dir) / "images"
    images_dir.mkdir(parents=True, exist_ok=True)

    pages_data = []
    total_images = 0
    filtered_count = 0

    for page_num in range(len(doc)):
        page = doc[page_num]
        dict_data = page.get_text("dict")
        blocks = sorted(dict_data.get("blocks", []), key=lambda b: b.get("bbox", [0])[1])

        page_content = []
        page_images = []
        img_counter = 0

        for block in blocks:
            block_type = block.get("type")
            y0 = block.get("bbox")[1]

            if block_type == 0:
                # 文本块
                lines = block.get("lines", [])
                block_text = ''
                for line in lines:
                    spans = line.get("spans", [])
                    for span in spans:
                        block_text += span.get("text", '')

                block_text = block_text.replace('\u200b', '').strip()

                if not block_text:
                    continue

                # 过滤页码
                if is_page_number(block_text, y0, page_num + 1):
                    filtered_count += 1
                    continue

                # 过滤章节标题（如 "Chapter 10 - Extrude"）
                if re.match(r'^Chapter \d+[a-z]? - ', block_text):
                    continue

                # 判断是否是小节标题
                if is_section_title(block_text):
                    page_content.append(f'\n## {block_text}\n')
                else:
                    # 每个 block 后面加换行，避免内容合并
                    page_content.append(format_text(block_text) + '\n')

            elif block_type == 1:
                # 图片块
                img_data = block.get("image")
                if img_data:
                    img_counter += 1
                    img_name = f"page_{page_num + 1}_img_{img_counter}.png"
                    (images_dir / img_name).write_bytes(img_data)
                    total_images += 1
                    page_images.append(img_name)
                    page_content.append(f'\n![{img_name}](../images/{img_name})\n')

        pages_data.append({'page': page_num + 1, 'content': page_content, 'images': page_images})
        if page_num % 50 == 0:
            print(f"  页 {page_num + 1}/{len(doc)}")

    doc.close()
    print(f"  图片: {total_images}, 过滤页码: {filtered_count}")
    return pages_data

def format_list_items(content):
    """处理编号列表"""
    lines = content.split('\n')
    new_lines = []
    list_buffer = []
    in_list = False

    for line in lines:
        stripped = line.strip()
        # 检测列表项: "数字." 开头
        list_match = re.match(r'^(\d+)\.\s*(.*)$', stripped)

        if list_match and not stripped.startswith('##'):
            if in_list:
                new_lines.append('\n'.join(list_buffer))
                list_buffer = []
            in_list = True
            list_buffer.append(f'{list_match.group(1)}. {list_match.group(2)}')
        elif in_list:
            new_list_match = re.match(r'^(\d+)\.\s*(.*)$', stripped)
            if stripped and not stripped.startswith('![') and not new_list_match and not stripped.startswith('##'):
                if list_buffer:
                    list_buffer[-1] += ' ' + stripped
            elif stripped.startswith('![') or not stripped or stripped.startswith('##'):
                new_lines.append('\n'.join(list_buffer))
                list_buffer = []
                in_list = False
                new_lines.append(line)
            elif new_list_match:
                new_lines.append('\n'.join(list_buffer))
                list_buffer = [f'{new_list_match.group(1)}. {new_list_match.group(2)}']
        else:
            new_lines.append(line)

    if list_buffer:
        new_lines.append('\n'.join(list_buffer))

    return '\n'.join(new_lines)

def format_final(content):
    """最终格式化"""
    # 处理列表
    content = format_list_items(content)

    # 确保图片前后有空行
    content = re.sub(r'([^\n])\n!\[', r'\1\n\n![', content)
    content = re.sub(r'\]\n([^\n!\[#])', r']\n\n\1', content)

    # 清理多余空行
    content = re.sub(r'\n{3,}', '\n\n', content)

    # 清理多余空格
    content = re.sub(r'  +', ' ', content)

    return content.strip()

def format_chapter_num(ch_id):
    if isinstance(ch_id, str):
        base = int(ch_id.replace('a', '').replace('b', ''))
        suffix = '_b' if 'b' in ch_id else ''
        return f"{base:02d}{suffix}"
    return f"{ch_id:02d}"

def create_chapters(pages_data, output_dir, chapter_pages, chapter_titles):
    chapters_dir = Path(output_dir) / "chapters"
    chapters_dir.mkdir(parents=True, exist_ok=True)

    for ch_id, (start, end) in chapter_pages.items():
        title = chapter_titles[ch_id]
        chapter_pages_data = [p for p in pages_data if start <= p['page'] < end]

        raw_content = '\n'.join('\n'.join(p['content']) for p in chapter_pages_data)
        formatted = format_final(raw_content)

        ch_num = format_chapter_num(ch_id)
        display = ch_id if isinstance(ch_id, str) else ch_id
        full = f"# Chapter {display}: {title}\n\n{formatted}"

        (chapters_dir / f"chapter_{ch_num}.md").write_text(full, encoding='utf-8')
        img_count = sum(len(p['images']) for p in chapter_pages_data)
        print(f"  Chapter {ch_id}: {len(chapter_pages_data)}页, {img_count}图")

def create_readme(pages_data, output_dir, title, intro_end):
    intro_pages = [p for p in pages_data if p['page'] <= intro_end]
    raw_content = '\n'.join('\n'.join(p['content']) for p in intro_pages)
    formatted = format_final(raw_content)

    (Path(output_dir) / "README.md").write_text(f"# {title}\n\n{formatted}", encoding='utf-8')
    print(f"  README: {sum(len(p['images']) for p in intro_pages)}图")

def create_summary(output_dir, chapter_titles):
    summary = "# Summary\n\n- [Introduction](README.md)\n\n"
    for ch_id, title in chapter_titles.items():
        ch_num = format_chapter_num(ch_id)
        display = ch_id if isinstance(ch_id, str) else ch_id
        summary += f"- [Chapter {display}: {title}](chapters/chapter_{ch_num}.md)\n"
    (Path(output_dir) / "SUMMARY.md").write_text(summary)

def create_index_html(output_dir, title):
    html = f'''<!DOCTYPE html>
<html><head><title>{title}</title>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
</head><body><div id="app"></div>
<script>window.$docsify={{name:'{title}',loadSidebar:'SUMMARY.md',homepage:'README.md'}}</script>
<script src="//cdn.jsdelivr.net/npm/docsify@4/lib/docsify.min.js"></script>
</body></html>'''
    (Path(output_dir) / "index.html").write_text(html)

def process_pdf(pdf_pattern, output_dir, chapter_pages, chapter_titles, title, intro_end):
    pdf_files = glob.glob(pdf_pattern)
    if not pdf_files:
        print(f"找不到: {pdf_pattern}")
        return

    print(f"\n处理: {Path(pdf_files[0]).name}")

    if Path(output_dir).exists():
        shutil.rmtree(output_dir)

    print("  提取PDF...")
    pages_data = extract_pdf(pdf_files[0], output_dir)

    print("  创建文件...")
    create_readme(pages_data, output_dir, title, intro_end)
    create_chapters(pages_data, output_dir, chapter_pages, chapter_titles)
    create_summary(output_dir, chapter_titles)
    create_index_html(output_dir, title)
    print(f"  完成: {output_dir}/")

def main():
    print("=" * 60)
    print("PDF 1: Blender Chapters 1-23")
    print("=" * 60)
    process_pdf("*Beginner*Chapter 1*.pdf", "gitbook",
                CHAPTER_PAGES_V1, CHAPTER_TITLES_V1,
                "A Beginner's Guide to Blender (Chapters 1-23)", 6)

    print("\n" + "=" * 60)
    print("PDF 2: Blender Chapters 24-31")
    print("=" * 60)
    process_pdf("*Free*.pdf", "gitbook_v2",
                CHAPTER_PAGES_V2, CHAPTER_TITLES_V2,
                "Free Blender Guide (Chapters 24-31)", 5)

    # 清理临时脚本
    for script in ['convert_and_format.py', 'format_markdown.py']:
        if Path(script).exists():
            Path(script).unlink()

    print("\n✅ 全部完成！")

if __name__ == '__main__':
    main()
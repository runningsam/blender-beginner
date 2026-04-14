# 第30a章：如何从 CGTrader 导入 3D 模型到 Blender

Beginners guide to Blender

![page_310_img_1.png](images/book2_page_310_img_1.png)

现在你可以通过简单地修改数值来轻松地制作动画了。

今天的内容就到这里啦！

如果你跟着我学习觉得很有意思，别忘了订阅我的 YouTube 频道 SaTales。

我最近开了个 Patreon，里面有更多独家内容，比如教程、3D 模型、.blend 文件、幕后视频等等。我也经常分享免费的 3D 模型，还会做一些问答活动。你可以在我的 Patreon 第一等级找到带有动画的 .blend 文件。

免费会员和付费会员都有各自的内容，所以别忘了去看看哦。

如果你有任何问题，欢迎在评论区留言 :D

祝大家 Blender 开心玩！拜拜，下次见。

Beginners guide to Blender

ambient occlusion included) | Step-by-stepguide

大家好，我叫 SaTales，今天我们来学习如何从 CGTrader 导入带有金属、环境遮蔽、粗糙度和置换等纹理的 3D 模型到 Blender。

YouTube链接(https://youtu.be/vGDYKE4XQ70)

首先，去 CGTrader（或者任何其他有 3D 模型的网站）找一个你想要下载的免费（或付费）3D 模型。

我选了这把椅子。

![page_311_img_1.png](images/book2_page_311_img_1.png)

点击"免费下载"按钮，然后你会被跳转到新页面，在那里需要等待大约 18 秒。

![page_311_img_2.png](images/book2_page_311_img_2.png)

Beginners guide to Blender

等待时间结束后，你的文件会以多种格式可供下载。这个例子我决定下载 .fbx 文件。

![page_312_img_1.png](images/book2_page_312_img_1.png)

打开文件夹后，你会看到这些内容：6 个不同的纹理和一个 FBX 格式的 3D 模型。

![page_312_img_2.png](images/book2_page_312_img_2.png)

现在可以打开 Blender 了。

用"A"选中所有东西，然后用"X"删除。

![page_312_img_3.png](images/book2_page_312_img_3.png)

选中 .fbx 文件，拖拽到 Blender 里（拖拽功能只在 Blender 4.1 及以后的版本才支持）

点击导入 FBX

Beginners guide to Blender

![page_313_img_1.png](images/book2_page_313_img_1.png)

然后你的椅子就导入成功了。

![page_313_img_2.png](images/book2_page_313_img_2.png)

切换到材质预览模式，这样你就可以添加纹理并看到它们的效果。

![page_313_img_3.png](images/book2_page_313_img_3.png)

把鼠标放在屏幕上方区域，就像图中这样，当你看到一个加号，

Beginners guide to Blender

![page_314_img_1.png](images/book2_page_314_img_1.png)

就按住鼠标左键往左下方拖拽。

![page_314_img_2.png](images/book2_page_314_img_2.png)

进入着色器编辑器

![page_314_img_3.png](images/book2_page_314_img_3.png)

Beginners guide to Blender

![page_315_img_1.png](images/book2_page_315_img_1.png)

按"N"把右侧的"节点"侧边栏移出来

![page_315_img_2.png](images/book2_page_315_img_2.png)

现在，拖拽 texture_diff.png 文件进来。Diff 是 diffuse 的缩写，也就是漫反射，它通常是基础颜色的纹理。当然，根据上传文件的人不同，它可能会被命名为不同的名字。

Beginners guide to Blender

![page_316_img_1.png](images/book2_page_316_img_1.png)

当你把添加纹理的颜色输出连接到 Principled BSDF 的基础颜色后，椅子的颜色就会显示出来了。

![page_316_img_2.png](images/book2_page_316_img_2.png)

接下来我们要添加 texture_metal.png。正如你猜到的，这是椅子上金属部分的纹理。

Beginners guide to Blender

![page_317_img_1.png](images/book2_page_317_img_1.png)

把金属纹理的颜色输出连接到 Principled BSDF 的金属度。你看，现在我们有了一个看起来金属的部分，但如果你仔细看，有些地方不太对。金属不应该看起来是这样的。

![page_317_img_2.png](images/book2_page_317_img_2.png)

当你有金属纹理时，千万别忘了把颜色空间从 sRGB 改成 Non-Color。

Beginners guide to Blender

![page_318_img_1.png](images/book2_page_318_img_1.png)

现在看起来就正常了。

![page_318_img_2.png](images/book2_page_318_img_2.png)

下一个要添加的纹理是粗糙度纹理。

Beginners guide to Blender

![page_319_img_1.png](images/book2_page_319_img_1.png)

把粗糙度纹理的颜色输出连接到 Principled BSDF 的粗糙度。

![page_319_img_2.png](images/book2_page_319_img_2.png)

把颜色空间改成 Non-Color，你会发现模型现在有了不同程度的光泽度。

![page_319_img_3.png](images/book2_page_319_img_3.png)

在这个例子中，法线贴图节点已经在这里了，但如果你需要添加它的话，方法是这样的。

Beginners guide to Blender

![page_320_img_1.png](images/book2_page_320_img_1.png)

去 *`Add → Vector → Normal`* Map

![page_320_img_2.png](images/book2_page_320_img_2.png)

然后把法线贴图的法线输出连接到 Principled BSDF 的法线输入

![page_320_img_3.png](images/book2_page_320_img_3.png)

现在，拖拽法线纹理进来

Beginners guide to Blender

![page_321_img_1.png](images/book2_page_321_img_1.png)

把那个纹理的颜色输出连接到法线贴图的颜色输入。你可以看到，接缝看起来有点奇怪，所以只要把颜色空间从 sRGB 改成 Non-Color 就可以修复了。

![page_321_img_2.png](images/book2_page_321_img_2.png)

![page_321_img_3.png](images/book2_page_321_img_3.png)

现在拖拽高度纹理（有时候也叫凹凸纹理）进来。这个纹理可以用于置换。

Beginners guide to Blender

![page_322_img_1.png](images/book2_page_322_img_1.png)

把那个纹理的颜色输出连接到置换节点的高度输入。

![page_322_img_2.png](images/book2_page_322_img_2.png)

![page_322_img_3.png](images/book2_page_322_img_3.png)

把置换节点的置换输出连接到材质输出的置换输入。

Beginners guide to Blender

![page_323_img_1.png](images/book2_page_323_img_1.png)

然后改成 Non-Color。

![page_323_img_2.png](images/book2_page_323_img_2.png)

现在，拖拽最后一个纹理进来，就是 AO 或环境遮蔽纹理。

![page_323_img_3.png](images/book2_page_323_img_3.png)

去 *`Add → Color → Mix`* Color

Beginners guide to Blender

![page_324_img_1.png](images/book2_page_324_img_1.png)

把它放在漫反射纹理和 Principled BSDF 的基础颜色之间。

![page_324_img_2.png](images/book2_page_324_img_2.png)

把 AO 的颜色输出连接到混合颜色的 B 输入

![page_324_img_3.png](images/book2_page_324_img_3.png)

Beginners guide to Blender

把它改成 Non-Color。

![page_325_img_1.png](images/book2_page_325_img_1.png)

然后把混合模式改成 Multiply（相乘）

![page_325_img_2.png](images/book2_page_325_img_2.png)

![page_325_img_3.png](images/book2_page_325_img_3.png)

Beginners guide to Blender

现在，当你把系数从 0 改到 1，环境遮蔽的效果也会相应变化。

![page_326_img_1.png](images/book2_page_326_img_1.png)

今天的内容就到这里啦！

如果你跟着我学习觉得很有意思，别忘了订阅我的 YouTube 频道 SaTales。另外这个视频还有第一部分：如何从 SketchFab 导入带有纹理的 3D 模型到 Blender | 分步指南 https://youtu.be/P_Gxefjggu0?si=Ax6tgtPDcaqGeHzy

我最近开了个 Patreon，里面有更多独家内容，比如教程、3D 模型、.blend 文件、幕后视频等等。我也经常分享免费的 3D 模型，还会做一些问答活动。

免费会员和付费会员都有各自的内容，所以别忘了去看看哦。

如果你有任何问题，欢迎在评论区留言 :D

祝大家 Blender 开心玩！拜拜，下次见。
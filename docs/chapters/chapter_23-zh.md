# 第23章：南瓜的建模和纹理

因为万圣节快到了，我决定教你在 Blender 中建模和给南瓜添加纹理。

让我们开始建模。（你可以在我的 YouTube频道查看视频教程：https://youtu.be/s9HeDfgO6nU?si=C4KRc9KMnQ9IS5P）

这次，你会删除立方体，因为这个基本形状不适合建模南瓜。

按'X'删除立方体。

![page_273_img_1.png](/images/page_273_img_1.png)

添加 Mesh - UV Sphere。

![page_273_img_2.png](/images/page_273_img_2.png)

左下角出现了新面板。这是球体有 32 Segments 的样子。因为你不需要那么多拓扑结构做简单的南瓜模型，你可以减少 Segments 数量。

![page_274_img_1.png](/images/page_274_img_1.png)

我把它从 32 改成 21。

![page_274_img_2.png](/images/page_274_img_2.png)

用"TAB"切换到编辑模式。

选择顶部顶点

![page_275_img_1.png](/images/page_275_img_1.png)

移到南瓜底部

![page_275_img_2.png](/images/page_275_img_2.png)

按住"CTRL"，在底部顶点按 LMB 选择整个环。

![page_275_img_3.png](/images/page_275_img_3.png)

选择每第三个环。你可以通过按住'SHIFT'并在想要的环上点击'CTRL'来选择额外的环。

![page_276_img_1.png](/images/page_276_img_1.png)

当你选中所有环后

![page_276_img_2.png](/images/page_276_img_2.png)

用"O"打开比例编辑

![page_276_img_3.png](/images/page_276_img_3.png)

通过滚动鼠标滚轮把影响范围变小

![page_277_img_1.png](/images/page_277_img_1.png)

用"S"缩放。

![page_277_img_2.png](/images/page_277_img_2.png)

然后用'`S+Z`'缩放，让它看起来更像南瓜。

![page_277_img_3.png](/images/page_277_img_3.png)

只选择顶部顶点

![page_278_img_1.png](/images/page_278_img_1.png)

把影响范围变大一点

![page_278_img_2.png](/images/page_278_img_2.png)

用"`G+Z`"往下移一点。

![page_278_img_3.png](/images/page_278_img_3.png)

只选择底部顶点，做同样的。

![page_279_img_1.png](/images/page_279_img_1.png)

用"TAB"切换到物体模式，把球体重命名为 Pumpkin。

![page_279_img_2.png](/images/page_279_img_2.png)

按'TAB'切换到编辑模式，按住'ALT'同时用 LMB 点击选择环。

![page_279_img_3.png](/images/page_279_img_3.png)

用"SHIFT+D"复制，用"Z"往上移。

![page_280_img_1.png](/images/page_280_img_1.png)

按"P"选择 Separate Collection。

![page_280_img_2.png](/images/page_280_img_2.png)

切换到物体模式，选择那个分离部分，重命名为"Stem"。

![page_280_img_3.png](/images/page_280_img_3.png)

切换回编辑模式。选择 Stem，然后去 `Select → Checker` Deselect 选择每第二个顶点。

因为你顶点数量是奇数，它们不会被均匀选中，但这不会影响 Stem。实际上，轻微的不完美会让它看起来更真实。

![page_281_img_1.png](/images/page_281_img_1.png)

用"S"缩放。

![page_281_img_2.png](/images/page_281_img_2.png)

用数字键盘"CTRL+1"或点击 Gizmo 上的 Y 切换到后正交视图。

![page_282_img_1.png](/images/page_282_img_1.png)

用"A"全选。

![page_282_img_2.png](/images/page_282_img_2.png)

用"E"挤出

![page_282_img_3.png](/images/page_282_img_3.png)

再用"E"挤出一次。

![page_283_img_1.png](/images/page_283_img_1.png)

用"R"旋转

![page_283_img_2.png](/images/page_283_img_2.png)

用"S"缩放。

![page_283_img_3.png](/images/page_283_img_3.png)

用"O"关闭比例编辑，用"F"填充。

![page_284_img_1.png](/images/page_284_img_1.png)

用"I"内插新面。

![page_284_img_2.png](/images/page_284_img_2.png)

用"E"向内挤出。

![page_284_img_3.png](/images/page_284_img_3.png)

用"TAB"切换到物体模式，选择 Pumpkin。

去修改器属性。Add `modifier → Generate → Subdivision` subsurface。

![page_285_img_1.png](/images/page_285_img_1.png)

把 Levels Viewport 改成 2。

![page_285_img_2.png](/images/page_285_img_2.png)

按 RMB 选择 Shade Smooth。

![page_285_img_3.png](/images/page_285_img_3.png)

选择 Stem。去修改器属性。Add `modifier → Generate → Subdivision` subsurface。

![page_286_img_1.png](/images/page_286_img_1.png)

把 Levels Viewport 改成 2。

![page_286_img_2.png](/images/page_286_img_2.png)

如你所见，Stem 似乎有问题。你记得我告诉你的面方向吗？以防万一，我们再过一遍。

点击 Overlays 打开 Face Orientation。

![page_286_img_3.png](/images/page_286_img_3.png)

Face Orientation 显示法线面向的方向。

蓝色表示面朝外，红色表示朝内。

理想情况下，大部分网格应该显示蓝色而不是红色，所以你需要翻转红色面确保所有表面朝向正确方向。

按'TAB'切换到编辑模式，按'A'全选。

去 Mesh - Normals - Recalculate Outside。

![page_287_img_1.png](/images/page_287_img_1.png)

用"TAB"切换到物体模式。

点击 Overlays 关闭 Face Orientation。

![page_287_img_2.png](/images/page_287_img_2.png)

用"TAB"切换到编辑模式。

用"CTRL+R"添加环，往上移。

![page_288_img_1.png](/images/page_288_img_1.png)

再添加一个环，往下移。

![page_288_img_2.png](/images/page_288_img_2.png)

再添加环，如图往上移。

![page_288_img_3.png](/images/page_288_img_3.png)

按住"ALT"+ LMB 选择底部环，用"S"向内缩放。

![page_289_img_1.png](/images/page_289_img_1.png)

用"TAB"切换到物体模式。

用"`G+Z`"沿 Z轴往下移 Stem。

![page_289_img_2.png](/images/page_289_img_2.png)

点击相机图标。按"N"打开右边侧栏。

![page_289_img_3.png](/images/page_289_img_3.png)

选择 View，打开 Camera to View。

![page_290_img_1.png](/images/page_290_img_1.png)

调整相机。当你满意后，关闭 Camera to View，这样可以自由移动而不丢失完美的渲染角度。

![page_290_img_2.png](/images/page_290_img_2.png)

切换到渲染模式。

![page_290_img_3.png](/images/page_290_img_3.png)

如果你的显卡比处理器好，把渲染引擎改成 Cycles，设备改成 GPU。还要在视口打开降噪。

![page_291_img_1.png](/images/page_291_img_1.png)

点击 Gizmo 上的蓝色 Z 或键盘上的 7 查看顶视图。

![page_291_img_2.png](/images/page_291_img_2.png)

选择场景已有的点光源，用"SHIFT+D"复制。（如果你删了它，直接去 `Add → Light → Point`。）

用"G"移动。

![page_291_img_3.png](/images/page_291_img_3.png)

选择两个光源，用"G"如果需要再移动一点。

![page_292_img_1.png](/images/page_292_img_1.png)

选择第二个点光源，用"SHIFT+D"复制。

用"G"如图移动。

![page_292_img_2.png](/images/page_292_img_2.png)

点击右边的光源图标，把 Power 改成 500。

![page_292_img_3.png](/images/page_292_img_3.png)

第二个光源也这样做。

![page_293_img_1.png](/images/page_293_img_1.png)

选择 Stem，去材质属性。

![page_293_img_2.png](/images/page_293_img_2.png)

点击 New，把材质重命名为 Stem。

![page_293_img_3.png](/images/page_293_img_3.png)

选择 Pumpkin，去材质属性。

点击 New，把材质重命名为 Pumpkin。

![page_293_img_4.png](/images/page_293_img_4.png)

把光标放在屏幕上方如图所示，当看到加号，

![page_294_img_1.png](/images/page_294_img_1.png)

按住左键往左下方拖动。

![page_294_img_2.png](/images/page_294_img_2.png)

在你刚创建的窗口打开着色编辑器。

按"N"隐藏右边侧栏，因为你不需要它。

![page_294_img_3.png](/images/page_294_img_3.png)

`Add → Input → Geometry`。

![page_294_img_4.png](/images/page_294_img_4.png)

把 Geometry 的 Pointiness 连接到 Color Ramp 的 Fac，在南瓜上创建一些边缘高光。

![page_295_img_1.png](/images/page_295_img_1.png)

把 Color Ramp 的 Color 连接到 Principled BSDF 的 Base Color。

![page_295_img_2.png](/images/page_295_img_2.png)

把第一个颜色选择器往右移。把 Color Ramp 的第一个颜色改成某种棕色。

![page_295_img_3.png](/images/page_295_img_3.png)

把第二个颜色选择器往左移。

![page_296_img_1.png](/images/page_296_img_1.png)

把 Color Ramp 的第二个颜色改成浅橙色。

![page_296_img_2.png](/images/page_296_img_2.png)

如果需要再调整颜色。

![page_296_img_3.png](/images/page_296_img_3.png)

选择 Stem。添加 Geometry。把 Geometry 的 Pointiness 连接到 Color Ramp 的 Fac。

![page_296_img_4.png](/images/page_296_img_4.png)

把 Color Ramp 的 Color 连接到 Principled BSDF 的 Base Color。

![page_297_img_1.png](/images/page_297_img_1.png)

把第一个颜色选择器往右移。

![page_297_img_2.png](/images/page_297_img_2.png)

右键点击 Stem，Shade Smooth。

![page_297_img_3.png](/images/page_297_img_3.png)

把 Color Ramp 的第一个颜色改成深绿色。

![page_298_img_1.png](/images/page_298_img_1.png)

把第二个颜色选择器往左移。

![page_298_img_2.png](/images/page_298_img_2.png)

把 Color Ramp 的第二个颜色改成浅绿色。如果需要再调整任何颜色。

![page_298_img_3.png](/images/page_298_img_3.png)

如果你喜欢南瓜的样子，点击 Render，渲染图片。

恭喜！你学会了如何在 Blender 中建模和给南瓜添加纹理！

祝大家 Blender 开心！

拜拜，下次见！
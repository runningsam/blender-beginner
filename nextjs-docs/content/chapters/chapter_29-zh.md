# 第29章：建模和制作充气与瘪掉状态的3D气球材质

Beginners guide to Blender

## 建模

这次我们来学习如何使用驱动器和形态键来建模并制作一个3D充气和瘪掉气球的材质。

（你可以在我YouTube频道上观看视频教程：

https://youtu.be/5VSrlrgERF4）

用"A"选中所有物体，然后用"X"删除。

![page_274_img_1.png](images/page_274_img_1.png)

去 *`Add → Mesh → UV`* Sphere

Beginners guide to Blender

![page_275_img_1.png](images/page_275_img_1.png)

向上滚动鼠标滚轮来放大球体。

![page_275_img_2.png](images/page_275_img_2.png)

右键点击并选择 Shade Smooth。

![page_275_img_3.png](images/page_275_img_3.png)

用"TAB"切换到编辑模式。

Beginners guide to Blender

![page_276_img_1.png](images/page_276_img_1.png)

选中底部这个顶点

![page_276_img_2.png](images/page_276_img_2.png)

用"O"打开比例编辑。

![page_276_img_3.png](images/page_276_img_3.png)

Beginners guide to Blender

按"`G+Z`"并向下移动大约 -0.7

![page_277_img_1.png](images/page_277_img_1.png)

向上滚动鼠标滚轮来增加影响范围。我把它滚动到大约1.46。当你对形状满意后，用左键确认。

Beginners guide to Blender

![page_278_img_1.png](images/page_278_img_1.png)

当底部顶点仍然被选中时，按"X"并选择删除顶点。

![page_278_img_2.png](images/page_278_img_2.png)

Beginners guide to Blender

![page_279_img_1.png](images/page_279_img_1.png)

用"ALT" + 左键选中这整个环

![page_279_img_2.png](images/page_279_img_2.png)

然后用"F"填充。

Beginners guide to Blender

![page_280_img_1.png](images/page_280_img_1.png)

用"O"或点击这里关闭比例编辑。

![page_280_img_2.png](images/page_280_img_2.png)

按"I"插入一个新面，向内插入大约 0.088

Beginners guide to Blender

![page_281_img_1.png](images/page_281_img_1.png)

用"`G+Z`"向下移动大约 -0.05

![page_281_img_2.png](images/page_281_img_2.png)

用"`E+Z`"向外挤出大约 0.27

Beginners guide to Blender

![page_282_img_1.png](images/page_282_img_1.png)

用数字键2切换到选择边模式，选中这个环

![page_282_img_2.png](images/page_282_img_2.png)

用"S"缩放大约 0.78

Beginners guide to Blender

![page_283_img_1.png](images/page_283_img_1.png)

用"`G+Z`"向下移动大约 -0.03

![page_283_img_2.png](images/page_283_img_2.png)

如果需要的话，再用"S"缩放一点。

![page_283_img_3.png](images/page_283_img_3.png)

用数字键3切换到选择面模式，选中这个面。

Beginners guide to Blender

![page_284_img_1.png](images/page_284_img_1.png)

按"X"并选择删除面

![page_284_img_2.png](images/page_284_img_2.png)

用数字键2切换到选择边模式，选中这条边

![page_284_img_3.png](images/page_284_img_3.png)

用"SHIFT+D"复制它

Beginners guide to Blender

![page_285_img_1.png](images/page_285_img_1.png)

然后按"ESC"让它回到原位。

![page_285_img_2.png](images/page_285_img_2.png)

用"`E+Z`"向下挤出大约 -0.03

![page_285_img_3.png](images/page_285_img_3.png)

用数字键3切换到选择面模式，用"ALT"选中这整个环。

Beginners guide to Blender

![page_286_img_1.png](images/page_286_img_1.png)

按"ALT+E"并选择 Extrude faces along normals

![page_286_img_2.png](images/page_286_img_2.png)

向内挤出大约 -0.028

![page_286_img_3.png](images/page_286_img_3.png)

用数字键2切换到选择边模式，选中这些边。

Beginners guide to Blender

![page_287_img_1.png](images/page_287_img_1.png)

还有这条

![page_287_img_2.png](images/page_287_img_2.png)

按"CTRL+B"给它们倒角

![page_287_img_3.png](images/page_287_img_3.png)

向上滚动鼠标滚轮添加更多分段。我添加了3个额外的分段。

Beginners guide to Blender

![page_288_img_1.png](images/page_288_img_1.png)

用"TAB"切换到物体模式，右键点击并选择 Shade Smooth

![page_288_img_2.png](images/page_288_img_2.png)

把你的物体名称从 Sphere 改成 Balloon。

![page_288_img_3.png](images/page_288_img_3.png)

现在点击这里的 Data

Beginners guide to Blender

![page_289_img_1.png](images/page_289_img_1.png)

你会看到一个新的东西叫 Shape keys。

![page_289_img_2.png](images/page_289_img_2.png)

那什么是形态键呢？

形态键是用来把物体几何变形成新形状来做动画的。

最常见的用途是用形态键做角色面部动画，但你也可以用在其他地方，比如在这个例子中让瘪掉的气球充气，反过来也可以。

首先，点击那个"+"号添加一个新的形态键。

Beginners guide to Blender

![page_290_img_1.png](images/page_290_img_1.png)

第一个形态键叫 Basis。

![page_290_img_2.png](images/page_290_img_2.png)

你可以随便改名。我把它改成了 Balloon_full

![page_290_img_3.png](images/page_290_img_3.png)

再点一次"+"号添加另一个形态键。

Beginners guide to Blender

![page_291_img_1.png](images/page_291_img_1.png)

你可以随便改名。我把它改成了 Balloon_empty。

![page_291_img_2.png](images/page_291_img_2.png)

从现在开始不管你做什么操作，要确保第二个形态键是选中状态，因为第一个形态键是基础形态，你不应该去改动它。

用"TAB"切换回编辑模式。

![page_291_img_3.png](images/page_291_img_3.png)

用数字键盘3或点击屏幕上的红色X切换到右视图正投影。

Beginners guide to Blender

![page_292_img_1.png](images/page_292_img_1.png)

点击这里或按"ALT+Z"打开X光模式。

![page_292_img_2.png](images/page_292_img_2.png)

用数字键1切换到选择顶点模式，选中这部分

![page_292_img_3.png](images/page_292_img_3.png)

然后用"S"缩放大约 2.13

Beginners guide to Blender

![page_293_img_1.png](images/page_293_img_1.png)

选中这部分

![page_293_img_2.png](images/page_293_img_2.png)

右键点击并选择 Smooth vertices

![page_293_img_3.png](images/page_293_img_3.png)

你会看到左下角出现了新的工具栏——Smooth Vertices。

Beginners guide to Blender

![page_294_img_1.png](images/page_294_img_1.png)

当你点击它，会出现新选项

![page_294_img_2.png](images/page_294_img_2.png)

我们把 Smoothing 从 0.5 改成 1

![page_294_img_3.png](images/page_294_img_3.png)

然后把重复次数改成大约 55

Beginners guide to Blender

![page_295_img_1.png](images/page_295_img_1.png)

用"`S+Z`"缩放大约 0.6

![page_295_img_2.png](images/page_295_img_2.png)

然后用"`G+Z`"向下移动大约 -0.55

![page_295_img_3.png](images/page_295_img_3.png)

用"O"或点击这里打开比例编辑

Beginners guide to Blender

![page_296_img_1.png](images/page_296_img_1.png)

用"ALT+Z"关闭X光模式

![page_296_img_2.png](images/page_296_img_2.png)

用"`S+X`"缩放大约 0.69

![page_296_img_3.png](images/page_296_img_3.png)

Beginners guide to Blender

然后向下滚动鼠标滚轮，让你的影响范围（比例大小）大约在 0.39 左右。

![page_297_img_1.png](images/page_297_img_1.png)

之后再用"`S+X`"缩放更多，让你的气球看起来更瘪。

![page_297_img_2.png](images/page_297_img_2.png)

为了让瘪掉的气球效果更好，你可以选中一些随机顶点，用"G"移动它们。

![page_297_img_3.png](images/page_297_img_3.png)

Beginners guide to Blender

比如我选中了这个顶点，在比例编辑开启的情况下稍微移动了一下。

![page_298_img_1.png](images/page_298_img_1.png)

我对这个顶点也做了同样的操作

![page_298_img_2.png](images/page_298_img_2.png)

还有这个

![page_298_img_3.png](images/page_298_img_3.png)

还有这个

Beginners guide to Blender

![page_299_img_1.png](images/page_299_img_1.png)

如果你用"TAB"切换到物体模式，你的气球又会变成充满的样子。这是因为第二个形态键的值被设为0。

![page_299_img_2.png](images/page_299_img_2.png)

当你把值向1移动时，气球就会变得越来越瘪。

![page_299_img_3.png](images/page_299_img_3.png)

当你把值向0移动时，气球又会变得越来越鼓。我们先把它留在0，让它保持充气状态。

Beginners guide to Blender

![page_300_img_1.png](images/page_300_img_1.png)

现在来制作材质。点击 Material properties

![page_300_img_2.png](images/page_300_img_2.png)

点击 New 添加一个新材质

![page_300_img_3.png](images/page_300_img_3.png)

把材质改名为 Balloon_red 或者你喜欢的其他名字。

Beginners guide to Blender

![page_301_img_1.png](images/page_301_img_1.png)

点击这里切换到材质预览模式

![page_301_img_2.png](images/page_301_img_2.png)

把鼠标放在屏幕上方如图所示的位置，当你看到加号的时候，

![page_301_img_3.png](images/page_301_img_3.png)

按住左键把它往左下方拖拽。

Beginners guide to Blender

![page_302_img_1.png](images/page_302_img_1.png)

从3D视图切换到着色器编辑器。

![page_302_img_2.png](images/page_302_img_2.png)

把基础颜色改成你想要的任何颜色。我选了红色。

![page_302_img_3.png](images/page_302_img_3.png)

把 Alpha 改成 0.5

Beginners guide to Blender

![page_303_img_1.png](images/page_303_img_1.png)

把 Roughness 改成 0.3

![page_303_img_2.png](images/page_303_img_2.png)

把鼠标移到你选择的基础颜色上，用"CTRL+C"复制它

![page_303_img_3.png](images/page_303_img_3.png)

用"SHIFT+D"复制整个 Principled BSDF，把它往下移一点

Beginners guide to Blender

![page_304_img_1.png](images/page_304_img_1.png)

去 *`Add → Shader → Mix`* Shader

![page_304_img_2.png](images/page_304_img_2.png)

把它放在第一个 Principled BSDF 和 Material Output 之间。

![page_304_img_3.png](images/page_304_img_3.png)

把第二个 Principled BSDF 的 BSDF 连接到 Mix Shader 的 Shader。

Beginners guide to Blender

![page_305_img_1.png](images/page_305_img_1.png)

把第二个 Principled BSDF 的 Roughness 改成大约 0.7

![page_305_img_2.png](images/page_305_img_2.png)

把 Alpha 改成 1

![page_305_img_3.png](images/page_305_img_3.png)

如果你把 Mix Shader 的 Factor 改成0，你的气球看起来会是这样

Beginners guide to Blender

![page_306_img_1.png](images/page_306_img_1.png)

当你把它向1增加时，会变成这样

![page_306_img_2.png](images/page_306_img_2.png)

去 Data，确保第二个叫 Balloon_empty 的形态键是选中状态

Beginners guide to Blender

![page_307_img_1.png](images/page_307_img_1.png)

去这个 Value

![page_307_img_2.png](images/page_307_img_2.png)

现在该用一个叫驱动器的东西了。

那什么是驱动器呢？

驱动器是一种通过函数或数学表达式来控制属性数值的方法。

让我用一个实际例子给你演示一下。

按右键并选择 Copy as a new Driver。

Beginners guide to Blender

![page_308_img_1.png](images/page_308_img_1.png)

现在选中 Mix Shader

![page_308_img_2.png](images/page_308_img_2.png)

在 Fac 上右键点击并选择 Paste Driver。

Beginners guide to Blender

![page_309_img_1.png](images/page_309_img_1.png)

你的 Mix Shader Fac 现在看起来是这样

![page_309_img_2.png](images/page_309_img_2.png)

现在当你移动第二个形态键的数值时，你的气球就会充气，粗糙度也会跟着变化，反过来也一样。
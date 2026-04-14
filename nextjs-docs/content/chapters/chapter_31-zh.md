# 第31章：Blender 5.0 新功能：更快的散射

Beginners guide to Blender

大家好！我是 SaTales，今天又到了 Blender 教学时间！

上次我给大家展示了 Blender 5.0 的新功能——圆形阵列。

因为大家喜欢那个视频，还要求我做更多新功能的教程，所以今天我们就来学习另一个新功能。

那么让我们开始吧！这个功能可以帮助你提升渲染速度和视口性能！

视频教程：https://youtu.be/McJ1_hkB3aA?si=9IhWwUsutoSQnxq6

首先，用 "A" 选择场景中的所有物体，然后用 "X" 删除它们。

![page_338_img_1.png](images/book2_page_338_img_1.png)

现在去 *`Add → Mesh → Cylinder`*

![page_338_img_2.png](images/book2_page_338_img_2.png)

Beginners guide to Blender

用鼠标左键（LMB）点击这个 "Add Cylinder" 部分。

![page_339_img_1.png](images/book2_page_339_img_1.png)

把顶点数量从 32 改成 8

![page_339_img_2.png](images/book2_page_339_img_2.png)

用 "`G+Z`" 把它向上移动 +1，这样它就会位于世界原点位置。

Beginners guide to Blender

![page_340_img_1.png](images/book2_page_340_img_1.png)

用 "TAB" 切换到编辑模式。

![page_340_img_2.png](images/book2_page_340_img_2.png)

按 3 切换到面选择模式，然后选择顶部的面。

![page_340_img_3.png](images/book2_page_340_img_3.png)

用 "S" 缩放，大约缩到 0.53

Beginners guide to Blender

![page_341_img_1.png](images/book2_page_341_img_1.png)

用 "E" 挤出，大约挤出 0.9

![page_341_img_2.png](images/book2_page_341_img_2.png)

用 "S" 缩放，大约缩到 6.17

![page_341_img_3.png](images/book2_page_341_img_3.png)

用 "E" 挤出，大约挤出 6.9

Beginners guide to Blender

![page_342_img_1.png](images/book2_page_342_img_1.png)

用 "S" 缩放，大约缩到 0.045

![page_342_img_2.png](images/book2_page_342_img_2.png)

用 "CTRL+R" 添加四个循环线。

![page_342_img_3.png](images/book2_page_342_img_3.png)

Beginners guide to Blender

用 "CTRL+B" 对它们进行倒角，大约 0.06

![page_343_img_1.png](images/book2_page_343_img_1.png)

按住鼠标左键（LMB）和 ALT + Shift 选择这些循环线。

![page_343_img_2.png](images/book2_page_343_img_2.png)

如果你直接用 "S" 缩放它们，会发生这样的情况

Beginners guide to Blender

![page_344_img_1.png](images/book2_page_344_img_1.png)

因为我们想要单独缩放每条循环线，所以需要更改变换中心点。来这里，把中心点从中点改成各自的原点（Individual Origins）。

![page_344_img_2.png](images/book2_page_344_img_2.png)

现在你可以分别缩放每个部分了。用 "S" 缩放，大约 1.35

Beginners guide to Blender

![page_345_img_1.png](images/book2_page_345_img_1.png)

现在，只选择这个底部的循环线

![page_345_img_2.png](images/book2_page_345_img_2.png)

然后用 "S" 缩放，大约 1.37

![page_345_img_3.png](images/book2_page_345_img_3.png)

选择这个循环线

Beginners guide to Blender

![page_346_img_1.png](images/book2_page_346_img_1.png)

用 "`G+Z`" 把它向上移动，大约 1.2。

![page_346_img_2.png](images/book2_page_346_img_2.png)

选择这个循环线

Beginners guide to Blender

![page_347_img_1.png](images/book2_page_347_img_1.png)

然后用 "S" 缩放，大约 0.92。

![page_347_img_2.png](images/book2_page_347_img_2.png)

好了，我们完成了松树模型。

Beginners guide to Blender

用 "TAB" 切换回物体模式，去 *`Object → Set`* *`Origin → Origin`* to 3D cursor

![page_348_img_1.png](images/book2_page_348_img_1.png)

按 "N" 打开侧边栏。

![page_348_img_2.png](images/book2_page_348_img_2.png)

Beginners guide to Blender

把 "Z" 或者高度改成 5m

![page_349_img_1.png](images/book2_page_349_img_1.png)

从 Scale 里复制这个 "Z= 0.467"（如果你得到不同的数字就复制你的）

![page_349_img_2.png](images/book2_page_349_img_2.png)

Beginners guide to Blender

然后粘贴到 Scale 的 X 和 Y 里。

![page_350_img_1.png](images/book2_page_350_img_1.png)

用 "CTRL+A" 应用缩放。

![page_350_img_2.png](images/book2_page_350_img_2.png)

去 *`Add → Mesh → Plane`*

![page_350_img_3.png](images/book2_page_350_img_3.png)

Beginners guide to Blender

按 "`S+2`" 把它缩放 2 倍。

![page_351_img_1.png](images/book2_page_351_img_1.png)

按 "SHIFT+R" 重复这个动作，再重复七次。

![page_351_img_2.png](images/book2_page_351_img_2.png)

用 "CTRL+A" 应用缩放。

![page_351_img_3.png](images/book2_page_351_img_3.png)

Beginners guide to Blender

用 "TAB" 切换到编辑模式。

![page_352_img_1.png](images/book2_page_352_img_1.png)

点击鼠标右键（RMB），选择 Subdivide（细分）。

![page_352_img_2.png](images/book2_page_352_img_2.png)

按 "SHIFT+R" 五次来重复同样的操作。

![page_352_img_3.png](images/book2_page_352_img_3.png)

Beginners guide to Blender

点击这里开启比例编辑，或者直接按 "O"。

![page_353_img_1.png](images/book2_page_353_img_1.png)

按 "3" 切换到面选择模式。

![page_353_img_2.png](images/book2_page_353_img_2.png)

随机选择一个面

![page_353_img_3.png](images/book2_page_353_img_3.png)

Beginners guide to Blender

用 "G" 把它向上移动。

![page_354_img_1.png](images/book2_page_354_img_1.png)

向上滚动鼠标滚轮来增加比例编辑的影响范围。

![page_354_img_2.png](images/book2_page_354_img_2.png)

再随机选择三个面，做同样的操作。不要太纠结做得对不对，这只是个示例，不需要完美。

![page_354_img_3.png](images/book2_page_354_img_3.png)

Beginners guide to Blender

用 "TAB" 切换回物体模式，点击鼠标右键（RMB），选择 Shade Smooth（平滑着色）。

![page_355_img_1.png](images/book2_page_355_img_1.png)

去 *`modifiers → Add`* *`modifier → Generate → Scatter`* on surface（表面散射）。

![page_355_img_2.png](images/book2_page_355_img_2.png)

要散射我们的树木，需要选择我们制作的树（或者任何你想用的其他模型）作为要被散射的物体。

![page_355_img_3.png](images/book2_page_355_img_3.png)

Beginners guide to Blender

要做到这点，我们需要在 Instancing 里选择我们的物体；在这个例子中它叫 cylinder，因为我忘记重命名了。

![page_356_img_1.png](images/book2_page_356_img_1.png)

现在我们的树木已经散布在平面上了

![page_356_img_2.png](images/book2_page_356_img_2.png)

如果你想让每棵树的数据独立（某些其他修改器需要这个），可以勾选 "Realize instances"。如果你保持这个选项关闭，你会发现多边形数量就像场景里只有一棵树一样。这是因为所有树的数据是共享的。

![page_356_img_3.png](images/book2_page_356_img_3.png)

Beginners guide to Blender

如果你想要更少的树，可以把密度改成，比如 0.1 或者更小。

![page_357_img_1.png](images/book2_page_357_img_1.png)

现在点击 Transform

![page_357_img_2.png](images/book2_page_357_img_2.png)

开启 Randomize（随机化）

![page_357_img_3.png](images/book2_page_357_img_3.png)

Beginners guide to Blender

在这里，你可以调整缩放比例，让你的树随机缩放，而不是全都一样。在这个示例中，我把缩放保持在 0.631

![page_358_img_1.png](images/book2_page_358_img_1.png)

你也可以随机化 Z 轴旋转。我把它设为 360°。

![page_358_img_2.png](images/book2_page_358_img_2.png)

现在去 Data

![page_358_img_3.png](images/book2_page_358_img_3.png)

Beginners guide to Blender

点击 + 添加一个新的顶点组

![page_359_img_1.png](images/book2_page_359_img_1.png)

把它重命名为 density 或者你喜欢的任何名字。

![page_359_img_2.png](images/book2_page_359_img_2.png)

回到修改器面板

![page_359_img_3.png](images/book2_page_359_img_3.png)

Beginners guide to Blender

点击 Density

![page_360_img_1.png](images/book2_page_360_img_1.png)

然后选择 Density

![page_360_img_2.png](images/book2_page_360_img_2.png)

现在从物体模式切换到权重绘制模式

![page_360_img_3.png](images/book2_page_360_img_3.png)

![page_360_img_4.png](images/book2_page_360_img_4.png)

Beginners guide to Blender

把画笔大小改成 505px 或者任何你喜欢的尺寸。

![page_361_img_1.png](images/book2_page_361_img_1.png)

然后用鼠标左键（LMB）在你想要放置树的地方绘制

![page_361_img_2.png](images/book2_page_361_img_2.png)

比如像这样

![page_361_img_3.png](images/book2_page_361_img_3.png)

Beginners guide to Blender

现在我们想做一个路径，所以需要擦除一些树。要做到这点，把权重设为 0

![page_362_img_1.png](images/book2_page_362_img_1.png)

然后把画笔大小改小一些，比如 290 或类似的数值

![page_362_img_2.png](images/book2_page_362_img_2.png)

在你想要路径的位置绘制

![page_362_img_3.png](images/book2_page_362_img_3.png)

Beginners guide to Blender

切换回物体模式看看效果

![page_363_img_1.png](images/book2_page_363_img_1.png)

你可以根据需要调整分布遮罩来增加或减少树木数量

![page_363_img_2.png](images/book2_page_363_img_2.png)

这只是 Blender 新功能如何改进建模的一个例子。

你还想到了其他什么创意吗？

在评论区告诉我吧！

如果你和我一起学习很开心，别忘了订阅我的频道。

我有 Patreon SaTales，提供更多独家内容，包括 3D 模型、.blend 文件，还有分享如何出售你的 3D 模型、如何在 ArchViz 领域找到客户等经验。免费和付费会员都有内容，别忘了去看看。祝大家 Blender 学习愉快！再见，下次见。
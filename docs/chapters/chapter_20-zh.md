# 第20章：建模一本书

来多练习建模和纹理。

这次，你会学习如何在 Blender 中建模和给书本添加纹理。

我们开始吧！

这次，你不会删除立方体，而是从头就用它，因为你建模的是书，和书形状最相似的是立方体。

![page_193_img_1.png](/images/page_193_img_1.png)

用左键（LMB）选择立方体，按"`S+Z`"沿 Z轴缩放。

![page_193_img_2.png](/images/page_193_img_2.png)

之后，再缩放一次，这次用"`S+Y`"沿 Y轴。

![page_194_img_1.png](/images/page_194_img_1.png)

如果需要，你可以通过沿 Y和 Z轴缩放进一步调整它的厚度和大小。

按"CTRL+A"应用缩放。

## 重要提示！

你这样做是因为如果你不应用缩放，当你进入编辑模式时，物体行为会相对于它的原始大小，尽管视觉上看起来不同。

所以在编辑模式下既不能正确缩放也不能正确移动。

你应该总是应用缩放，除非你对物体的物体模式编辑是临时性的。

如果你没应用你的缩放/位置/旋转，你随时可以按 ALT+S/G/R 让它恢复原始形状。

用"TAB"从物体模式切换到编辑模式，这样可以添加和编辑一些几何结构。

你想添加一些环切。我想有 6个环（你可以少些或多些），所以我往上滚动鼠标滚轮 6次，用 LMB 确认。

你想让这些环切居中，所以按右键（RMB）让它保持居中。

![page_194_img_2.png](/images/page_194_img_2.png)

用 3 从顶点选择切换到面选择。

用 LMB 选择这个面

![page_195_img_1.png](/images/page_195_img_1.png)

按住鼠标滚轮旋转场景，按住"SHIFT"

![page_195_img_2.png](/images/page_195_img_2.png)

用 LMB 选择这个面。

![page_195_img_3.png](/images/page_195_img_3.png)

现在来学一个新工具——比例编辑。

比例编辑用于按距离比例编辑附近的顶点，相对于选中的顶点、边或面。

离选中顶点越近，越受你的编辑影响。

所以如果你有一网格顶点，选中一个移动它也会影响附近顶点，取决于它们离选择有多近。

让我给你展示，这样你能明白我在说什么。

用"O"或点击这里打开比例编辑。

![page_196_img_1.png](/images/page_196_img_1.png)

按"`G+Y`"如图沿 Y轴移动面。

![page_196_img_2.png](/images/page_196_img_2.png)

往上滚动鼠标滚轮时，影响范围变大，往下滚动时，影响范围变小。

所以你需要往下滚一点。

玩玩比例编辑。

不需要做得和我完全一样，这只是展示一种方式。所以缩放不同，实验，那样你学得最快。

用"O"或点击这里关闭比例编辑。

![page_197_img_1.png](/images/page_197_img_1.png)

按"A"选择全部，用"`G+Y`"沿 Y轴把书往右移回到中间。

![page_197_img_2.png](/images/page_197_img_2.png)

用 LMB 选择这个前面，

![page_197_img_3.png](/images/page_197_img_3.png)

按住"CTRL"，像我那样选择其余的面。

![page_198_img_1.png](/images/page_198_img_1.png)

现在按"ALT+E"，选择 Extrude Faces Along Normals，往上移动鼠标向外挤出或向下向内挤出。这里，往上移动鼠标。

如果你想让整本书厚度均匀，按"S"打开 Even thickness。

![page_198_img_2.png](/images/page_198_img_2.png)

这样你给书添加了更多几何结构。

点击这条边，按"ALT"选择这整个环。

![page_198_img_3.png](/images/page_198_img_3.png)

再按"ALT+E"，选择 Extrude Faces Along Normals，往上移动鼠标向外挤出。再按 S 打开 Even thickness。

![page_199_img_1.png](/images/page_199_img_1.png)

按右键（RMB）选择 Shade Auto Smooth。

这是用于根据角度视觉上去除不需要的尖角。

![page_199_img_2.png](/images/page_199_img_2.png)

用"TAB"从物体模式切换到编辑模式。

用 LMB 选择这个面

![page_200_img_1.png](/images/page_200_img_1.png)

然后把鼠标指针移到你想要的面，

按 CTRL 从第一个到这个面选择全部。

![page_200_img_2.png](/images/page_200_img_2.png)

![page_200_img_3.png](/images/page_200_img_3.png)

按住"SHIFT"选择这边的面而不取消之前选的面。

![page_200_img_4.png](/images/page_200_img_4.png)

松开"SHIFT"，再用 LMB 把鼠标指针移到你想要的面，按 CTRL 从第一个到这个面选择全部。

![page_201_img_1.png](/images/page_201_img_1.png)

按住鼠标滚轮旋转到这边，和之前一样做来选择那边所有面。

现在按"Y"把选中几何从相连未选几何分离开。

![page_201_img_2.png](/images/page_201_img_2.png)

如果你移动里面的面，你会发现它们现在已和书封面分离了。

![page_201_img_3.png](/images/page_201_img_3.png)

再用"CTRL+R"添加环切。

顶部加一个——这里，

![page_202_img_1.png](/images/page_202_img_1.png)

底部加一个——这里。

![page_202_img_2.png](/images/page_202_img_2.png)

现在用"ALT"选择这整个环切

![page_202_img_3.png](/images/page_202_img_3.png)

按住"SHIFT"，也用"ALT"选择底部这个环。

![page_203_img_1.png](/images/page_203_img_1.png)

你想让它们都和 Y轴对齐，用"`S+Y`+0"做，用 LMB 确认。

![page_203_img_2.png](/images/page_203_img_2.png)

现在用"`G+Y`"沿 Y轴往左移。

![page_203_img_3.png](/images/page_203_img_3.png)

再添加两个环

![page_204_img_1.png](/images/page_204_img_1.png)

重复之前步骤的所有操作。

![page_204_img_2.png](/images/page_204_img_2.png)

现在用"CTRL+R"在这两个环之间添加两个环切

![page_204_img_3.png](/images/page_204_img_3.png)

按"ESC"让它们居中。

![page_205_img_1.png](/images/page_205_img_1.png)

用 3 切换到面选择。

用 LMB 选择这个面

![page_205_img_2.png](/images/page_205_img_2.png)

然后把鼠标指针移到你想要的面，按 CTRL 从第一个到这个面选择全部。

![page_205_img_3.png](/images/page_205_img_3.png)

按住鼠标滚轮旋转到这边，按"SHIFT"，把鼠标指针移到你想要的面，按 CTRL 从第一个到这个面选择全部。

![page_206_img_1.png](/images/page_206_img_1.png)

按"`S+Z`"沿 Z轴缩小。

![page_206_img_2.png](/images/page_206_img_2.png)

用"TAB"切换到物体模式。

点击修改器。

Add modifier - Generate - Bevel。

![page_207_img_1.png](/images/page_207_img_1.png)

如果你像我一样用 Blender 4.2建模，添加倒角前你已经有另一个修改器了。

它叫 Smooth by angle。

当你添加 Shade Auto Smooth 时自动添加，别担心，这只是 Blender 的新东西。

![page_207_img_2.png](/images/page_207_img_2.png)

把倒角段数改成 3或你觉得最好的任何数字。

![page_208_img_1.png](/images/page_208_img_1.png)

直到现在你都在实体模式。现在切换到渲染模式，这样可以添加灯光和材质，看看你的书在合适灯光下是什么样子。

你已学过怎么把渲染属性改成 Cycles、切换到 GPU、打开降噪，所以我不重复。

选择场景里已有的点光源。

![page_208_img_2.png](/images/page_208_img_2.png)

如果你删了它，直接去 `Add → Light → Point`。

![page_208_img_3.png](/images/page_208_img_3.png)

用"`G+Y`"沿 Y轴往右移。

![page_209_img_1.png](/images/page_209_img_1.png)

用"SHIFT+D"复制，用"Y"往左移。

![page_209_img_2.png](/images/page_209_img_2.png)

再选择第一个光源，用"SHIFT+D"复制。

这次，用"X"沿 X轴移动。

![page_209_img_3.png](/images/page_209_img_3.png)

选择书。

点击材质，重命名为 Book_covers。

![page_210_img_1.png](/images/page_210_img_1.png)

点击 + 和 new 再一次添加第二个材质。

把这个重命名为 Book_pages。

![page_210_img_2.png](/images/page_210_img_2.png)

用"TAB"切换到编辑模式。

把鼠标指针移到页面，按"L"选择相连页面。

![page_210_img_3.png](/images/page_210_img_3.png)

选择相连只是意味着你可以基于缝合线、材质或法线选择一组顶点。

在材质部分选择 BookPages，点击 Assign。

![page_211_img_1.png](/images/page_211_img_1.png)

现在你已把那个材质分配给书页面了。

用"TAB"切换到物体模式。

这次我会停在这里，因为还有更复杂的纹理部分，我想让你慢慢一步步学，不要觉得压力太大。

那些还想多学或只想看视频教程的人，可以在我 YouTube频道查看这个教程：

https://www.youtube.com/watch?v=onF5s2bXhZ0&t=2s

我希望你喜欢新章节！我尽量多写让你能学很多新东西。

祝大家 Blender 开心，下周见 🙂
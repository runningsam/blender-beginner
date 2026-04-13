# 第15章：让我们建模一个盘子

既然你已经掌握了一些基本建模技巧，给你展示更有趣和进阶的内容就更容易了。

今天的课程我决定教你建模一个盘子。建模过程中你会复习内插、倒角和环切的知识，还会学到一些涉及倒角、修改器等的新的技巧。

准备好了吗？开始吧！

首先，我们建模一个盘子。

建模盘子

用"A"选择所有东西，然后按"X"删除。

![page_126_img_1.png](/images/page_126_img_1.png)

现在按"SHIFT+A"，去 `Add mesh → Circle`

![page_126_img_2.png](/images/page_126_img_2.png)

用"TAB"切换到编辑模式。

按"F"填充整个圆。

![page_127_img_1.png](/images/page_127_img_1.png)

用"E"沿 Z轴挤出一点点。

像这样。

![page_127_img_2.png](/images/page_127_img_2.png)

选择底部面，用"S"缩放。

![page_127_img_3.png](/images/page_127_img_3.png)

用"I"内插新面。

![page_127_img_4.png](/images/page_127_img_4.png)

再做一次。

![page_128_img_1.png](/images/page_128_img_1.png)

现在，来学点新东西。

上次你学习了环切和环。

今天，你将学习如何选择环。我想选择这里的这个环。

![page_128_img_2.png](/images/page_128_img_2.png)

怎么做呢？

选择环时要按住"ALT"然后点击 LMB。但有一点要注意。如果你选择这个面，你不会得到环选择，而是这个。

![page_128_img_3.png](/images/page_128_img_3.png)

要选择任何"圆形"的环，你需要选择边而不是面。如果你点击那些边中的任意一条，就能得到正确的选择。

![page_129_img_1.png](/images/page_129_img_1.png)

现在，一个问题：如果我想选择这个环，怎么做？

![page_129_img_2.png](/images/page_129_img_2.png)

没错！就像之前那样，按住"ALT"，点击那个圆形环中任意一条中间边的 LMB。

任何蓝色的边都可以。

![page_129_img_3.png](/images/page_129_img_3.png)

但如果你选择这条边，你会得到这个结果。

![page_130_img_1.png](/images/page_130_img_1.png)

好了，现在我们可以继续建模盘子了。

我们用"ALT"和 LMB 选择了这个环。

![page_130_img_2.png](/images/page_130_img_2.png)

用"E"往下挤出一点点。

![page_130_img_3.png](/images/page_130_img_3.png)

然后选择盘子的顶部面，用"I"内插新面。

![page_131_img_1.png](/images/page_131_img_1.png)

用"E"往下挤出。

![page_131_img_2.png](/images/page_131_img_2.png)

用"S"缩放。

![page_131_img_3.png](/images/page_131_img_3.png)

现在来学习修改器。

用"TAB"切换到物体模式。

点击写着"Modifiers"的扳手图标。

![page_131_img_4.png](/images/page_131_img_4.png)

修改器让你能以非破坏性的方式改变物体的几何结构。

我用倒角修改器举例演示，这样你能更好地理解修改器是怎么工作的。

（除非你先复制盘子，不要应用这些步骤——我们不会用倒角修改器，这只是演示目的。）

上次我们学习了倒角

如果我们想用倒角工具或"CTRL+B"快捷键倒角这些边，我们会选择边然后倒角。做完之后，就没法回头了（除非用撤销）。

但如果你做了太多步骤，可能没法撤销那个操作，就只能接受倒角的结果。如果那不是你想要的结果，你可能要从头开始建模。

![page_132_img_1.png](/images/page_132_img_1.png)

但如果你添加一个倒角修改器，点击 `Add modifier → Generate → Bevel`，

![page_132_img_2.png](/images/page_132_img_2.png)

你会得到这个。

![page_133_img_1.png](/images/page_133_img_1.png)

在这里

![page_133_img_2.png](/images/page_133_img_2.png)

你可以随时改变倒角的量和段数。

![page_133_img_3.png](/images/page_133_img_3.png)

是的，用倒角工具可以达到类似的效果，但用修改器你可以随时调整倒角段数和量——不像倒角工具，一旦应用更改就固定了。

## 注意！

有些情况下，你可能需要应用修改器。一旦应用，你就失去了进一步修改的能力，倒角不再是非破坏性的。

怎么应用修改器（这里是倒角）呢？

点击下拉菜单箭头，你会看到"Apply"选项。

但为什么点不了呢？

因为你目前在编辑模式，修改器只能在物体模式下应用。

![page_134_img_1.png](/images/page_134_img_1.png)

要应用修改器，确保先切换到物体模式。

![page_134_img_2.png](/images/page_134_img_2.png)

现在你知道了修改器，该给盘子添加修改器了。

我刚解释了倒角修改器，但我们不会添加那个。相反，我们会添加一个叫细分修改器的新修改器。

那，这个修改器做什么呢？

细分表面修改器把面分成更小的部分，让它看起来更平滑。

让我们给盘子添加它，这样你就能明白我的意思。

`Add modifier → Generate → Subdivision` surface

![page_134_img_3.png](/images/page_134_img_3.png)

这是我们盘子目前的样子。

![page_135_img_1.png](/images/page_135_img_1.png)

![page_135_img_2.png](/images/page_135_img_2.png)

但你可以看到一些额外选项。现在我不会解释 render 是什么意思，只要关注 levels viewport 数值。

![page_135_img_3.png](/images/page_135_img_3.png)

现在是 1。但如果改成 2 呢？

![page_135_img_4.png](/images/page_135_img_4.png)

那 3 呢？

好多了吧？只要记住数值越高，你的模型面数就越多。较少的面通常是为了性能，但你的模型也要好看，所以你需要找到完美的平衡点——既好看又有合理的面数。

这个例子我会设为 3。

![page_136_img_1.png](/images/page_136_img_1.png)

现在切换到编辑模式，用"I"在底部内插新面。

![page_136_img_2.png](/images/page_136_img_2.png)

如果你遇到和我一样的问题——因为细分修改器看不清你在选什么，

只要点击这里，你就会在视口关掉修改器（物体模式和编辑模式都是视口）。你没有应用或移除修改器，只是暂时隐藏它，这样你能清楚地看到你在做什么。

要禁用它，点击这个第三个"屏幕"图标

![page_136_img_3.png](/images/page_136_img_3.png)

现在你能看清你在做什么了。

![page_136_img_4.png](/images/page_136_img_4.png)

终于可以用"I"在底部内插新面了。

![page_137_img_1.png](/images/page_137_img_1.png)

再来一次。

![page_137_img_2.png](/images/page_137_img_2.png)

现在你可以再打开细分修改器看看盘子怎么样。

![page_137_img_3.png](/images/page_137_img_3.png)

现在按"M"合并到中心。

![page_138_img_1.png](/images/page_138_img_1.png)

盘子底部完成了，

![page_138_img_2.png](/images/page_138_img_2.png)

现在去盘子顶部。

![page_138_img_3.png](/images/page_138_img_3.png)

你可以在视口再关掉修改器，这样能看清你在做什么。

选择顶部面，用"I"内插。

![page_138_img_4.png](/images/page_138_img_4.png)

选择顶部面，用"I"内插。

![page_139_img_1.png](/images/page_139_img_1.png)

再做两次。

![page_139_img_2.png](/images/page_139_img_2.png)

现在你可以再打开细分修改器看看盘子怎么样。现在按"M"合并到中心。

![page_139_img_3.png](/images/page_139_img_3.png)

最后切换到物体模式。

右键选择 Shade smooth 平滑你的物体。

![page_140_img_1.png](/images/page_140_img_1.png)

你有一个盘子了！

我们先停在这里，下次你会学习纹理和建模蛋糕。

哦，在我忘记之前，我终于开始了基于这本指南的 Blender 初学者 YouTube 系列，如果你感兴趣可以在这个链接看看第一集。

https://youtu.be/vpV8H6Xc93Q

感谢所有的下载、评分和支持。

祝大家 Blender 开心！

拜拜！
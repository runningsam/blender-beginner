# 第16章：让我们建模一个蛋糕

现在你有了盘子。

该添加蛋糕了。

通过按"SHIFT+RMB"点击你想添加下一个物体的位置，把 3D游标放到盘子上

![page_141_img_1.png](/images/page_141_img_1.png)

或者如果你想更精确地操作，用"TAB"切换到编辑模式。

选择你想让 3D游标所在的面

![page_141_img_2.png](/images/page_141_img_2.png)

按"SHIFT+S"打开这个饼状菜单

![page_141_img_3.png](/images/page_141_img_3.png)

选择 Cursor to selected。

现在你的 3D游标在盘子中心了。

![page_142_img_1.png](/images/page_142_img_1.png)

切换回物体模式，添加新物体。

这次你会添加圆柱，因为它是做蛋糕最合适的形状。

按"SHIFT+A" —> Add Mesh —> Cylinder。

![page_142_img_2.png](/images/page_142_img_2.png)

用"S"缩放，直到你觉得大小正好适合做蛋糕。

![page_143_img_1.png](/images/page_143_img_1.png)

用"`G+Z`"往上移动，用"CTRL+A" — Apply Scale 应用缩放。

![page_143_img_2.png](/images/page_143_img_2.png)

你想让蛋糕在盘子上对吧？

所以现在教你一个叫吸附的功能。

选择你想要的物体（这里是圆柱），点击箭头指向的位置打开吸附工具，或者直接按"SHIFT+TAB"开关。

![page_144_img_1.png](/images/page_144_img_1.png)

现在沿 Z轴往下移动，把鼠标放在你想吸附的面上，用 LMB 确认。

![page_144_img_2.png](/images/page_144_img_2.png)

你可以吸附到面、顶点、边等等。以后我会展示更多吸附的例子，但现在至少学会面吸附。所以吸附前确保 Snap Target 选的是 Face。

![page_145_img_1.png](/images/page_145_img_1.png)

现在可以用"TAB"切换到编辑模式。

用数字键盘的 7 或点击右上角蓝色 Z切换到顶视图正交。

![page_145_img_2.png](/images/page_145_img_2.png)

如图选择顶点

![page_146_img_1.png](/images/page_146_img_1.png)

用"J"连接它们。

![page_146_img_2.png](/images/page_146_img_2.png)

选择另外两个顶点

![page_146_img_3.png](/images/page_146_img_3.png)

再用"J"连接。

![page_147_img_1.png](/images/page_147_img_1.png)

选择这两个顶点，用"J"连接。

![page_147_img_2.png](/images/page_147_img_2.png)

用"ALT+Z"打开 X射线模式，这样你可以选择所有顶点。

选择左边这部分，

![page_148_img_1.png](/images/page_148_img_1.png)

用"X"删除顶点。

![page_148_img_2.png](/images/page_148_img_2.png)

重复之前的步骤直到得到这个。

![page_148_img_3.png](/images/page_148_img_3.png)

我发现到现在还没教你移动视角。我们来纠正一下，因为下一步你需要用到。

## 移动视角

如果你想放大某物，往上滚动鼠标滚轮。

![page_149_img_1.png](/images/page_149_img_1.png)

如果你想缩小，往下滚动鼠标滚轮。

![page_149_img_2.png](/images/page_149_img_2.png)

按住鼠标滚轮移动鼠标时，你可以看到所有不同的视角。

![page_150_img_1.png](/images/page_150_img_1.png)

如果你按住"SHIFT+鼠标滚轮"，可以移动视角而不旋转物体。

你也可以点击箭头指向的位置，按住 LMB 同时上下移动鼠标来放大/缩小视角。

![page_150_img_2.png](/images/page_150_img_2.png)

你也可以点击箭头指向的位置，按住 LMB 同时移动鼠标来移动视角。

![page_150_img_3.png](/images/page_150_img_3.png)

现在可以继续做蛋糕了。

删除所有那些顶点后，按住鼠标滚轮移动相机，也用"X"删除那些顶点。

![page_151_img_1.png](/images/page_151_img_1.png)

用"A"选择全部。

![page_151_img_2.png](/images/page_151_img_2.png)

用"`E+Z`"沿 Z轴往下挤出。

![page_151_img_3.png](/images/page_151_img_3.png)

用"TAB"切换到物体模式，用"ALT+Z"关闭 X射线。

![page_152_img_1.png](/images/page_152_img_1.png)

用"SHIFT+RMB"把 3D游标放到蛋糕底部，如图所示。

![page_152_img_2.png](/images/page_152_img_2.png)

去 Object —> Set Origin —> Origin to 3D Cursor。

![page_153_img_1.png](/images/page_153_img_1.png)

你会看到原点已经移到 3D游标的位置了。

![page_153_img_2.png](/images/page_153_img_2.png)

点击扳手图标，然后添加修改器。

Add modifier —> Generate —> Bevel。

![page_154_img_1.png](/images/page_154_img_1.png)

把 Amount 改成大约 0.021，Segments 改成大约 3。（你可以按自己的想法改。根据你认为看起来最好的效果调整数值。）

![page_154_img_2.png](/images/page_154_img_2.png)

用"TAB"切换到编辑模式。

![page_154_img_3.png](/images/page_154_img_3.png)

用 3 从顶点选择切换到面选择，选择那些面。

![page_155_img_1.png](/images/page_155_img_1.png)

现在你又遇到了新东西——复制面。

如果你按"SHIFT+D"，可以复制面。

按它复制选中的面。你想让复制的面保持在原来的位置，所以按 RMB 让它们回到原位。

![page_155_img_2.png](/images/page_155_img_2.png)

按"ALT+E"选择 Extrude Faces Along Normals。

上次，我好像没提到 Even thickness 开关。

你可以看到

![page_156_img_1.png](/images/page_156_img_1.png)

当前，沿法线挤出后，蛋糕形状有点变形。

![page_156_img_2.png](/images/page_156_img_2.png)

因为 Even thickness 关掉了，就会出现这种情况。

![page_156_img_3.png](/images/page_156_img_3.png)

要打开"Even thickness"，要么按 S（开关），要么按住 ALT。

这是打开 Even thickness 后的结果。

![page_157_img_1.png](/images/page_157_img_1.png)

好多了吧？

现在你可以按自己的想法挤出蛋糕了。

![page_157_img_2.png](/images/page_157_img_2.png)

把指针放在蛋糕内部某处，然后按"L"选择蛋糕的这部分。

![page_158_img_1.png](/images/page_158_img_1.png)

按"CTRL+R"给蛋糕这部分添加环切。

![page_158_img_2.png](/images/page_158_img_2.png)

滚动鼠标滚轮决定添加多少环切。这个例子我添加了 4个环切。

![page_159_img_1.png](/images/page_159_img_1.png)

按 LMB 确认数量，然后按 ESC 或 RMB 让它们居中。

![page_159_img_2.png](/images/page_159_img_2.png)

现在来学习给物体添加材质的基础知识。

给物体添加材质

如果你想给物体添加材质，点击箭头指向的位置——材质属性。

![page_160_img_1.png](/images/page_160_img_1.png)

切换到渲染视图，这样你可以看到添加的所有材质。

![page_160_img_2.png](/images/page_160_img_2.png)

我不想现在让你麻烦添加灯光，所以点击这里关闭 Scene world。

![page_160_img_3.png](/images/page_160_img_3.png)

开始够用了。

添加材质之前，我们先重命名物体。

![page_161_img_1.png](/images/page_161_img_1.png)

所以不再是 Cube 和 Cylinder，你可以改成 Plate 和 Cake。

用 LMB 双击你想重命名的物体。字母变成这样时，输入新名称。

![page_161_img_2.png](/images/page_161_img_2.png)

![page_161_img_3.png](/images/page_161_img_3.png)

从一开始就重命名你的物体，这样工作起来更方便，能省很多时间。

现在可以添加材质了。

用"L"选择这部分。

![page_162_img_1.png](/images/page_162_img_1.png)

点击这个 + 添加新的材质槽。

![page_162_img_2.png](/images/page_162_img_2.png)

点击 Assign 把材质分配给选中的面。

![page_162_img_3.png](/images/page_162_img_3.png)

点击"NEW"添加新材质。

![page_163_img_1.png](/images/page_163_img_1.png)

![page_163_img_2.png](/images/page_163_img_2.png)

选择你想要的基础颜色。我选了黄色。

![page_163_img_3.png](/images/page_163_img_3.png)

用 3 切换到面选择。按"ALT"选择第一个环。

![page_163_img_4.png](/images/page_163_img_4.png)

按住"SHIFT+ALT"，选择另外两个环。

![page_164_img_1.png](/images/page_164_img_1.png)

再点击 + 添加新材质槽，Assign，然后 New。

![page_164_img_2.png](/images/page_164_img_2.png)

选择你想要的基础颜色。我选了较浅的黄色。

![page_164_img_3.png](/images/page_164_img_3.png)

切换到物体模式。选择蛋糕。打开吸附。吸附前确保 Snap Target 选的是 Face。

按"`G+Z`"把它吸附到盘子。

![page_165_img_1.png](/images/page_165_img_1.png)

用数字键盘的 7 切换到顶视图正交。

用"SHIFT+D"复制蛋糕，按"ESC"或 RMB 让它回到原位。

按"R"按你想要的方式旋转。决定好蛋糕块的新位置后，用 LMB 确认。

![page_165_img_2.png](/images/page_165_img_2.png)

现在来学一个有趣的新技巧。

如果你想重复相同的动作，不需要再复制和旋转，只要按"SHIFT+R"就能重复这一步，创建多少块都可以。

![page_166_img_1.png](/images/page_166_img_1.png)

![page_166_img_2.png](/images/page_166_img_2.png)

恭喜！你刚做出了你的 3D卡通蛋糕！

我觉得该学习如何渲染了。
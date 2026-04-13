# Chapter 28: Modeling and texturing a cute 3D cartoony grain sack

Beginners guide to Blender

(Blender Version 4.2.0)

Modeling

大家好！非常感谢你们在 Patreon 和 YouTube 上对我的支持！

这对我来说意义重大！

今天我们将学习如何在 Blender 中制作一个可爱的卡通风格 3D 粮食袋。

希望你们会喜欢这个教程。

你可以在我的 YouTube 和 Patreon（免费和付费会员）上找到更多教程

如果你想看视频教程，可以查看我的 YouTube 频道：https://youtu.be/HEkOJ7wn_Bo

现在，让我们开始建模吧！

按 "A" 选择所有物体，然后按 "X" 删除。

![page_244_img_1.png](images/page_244_img_1.png)

前往 *`Add → Mesh → Plane`*

![page_244_img_2.png](images/page_244_img_2.png)

按 "S" + 2 将其缩放到 2

Beginners guide to Blender

![page_245_img_1.png](images/page_245_img_1.png)

然后按 "SHIFT+R" 4 次，重复这个操作。

![page_245_img_2.png](images/page_245_img_2.png)

现在前往 *`Add → Mesh → Cube`*

![page_245_img_3.png](images/page_245_img_3.png)

按 "S" + 2 将其缩放到 2

Beginners guide to Blender

![page_246_img_1.png](images/page_246_img_1.png)

然后按 "SHIFT+R" 2 次，重复这个操作。

![page_246_img_2.png](images/page_246_img_2.png)

按 "`G+Z`" 将它向上移动，大约 14.6

![page_246_img_3.png](images/page_246_img_3.png)

按 A 选择所有物体，然后用 "CTRL+A" 应用缩放

Beginners guide to Blender

![page_247_img_1.png](images/page_247_img_1.png)

选择平面，前往 Physics

![page_247_img_2.png](images/page_247_img_2.png)

点击 Collision，为平面启用碰撞功能，这样我们的袋子才能与它进行交互。

![page_247_img_3.png](images/page_247_img_3.png)

选择立方体，前往修改器。

Beginners guide to Blender

前往 Add *`Modifier → Generate → Subdivision`* Subsurface

![page_248_img_1.png](images/page_248_img_1.png)

将 Levels Viewport 改为 2

![page_248_img_2.png](images/page_248_img_2.png)

右键点击并选择 Shade Smooth

![page_248_img_3.png](images/page_248_img_3.png)

按 "TAB" 切换到编辑模式

Beginners guide to Blender

![page_249_img_1.png](images/page_249_img_1.png)

按 "CTRL+R" 添加一个环切

![page_249_img_2.png](images/page_249_img_2.png)

按 "A" 选择所有，然后用 "`S+Y`" 缩放，大约 0.2953

![page_249_img_3.png](images/page_249_img_3.png)

再用 "`S+Y`" 缩放一次，大约 0.3444

Beginners guide to Blender

![page_250_img_1.png](images/page_250_img_1.png)

按 "CTRL+R" 添加一个环切

![page_250_img_2.png](images/page_250_img_2.png)

向上滚动鼠标滚轮三次，再添加 3 个环切。

用左键确认切数，用右键确定位置。

![page_250_img_3.png](images/page_250_img_3.png)

按 "CTRL+R" 在这里添加一个环切

Beginners guide to Blender

![page_251_img_1.png](images/page_251_img_1.png)

向上滚动鼠标滚轮三次，再添加 3 个环切。

用左键确认切数，用右键确定位置。

![page_251_img_2.png](images/page_251_img_2.png)

按 2 切换到边选择模式，用 "ALT"+LMB 选择这个边环

![page_251_img_3.png](images/page_251_img_3.png)

按 "CTRL+B" 对它进行倒角。向上滚动鼠标滚轮添加一个额外的段数，倒角大约 0.137

Beginners guide to Blender

![page_252_img_1.png](images/page_252_img_1.png)

选择中间这个环

![page_252_img_2.png](images/page_252_img_2.png)

按 "S" 缩放，大约 0.9552

![page_252_img_3.png](images/page_252_img_3.png)

按 "ALT+Z" 开启 X-ray 模式，按 1 切换到顶点选择模式。

Beginners guide to Blender

选择这一部分

![page_253_img_1.png](images/page_253_img_1.png)

按 "`G+Z`" 移动，大约 7.036

![page_253_img_2.png](images/page_253_img_2.png)

按 "CTRL+R" 添加一个环切

![page_253_img_3.png](images/page_253_img_3.png)

滚动鼠标滚轮一次，再添加一个环切。

Beginners guide to Blender

用左键确认切数，用右键确定位置。

![page_254_img_1.png](images/page_254_img_1.png)

按 "TAB" 切换到物体模式，按 "ALT+Z" 关闭 X-ray 模式。

![page_254_img_2.png](images/page_254_img_2.png)

前往 Physics，启用 Cloth，这样我们就能用物理模拟来给袋子赋予初始形状。

![page_254_img_3.png](images/page_254_img_3.png)

向下滚动找到 "Pressure" 并启用它，这样我们可以让模型膨胀起来。

Beginners guide to Blender

![page_255_img_1.png](images/page_255_img_1.png)

将 Pressure 改为 0.9

![page_255_img_2.png](images/page_255_img_2.png)

前往 Collisions，启用 Self Collision，这样模型的各个部分就不会穿透同一网格的其他面。

![page_255_img_3.png](images/page_255_img_3.png)

按空格键开始动画

Beginners guide to Blender

![page_256_img_1.png](images/page_256_img_1.png)

当你对效果满意时，再按一次空格键停止动画。

我在第 125 帧停下来了

![page_256_img_2.png](images/page_256_img_2.png)

前往 Add *`Modifier → Generate → Subdivision`* Subsurface

Beginners guide to Blender

![page_257_img_1.png](images/page_257_img_1.png)

应用第一个细分修改器

![page_257_img_2.png](images/page_257_img_2.png)

然后应用 Cloth，让形状固定下来。

![page_257_img_3.png](images/page_257_img_3.png)

按 "TAB" 切换到编辑模式。

点击 Gizmo 上那个绿色的 -Y，或者按 "CTRL+ Numpad 1"，切换到前视图正交视角。

Beginners guide to Blender

![page_258_img_1.png](images/page_258_img_1.png)

开启 X-ray 模式，选择这一部分

![page_258_img_2.png](images/page_258_img_2.png)

按 "X"，选择删除顶点

Beginners guide to Blender

![page_259_img_1.png](images/page_259_img_1.png)

关闭 X-ray 模式，按 "TAB" 切换到物体模式。

![page_259_img_2.png](images/page_259_img_2.png)

前往 Add *`Modifier → Generate → Solidify`*，给袋子添加一些厚度。

![page_259_img_3.png](images/page_259_img_3.png)

将 Solidify 移到 Subdivision Subsurface 前面

Beginners guide to Blender

![page_260_img_1.png](images/page_260_img_1.png)

然后将 Thickness 改为大约 0.625

![page_260_img_2.png](images/page_260_img_2.png)

按 "TAB" 切换到编辑模式，从顶点选择切换到边选择模式，按 2。用 "ALT" +LMB 选择整个边环

![page_260_img_3.png](images/page_260_img_3.png)

Beginners guide to Blender

点击 Gizmo 上那个绿色的 -Y，或者按 "CTRL+ Numpad 1"，切换到前视图正交视角。

![page_261_img_1.png](images/page_261_img_1.png)

按 "`E+Z`" 挤出，大约 0.76

![page_261_img_2.png](images/page_261_img_2.png)

按 "S" 缩放，大约 1.0713

Beginners guide to Blender

![page_262_img_1.png](images/page_262_img_1.png)

按 "`E+Z`" 挤出，大约 -2.604

![page_262_img_2.png](images/page_262_img_2.png)

按 "`E+Z`" 挤出，大约 -1.27

![page_262_img_3.png](images/page_262_img_3.png)

按 "`S+X`" 缩放，大约 0.8891

Beginners guide to Blender

![page_263_img_1.png](images/page_263_img_1.png)

用 "ALT+LMB" 选择这个环

![page_263_img_2.png](images/page_263_img_2.png)

按 "O" 开启比例编辑

按 "S" 缩放，通过滚动鼠标滚轮来调整比例大小，直到你满意为止。用左键确认。

![page_263_img_3.png](images/page_263_img_3.png)

按 "O" 关闭比例编辑。

Beginners guide to Blender

点击这里的 Solidify，在编辑模式下关闭显示，这样你能看清自己在做什么。

![page_264_img_1.png](images/page_264_img_1.png)

选择整个环

![page_264_img_2.png](images/page_264_img_2.png)

按 "SHIFT+D" 复制，然后按 "F" 填充。

![page_264_img_3.png](images/page_264_img_3.png)

按 "I" 进行内插面，内插大约 0.71

Beginners guide to Blender

![page_265_img_1.png](images/page_265_img_1.png)

右键点击，选择 Loop *`Tools → Circle`*

![page_265_img_2.png](images/page_265_img_2.png)

按 "S" 缩放，大约 0.64

![page_265_img_3.png](images/page_265_img_3.png)

按 "`G+Z`" 移动，大约 0.65

Beginners guide to Blender

![page_266_img_1.png](images/page_266_img_1.png)

按 "I" 内插，大约 1.7

![page_266_img_2.png](images/page_266_img_2.png)

按 "M"，选择 Merge At Center。

![page_266_img_3.png](images/page_266_img_3.png)

按 1 切换到顶点选择模式，按 "`G+Z`" 移动这个顶点，大约 0.15

Beginners guide to Blender

![page_267_img_1.png](images/page_267_img_1.png)

按 "TAB" 切换到物体模式，右键选择 Shade Smooth。

![page_267_img_2.png](images/page_267_img_2.png)

现在你可以再次开启 Solidify，在编辑模式下显示

![page_267_img_3.png](images/page_267_img_3.png)

按 "CTRL+A"，选择应用 Location。

Beginners guide to Blender

![page_268_img_1.png](images/page_268_img_1.png)

按 N 打开右侧侧边栏。前往 *`Item → Dimensions`*

![page_268_img_2.png](images/page_268_img_2.png)

将 Z= 改为 0.8 m（或者你想要的袋子高度的任何数值）

![page_268_img_3.png](images/page_268_img_3.png)

把鼠标悬停在 Scale Z = 0.050（在我这个例子中），按 "CTRL+C" 复制它，然后按 "CTRL+V" 粘贴到 X 和 Y

Beginners guide to Blender

![page_269_img_1.png](images/page_269_img_1.png)

按 "CTRL+A" 应用缩放，然后会发生这种情况。

![page_269_img_2.png](images/page_269_img_2.png)

我们需要先应用 Solidify 修改器，然后才能应用缩放。所以先应用 Solidify

![page_269_img_3.png](images/page_269_img_3.png)

然后用 "CTRL+A" 应用缩放

Beginners guide to Blender

![page_270_img_1.png](images/page_270_img_1.png)

切换到材质预览模式

![page_270_img_2.png](images/page_270_img_2.png)

前往 Materials，按 New。

![page_270_img_3.png](images/page_270_img_3.png)

![page_270_img_4.png](images/page_270_img_4.png)

将 Base color 改成你想要的任何颜色。

Beginners guide to Blender

我选择这个颜色

![page_271_img_1.png](images/page_271_img_1.png)

点击那个 + 号添加新材质

![page_271_img_2.png](images/page_271_img_2.png)

按 "TAB" 切换到编辑模式

选择这个顶点

![page_271_img_3.png](images/page_271_img_3.png)

按 "L" 选择关联部分

Beginners guide to Blender

![page_272_img_1.png](images/page_272_img_1.png)

点击 "Assign" 和 "New"

![page_272_img_2.png](images/page_272_img_2.png)

把粮食的颜色改成你想要的任何颜色。我选择这个颜色。

![page_272_img_3.png](images/page_272_img_3.png)

最后，给你的物体和材质改名。

Beginners guide to Blender

![page_273_img_1.png](images/page_273_img_1.png)

现在你知道如何建模和贴图一个可爱的卡通粮食袋了！

在评论区告诉我，你是否想要更多可爱卡通风格的教程，也可以给我一些想法，告诉我接下来应该做什么。

今天就到这里！

如果你跟我学习很开心，别忘了订阅我的频道。

我最近开了一个 Patreon，里面有更多独家内容，比如教程、3D 模型、.blend 文件、幕后视频等等。我也经常分享免费的 3D 模型、做测验等等。

免费和付费会员都有内容，所以别忘了去看看。

如果你有任何问题，在评论区写下来吧 :D

祝大家 Blender 快乐！拜拜，下次见。
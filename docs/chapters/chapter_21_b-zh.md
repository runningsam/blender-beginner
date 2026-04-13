# 第21b章：建模一个干草捆

我决定教你建模干草捆，因为这是介绍 Blender 中粒子新概念的好方式。

让我们开始建模。（你可以在我的 YouTube频道查看视频教程：https://youtu.be/fw8SMNxWnm8?si=GCreoaZfE1eH-ZhR）

就像你建模书本时那样，你不会删除立方体，而是从头就用它，因为和干草捆形状最相似的是立方体。

到目前为止，你没按尺寸做过建模，这次我会教你怎么做。那些是我决定的对于干草捆 3D模型最好的尺寸，但你可以按自己的想法改变尺寸。

用"N"打开右边侧栏，选择"Item"。

![page_247_img_1.png](images/page_247_img_1.png)

这个立方体的当前尺寸是 2x2x2。

把立方体尺寸改成 x = 1 m，y = 1.5 m，z = 0.6 m（或你认为最好的任何尺寸）。

![page_247_img_2.png](images/page_247_img_2.png)

正如你已学过的，Scale 必须是 1，所以按"CTRL+A"应用缩放。

![page_248_img_1.png](images/page_248_img_1.png)

在做其他事情之前，先重命名物体为你喜欢的名称。我会重命名为 Hay_bale。

![page_248_img_2.png](images/page_248_img_2.png)

去修改器属性，Add Modifier - Generate - Bevel。

![page_248_img_3.png](images/page_248_img_3.png)

把 Segments 改成 3（或你认为最好的任何数字）。

![page_249_img_1.png](images/page_249_img_1.png)

按右键选择 Shade Smooth。

![page_249_img_2.png](images/page_249_img_2.png)

用"TAB"切换到编辑模式。

按"CTRL+R"添加一个环。

往上滚动鼠标滚轮添加另一个环。按 LMB 确认数量，然后按 ESC 或 RMB 让它们居中。

![page_249_img_3.png](images/page_249_img_3.png)

用"`S+X`"沿 X轴向内缩放。

![page_250_img_1.png](images/page_250_img_1.png)

旋转视角到另一边，添加两个更多环。按 LMB 确认数量，然后按 ESC 或 RMB 让它们居中。

![page_250_img_2.png](images/page_250_img_2.png)

用"`S+Y`"沿 Y轴向内缩放。

![page_250_img_3.png](images/page_250_img_3.png)

现在在内部添加两个更多环。按 LMB 确认数量，然后按 ESC 或 RMB 让它们居中。

![page_251_img_1.png](images/page_251_img_1.png)

用"`S+Y`"沿 Y轴向内缩放。

![page_251_img_2.png](images/page_251_img_2.png)

旋转视角到另一边，添加两个更多环。按 LMB 确认数量，然后按 ESC 或 RMB 让它们居中。

![page_251_img_3.png](images/page_251_img_3.png)

这次缩放时，用"`S+X`"沿 X轴缩放。

![page_252_img_1.png](images/page_252_img_1.png)

用"3"从边选择切换到面选择。

用"ALT+ LMB"选择整个环。

![page_252_img_2.png](images/page_252_img_2.png)

按住鼠标滚轮旋转视角。按住"SHIFT"，用"ALT+LMB"选择另一个环。

![page_252_img_3.png](images/page_252_img_3.png)

用"S"缩小。

![page_253_img_1.png](images/page_253_img_1.png)

用"SHIFT+D"复制，按 RMB 让它们回到之前位置。

![page_253_img_2.png](images/page_253_img_2.png)

按"P"选择 Selection，从中创建一个分离的物体。

![page_253_img_3.png](images/page_253_img_3.png)

![page_254_img_1.png](images/page_254_img_1.png)

用"TAB"切换到物体模式。

选择新物体，用"S"放大一点。

![page_254_img_2.png](images/page_254_img_2.png)

如果你的显卡比处理器好，把渲染引擎改成 Cycles，设备改成 GPU。

还要在视口打开降噪。

![page_254_img_3.png](images/page_254_img_3.png)

切换到渲染模式。

![page_255_img_1.png](images/page_255_img_1.png)

选择 Bale，去修改器 - Bevel。点击下拉菜单选择 Apply。当你这样做后，倒角修改器应用到物体上了，不能再修改了。

![page_255_img_2.png](images/page_255_img_2.png)

## 粒子

粒子是从网格物体发出的大量项目，通常成千上万。每个粒子可以是光点或网格，可以连接或动态。它们可能对许多不同的影响和力做出反应，并有寿命概念。动态粒子可以代表火、烟、雾和其他东西，如灰尘或魔法咒语。

Hair 类型粒子是常规粒子的子集。Hair 系统形成曲线，可以代表头发、毛发、草和刷毛。

（来源：https://docs.blender.org/manual/en/latest/physics/particles/introduction.html）

我从官方 Blender 手册复制了这个定义，因为它是最好的解释。现在我给你展示粒子是什么的实际例子。

去粒子属性

![page_256_img_1.png](images/page_256_img_1.png)

点击 + 添加新 ParticleSystem。

![page_256_img_2.png](images/page_256_img_2.png)

这里你会看到两个选项：Emitter 和 Hair。

![page_256_img_3.png](images/page_256_img_3.png)

如果你选择 Emitter，粒子从物体发出。

如果你选择 Hair，粒子渲染为条状。

因为我要第二个选项，我会选择 Hair。

![page_257_img_1.png](images/page_257_img_1.png)

如你所见，Hair Length 太长了，所以我会把 Hair Length 从 4m 改成 0.03m。（你自己决定哪个长度最适合）。

![page_257_img_2.png](images/page_257_img_2.png)

我想有更多条，所以我会把数量从 1000 改成 5000。

![page_257_img_3.png](images/page_257_img_3.png)

现在往下滚动一点，去 Hair Shape。

![page_258_img_1.png](images/page_258_img_1.png)

把 Tip 从 0 改成 1m（用这个选项改变条顶端直径宽度）。

![page_258_img_2.png](images/page_258_img_2.png)

取消勾选 - Close Tip，因为你想半径顶端为零。

![page_259_img_1.png](images/page_259_img_1.png)

去 Children。

Children 是从单独粒子发出的 Hair 或 Emitter 粒子。它们让你可以用相对较少的 Parent 粒子工作，为它们计算物理。Children 然后对齐到它们的父母。Children 的数量和可视化可以改变而不用重新计算物理。

如果你激活 Children，Parents 不再渲染。（来源：https://docs.blender.org/manual/en/latest/physics/particles/emitter/children.html）

![page_259_img_2.png](images/page_259_img_2.png)

Blender 中有三种 Children：None、Simple 和 Interpolated。

如果你选择 None，不生成 Children。

如果你选择 Simple，Children 从 Parent 位置发出。

如果你选择 Interpolation，Children 在网格面上的 Parent 粒子之间发出。

给你展示实际例子，这是选择 None Children 的 Hay Bale

![page_260_img_1.png](images/page_260_img_1.png)

这是选择 Simple Children 的 Hay Bale

![page_260_img_2.png](images/page_260_img_2.png)

这是选择 Interpolated Children 的 Hay Bale

![page_260_img_3.png](images/page_260_img_3.png)

这个情况，Interpolated 是最好的，所以从 None 切换到 Interpolated。

去 Roughness

![page_261_img_1.png](images/page_261_img_1.png)

把 Roughness Endpoint 改成大约 0.125。

![page_261_img_2.png](images/page_261_img_2.png)

把 Render Amount 从 100 改成 10，否则你的电脑渲染会很吃力。

![page_261_img_3.png](images/page_261_img_3.png)
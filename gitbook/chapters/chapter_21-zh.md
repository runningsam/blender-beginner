# 第21a章：给书本添加纹理

把光标放在屏幕上方，当看到加号时，

![page_212_img_1.png](../images/page_212_img_1.png)

按住左键往左下方拖动。

![page_212_img_2.png](../images/page_212_img_2.png)

在你刚创建的窗口打开着色编辑器。

![page_212_img_3.png](../images/page_212_img_3.png)

![page_213_img_1.png](../images/page_213_img_1.png)

按"N"隐藏右边侧栏，因为你不需要它。

![page_213_img_2.png](../images/page_213_img_2.png)

选择 Book_covers 材质。

![page_213_img_3.png](../images/page_213_img_3.png)

你目前看到的是两个节点：Principled BSDF 着色器节点和 Material Output 节点。

首先让我解释节点的部分是什么。

![page_214_img_1.png](../images/page_214_img_1.png)

标题显示节点的名称/类型。

Socket 是节点的输入和输出值。它们出现在节点两侧的小彩色圆圈。

属性是可以影响它们与输入输出交互方式的设置。

现在我详细解释 Principled BSDF 着色器——物理基础、易用的渲染表面材质着色器，基于 OpenPBR 模型。

这是官方定义，但我们用实际例子来更好理解。

你可以通过改变 Base Color 来改变材质颜色。

![page_214_img_2.png](../images/page_214_img_2.png)

![page_214_img_3.png](../images/page_214_img_3.png)

或者这里，像你之前做的那样。

![page_215_img_1.png](../images/page_215_img_1.png)

完全一样的东西，所以当你在着色器里改变基础颜色，那边也会改变。你也可以改变其他选项如 Metallic、IOR 等……

你在 Principled BSDF 着色器看到的第二个选项是 Metallic。

![page_215_img_2.png](../images/page_215_img_2.png)

当 Metallic 在 0时，意味着关闭。如果你想要东西不金属，需要把它设为零。

![page_216_img_1.png](../images/page_216_img_1.png)

如你所见，这本书不金属。

但如果你把 Metallic 改成 1，突然就金属了。

![page_216_img_2.png](../images/page_216_img_2.png)

当然，你也可以在 0和 1之间做变化。所以如果你想物体稍微金属，放得接近 0，

![page_216_img_3.png](../images/page_216_img_3.png)

如果你想它有强金属色，放得接近 1。

![page_217_img_1.png](../images/page_217_img_1.png)

你在 Principled BSDF 着色器看到的第三个选项是 Roughness。

![page_217_img_2.png](../images/page_217_img_2.png)

和 Metallic 一样的情况。如果 Roughness 是 0，物体不粗糙但它是完美镜面反射。

![page_217_img_3.png](../images/page_217_img_3.png)

如果 Roughness 是 1，物体完全粗糙。

![page_218_img_1.png](../images/page_218_img_1.png)

你在 Principled BSDF 着色器看到的第四个选项是 IOR。

IOR 或折射率，用于镜面反射和透射。

大多数材质 IOR 在 1.0（真空和空气）和 4.0（锗）之间。

默认值 1.5 对玻璃是很好的近似。

![page_218_img_2.png](../images/page_218_img_2.png)

你在 Principled BSDF 着色器看到的第五个选项是 Alpha。

用 Alpha 控制表面透明度。

![page_219_img_1.png](../images/page_219_img_1.png)

如果 Alpha 是 1.0，完全不透明。

![page_219_img_2.png](../images/page_219_img_2.png)

如果 Alpha 是 0.0，完全透明。

![page_219_img_3.png](../images/page_219_img_3.png)

我想只解释开始的基本东西，没有实际例子的我就不解释了。

![page_220_img_1.png](../images/page_220_img_1.png)

第二个重要的是 Material Output 节点。

目前唯一重要的是 Surface。

![page_220_img_2.png](../images/page_220_img_2.png)

如果你想显示材质，你得把 Principled BSDF 输出 socket — BSDF 连接到 Material 输入 socket — Surface。

![page_220_img_3.png](../images/page_220_img_3.png)

创建材质时自动连接，但如果你不小心删了，就会这样。

![page_221_img_1.png](../images/page_221_img_1.png)

怎么断开 socket 连接呢？

按住 CTRL 和 RMB，会出现一把刀。然后用刀切断线来断开 socket。

![page_221_img_2.png](../images/page_221_img_2.png)

你会得到这个。

![page_221_img_3.png](../images/page_221_img_3.png)

如果你想连接 socket 呢？

把鼠标指针放在你想连接的输出 socket，这条线会出现。

![page_222_img_1.png](../images/page_222_img_1.png)

现在拖到你想连接的输入 socket。

![page_222_img_2.png](../images/page_222_img_2.png)

如何添加新节点？

如果你点击这里的 Add

![page_223_img_1.png](../images/page_223_img_1.png)

你会看到所有节点分组（输入、输出、颜色转换器……）

所以，举例如果你想再添加一个 Principled BSDF 着色器节点，点击：`ADD → Shader → Principled` BSDF。

![page_223_img_2.png](../images/page_223_img_2.png)

你也可以从 socket 用鼠标拖出来添加，会出现新窗口可以搜索想添加的节点。只要输入名称，用 LMB 确认。

![page_224_img_1.png](../images/page_224_img_1.png)

学新节点前还有一件事：在节点区域移动，只要用鼠标滚轮按住同时移动鼠标，如果要放大缩小，上下滚动鼠标滚轮。

现在可以继续给书添加纹理了。

你已有两个节点后要添加的第一个节点是 Voronoi 纹理。

![page_224_img_2.png](../images/page_224_img_2.png)

Voronoi 纹理基于到随机点的距离生成 Worley 噪声。

![page_225_img_1.png](../images/page_225_img_1.png)

把 Voronoi 纹理的 Color 连接到 Principled BSDF 的 Base Color，你会得到这个。

![page_225_img_2.png](../images/page_225_img_2.png)

点击 Voronoi 纹理的 Vector，连接到 Mapping 的 Vector。

Mapping 节点通过应用平移、旋转和缩放来变换输入向量。

![page_225_img_3.png](../images/page_225_img_3.png)

当你连接那两个向量后，Voronoi 纹理失去了功能，因为你需要再添加一个节点。

![page_226_img_1.png](../images/page_226_img_1.png)

把 Mapping 的 Vector 连接到 Texture Coordinate 的 Object。

Texture Coordinate 节点获取多种纹理坐标。通常用作纹理节点的输入。因为你没有真正的图片纹理（PBR材质）而是程序材质（用节点程序化制作），你把向量连接到 Object 输入 socket。

![page_226_img_2.png](../images/page_226_img_2.png)

把 Voronoi 纹理的 Scale 从 5

![page_227_img_1.png](../images/page_227_img_1.png)

改成大约 60。如你所见，把 Scale 改成更小的数字，书封面得到更多小细节。如果改成更大的数字，那些细节会更大。

![page_227_img_2.png](../images/page_227_img_2.png)

把 Voronoi 纹理的 Color 连接到 Bump 的 Height。

Bump 节点从高度纹理生成扰动的法线用于凹凸贴图。

通常用于伪造高度细节的表面，比如这个例子里的书封面。

![page_228_img_1.png](../images/page_228_img_1.png)

把 Bump 的 Normal 连接到 Principled BSDF 的 Normal。

![page_228_img_2.png](../images/page_228_img_2.png)

按住"CTRL"，同时按住 RMB 切断连接 Color 和 Base color 的那条黄线。

![page_229_img_1.png](../images/page_229_img_1.png)

把 Voronoi 纹理的 Feature Output 从 F1

![page_229_img_2.png](../images/page_229_img_2.png)

改成 Smooth F1。

![page_230_img_1.png](../images/page_230_img_1.png)

F1 计算到最近点的距离以及它的位置和颜色。

Smooth F1 是 F1 的平滑版本。

![page_230_img_2.png](../images/page_230_img_2.png)

把 Bump 的 Strength 从 1

![page_231_img_1.png](../images/page_231_img_1.png)

改成大约 0.370 让凹凸不那么明显。

![page_231_img_2.png](../images/page_231_img_2.png)

把 Distance 改成大约 0.180 减少凹凸的整体距离。

![page_232_img_1.png](../images/page_232_img_1.png)

把 Principled BSDF 的 Base Color 连接到 Geometry 的 Pointiness 来在书上创建一些边缘高光。

![page_232_img_2.png](../images/page_232_img_2.png)

添加 Converter - Color Ramp，放在 Geometry 和 Principled BSDF 之间。

它会自动连接需要连接的东西。

![page_232_img_3.png](../images/page_232_img_3.png)

点击 Color Ramp 的第一个颜色，往右移一点。

![page_233_img_1.png](../images/page_233_img_1.png)

点击 Color Ramp 的第二个颜色，往左移一点。

![page_233_img_2.png](../images/page_233_img_2.png)

把 Bump 的 Strength 改成大约 0.085。

![page_233_img_3.png](../images/page_233_img_3.png)

点击 Color Ramp 的第二个颜色来设置你的边缘颜色。

我选了淡橙色。

![page_234_img_1.png](../images/page_234_img_1.png)

然后你可以改变 Color Ramp 的第一个颜色来设置书的整体颜色。这个我选了深棕色。

![page_234_img_2.png](../images/page_234_img_2.png)

你可以玩玩那些颜色，让书看起来像你想要的任何样子。

添加 Texture - Noise Texture。

Noise Texture 生成分形 Perlin 噪声。

Perlin 噪声是 Ken Perlin 在 1983 年开发的梯度噪声类型。

它有很多用途，包括但不限于：程序化生成地形、对变量应用伪随机变化、帮助创建图片纹理。

通常在二、三或四维实现，但可以定义为任意维数。（来源：Wikipedia）

![page_235_img_1.png](../images/page_235_img_1.png)

把 Noise Texture 的 Fac 连接到 Principled BSDF 的 Roughness。

![page_235_img_2.png](../images/page_235_img_2.png)

把 Noise 的 Detail 从 2

![page_235_img_3.png](../images/page_235_img_3.png)

改成 15或类似

![page_236_img_1.png](../images/page_236_img_1.png)

把 Scale 改成 3。

![page_236_img_2.png](../images/page_236_img_2.png)

把 Voronoi 纹理的 Scale 从 65 改成类似 75。

![page_236_img_3.png](../images/page_236_img_3.png)

把 Bump 的 Strength 改成大约 0.050。

![page_237_img_1.png](../images/page_237_img_1.png)

点击 Principled BSDF 的 Sheen，把 Weight 从 0

![page_237_img_2.png](../images/page_237_img_2.png)

改成大约 0.240。这会给书一个漂亮的灰尘外观。

你可以用 Sheen 做各种东西，比如添加灰尘（这个例子），或给材质如布料或桃子皮一种有很多小毛发的错觉。

![page_238_img_1.png](../images/page_238_img_1.png)

选择第二个材质 BookPages。

![page_238_img_2.png](../images/page_238_img_2.png)

添加 Texture - Wave Texture。

Wave Texture 生成有噪声的程序化条纹或圆环。

![page_238_img_3.png](../images/page_238_img_3.png)

把 Wave Texture 的 Color 连接到 Principled BSDF 的 Base Color。

![page_239_img_1.png](../images/page_239_img_1.png)

点击 Wave Texture 的 Vector，连接到 Mapping 的 Vector。

![page_239_img_2.png](../images/page_239_img_2.png)

把 Mapping 的 Vector 连接到 Texture Coordinate 的 Object。

![page_239_img_3.png](../images/page_239_img_3.png)

把 Mapping 的 Y Rotation 改成 90度，这样页面正确旋转。

![page_240_img_1.png](../images/page_240_img_1.png)

把 Wave Texture 的 Scale 从 5

![page_240_img_2.png](../images/page_240_img_2.png)

改成大约 70，让页面看起来更好。

![page_240_img_3.png](../images/page_240_img_3.png)

把 Wave Texture 的 Fac 连接到 Bump 的 Height。书的样子没变，因为你还没连接 Bump 的输出 socket Normal。

![page_241_img_1.png](../images/page_241_img_1.png)

把 Bump 的 Normal 连接到 Principled BSDF 的 Normal。你已能看到差异，但颜色变暗了一点。要改变那，你需要做下一步。

![page_241_img_2.png](../images/page_241_img_2.png)

按住"CTRL"，同时按住 RMB 切断连接 Wave Texture 的 Color 和 Principled BSDF 的 Base Color 的那条黄线。

![page_241_img_3.png](../images/page_241_img_3.png)

添加 Converter - Color Ramp，放在 Wave Texture 和 Bump 之间。

![page_242_img_1.png](../images/page_242_img_1.png)

点击 Color Ramp 的第一个颜色，改成灰色。

![page_242_img_2.png](../images/page_242_img_2.png)

添加 Input - Ambient Occlusion。Ambient Occlusion 计算着色点上方半球被遮挡多少。如果你电脑慢要小心，想想是否应该添加，因为渲染时间可能显著变慢。

![page_242_img_3.png](../images/page_242_img_3.png)

把 Ambient Occlusion 的 Color 连接到新的 Color Ramp 节点的 Fac。

还不工作，因为 Color Ramp 的输出 socket 没连接到任何东西。

![page_243_img_1.png](../images/page_243_img_1.png)

把 Color Ramp 的 Color 连接到 Principled BSDF 的 Base Color。

![page_243_img_2.png](../images/page_243_img_2.png)

点击 Color Ramp 的第一个颜色，往右移一点。

![page_243_img_3.png](../images/page_243_img_3.png)

点击 Color Ramp 的 +

![page_243_img_4.png](../images/page_243_img_4.png)

添加一个颜色。点击加号后，中间指针出现了新颜色。

![page_244_img_1.png](../images/page_244_img_1.png)

选择淡黄色。

![page_244_img_2.png](../images/page_244_img_2.png)

点击 Color Ramp 的第三个颜色选择器，也改成淡黄色。

![page_244_img_3.png](../images/page_244_img_3.png)

点击相机图标。

去 View，打开 Camera to View。

![page_245_img_1.png](../images/page_245_img_1.png)

现在你可以通过上下滚动鼠标滚轮调整视角远近，按住鼠标滚轮同时左右移动鼠标旋转视角。

如果你想移动整个相机，按住"SHIFT"同时按鼠标滚轮上下移动鼠标。

当你满意后，关闭 Camera to View，点击 Render，渲染图片。

![page_245_img_2.png](../images/page_245_img_2.png)

完成啦！现在你知道如何在 Blender 中建模和给书添加纹理了。

我希望你喜欢新章节！我尽量解释清楚，但如果有什么不明白的尽管问。

再次感谢对这本指南和我的 YouTube 频道所有的爱和帮助。

我们超过 900订阅者了，离我们主要目标 1000越来越近！

你也可以在 YouTube 上跟随整个章节！

https://www.youtube.com/watch?v=onF5s2bXhZ0&t=2s

祝大家 Blender 开心！拜拜，下次见 😀
# 第25章：魔法药水的建模、材质和动画制作

Beginners guide to Blender

好啦，这次真的是最后啦！

谢谢你跟着我一起学习！

祝你 Blender 用得开心！

再见，下次见 :D

这次你要学习如何建模、制作材质，还有给魔法药水做动画。

（你可以在我的 YouTube 频道看视频教程：https://youtu.be/msj0kz-dOP8）

开始吧！

按 "A" 全选，然后按 "X" 删除。

Beginners guide to Blender

![page_78_img_1.png](images/page_78_img_1.png)

现在去 *`Add → Mesh → UV`* Sphere（添加 UV 球体）。

![page_78_img_2.png](images/page_78_img_2.png)

用 "SHIFT+D" 复制这个 UV 球体。

Beginners guide to Blender

![page_79_img_1.png](images/page_79_img_1.png)

按 "ESC" 让复制的 UV 球体回到原来的位置。

![page_79_img_2.png](images/page_79_img_2.png)

按 "H" 在视口中隐藏第二个 UV 球体，或者点击这个眼睛图标来隐藏它。

要在渲染中隐藏（关闭）这个物体，点击这个相机图标。

Beginners guide to Blender

![page_80_img_1.png](images/page_80_img_1.png)

现在第二个球体在视口和渲染中都被隐藏了。

![page_80_img_2.png](images/page_80_img_2.png)

按 "TAB" 切换到编辑模式。

![page_80_img_3.png](images/page_80_img_3.png)

按 1 切换到顶点选择模式。

Beginners guide to Blender

选择这个顶部顶点。

![page_81_img_1.png](images/page_81_img_1.png)

现在按 "CTRL" + 小键盘 "+" 来选择附近的顶点。一直按 "+" 直到选中如图所示的所有顶点。

如果你用的是笔记本电脑没有小键盘，就去

*`Select → More`*/*`Less → More`*（选择 → 更多/更少 → 更多），重复这个操作直到选中下一步需要的所有顶点。

![page_81_img_2.png](images/page_81_img_2.png)

Beginners guide to Blender

![page_82_img_1.png](images/page_82_img_1.png)

现在按 "X"，选择删除顶点。

![page_82_img_2.png](images/page_82_img_2.png)

Beginners guide to Blender

按 2 切换到边选择模式，然后按 "ALT" + 左键选择这条边。

![page_83_img_1.png](images/page_83_img_1.png)

按 "F" 填充面。

![page_83_img_2.png](images/page_83_img_2.png)

按 "TAB" 切换回物体模式。右键点击，选择 Shade Auto Smooth（自动平滑）。

Beginners guide to Blender

![page_84_img_1.png](images/page_84_img_1.png)

现在在视口和渲染中隐藏第一个球体，然后取消隐藏第二个。

![page_84_img_2.png](images/page_84_img_2.png)

选中它，按 "TAB" 切换到编辑模式。

Beginners guide to Blender

![page_85_img_1.png](images/page_85_img_1.png)

按 1 切换到顶点选择，选择顶部顶点。

![page_85_img_2.png](images/page_85_img_2.png)

只按一次 "CTRL" + "小键盘 +" 来选择顶点。

![page_85_img_3.png](images/page_85_img_3.png)

按 "X" 删除顶点。

Beginners guide to Blender

![page_86_img_1.png](images/page_86_img_1.png)

按 "2" 切换到边选择，用 "ALT" + 左键选择这条边。

![page_86_img_2.png](images/page_86_img_2.png)

用 "`E+Z`" 沿 Z 轴挤出。

![page_86_img_3.png](images/page_86_img_3.png)

Beginners guide to Blender

按 "A" 全选，然后按 "ALT+E" 沿法线挤出面。

![page_87_img_1.png](images/page_87_img_1.png)

按 "CTRL+R" 添加一个新循环边，然后往上移动。

![page_87_img_2.png](images/page_87_img_2.png)

按 "3" 切换到面选择，选中所有这些面。

![page_87_img_3.png](images/page_87_img_3.png)

Beginners guide to Blender

按 "ALT+E" 沿法线挤出面。

![page_88_img_1.png](images/page_88_img_1.png)

按 "TAB" 切换回物体模式，右键点击选择 Shade Smooth（平滑）。

![page_88_img_2.png](images/page_88_img_2.png)

去修改器面板。添加修改器 —> *`Generate → Bevel`*。

Beginners guide to Blender

![page_89_img_1.png](images/page_89_img_1.png)

要修复这部分，增加更多段数和数值。

![page_89_img_2.png](images/page_89_img_2.png)

我加了 4 个段数，数值 0.035，你可以按自己喜好加（注意别加太多，如果你需要低多边形模型的话——就是面数少的模型）。

![page_89_img_3.png](images/page_89_img_3.png)

现在切换到渲染模式，这样你可以添加灯光和材质，看看魔法药水在合适光照下的样子。

Beginners guide to Blender

去渲染属性，把渲染引擎从 Eevee 切换到 Cycles。

如果你有好显卡，可以从 CPU 切换到 GPU。

打开视口降噪来去除噪点，看着更舒服。

![page_90_img_1.png](images/page_90_img_1.png)

把光标放在屏幕上方如图所示的位置，看到加号的时候，

![page_90_img_2.png](images/page_90_img_2.png)

按住左键把它往左下方拖。

![page_90_img_3.png](images/page_90_img_3.png)

在你刚创建的窗口中打开材质编辑器。

Beginners guide to Blender

![page_91_img_1.png](images/page_91_img_1.png)

按 "N" 隐藏右边那个侧边栏，因为不需要。

![page_91_img_2.png](images/page_91_img_2.png)

从物体材质切换到世界材质。

![page_91_img_3.png](images/page_91_img_3.png)

Beginners guide to Blender

把 Background（背景）的 Color 和 Sky Texture（天空纹理）的 Color 连起来。

![page_92_img_1.png](images/page_92_img_1.png)

可以看到，现在你的背景有了天空纹理。

![page_92_img_2.png](images/page_92_img_2.png)

如果你想要，可以从 Nishita 切换到 Hosek/Wilkie，会有点不同类型的天空效果。

Beginners guide to Blender

![page_93_img_1.png](images/page_93_img_1.png)

去 *`Add → Converter → Color`* Ramp，把它加在天空纹理和背景之间。

![page_93_img_2.png](images/page_93_img_2.png)

把 Background 的 Strength 改成 3 或类似的数值，如果你想让世界更亮一点。

![page_93_img_3.png](images/page_93_img_3.png)

选择 Color Ramp 的第一个颜色选择器，改成深蓝色（或者你喜欢的其他颜色）。

Beginners guide to Blender

![page_94_img_1.png](images/page_94_img_1.png)

然后稍微往右移一点。

![page_94_img_2.png](images/page_94_img_2.png)

从世界切换回物体。

![page_94_img_3.png](images/page_94_img_3.png)

去材质面板，添加新材质。

Beginners guide to Blender

![page_95_img_1.png](images/page_95_img_1.png)

把 Sphere.001 重命名为 Bottle（瓶子，或者你喜欢的名字）。

把材质重命名为 Glass（玻璃，或者其他名字）。

![page_95_img_2.png](images/page_95_img_2.png)

点击 Transmission，把 Weight 设成 1。

Beginners guide to Blender

![page_96_img_1.png](images/page_96_img_1.png)

把 Roughness 设成 0。

![page_96_img_2.png](images/page_96_img_2.png)

从视口和渲染中取消隐藏第一个球体。

![page_96_img_3.png](images/page_96_img_3.png)

选中这个球体，按 "S" 缩放一点点，让它比瓶子小一些。

Beginners guide to Blender

![page_97_img_1.png](images/page_97_img_1.png)

把它重命名为 Potion（药水，或者你喜欢的名字）。

添加新材质，重命名为 Liquid（液体，或者其他名字）。

![page_97_img_2.png](images/page_97_img_2.png)

点击 Transmission，把 Weight 设成 1。

Beginners guide to Blender

![page_98_img_1.png](images/page_98_img_1.png)

点击 Emission，把颜色改成绿色（或者其他颜色）。

![page_98_img_2.png](images/page_98_img_2.png)

因为你还没给 Emission 加强度，所以看不到绿色。把强度从 0 改成你想要的数字。我改成了 0.7。

![page_98_img_3.png](images/page_98_img_3.png)

Beginners guide to Blender

切换到世界材质。

![page_99_img_1.png](images/page_99_img_1.png)

选中 Background 节点，用 "SHIFT+D" 复制它。

![page_99_img_2.png](images/page_99_img_2.png)

*`Add → Shader → Mix`* Shader，把它放在 Background 和 Material Output 节点之间。

Beginners guide to Blender

![page_100_img_1.png](images/page_100_img_1.png)

把第二个 Background 节点的 Background 和 Mix Shader 的 Shader 连起来。

![page_100_img_2.png](images/page_100_img_2.png)

把 Mix Shader 的 Fac 和 Light Path Shader 的 Is Camera Ray 连起来，这样你可以把天空换成平面颜色而不影响光照。

![page_100_img_3.png](images/page_100_img_3.png)

把 Background 的颜色改成黑色（或者你喜欢的颜色）。

Beginners guide to Blender

![page_101_img_1.png](images/page_101_img_1.png)

把 Roughness 设成 0，让药水看起来更好。

![page_101_img_2.png](images/page_101_img_2.png)

*`Add → Camera`*（添加相机）。

![page_101_img_3.png](images/page_101_img_3.png)

按 "ALT+R" 让相机恢复默认方向。

Beginners guide to Blender

![page_102_img_1.png](images/page_102_img_1.png)

用 "`G+Y`" 把它往左移一点。

![page_102_img_2.png](images/page_102_img_2.png)

Beginners guide to Blender

用 "`R+X`+90" 沿 X 轴旋转 90 度。

![page_103_img_1.png](images/page_103_img_1.png)

选中相机，把分辨率改成 1024x1024（如果你想的话）。

![page_103_img_2.png](images/page_103_img_2.png)

点击右边的相机图标

![page_103_img_3.png](images/page_103_img_3.png)

然后点击这个锁图标，这样你就能调整相机位置了。

Beginners guide to Blender

![page_104_img_1.png](images/page_104_img_1.png)

点击这个手图标可以上下左右移动。

![page_104_img_2.png](images/page_104_img_2.png)

滚动鼠标滚轮可以调整距离。调整完后再点击锁图标，这样就不会不小心移动相机位置了。

![page_104_img_3.png](images/page_104_img_3.png)

Beginners guide to Blender

选中瓶子，用 "R" 旋转一下（朝你想要的方向）。

![page_105_img_1.png](images/page_105_img_1.png)

把时间轴往上移。

![page_105_img_2.png](images/page_105_img_2.png)

按 "K"，在第一帧插入旋转关键帧。

Beginners guide to Blender

![page_106_img_1.png](images/page_106_img_1.png)

把播放头从第一帧移到第 150 帧（你也可以移到其他帧，这只是举个例子）

![page_106_img_2.png](images/page_106_img_2.png)

用 "`R+Z`+360" 让瓶子沿 Z 轴旋转 360 度，然后按 K 插入旋转关键帧。

![page_106_img_3.png](images/page_106_img_3.png)

Beginners guide to Blender

把结束帧从 250 改成 150。

![page_107_img_1.png](images/page_107_img_1.png)

![page_107_img_2.png](images/page_107_img_2.png)

点击这里切换到第一帧，按空格键开始播放动画。

![page_107_img_3.png](images/page_107_img_3.png)

![page_107_img_4.png](images/page_107_img_4.png)

Beginners guide to Blender

如果你想让动画看起来更自然，按 A 全选，右键点击，选择 Interpolation *`mode → Linear`*（插值模式 → 线性）。

![page_108_img_1.png](images/page_108_img_1.png)

现在你的动画会这样显示。

![page_108_img_2.png](images/page_108_img_2.png)

如果你想改变背景颜色，就在这里改这个颜色。

Beginners guide to Blender

![page_109_img_1.png](images/page_109_img_1.png)

要改变光照颜色，就改 Color Ramp 里第一个颜色选择器的颜色。

![page_109_img_2.png](images/page_109_img_2.png)

要改变第二个天空颜色的渐变，就改 Color Ramp 里第二个颜色选择器。这样你就能在玻璃上得到多颜色的高光效果。
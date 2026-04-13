# 第27章：为可爱的3D蘑菇角色制作骨骼绑定

Beginners guide to Blender

(Blender版本 4.2.0)

骨骼绑定

大家好！非常感谢大家在Patreon上支持我！这对我很重要！

希望大家会喜欢这个教程。这是第三部分，我会教大家如何为这个可爱的蘑菇角色制作骨骼绑定。如果你想学习建模和纹理贴图，可以看看我的PatreonSaTales，只要订阅第一档（价格不到一杯咖啡），就能获得这个教程和更多内容。

如果你想看视频教程，可以查看我的YouTube频道：https://youtu.be/SeiSyuQzcW8?si=xjhgTyKQRYijhyDa

现在，让我们开始学习骨骼绑定吧！

切换到实体模式

![page_215_img_1.png](images/page_215_img_1.png)

切换到前视图正交视角，可以点击坐标轴上那个绿色的-Y按钮，或者按"CTRL+ Numpad 1"

![page_215_img_2.png](images/page_215_img_2.png)

进入 *`Add → Armature`* （单骨骼 - 如果你用的是旧版本的Blender，新版本直接点击Armature就行）

Beginners guide to Blender

![page_216_img_1.png](images/page_216_img_1.png)

选中骨骼，按"TAB"进入编辑模式

![page_216_img_2.png](images/page_216_img_2.png)

按"A"全选，然后用"S"缩放，大约缩放到0.22

![page_216_img_3.png](images/page_216_img_3.png)

按"SHIFT+TAB"关闭吸附，然后进入物体数据属性面板

Beginners guide to Blender

![page_217_img_1.png](images/page_217_img_1.png)

找到Viewport display，开启In Front，这样你就能在角色前面看到骨骼了

![page_217_img_2.png](images/page_217_img_2.png)

按"`G+Z`"把骨骼往下移动，大约-0.28

![page_217_img_3.png](images/page_217_img_3.png)

只选中骨骼的顶部这部分

Beginners guide to Blender

![page_218_img_1.png](images/page_218_img_1.png)

按"`G+Z`"移动，大约-0.14

![page_218_img_2.png](images/page_218_img_2.png)

按"A"全选

按"`G+Z`"移动，大约-0.004

![page_218_img_3.png](images/page_218_img_3.png)

按"`E+Z`"挤出，大约0.07

Beginners guide to Blender

![page_219_img_1.png](images/page_219_img_1.png)

只选中骨骼的顶部

![page_219_img_2.png](images/page_219_img_2.png)

按"`E+Z`"挤出，大约0.1

![page_219_img_3.png](images/page_219_img_3.png)

只选中骨骼的顶部，按"`E+Z`"挤出，大约0.15

Beginners guide to Blender

![page_220_img_1.png](images/page_220_img_1.png)

选中这个骨骼

![page_220_img_2.png](images/page_220_img_2.png)

按"SHIFT+D"复制

![page_220_img_3.png](images/page_220_img_3.png)

然后按"G"移动，像这样

Beginners guide to Blender

![page_221_img_1.png](images/page_221_img_1.png)

旋转大约108度

![page_221_img_2.png](images/page_221_img_2.png)

然后按"G"移动

![page_221_img_3.png](images/page_221_img_3.png)

选中骨骼的这部分

Beginners guide to Blender

![page_222_img_1.png](images/page_222_img_1.png)

按"G"移动

![page_222_img_2.png](images/page_222_img_2.png)

按"E"挤出两次

![page_222_img_3.png](images/page_222_img_3.png)

Beginners guide to Blender

![page_223_img_1.png](images/page_223_img_1.png)

把Median Point改成3D cursor，这样所有的变换都会以世界原点为中心

![page_223_img_2.png](images/page_223_img_2.png)

如果你把3D cursor放在了别的地方，可以按"SHIFT+S"选择Cursor to World Origin来重置它的位置

![page_223_img_3.png](images/page_223_img_3.png)

Beginners guide to Blender

选中这些骨骼

![page_224_img_1.png](images/page_224_img_1.png)

因为我们把3D cursor放在了世界原点，而且角色和骨骼都在X轴的中心，所以我们可以通过"SHIFT+D"复制然后用"`S+X`" -1来镜像骨骼

![page_224_img_2.png](images/page_224_img_2.png)

把3D Cursor改回Median Point

![page_224_img_3.png](images/page_224_img_3.png)

Beginners guide to Blender

选中这个骨骼

![page_225_img_1.png](images/page_225_img_1.png)

按"SHIFT+D"复制，然后按"G"移动

![page_225_img_2.png](images/page_225_img_2.png)

旋转大约178度

![page_225_img_3.png](images/page_225_img_3.png)

Beginners guide to Blender

按"G"移动

![page_226_img_1.png](images/page_226_img_1.png)

选中这部分

![page_226_img_2.png](images/page_226_img_2.png)

然后按"G"移动

![page_226_img_3.png](images/page_226_img_3.png)

Beginners guide to Blender

按"`E+Z`"挤出，让末端稍微超过腿部

![page_227_img_1.png](images/page_227_img_1.png)

选中两个骨骼

![page_227_img_2.png](images/page_227_img_2.png)

把Median point改成3D Cursor

![page_227_img_3.png](images/page_227_img_3.png)

Beginners guide to Blender

按"SHIFT+D"复制，然后用"`S+X`" -1缩放镜像

![page_228_img_1.png](images/page_228_img_1.png)

选中这两个骨骼

![page_228_img_2.png](images/page_228_img_2.png)

还有中间这个

![page_228_img_3.png](images/page_228_img_3.png)

Beginners guide to Blender

按"CTRL+P"选择Keep Offset。这样我们就可以把腿部骨骼设置为根骨骼（盆骨）的子骨骼，这样当我们移动根骨骼的时候，腿部骨骼也会跟着移动。否则如果我们移动角色，腿部就会留在原地不动，而身体其他部分却在移动。

![page_229_img_1.png](images/page_229_img_1.png)

现在，这些骨骼已经连接好了

![page_229_img_2.png](images/page_229_img_2.png)

按"TAB"切换到物体模式，在大纲视图中先选中Mushroom，然后按住"CTRL"选中Armature

![page_229_img_3.png](images/page_229_img_3.png)

Beginners guide to Blender

按"ALT+P"选择with Automatic Weights。选择这个选项，Blender会自动设置骨骼对网格不同部分的影响力。虽然不太完美，但对于简单角色来说效果不错，也能节省一些时间。

![page_230_img_1.png](images/page_230_img_1.png)

从物体模式切换到姿态模式。在姿态模式下，你可以移动、缩放和旋转骨骼，看看它如何影响角色的网格。

![page_230_img_2.png](images/page_230_img_2.png)

把3D Cursor改回Median Point

![page_230_img_3.png](images/page_230_img_3.png)

选中这个骨骼

Beginners guide to Blender

![page_231_img_1.png](images/page_231_img_1.png)

按"R"旋转，看看移动这个骨骼时有没有影响到什么

![page_231_img_2.png](images/page_231_img_2.png)

选中这个骨骼

![page_231_img_3.png](images/page_231_img_3.png)

按"R"旋转。如你所见，当你移动骨骼时眼睛也在动，这是不应该发生的。

Beginners guide to Blender

![page_232_img_1.png](images/page_232_img_1.png)

选中这个骨骼检查一下

![page_232_img_2.png](images/page_232_img_2.png)

还有这个

![page_232_img_3.png](images/page_232_img_3.png)

还有这个

Beginners guide to Blender

![page_233_img_1.png](images/page_233_img_1.png)

还有这个

![page_233_img_2.png](images/page_233_img_2.png)

Beginners guide to Blender

还有这个

![page_234_img_1.png](images/page_234_img_1.png)

如你所见，第一个问题是这些骨骼影响了眼睛，所以我们先解决这个问题。

![page_234_img_2.png](images/page_234_img_2.png)

切换到物体模式，选中角色，然后按住SHIFT选中骨骼。

![page_234_img_3.png](images/page_234_img_3.png)

切换到编辑模式

Beginners guide to Blender

![page_235_img_1.png](images/page_235_img_1.png)

按"L"选择关联，选中两个眼睛

![page_235_img_2.png](images/page_235_img_2.png)

按"CTRL+I"反选

![page_235_img_3.png](images/page_235_img_3.png)

然后按"H"隐藏

![page_235_img_4.png](images/page_235_img_4.png)

从编辑模式切换到权重绘制模式。在权重绘制模式下，你可以手动调整每个骨骼的权重（影响力）。

Beginners guide to Blender

![page_236_img_1.png](images/page_236_img_1.png)

按"ALT" + 左键选中这个骨骼。你可以看到当你点击这个骨骼时，眼睛是蓝色的。这意味着这个骨骼对眼睛没有任何影响力。

你的骨骼可能会显示得不一样。这取决于你骨骼的位置和大小以及自动权重的设置。

![page_236_img_2.png](images/page_236_img_2.png)

点击每个骨骼，找出哪个骨骼让一只或两只眼睛显示红色。你也可以通过按"R"旋转骨骼来检查影响力。

Beginners guide to Blender

例如，这个骨骼让眼睛显示红色

![page_237_img_1.png](images/page_237_img_1.png)

当你旋转它时，眼睛在移动。这显然是不对的，因为手臂骨骼不应该影响眼睛。

![page_237_img_2.png](images/page_237_img_2.png)

那么怎么修复呢？

Beginners guide to Blender

把权重设为零。这意味着当你绘制眼睛时，你会把它涂成蓝色，表示零影响力，骨骼就不会影响这部分网格了。

![page_238_img_1.png](images/page_238_img_1.png)

像这样从各个角度绘制

![page_238_img_2.png](images/page_238_img_2.png)

如果你某些地方没涂好，当你旋转骨骼时眼睛还是会动。

像这样

![page_238_img_3.png](images/page_238_img_3.png)

继续绘制直到眼睛不再移动。现在好了。

Beginners guide to Blender

![page_239_img_1.png](images/page_239_img_1.png)

选中这个骨骼，如你所见眼睛是红色的，所以像之前一样，把它涂成蓝色，直到旋转骨骼时眼睛不再移动。

![page_239_img_2.png](images/page_239_img_2.png)

选中这个骨骼试着旋转它。眼睛没有动，但它们应该动。

这是头部骨骼，所以检查一下，如果它不影响眼睛，那你需要在选中这个骨骼时把它们涂成红色。

![page_239_img_3.png](images/page_239_img_3.png)

如果你想增加骨骼的影响力，把权重改成1。

Beginners guide to Blender

![page_240_img_1.png](images/page_240_img_1.png)

然后把两只眼睛涂成红色。现在它们会动了，就对了。

![page_240_img_2.png](images/page_240_img_2.png)

现在切换回编辑模式

![page_240_img_3.png](images/page_240_img_3.png)

按"ALT+H"取消隐藏所有内容

Beginners guide to Blender

![page_241_img_1.png](images/page_241_img_1.png)

按"TAB"切换到物体模式，切换到渲染模式。

![page_241_img_2.png](images/page_241_img_2.png)

选中骨骼，切换到姿态模式。

Beginners guide to Blender

![page_242_img_1.png](images/page_242_img_1.png)

选中每个骨骼，按"R"旋转，看看是否正常工作。

![page_242_img_2.png](images/page_242_img_2.png)

Beginners guide to Blender

![page_243_img_1.png](images/page_243_img_1.png)

如果正常工作就完成了，如果不行，你可以再回到权重绘制模式进行修正。

现在你知道如何为角色制作骨骼绑定了！

如果你想学习建模和纹理贴图并获取.blend文件，可以订阅我的Patreon第一档，价格不到一杯咖啡，就能获得独家教程、模型等内容。

今天就到这里！

如果你喜欢和我一起学习，别忘了订阅我的频道。

我最近开始了Patreon，提供更多独家内容，比如教程、3D模型、.blend文件、幕后视频等。我也经常分享免费的3D模型、制作测验等。

有适合免费会员和付费会员的内容，所以别忘了去看看。

如果你有任何问题，可以在评论区留言 :D

祝大家Blender玩得开心！拜拜，下次见。

第28章 - 建模和纹理贴图一个可爱的3D卡通粮袋
# 第22章：给干草捆添加纹理

现在来给干草捆添加纹理。

首先，如果还没，把第二个物体重命名为 Hay_bale_plastic（或类似的）。

![page_262_img_1.png](images/page_262_img_1.png)

如果你看不到塑料，像我的情况

![page_262_img_2.png](images/page_262_img_2.png)

用"S"放大一点。

![page_262_img_3.png](images/page_262_img_3.png)

选择 Hay_bale，去材质属性。

![page_263_img_1.png](images/page_263_img_1.png)

把材质重命名为 Hay_bale。

![page_263_img_2.png](images/page_263_img_2.png)

选择 Hay_bale_plastic，去材质属性。

![page_264_img_1.png](images/page_264_img_1.png)

因为你在开始时复制并分离了物体，它们共享相同的材质。这个"2"显示这个数据的用户数量，或者简单说，它显示有相同材质的物体数量。

你不想 Hay_bale 物体和 Hay_bale_plastic 有相同材质，所以你需要分离它们。

有两种方式做到。

第一种方式是点击数字"2"。这样，你创建了一个新的分离材质。现在只需要重命名为其他名称，

![page_264_img_2.png](images/page_264_img_2.png)

就完成了。

![page_265_img_1.png](images/page_265_img_1.png)

第二种方式是直接点击 minus，删除 Hay_bale_plastic 上的材质

![page_265_img_2.png](images/page_265_img_2.png)

点击"+"添加新材质，重命名为 Hay_bale_plastic。你可以看到数字二消失了，因为这个材质只在一个物体上。

![page_266_img_1.png](images/page_266_img_1.png)

两种都是正确的方式，所以取决于你想用哪种。

把 Hay_bale_plastic 材质的 Base Color 改成黑色（或你想要的任何颜色）。

![page_266_img_2.png](images/page_266_img_2.png)

把 Roughness 改成大约 0.3

![page_266_img_3.png](images/page_266_img_3.png)

选择 Hay_bale。

把光标放在屏幕上方如图所示，当看到加号，

![page_267_img_1.png](images/page_267_img_1.png)

按住左键往左下方拖动。

![page_267_img_2.png](images/page_267_img_2.png)

在你刚创建的窗口打开着色编辑器。

按"N"隐藏右边侧栏，因为你不需要它。

![page_267_img_3.png](images/page_267_img_3.png)

把 Principled BSDF 的 Base Color 连接到 Color Ramp 的 Color。

我添加了 Color Ramp，因为我想有超过一种颜色的变化，用 Color Ramp 做最好。

![page_268_img_1.png](images/page_268_img_1.png)

把 Color Ramp 的第一个颜色改成浅棕色和黄色的组合。

![page_268_img_2.png](images/page_268_img_2.png)

把 Color Ramp 的第二个颜色改成浅黄色。

![page_268_img_3.png](images/page_268_img_3.png)

把 Color Ramp 的 Fac 连接到 Noise Texture 的 Fac。

![page_269_img_1.png](images/page_269_img_1.png)

把 Noise Texture 的 Vector 连接到 Mapping 的 Vector。

![page_269_img_2.png](images/page_269_img_2.png)

把 Mapping 的 Vector 连接到 Texture Coordinate 的 Object。

![page_269_img_3.png](images/page_269_img_3.png)

把 Noise Texture 的 Scale 改成大约 13.300。

![page_270_img_1.png](images/page_270_img_1.png)

如果你满意 Hay Bale 的颜色和外观，选择相机，调整它。

![page_270_img_2.png](images/page_270_img_2.png)

当你满意后，关闭 Camera to View，这样可以自由移动而不丢失完美的渲染角度。

把光标放在编辑边界附近，当看到双面箭头时右键。

这次，选择 Join Areas，按左键确认合并。

![page_271_img_1.png](images/page_271_img_1.png)

把渲染 Samples 改成 512，因为这种情况不需要 4096采样。

![page_271_img_2.png](images/page_271_img_2.png)

现在可以渲染了。

![page_272_img_1.png](images/page_272_img_1.png)

恭喜！你学会了如何在 Blender 中建模和给干草捆添加纹理！

我希望你喜欢新章节！

上周我没时间写新章节，所以这周我补了两章。我还有一个激动人心的公告！

我为所有 Blender 用户创建了 Discord 频道，我会在那里很活跃，分享更多关于即将到来的项目、教程、指南章节等内容。

在频道里，你可以分享当前项目，推广你的教程和社交媒体，建议指南改进等等！

希望很快在那里见到你！

我很期待和你连接，看你的 Blender 进步，回答任何问题，甚至从你那里学到新东西。

祝大家 Blender 开心！

拜拜，下次见！

https://discord.gg/DrVsr8khtp
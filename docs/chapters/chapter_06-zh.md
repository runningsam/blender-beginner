# 第6章：3D游标有什么用？

原点

今天你会学到什么是 3D游标以及如何使用它。

为了更好地理解 3D游标，我先解释一下 Blender 中什么是原点。

这个小橙点在 Blender 中叫作原点。

它位于物体几何的中心位置。

![page_41_img_1.png](images/page_41_img_1.png)

你可以围绕原点做所有变换（移动、旋转、缩放），但也可以改变原点的位置。

如果你想改变原点，去 Object —> Set Origin —> 选择下面的一个选项。

![page_41_img_2.png](images/page_41_img_2.png)

Geometry to Origin - 把物体几何移动到物体原点。

Origin to Geometry - 根据当前的枢轴点计算几何中心（中位数，否则是边界框）。

Origin to 3D Cursor - 把物体原点移到 3D游标的位置。

Origin to Center of Mass (Surface) - 根据表面面积计算重心。

Origin to Center of Mass (Volume) - 根据体积计算重心（必须是法线一致的封闭几何）。

如果现在还不明白，别担心。后面我会举例解释所有内容。

现在只要知道有哪些选项就行了。

3D游标

这是 3D游标，空间中的一个点，既有位置也有旋转方向。

左边的箭头指向激活它的地方。

右边的箭头指向它当前的位置。

![page_42_img_1.png](images/page_42_img_1.png)

当你激活 3D游标后，可以通过点击 LMB 在场景中移动它。

![page_43_img_1.png](images/page_43_img_1.png)

当 3D游标没有激活时，你仍然可以通过按住"SHIFT"同时点击 RMB 在场景中移动它。

如果你想知道为什么要移动 3D游标，这里举个例子。

我们有一个场景，里面有个默认立方体。如果我们想在另一个位置添加另一个立方体（或其他物体），只要把 3D游标移到那个位置就行。

但怎么添加新物体呢？

我想终于该学这个了 —— 不过我们在下一章再讲。
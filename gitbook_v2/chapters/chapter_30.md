# Chapter 30a: How to import 3D models from CGTrader to Blender


![page_310_img_1.png](../images/page_310_img_1.png)

Beginners guide to Blender
Now you can easily animate it by just changing the value.
That’s all for today!
If you had fun learning with me, don’t forget to subscribe to my YouTube channel SaTales..
I recently started a Patreon with more exclusive content like tutorials, 3D models, .blend files,
behind-the-scenes videos, etc. I am also often sharing free 3D models, making quizzes, etc.
You can find .blend file with animation on my Patreon 1st tier.
There is something for both free and paid members, so don’t forget to check it out.
And if you have any questions, write them down in the comments :D
Happy Blending everyone! Byeee, see you next time.
Chapter 30 - How to import 3D models with
textures from CGTrader to Blender (with
310

![page_311_img_1.png](../images/page_311_img_1.png)

![page_311_img_2.png](../images/page_311_img_2.png)

Beginners guide to Blender
ambient occlusion included) | Step-by-step
guide
Hello everyone, my name is SaTales, and today we will learn how to import 3D models with
textures like metallic, ambient occlusion, roughness, and displacement from CGTrader to
Blender.
YouTube link(https://youtu.be/vGDYKE4XQ70)
First, go to CGTrader (or any other site with 3D models) and find a free (or paid) 3D model
that you want to download.
I chose this chair.
Click on 'Free download,' and you will be redirected to a new page where you will need to
wait approximately 18 seconds.
311

![page_312_img_1.png](../images/page_312_img_1.png)

![page_312_img_2.png](../images/page_312_img_2.png)

![page_312_img_3.png](../images/page_312_img_3.png)

Beginners guide to Blender
After the time is up, your files will be available in various formats. I decided to download an
.fbx file for this example.
When you open the folder, you will encounter this: 6 different textures and a 3D model in FBX
format.
Now you can open Blender.
Select everything with “A” and delete with “X”.
Select the .fbx file and drag and drop it into Blender (drag and drop only works in Blender
version 4.1 and later)
Press Import FBX
312

![page_313_img_1.png](../images/page_313_img_1.png)

![page_313_img_2.png](../images/page_313_img_2.png)

![page_313_img_3.png](../images/page_313_img_3.png)

Beginners guide to Blender
and your chair will be imported.
Switch to Material Preview mode so that you can add textures and see how they look.
Place the cursor on the upper side of the screen as shown, and when you see a plus,
313

![page_314_img_1.png](../images/page_314_img_1.png)

![page_314_img_2.png](../images/page_314_img_2.png)

![page_314_img_3.png](../images/page_314_img_3.png)

Beginners guide to Blender
Just pull it down to the left while holding the left mouse button.
Go to Shader Editor
314

![page_315_img_1.png](../images/page_315_img_1.png)

![page_315_img_2.png](../images/page_315_img_2.png)

Beginners guide to Blender
Press “N” to move that sidebar “Node” from the right
Now, drag and drop the file texture_diff.png. Diff means diffuse, and it is always texture for a base
color. Of course, it can be named differently, depending on the person who uploaded the file.
315

![page_316_img_1.png](../images/page_316_img_1.png)

![page_316_img_2.png](../images/page_316_img_2.png)

Beginners guide to Blender
After you connect color from added texture with Base color from the Principled BSDF, the chair
color will appear.
The next file we will add will be texture_metal.png. As you can assume, it is a texture for the
metallic part of your chair.
316

![page_317_img_1.png](../images/page_317_img_1.png)

![page_317_img_2.png](../images/page_317_img_2.png)

Beginners guide to Blender
Connect the color from the metal texture with Metallic from Principled BSDF. As you can see, now
we have a metallic-looking part, but if you look closer, something is not right. Metallic shouldn’t
look like that.
When you have texture for metallic, never forget to change Color Space from sRGB to Non-Color.
317

![page_318_img_1.png](../images/page_318_img_1.png)

![page_318_img_2.png](../images/page_318_img_2.png)

Beginners guide to Blender
Now it looks as it should.
The next texture that we will add is the texture for roughness.
318

![page_319_img_1.png](../images/page_319_img_1.png)

![page_319_img_2.png](../images/page_319_img_2.png)

![page_319_img_3.png](../images/page_319_img_3.png)

Beginners guide to Blender
Connect color from roughness texture with Roughness from Principled BSDF.
Change Color Space to Non-Color, and you will see that your model now has varying amounts of
glossiness.
In this case, the Normal Map node is already here, but if you need to add it. This is how you do it.
319

![page_320_img_1.png](../images/page_320_img_1.png)

![page_320_img_2.png](../images/page_320_img_2.png)

![page_320_img_3.png](../images/page_320_img_3.png)

Beginners guide to Blender
Go to Add → Vector → Normal Map
And connect Normal from Normal Map with Normal from Principled BSDF
Now, drag and drop the texture for normals
320

![page_321_img_1.png](../images/page_321_img_1.png)

![page_321_img_2.png](../images/page_321_img_2.png)

![page_321_img_3.png](../images/page_321_img_3.png)

Beginners guide to Blender
And connect color from that texture with Color from Normal Map. As you can already see, seams looks
weird, so just change Color Space from sRGB to Non-Color and it will be fixed.
Now drag and drop texture for height (or as sometimes is called bump). That texture can be used for
displacement.
321

![page_322_img_1.png](../images/page_322_img_1.png)

![page_322_img_2.png](../images/page_322_img_2.png)

![page_322_img_3.png](../images/page_322_img_3.png)

Beginners guide to Blender
Connect Color from that texture with Height from Displacement.
Connect Displacement from Displacement with Displacement from Material Output.
322

![page_323_img_1.png](../images/page_323_img_1.png)

![page_323_img_2.png](../images/page_323_img_2.png)

![page_323_img_3.png](../images/page_323_img_3.png)

Beginners guide to Blender
And change to Non-Color.
Now, drag and drop the last texture, the texture for AO or ambient occlusion.
Go to Add → Color → Mix Color
323

![page_324_img_1.png](../images/page_324_img_1.png)

![page_324_img_2.png](../images/page_324_img_2.png)

![page_324_img_3.png](../images/page_324_img_3.png)

Beginners guide to Blender
and put it between texture diffuse and Base Color from Principled BSDF.
Connect color from AO with B from Mix Color
324

![page_325_img_1.png](../images/page_325_img_1.png)

![page_325_img_2.png](../images/page_325_img_2.png)

![page_325_img_3.png](../images/page_325_img_3.png)

Beginners guide to Blender
Change it to Non-Color.
And change Mix to Multiply
325

![page_326_img_1.png](../images/page_326_img_1.png)

Beginners guide to Blender
Now, as you change Factor from 0 to 1, you change ambient occlusion as well.
That’s all for today!
If you had fun learning with me, don’t forget to subscribe to my YouTube channel SaTales.
Also there is a first part of this video: How to import 3D models with textures from SketchFab
to Blender | Step-by-step guidehttps://youtu.be/P_Gxefjggu0?si=Ax6tgtPDcaqGeHzy
I recently started a Patreon with more exclusive content like tutorials, 3D models, .blend files,
behind-the-scenes videos, etc. I am also often sharing free 3D models, making quizzes, etc.
There is something for both free and paid members, so don’t forget to check it out.
And if you have any questions, write them down in the comments :D
Happy Blending everyone! Byeee, see you next time.
326

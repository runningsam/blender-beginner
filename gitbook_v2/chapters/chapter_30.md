# Chapter 30a: How to import 3D models from CGTrader to Blender

​Beginners guide to Blender​

![page_310_img_1.png](../images/page_310_img_1.png)

​Now you can easily animate it by just changing the value.​
​That’s all for today!​
​If you had fun learning with me, don’t forget to subscribe to my YouTube channel SaTales..​
​I recently started a Patreon with more exclusive content like tutorials, 3D models, .blend files,​​behind-the-scenes videos, etc. I am also often sharing free 3D models, making quizzes, etc.​​You can find .blend file with animation on my Patreon 1st tier.​
​There is something for both free and paid members, so don’t forget to check it out.​
​And if you have any questions, write them down in the comments :D​
​Happy Blending everyone! Byeee, see you next time.​
​Chapter 30 - How to import 3D models with​​textures from CGTrader to Blender (with​
​310​
​Beginners guide to Blender​
​ambient occlusion included) | Step-by-step​​guide​
​Hello everyone, my name is SaTales, and today we will learn how to import 3D models with​​textures like metallic, ambient occlusion, roughness, and displacement from CGTrader to​​Blender.​
​YouTube link​​(https://youtu.be/vGDYKE4XQ70)​
​First, go to CGTrader (or any other site with 3D models) and find a free (or paid) 3D model​​that you want to download.​
​I chose this chair.​

![page_311_img_1.png](../images/page_311_img_1.png)

​Click on 'Free download,' and you will be redirected to a new page where you will need to​​wait approximately 18 seconds.​

![page_311_img_2.png](../images/page_311_img_2.png)

​311​
​Beginners guide to Blender​
​After the time is up, your files will be available in various formats. I decided to download an​​.fbx file for this example.​

![page_312_img_1.png](../images/page_312_img_1.png)

​When you open the folder, you will encounter this: 6 different textures and a 3D model in FBX​​format.​

![page_312_img_2.png](../images/page_312_img_2.png)

​Now you can open Blender.​
​Select everything with “A” and delete with “X”.​

![page_312_img_3.png](../images/page_312_img_3.png)

​Select the .fbx file and drag and drop it into Blender (drag and drop only works in Blender​​version 4.1 and later)​
​Press Import FBX​
​312​
​Beginners guide to Blender​

![page_313_img_1.png](../images/page_313_img_1.png)

​and your chair will be imported.​

![page_313_img_2.png](../images/page_313_img_2.png)

​Switch to Material Preview mode so that you can add textures and see how they look.​

![page_313_img_3.png](../images/page_313_img_3.png)

​Place the cursor on the upper side of the screen as shown, and when you see a plus,​
​313​
​Beginners guide to Blender​

![page_314_img_1.png](../images/page_314_img_1.png)

​Just pull it down to the left while holding the left mouse button.​

![page_314_img_2.png](../images/page_314_img_2.png)

​Go to Shader Editor​

![page_314_img_3.png](../images/page_314_img_3.png)

​314​
​Beginners guide to Blender​

![page_315_img_1.png](../images/page_315_img_1.png)

​Press “N” to move that sidebar “Node” from the right​

![page_315_img_2.png](../images/page_315_img_2.png)

​Now, drag and drop the file texture_diff.png. Diff means diffuse, and it is always texture for a base​​color. Of course, it can be named differently, depending on the person who uploaded the file.​
​315​
​Beginners guide to Blender​

![page_316_img_1.png](../images/page_316_img_1.png)

​After you connect color from added texture with Base color from the Principled BSDF, the chair​​color will appear.​

![page_316_img_2.png](../images/page_316_img_2.png)

​The next file we will add will be texture_metal.png. As you can assume, it is a texture for the​​metallic part of your chair.​
​316​
​Beginners guide to Blender​

![page_317_img_1.png](../images/page_317_img_1.png)

​Connect the color from the metal texture with Metallic from Principled BSDF. As you can see, now​​we have a metallic-looking part, but if you look closer, something is not right. Metallic shouldn’t​​look like that.​

![page_317_img_2.png](../images/page_317_img_2.png)

​When you have texture for metallic, never forget to change Color Space from sRGB to Non-Color.​
​317​
​Beginners guide to Blender​

![page_318_img_1.png](../images/page_318_img_1.png)

​Now it looks as it should.​

![page_318_img_2.png](../images/page_318_img_2.png)

​The next texture that we will add is the texture for roughness.​
​318​
​Beginners guide to Blender​

![page_319_img_1.png](../images/page_319_img_1.png)

​Connect color from roughness texture with Roughness from Principled BSDF.​

![page_319_img_2.png](../images/page_319_img_2.png)

​Change Color Space to Non-Color, and you will see that your model now has varying amounts of​​glossiness.​

![page_319_img_3.png](../images/page_319_img_3.png)

​In this case, the Normal Map node is already here, but if you need to add it. This is how you do it.​
​319​
​Beginners guide to Blender​

![page_320_img_1.png](../images/page_320_img_1.png)

​Go to Add → Vector → Normal Map​

![page_320_img_2.png](../images/page_320_img_2.png)

​And connect Normal from Normal Map with Normal from Principled BSDF​

![page_320_img_3.png](../images/page_320_img_3.png)

​Now, drag and drop the texture for normals​
​320​
​Beginners guide to Blender​

![page_321_img_1.png](../images/page_321_img_1.png)

​And connect color from that texture with Color from Normal Map. As you can already see, seams looks​​weird, so just change Color Space from sRGB to Non-Color and it will be fixed.​

![page_321_img_2.png](../images/page_321_img_2.png)

![page_321_img_3.png](../images/page_321_img_3.png)

​Now drag and drop texture for height (or as sometimes is called bump). That texture can be used for​​displacement.​
​321​
​Beginners guide to Blender​

![page_322_img_1.png](../images/page_322_img_1.png)

​Connect Color from that texture with Height from Displacement.​

![page_322_img_2.png](../images/page_322_img_2.png)

![page_322_img_3.png](../images/page_322_img_3.png)

​Connect Displacement from Displacement with Displacement from Material Output.​
​322​
​Beginners guide to Blender​

![page_323_img_1.png](../images/page_323_img_1.png)

​And change to Non-Color.​

![page_323_img_2.png](../images/page_323_img_2.png)

​Now, drag and drop the last texture, the texture for AO or ambient occlusion.​

![page_323_img_3.png](../images/page_323_img_3.png)

​Go to Add → Color → Mix Color​
​323​
​Beginners guide to Blender​

![page_324_img_1.png](../images/page_324_img_1.png)

​and put it between texture diffuse and Base Color from Principled BSDF.​

![page_324_img_2.png](../images/page_324_img_2.png)

​Connect color from AO with B from Mix Color​

![page_324_img_3.png](../images/page_324_img_3.png)

​324​
​Beginners guide to Blender​
​Change it to Non-Color.​

![page_325_img_1.png](../images/page_325_img_1.png)

​And change Mix to Multiply​

![page_325_img_2.png](../images/page_325_img_2.png)

![page_325_img_3.png](../images/page_325_img_3.png)

​325​
​Beginners guide to Blender​
​Now, as you change Factor from 0 to 1, you change ambient occlusion as well.​

![page_326_img_1.png](../images/page_326_img_1.png)

​That’s all for today!​
​If you had fun learning with me, don’t forget to subscribe to my YouTube channel SaTales.​​Also there is a first part of this video: How to import 3D models with textures from SketchFab​​to Blender | Step-by-step guide​​https://youtu.be/P_Gxefjggu0?si=Ax6tgtPDcaqGeHzy​
​I recently started a Patreon with more exclusive content like tutorials, 3D models, .blend files,​​behind-the-scenes videos, etc. I am also often sharing free 3D models, making quizzes, etc.​
​There is something for both free and paid members, so don’t forget to check it out.​
​And if you have any questions, write them down in the comments :D​
​Happy Blending everyone! Byeee, see you next time.​
​326​
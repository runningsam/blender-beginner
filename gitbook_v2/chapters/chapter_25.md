# Chapter 25: Modeling, texturing and animating a magic potion

​Beginners guide to Blender​
​Ok, that is really it now!​
​Thank you for reading and learning with me!​
​Happy Blending!​
​Bye, see you next time :D​
​Chapter 25 - Modeling, texturing and​
​animating a magic potion​
​(Blender Version 4.2.1)​
​This time you will learn how to model, texture and animate a magic potion.​
​(You can check out video tutorial on my YouTube channel:​
​https://youtu.be/msj0kz-dOP8​
​)​
​Let’s begin!​
​Select all with “A” and delete with “X.”​
​Beginners guide to Blender​

![page_78_img_1.png](../images/page_78_img_1.png)

​Now go to Add → Mesh → UV Sphere.​

![page_78_img_2.png](../images/page_78_img_2.png)

​Duplicate the UV Sphere with “SHIFT+D.”​
​Beginners guide to Blender​

![page_79_img_1.png](../images/page_79_img_1.png)

​Press “ESC” to return the duplicated UV sphere to the original position.​

![page_79_img_2.png](../images/page_79_img_2.png)

​Hide the second UV Sphere with “H” in the viewport or click here on this eye icon to hide it.​
​To hide (disable) the object in the render, click on this camera icon.​
​Beginners guide to Blender​

![page_80_img_1.png](../images/page_80_img_1.png)

​The second sphere is now hidden in the viewport and in the render.​

![page_80_img_2.png](../images/page_80_img_2.png)

​Switch to edit mode with “TAB.”​

![page_80_img_3.png](../images/page_80_img_3.png)

​Switch to selecting vertices with 1.​
​Beginners guide to Blender​
​Select this top vertex.​

![page_81_img_1.png](../images/page_81_img_1.png)

​Now press “CTRL” + numpad “+” to select nearby vertices. Press “+” until you select all​
​vertices as shown.​
​If you are on the laptop and you don’t have numpad, go to​
​Select → More/Less → More and repeat it until you choose all vertices that you need for the​
​next step.​

![page_81_img_2.png](../images/page_81_img_2.png)

​Beginners guide to Blender​

![page_82_img_1.png](../images/page_82_img_1.png)

​Now press “X” and choose delete vertices.​

![page_82_img_2.png](../images/page_82_img_2.png)

​Beginners guide to Blender​
​Switch to selecting edges with 2 and select this edge with “ALT” + LMB.​

![page_83_img_1.png](../images/page_83_img_1.png)

​Press “F” to fill the face.​

![page_83_img_2.png](../images/page_83_img_2.png)

​Switch to object mode with “TAB”. Click RMB and choose Shade Auto Smooth.​
​Beginners guide to Blender​

![page_84_img_1.png](../images/page_84_img_1.png)

​Now hide that first sphere in the viewport and render and unhide the second one.​

![page_84_img_2.png](../images/page_84_img_2.png)

​Select it and switch to edit mode with “TAB”.​
​Beginners guide to Blender​

![page_85_img_1.png](../images/page_85_img_1.png)

​Switch to the selecting vertices with 1 and select the top vertex.​

![page_85_img_2.png](../images/page_85_img_2.png)

​Select vertices only once with “CTRL”+ “numpad +”.​

![page_85_img_3.png](../images/page_85_img_3.png)

​Press “X” and delete vertices.​
​Beginners guide to Blender​

![page_86_img_1.png](../images/page_86_img_1.png)

​Switch to selecting edges with “2” and select this edge with “ALT”+ LMB.​

![page_86_img_2.png](../images/page_86_img_2.png)

​Extrude it along the Z-axes with “E+Z”.​

![page_86_img_3.png](../images/page_86_img_3.png)

​Beginners guide to Blender​
​Select all with “A” and press “ALT+E” to extrude faces along the normals.​

![page_87_img_1.png](../images/page_87_img_1.png)

​Press “CTRL+R” to add a new loop and move it up.​

![page_87_img_2.png](../images/page_87_img_2.png)

​Switch to selecting faces with “3” and select all those faces.​

![page_87_img_3.png](../images/page_87_img_3.png)

​Beginners guide to Blender​
​Press “ALT+E” and extrude faces along normals.​

![page_88_img_1.png](../images/page_88_img_1.png)

​Switch back to object mode with “TAB”  and press RMB and choose Shade Smooth.​

![page_88_img_2.png](../images/page_88_img_2.png)

​Go to modifiers. Add modifier —> Generate →  Bevel.​
​Beginners guide to Blender​

![page_89_img_1.png](../images/page_89_img_1.png)

​To fix this part, add more segments and amount.​

![page_89_img_2.png](../images/page_89_img_2.png)

​I added 4 segments and amount 0.035 but you can add as much as you want (just be careful​
​to not add too much if you need low poly model - a model with less polygons).​

![page_89_img_3.png](../images/page_89_img_3.png)

​Now switch to the Rendered mode so you can add lights and materials and see how  magic​
​potion looks with proper lighting.​
​Beginners guide to Blender​
​Now go to render properties, and switch from Render engine Eevee to Cycles.​
​Also if you have a good graphics card, you can switch from CPU to GPU.​
​Turn on the viewport denoise to get rid of the noise and make things easier for the eyes.​

![page_90_img_1.png](../images/page_90_img_1.png)

​Place the cursor on the upper side of the screen as shown, and when you see plus,​

![page_90_img_2.png](../images/page_90_img_2.png)

​just pull it down to the left while holding the left mouse button.​

![page_90_img_3.png](../images/page_90_img_3.png)

​Open the shader editor in the window you just created.​
​Beginners guide to Blender​

![page_91_img_1.png](../images/page_91_img_1.png)

​Click “N” to hide that sidebar on the right because you don’t need it.​

![page_91_img_2.png](../images/page_91_img_2.png)

​Switch from object to world shader.​

![page_91_img_3.png](../images/page_91_img_3.png)

​Beginners guide to Blender​
​Connect Color from the Background with a Color from Sky Texture.​

![page_92_img_1.png](../images/page_92_img_1.png)

​As you can see, now you have a sky texture for your background.​

![page_92_img_2.png](../images/page_92_img_2.png)

​You can switch from Nishita to Hosek/Wilike for a bit different type of sky shader if you want.​
​Beginners guide to Blender​

![page_93_img_1.png](../images/page_93_img_1.png)

​Go to Add → Converter → Color Ramp and add it between Sky Texture and Background.​

![page_93_img_2.png](../images/page_93_img_2.png)

​Change Background Strength to 3 or similar if you want your world to become brighter.​

![page_93_img_3.png](../images/page_93_img_3.png)

​Select the first color picker of the Color Ramp and change it to darker blue (or any other color​
​you want).​
​Beginners guide to Blender​

![page_94_img_1.png](../images/page_94_img_1.png)

​And move it a bit to the right.​

![page_94_img_2.png](../images/page_94_img_2.png)

​Switch from world to object.​

![page_94_img_3.png](../images/page_94_img_3.png)

​Go to material and add a new material.​
​Beginners guide to Blender​

![page_95_img_1.png](../images/page_95_img_1.png)

​Rename the Sphere.001 to Bottle (or anything else that you like.)​
​Rename the material to Glass (or anything else).​

![page_95_img_2.png](../images/page_95_img_2.png)

​Click on Transmission and put Weight to 1.​
​Beginners guide to Blender​

![page_96_img_1.png](../images/page_96_img_1.png)

​Put Roughness to 0.​

![page_96_img_2.png](../images/page_96_img_2.png)

​Unhide the first Sphere from the viewport and render.​

![page_96_img_3.png](../images/page_96_img_3.png)

​Select the Sphere and scale it just a little bit with an “S” to make it smaller than the bottle.​
​Beginners guide to Blender​

![page_97_img_1.png](../images/page_97_img_1.png)

​Rename it to the Potion (or anything else that you want).​
​Add a new material and rename it to the Liquid (or something else).​

![page_97_img_2.png](../images/page_97_img_2.png)

​Click on Transmission and put Weight to 1.​
​Beginners guide to Blender​

![page_98_img_1.png](../images/page_98_img_1.png)

​Click on Emission and change color to Green (or something else).​

![page_98_img_2.png](../images/page_98_img_2.png)

​Because you didn’t add strength to the emission, you can’t see green color yet. Change​
​strength from 0 to any number you want. I changed it to 0.7.​

![page_98_img_3.png](../images/page_98_img_3.png)

​Beginners guide to Blender​
​Switch to the world shader.​

![page_99_img_1.png](../images/page_99_img_1.png)

​Select the Background node and duplicate it with “SHIFT+D”.​

![page_99_img_2.png](../images/page_99_img_2.png)

​Add → Shader → Mix Shader and put it between Background and Material Output node.​
​Beginners guide to Blender​

![page_100_img_1.png](../images/page_100_img_1.png)

​Connect Background from the second Background node with a Shader from a Mix Shader.​

![page_100_img_2.png](../images/page_100_img_2.png)

​Connect Fac from the Mix Shader node with an Is Camera Ray from the Light Path Shader​
​so that you change the sky to a flat color without affecting the lighting.​

![page_100_img_3.png](../images/page_100_img_3.png)

​Change the color of the Background to the Black (or any other that you like).​
​Beginners guide to Blender​

![page_101_img_1.png](../images/page_101_img_1.png)

​Put Roughness to 0 so your potion looks even better.​

![page_101_img_2.png](../images/page_101_img_2.png)

​Add → Camera.​

![page_101_img_3.png](../images/page_101_img_3.png)

​Press “ALT+R” to rotate camera to its default orientation.​
​Beginners guide to Blender​

![page_102_img_1.png](../images/page_102_img_1.png)

​And move it to the left a bit with “G+Y”.​

![page_102_img_2.png](../images/page_102_img_2.png)

​Beginners guide to Blender​
​Rotate it along the X-axes by 90° with “R+X+90”.​

![page_103_img_1.png](../images/page_103_img_1.png)

​Select the camera and change the resolution to the 1024x1024 (if you want).​

![page_103_img_2.png](../images/page_103_img_2.png)

​Click on the Camera icon to the right​

![page_103_img_3.png](../images/page_103_img_3.png)

​And after that click on this lock icon so you can adjust the camera position.​
​Beginners guide to Blender​

![page_104_img_1.png](../images/page_104_img_1.png)

​And click on this hand icon to move it up, down, left or right.​

![page_104_img_2.png](../images/page_104_img_2.png)

​Scroll the mouse wheel up or down to adjust the distance and click on the lock again when​
​you are finished with adjusting so you don’t accidentally move your camera position.​

![page_104_img_3.png](../images/page_104_img_3.png)

​Beginners guide to Blender​
​Select the bottle and rotate it a bit with “R” (in the direction you want).​

![page_105_img_1.png](../images/page_105_img_1.png)

​Move the timeline up.​

![page_105_img_2.png](../images/page_105_img_2.png)

​Press “K” and insert rotation on the first frame.​
​Beginners guide to Blender​

![page_106_img_1.png](../images/page_106_img_1.png)

​Move the scrubber from the first frame to the 150 frame (you can move it to other frames as​
​well, this is just for an example)​

![page_106_img_2.png](../images/page_106_img_2.png)

​Rotate the bottle along the Z-axis for 360° with “R+Z+360” and insert rotation with K.​

![page_106_img_3.png](../images/page_106_img_3.png)

​Beginners guide to Blender​
​Change the end frame from 250 to 150.​

![page_107_img_1.png](../images/page_107_img_1.png)

![page_107_img_2.png](../images/page_107_img_2.png)

​Click here to switch to the first frame and start animation with spacebar.​

![page_107_img_3.png](../images/page_107_img_3.png)

![page_107_img_4.png](../images/page_107_img_4.png)

​Beginners guide to Blender​
​If you want your animation to look even more natural, select all with A, click RMB and select​
​Interpolation mode → Linear.​

![page_108_img_1.png](../images/page_108_img_1.png)

​Now your animation will look like this.​

![page_108_img_2.png](../images/page_108_img_2.png)

​And if you want to change background color, just change this color here.​
​Beginners guide to Blender​

![page_109_img_1.png](../images/page_109_img_1.png)

​And to change the color of lighting, just change color of the first color picker in the color​
​ramp.​

![page_109_img_2.png](../images/page_109_img_2.png)

​And to change the gradient of the second sky color just change the second color picker in the​
​color ramp. That way you can have multicolored highlights on your glass.​
# Chapter 25: Modeling, texturing and animating a magic potion

Beginners guide to Blender
Ok, that is really it now!
Thank you for reading and learning with me!
Happy Blending!
Bye, see you next time :D
Chapter 25 - Modeling, texturing and
animating a magic potion
(Blender Version 4.2.1)
This time you will learn how to model, texture and animate a magic potion.
(You can check out video tutorial on my YouTube channel:https://youtu.be/msj0kz-dOP8)
Let’s begin!
Select all with “A” and delete with “X.”
77

![page_78_img_1.png](../images/page_78_img_1.png)

![page_78_img_2.png](../images/page_78_img_2.png)

Beginners guide to Blender
Now go to Add → Mesh → UV Sphere.
Duplicate the UV Sphere with “SHIFT+D.”
78

![page_79_img_1.png](../images/page_79_img_1.png)

![page_79_img_2.png](../images/page_79_img_2.png)

Beginners guide to Blender
Press “ESC” to return the duplicated UV sphere to the original position.
Hide the second UV Sphere with “H” in the viewport or click here on this eye icon to hide it.
To hide (disable) the object in the render, click on this camera icon.
79

![page_80_img_1.png](../images/page_80_img_1.png)

![page_80_img_2.png](../images/page_80_img_2.png)

![page_80_img_3.png](../images/page_80_img_3.png)

Beginners guide to Blender
The second sphere is now hidden in the viewport and in the render.
Switch to edit mode with “TAB.”
Switch to selecting vertices with 1.
80

![page_81_img_1.png](../images/page_81_img_1.png)

![page_81_img_2.png](../images/page_81_img_2.png)

Beginners guide to Blender
Select this top vertex.
Now press “CTRL” + numpad “+” to select nearby vertices. Press “+” until you select all
vertices as shown.
If you are on the laptop and you don’t have numpad, go to
Select → More/Less → More and repeat it until you choose all vertices that you need for the
next step.
81

![page_82_img_1.png](../images/page_82_img_1.png)

![page_82_img_2.png](../images/page_82_img_2.png)

Beginners guide to Blender
Now press “X” and choose delete vertices.
82

![page_83_img_1.png](../images/page_83_img_1.png)

![page_83_img_2.png](../images/page_83_img_2.png)

Beginners guide to Blender
Switch to selecting edges with 2 and select this edge with “ALT” + LMB.
Press “F” to fill the face.
Switch to object mode with “TAB”. Click RMB and choose Shade Auto Smooth.
83

![page_84_img_1.png](../images/page_84_img_1.png)

![page_84_img_2.png](../images/page_84_img_2.png)

Beginners guide to Blender
Now hide that first sphere in the viewport and render and unhide the second one.
Select it and switch to edit mode with “TAB”.
84

![page_85_img_1.png](../images/page_85_img_1.png)

![page_85_img_2.png](../images/page_85_img_2.png)

![page_85_img_3.png](../images/page_85_img_3.png)

Beginners guide to Blender
Switch to the selecting vertices with 1 and select the top vertex.
Select vertices only once with “CTRL”+ “numpad +”.
Press “X” and delete vertices.
85

![page_86_img_1.png](../images/page_86_img_1.png)

![page_86_img_2.png](../images/page_86_img_2.png)

![page_86_img_3.png](../images/page_86_img_3.png)

Beginners guide to Blender
Switch to selecting edges with “2” and select this edge with “ALT”+ LMB.
Extrude it along the Z-axes with “E+Z”.
86

![page_87_img_1.png](../images/page_87_img_1.png)

![page_87_img_2.png](../images/page_87_img_2.png)

![page_87_img_3.png](../images/page_87_img_3.png)

Beginners guide to Blender
Select all with “A” and press “ALT+E” to extrude faces along the normals.
Press “CTRL+R” to add a new loop and move it up.
Switch to selecting faces with “3” and select all those faces.
87

![page_88_img_1.png](../images/page_88_img_1.png)

![page_88_img_2.png](../images/page_88_img_2.png)

Beginners guide to Blender
Press “ALT+E” and extrude faces along normals.
Switch back to object mode with “TAB”  and press RMB and choose Shade Smooth.
Go to modifiers. Add modifier —> Generate →  Bevel.
88

![page_89_img_1.png](../images/page_89_img_1.png)

![page_89_img_2.png](../images/page_89_img_2.png)

![page_89_img_3.png](../images/page_89_img_3.png)

Beginners guide to Blender
To fix this part, add more segments and amount.
I added 4 segments and amount 0.035 but you can add as much as you want (just be careful
to not add too much if you need low poly model - a model with less polygons).
Now switch to the Rendered mode so you can add lights and materials and see how  magic
potion looks with proper lighting.
89

![page_90_img_1.png](../images/page_90_img_1.png)

![page_90_img_2.png](../images/page_90_img_2.png)

![page_90_img_3.png](../images/page_90_img_3.png)

Beginners guide to Blender
Now go to render properties, and switch from Render engine Eevee to Cycles.
Also if you have a good graphics card, you can switch from CPU to GPU.
Turn on the viewport denoise to get rid of the noise and make things easier for the eyes.
Place the cursor on the upper side of the screen as shown, and when you see plus,
just pull it down to the left while holding the left mouse button.
Open the shader editor in the window you just created.
90

![page_91_img_1.png](../images/page_91_img_1.png)

![page_91_img_2.png](../images/page_91_img_2.png)

![page_91_img_3.png](../images/page_91_img_3.png)

Beginners guide to Blender
Click “N” to hide that sidebar on the right because you don’t need it.
Switch from object to world shader.
91

![page_92_img_1.png](../images/page_92_img_1.png)

![page_92_img_2.png](../images/page_92_img_2.png)

Beginners guide to Blender
Connect Color from the Background with a Color from Sky Texture.
As you can see, now you have a sky texture for your background.
You can switch from Nishita to Hosek/Wilike for a bit different type of sky shader if you want.
92

![page_93_img_1.png](../images/page_93_img_1.png)

![page_93_img_2.png](../images/page_93_img_2.png)

![page_93_img_3.png](../images/page_93_img_3.png)

Beginners guide to Blender
Go to Add → Converter → Color Ramp and add it between Sky Texture and Background.
Change Background Strength to 3 or similar if you want your world to become brighter.
Select the first color picker of the Color Ramp and change it to darker blue (or any other color
you want).
93

![page_94_img_1.png](../images/page_94_img_1.png)

![page_94_img_2.png](../images/page_94_img_2.png)

![page_94_img_3.png](../images/page_94_img_3.png)

Beginners guide to Blender
And move it a bit to the right.
Switch from world to object.
Go to material and add a new material.
94

![page_95_img_1.png](../images/page_95_img_1.png)

![page_95_img_2.png](../images/page_95_img_2.png)

Beginners guide to Blender
Rename the Sphere.001 to Bottle (or anything else that you like.)
Rename the material to Glass (or anything else).
Click on Transmission and put Weight to 1.
95

![page_96_img_1.png](../images/page_96_img_1.png)

![page_96_img_2.png](../images/page_96_img_2.png)

![page_96_img_3.png](../images/page_96_img_3.png)

Beginners guide to Blender
Put Roughness to 0.
Unhide the first Sphere from the viewport and render.
Select the Sphere and scale it just a little bit with an “S” to make it smaller than the bottle.
96

![page_97_img_1.png](../images/page_97_img_1.png)

![page_97_img_2.png](../images/page_97_img_2.png)

Beginners guide to Blender
Rename it to the Potion (or anything else that you want).
Add a new material and rename it to the Liquid (or something else).
Click on Transmission and put Weight to 1.
97

![page_98_img_1.png](../images/page_98_img_1.png)

![page_98_img_2.png](../images/page_98_img_2.png)

![page_98_img_3.png](../images/page_98_img_3.png)

Beginners guide to Blender
Click on Emission and change color to Green (or something else).
Because you didn’t add strength to the emission, you can’t see green color yet. Change
strength from 0 to any number you want. I changed it to 0.7.
98

![page_99_img_1.png](../images/page_99_img_1.png)

![page_99_img_2.png](../images/page_99_img_2.png)

Beginners guide to Blender
Switch to the world shader.
Select the Background node and duplicate it with “SHIFT+D”.
Add → Shader → Mix Shader and put it between Background and Material Output node.
99

![page_100_img_1.png](../images/page_100_img_1.png)

![page_100_img_2.png](../images/page_100_img_2.png)

![page_100_img_3.png](../images/page_100_img_3.png)

Beginners guide to Blender
Connect Background from the second Background node with a Shader from a Mix Shader.
Connect Fac from the Mix Shader node with an Is Camera Ray from the Light Path Shader
so that you change the sky to a flat color without affecting the lighting.
Change the color of the Background to the Black (or any other that you like).
100

![page_101_img_1.png](../images/page_101_img_1.png)

![page_101_img_2.png](../images/page_101_img_2.png)

![page_101_img_3.png](../images/page_101_img_3.png)

Beginners guide to Blender
Put Roughness to 0 so your potion looks even better.
Add → Camera.
Press “ALT+R” to rotate camera to its default orientation.
101

![page_102_img_1.png](../images/page_102_img_1.png)

![page_102_img_2.png](../images/page_102_img_2.png)

Beginners guide to Blender
And move it to the left a bit with “G+Y”.
102

![page_103_img_1.png](../images/page_103_img_1.png)

![page_103_img_2.png](../images/page_103_img_2.png)

![page_103_img_3.png](../images/page_103_img_3.png)

Beginners guide to Blender
Rotate it along the X-axes by 90° with “R+X+90”.
Select the camera and change the resolution to the 1024x1024 (if you want).
Click on the Camera icon to the right
And after that click on this lock icon so you can adjust the camera position.
103

![page_104_img_1.png](../images/page_104_img_1.png)

![page_104_img_2.png](../images/page_104_img_2.png)

![page_104_img_3.png](../images/page_104_img_3.png)

Beginners guide to Blender
And click on this hand icon to move it up, down, left or right.
Scroll the mouse wheel up or down to adjust the distance and click on the lock again when
you are finished with adjusting so you don’t accidentally move your camera position.
104

![page_105_img_1.png](../images/page_105_img_1.png)

![page_105_img_2.png](../images/page_105_img_2.png)

Beginners guide to Blender
Select the bottle and rotate it a bit with “R” (in the direction you want).
Move the timeline up.
Press “K” and insert rotation on the first frame.
105

![page_106_img_1.png](../images/page_106_img_1.png)

![page_106_img_2.png](../images/page_106_img_2.png)

![page_106_img_3.png](../images/page_106_img_3.png)

Beginners guide to Blender
Move the scrubber from the first frame to the 150 frame (you can move it to other frames as
well, this is just for an example)
Rotate the bottle along the Z-axis for 360° with “R+Z+360” and insert rotation with K.
106

![page_107_img_1.png](../images/page_107_img_1.png)

![page_107_img_2.png](../images/page_107_img_2.png)

![page_107_img_3.png](../images/page_107_img_3.png)

![page_107_img_4.png](../images/page_107_img_4.png)

Beginners guide to Blender
Change the end frame from 250 to 150.
Click here to switch to the first frame and start animation with spacebar.
107

![page_108_img_1.png](../images/page_108_img_1.png)

![page_108_img_2.png](../images/page_108_img_2.png)

Beginners guide to Blender
If you want your animation to look even more natural, select all with A, click RMB and select
Interpolation mode → Linear.
Now your animation will look like this.
And if you want to change background color, just change this color here.
108

![page_109_img_1.png](../images/page_109_img_1.png)

![page_109_img_2.png](../images/page_109_img_2.png)

Beginners guide to Blender
And to change the color of lighting, just change color of the first color picker in the color
ramp.
And to change the gradient of the second sky color just change the second color picker in the
color ramp. That way you can have multicolored highlights on your glass.
109

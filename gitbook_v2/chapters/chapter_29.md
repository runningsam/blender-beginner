# Chapter 29: Modeling and texturing of an empty and inflated 3D balloon - learning Shape Keys

​Beginners guide to Blender​
​Chapter 29 - Modeling and texturing of an​
​empty and inflated 3D balloon - learning​
​Shape Keys​
​(Blender Version 4.4.0)​
​Modeling​
​This time you will learn how to model and texture a 3D inflated and deflated balloon by using​
​drivers and shape keys.​
​(You can check out video tutorial on my YouTube channel:​
​https://youtu.be/5VSrlrgERF4​
)​
​Select everything with “A” and delete it with “X”.​

![page_274_img_1.png](../images/page_274_img_1.png)

​Go to Add → Mesh → UV Sphere​
​Beginners guide to Blender​

![page_275_img_1.png](../images/page_275_img_1.png)

​Scroll the mouse wheel up to zoom into the sphere.​

![page_275_img_2.png](../images/page_275_img_2.png)

​Click RMB and choose Shade Smooth.​

![page_275_img_3.png](../images/page_275_img_3.png)

​Switch to edit mode with “TAB”.​
​Beginners guide to Blender​

![page_276_img_1.png](../images/page_276_img_1.png)

​Select this bottom vertex​

![page_276_img_2.png](../images/page_276_img_2.png)

​Turn on the Proportional editing with “O”.​

![page_276_img_3.png](../images/page_276_img_3.png)

​Beginners guide to Blender​
​Press “G+Z” and move it for around -0.7​

![page_277_img_1.png](../images/page_277_img_1.png)

​Scroll the mouse wheel up to increase area of influence. I scrolled it approximately to 1.46.​
​When you are satisfied with the look, confirm it with the LMB.​
​Beginners guide to Blender​

![page_278_img_1.png](../images/page_278_img_1.png)

​While that bottom vertex is still selected, press “X” and choose delete vertices.​

![page_278_img_2.png](../images/page_278_img_2.png)

​Beginners guide to Blender​

![page_279_img_1.png](../images/page_279_img_1.png)

​Select this whole loop with “ALT” +LMB​

![page_279_img_2.png](../images/page_279_img_2.png)

​And fill it with “F”.​
​Beginners guide to Blender​

![page_280_img_1.png](../images/page_280_img_1.png)

​Turn off the proportional editing with “O” or by clicking here.​

![page_280_img_2.png](../images/page_280_img_2.png)

​Press “I” to inset a new face and inset it for around 0.088​
​Beginners guide to Blender​

![page_281_img_1.png](../images/page_281_img_1.png)

​Move it with “G+Z” for around -0.05​

![page_281_img_2.png](../images/page_281_img_2.png)

​Extrude it with “E+Z” for around 0.27​
​Beginners guide to Blender​

![page_282_img_1.png](../images/page_282_img_1.png)

​Switch to selecting edges with 2 and select this loop​

![page_282_img_2.png](../images/page_282_img_2.png)

​Scale it with “S” for around 0.78​
​Beginners guide to Blender​

![page_283_img_1.png](../images/page_283_img_1.png)

​Move it with “G+Z” for around -0.03​

![page_283_img_2.png](../images/page_283_img_2.png)

​And scale it a bit more with “S” if necessary.​

![page_283_img_3.png](../images/page_283_img_3.png)

​Switch to selecting faces with 3 and select this face.​
​Beginners guide to Blender​

![page_284_img_1.png](../images/page_284_img_1.png)

​Press “X” and choose delete faces​

![page_284_img_2.png](../images/page_284_img_2.png)

​Switch to selecting edges with 2 and select this edge​

![page_284_img_3.png](../images/page_284_img_3.png)

​Duplicate it with “SHIFT+D”​
​Beginners guide to Blender​

![page_285_img_1.png](../images/page_285_img_1.png)

​And press “ESC” to return it to its original position.​

![page_285_img_2.png](../images/page_285_img_2.png)

​Extrude it with “E+Z” for around -0.03​

![page_285_img_3.png](../images/page_285_img_3.png)

​Switch to selecting faces with 3 and select this whole loop with “ALT”.​
​Beginners guide to Blender​

![page_286_img_1.png](../images/page_286_img_1.png)

​Press “ALT+E” and choose Extrude faces along normals​

![page_286_img_2.png](../images/page_286_img_2.png)

​and extrude it for around -0.028​

![page_286_img_3.png](../images/page_286_img_3.png)

​Switch to selecting edges with 2 and select these edges.​
​Beginners guide to Blender​

![page_287_img_1.png](../images/page_287_img_1.png)

​and this​

![page_287_img_2.png](../images/page_287_img_2.png)

​Press “CTRL+B” to bevel them all​

![page_287_img_3.png](../images/page_287_img_3.png)

​Scroll the mouse wheel up to add more segment.I added 3 more segments.​
​Beginners guide to Blender​

![page_288_img_1.png](../images/page_288_img_1.png)

​Switch to object mode with “TAB” click RMB and choose Shade Smooth​

![page_288_img_2.png](../images/page_288_img_2.png)

​Rename your object from Sphere to Balloon.​

![page_288_img_3.png](../images/page_288_img_3.png)

​Now click here on Data​
​Beginners guide to Blender​

![page_289_img_1.png](../images/page_289_img_1.png)

​You will see something new called Shape keys.​

![page_289_img_2.png](../images/page_289_img_2.png)

​So what are Shape keys?​
​Shape keys are used to deform object geometry into new shapes for animation.​
​The most popular case is using shape keys for character facial animation, but you can use it​
​for other things, like in this case for making empty balloon inflated and vice versa.​
​First, click on that “+” sign to add a new Shape key.​
​Beginners guide to Blender​

![page_290_img_1.png](../images/page_290_img_1.png)

​The first Shape key is called Basis.​

![page_290_img_2.png](../images/page_290_img_2.png)

​You can rename it however you want. I renamed it to Balloon_full​

![page_290_img_3.png](../images/page_290_img_3.png)

​Click once more on the “+” sign to add another Shape key.​
​Beginners guide to Blender​

![page_291_img_1.png](../images/page_291_img_1.png)

​You can rename it however you want. I renamed it to Balloon_empty.​

![page_291_img_2.png](../images/page_291_img_2.png)

​From now on whatever you are doing, make sure that the second shape key is selected​
​because the first Shape key is the base one and you shouldn’t change it.​
​Switch back to edit mode with “TAB.”​

![page_291_img_3.png](../images/page_291_img_3.png)

​Change view to right orthographic view with numpad 3 or click red X on the screen.​
​Beginners guide to Blender​

![page_292_img_1.png](../images/page_292_img_1.png)

​Turn on the X-ray mode by clicking here or pressing “ALT+Z”.​

![page_292_img_2.png](../images/page_292_img_2.png)

​Switch to selecting vertices with 1 and select this part​

![page_292_img_3.png](../images/page_292_img_3.png)

​And scale it with “S” for around 2.13​
​Beginners guide to Blender​

![page_293_img_1.png](../images/page_293_img_1.png)

​Select this part​

![page_293_img_2.png](../images/page_293_img_2.png)

​Click RMB and choose Smooth vertices​

![page_293_img_3.png](../images/page_293_img_3.png)

​You can see that the new toolbar appeared in the left bottom corner - Smooth Vertices.​
​Beginners guide to Blender​

![page_294_img_1.png](../images/page_294_img_1.png)

​When you click on it, new options appeared​

![page_294_img_2.png](../images/page_294_img_2.png)

​We will change Smoothing from 0.5 to 1​

![page_294_img_3.png](../images/page_294_img_3.png)

​And change repeat to around 55​
​Beginners guide to Blender​

![page_295_img_1.png](../images/page_295_img_1.png)

​Scale it with “S+Z” for around 0.6​

![page_295_img_2.png](../images/page_295_img_2.png)

​And move it with “G+Z” for around -0.55​

![page_295_img_3.png](../images/page_295_img_3.png)

​Turn on the Proportional editing with “O” or by clicking here​
​Beginners guide to Blender​

![page_296_img_1.png](../images/page_296_img_1.png)

​Turn off the X-ray mode with “ALT+Z”​

![page_296_img_2.png](../images/page_296_img_2.png)

​Scale it with “S+X” for around 0.69​

![page_296_img_3.png](../images/page_296_img_3.png)

​Beginners guide to Blender​
​and scroll the mouse wheel down so your area of influence (Proportional size) is somewhere​
​around 0.39.​

![page_297_img_1.png](../images/page_297_img_1.png)

​After that scale it more with “S+X”so your balloon will look more deflated.​

![page_297_img_2.png](../images/page_297_img_2.png)

​To improve look of your deflated ballon more, you can select a random vertex and move it​
​around with a “G”.​

![page_297_img_3.png](../images/page_297_img_3.png)

​Beginners guide to Blender​
​For example I selected this vertex and moved it a bit with proportional editing turned on.​

![page_298_img_1.png](../images/page_298_img_1.png)

​I did the same with this vertex​

![page_298_img_2.png](../images/page_298_img_2.png)

​and this​

![page_298_img_3.png](../images/page_298_img_3.png)

​and this​
​Beginners guide to Blender​

![page_299_img_1.png](../images/page_299_img_1.png)

​If you switch to object mode with “TAB”, your balloon will be full again. That is because value​
​of the second shape key is set to 0.​

![page_299_img_2.png](../images/page_299_img_2.png)

​As you are moving the value towards 1, the balloon becomes more and more deflated.​

![page_299_img_3.png](../images/page_299_img_3.png)

​And if you are moving the value towards 0, the balloon become more full again. We will leave​
​it at 0 so it stays full for now.​
​Beginners guide to Blender​

![page_300_img_1.png](../images/page_300_img_1.png)

​It is time for texturing it. Click on Material properties​

![page_300_img_2.png](../images/page_300_img_2.png)

​Click on New to add a new material​

![page_300_img_3.png](../images/page_300_img_3.png)

​Rename the material to Balloon_red or anything else you want.​
​Beginners guide to Blender​

![page_301_img_1.png](../images/page_301_img_1.png)

​Switch to Material Preview mode by clicking here​

![page_301_img_2.png](../images/page_301_img_2.png)

​Place the cursor on the upper side of the screen as shown, and when you see plus,​

![page_301_img_3.png](../images/page_301_img_3.png)

​just pull it down to the left while holding the left mouse click.​
​Beginners guide to Blender​

![page_302_img_1.png](../images/page_302_img_1.png)

​Switch from 3D viewport to Shader editor.​

![page_302_img_2.png](../images/page_302_img_2.png)

​Change the Base color to any color you want. I chose red.​

![page_302_img_3.png](../images/page_302_img_3.png)

​Change Alpha to 0.5​
​Beginners guide to Blender​

![page_303_img_1.png](../images/page_303_img_1.png)

​Change Roughness to 0.3​

![page_303_img_2.png](../images/page_303_img_2.png)

​Position the mouse to the Base color that you choose and copy it with “CTRL+C”​

![page_303_img_3.png](../images/page_303_img_3.png)

​Duplicate the whole Principled BSDF with “SHIFT+D” and move it down a bit​
​Beginners guide to Blender​

![page_304_img_1.png](../images/page_304_img_1.png)

​Go to Add → Shader → Mix Shader​

![page_304_img_2.png](../images/page_304_img_2.png)

​And put it between the first Principled BSDF and Material Output.​

![page_304_img_3.png](../images/page_304_img_3.png)

​Connect BSDF from second Principled BSDF with Shader from Mix Shader.​
​Beginners guide to Blender​

![page_305_img_1.png](../images/page_305_img_1.png)

​Change Roughness in the second Principled BSDF to around 0.7​

![page_305_img_2.png](../images/page_305_img_2.png)

​And Alpha to 1​

![page_305_img_3.png](../images/page_305_img_3.png)

​If you change factor in Mix Shader to 0 your balloon will look like this​
​Beginners guide to Blender​

![page_306_img_1.png](../images/page_306_img_1.png)

​and the more you increase it towards 1, it will look like this​

![page_306_img_2.png](../images/page_306_img_2.png)

​Go to Data and make sure that the Second Shape key called Balloon_empty is selected​
​Beginners guide to Blender​

![page_307_img_1.png](../images/page_307_img_1.png)

​Go to this Value​

![page_307_img_2.png](../images/page_307_img_2.png)

​And now it is time to use something called Drivers.​
​And what are Drivers?​
​Drivers are a way to control values of properties by means of a function, or a mathematical​
​expression.​
​Let me show you in a real example.​
​Press RMB and choose Copy as a new Driver.​
​Beginners guide to Blender​

![page_308_img_1.png](../images/page_308_img_1.png)

​Now select Mix Shader​

![page_308_img_2.png](../images/page_308_img_2.png)

​Click RMB on Fac and choose Paste Driver.​
​Beginners guide to Blender​

![page_309_img_1.png](../images/page_309_img_1.png)

​You Mix Shader Fac now looks like this​

![page_309_img_2.png](../images/page_309_img_2.png)

​Now when you move the value of a Second Shape Key, your balloon gets inflated,rougness​
​also changes and vice versa.​
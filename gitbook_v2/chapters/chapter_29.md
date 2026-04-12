# Chapter 29: Modeling and texturing of an empty and inflated 3D balloon - learning Shape Keys


![page_274_img_1.png](../images/page_274_img_1.png)

Beginners guide to Blender
Chapter 29 - Modeling and texturing of an
empty and inflated 3D balloon - learning
Shape Keys
(Blender Version 4.4.0)
Modeling
This time you will learn how to model and texture a 3D inflated and deflated balloon by using
drivers and shape keys.
(You can check out video tutorial on my YouTube channel:
https://youtu.be/5VSrlrgERF4)
Select everything with “A” and delete it with “X”.
Go to Add → Mesh → UV Sphere
274

![page_275_img_1.png](../images/page_275_img_1.png)

![page_275_img_2.png](../images/page_275_img_2.png)

![page_275_img_3.png](../images/page_275_img_3.png)

Beginners guide to Blender
Scroll the mouse wheel up to zoom into the sphere.
Click RMB and choose Shade Smooth.
Switch to edit mode with “TAB”.
275

![page_276_img_1.png](../images/page_276_img_1.png)

![page_276_img_2.png](../images/page_276_img_2.png)

![page_276_img_3.png](../images/page_276_img_3.png)

Beginners guide to Blender
Select this bottom vertex
Turn on the Proportional editing with “O”.
276

![page_277_img_1.png](../images/page_277_img_1.png)

Beginners guide to Blender
Press “G+Z” and move it for around -0.7
Scroll the mouse wheel up to increase area of influence. I scrolled it approximately to 1.46.
When you are satisfied with the look, confirm it with the LMB.
277

![page_278_img_1.png](../images/page_278_img_1.png)

![page_278_img_2.png](../images/page_278_img_2.png)

Beginners guide to Blender
While that bottom vertex is still selected, press “X” and choose delete vertices.
278

![page_279_img_1.png](../images/page_279_img_1.png)

![page_279_img_2.png](../images/page_279_img_2.png)

Beginners guide to Blender
Select this whole loop with “ALT” +LMB
And fill it with “F”.
279

![page_280_img_1.png](../images/page_280_img_1.png)

![page_280_img_2.png](../images/page_280_img_2.png)

Beginners guide to Blender
Turn off the proportional editing with “O” or by clicking here.
Press “I” to inset a new face and inset it for around 0.088
280

![page_281_img_1.png](../images/page_281_img_1.png)

![page_281_img_2.png](../images/page_281_img_2.png)

Beginners guide to Blender
Move it with “G+Z” for around -0.05
Extrude it with “E+Z” for around 0.27
281

![page_282_img_1.png](../images/page_282_img_1.png)

![page_282_img_2.png](../images/page_282_img_2.png)

Beginners guide to Blender
Switch to selecting edges with 2 and select this loop
Scale it with “S” for around 0.78
282

![page_283_img_1.png](../images/page_283_img_1.png)

![page_283_img_2.png](../images/page_283_img_2.png)

![page_283_img_3.png](../images/page_283_img_3.png)

Beginners guide to Blender
Move it with “G+Z” for around -0.03
And scale it a bit more with “S” if necessary.
Switch to selecting faces with 3 and select this face.
283

![page_284_img_1.png](../images/page_284_img_1.png)

![page_284_img_2.png](../images/page_284_img_2.png)

![page_284_img_3.png](../images/page_284_img_3.png)

Beginners guide to Blender
Press “X” and choose delete faces
Switch to selecting edges with 2 and select this edge
Duplicate it with “SHIFT+D”
284

![page_285_img_1.png](../images/page_285_img_1.png)

![page_285_img_2.png](../images/page_285_img_2.png)

![page_285_img_3.png](../images/page_285_img_3.png)

Beginners guide to Blender
And press “ESC” to return it to its original position.
Extrude it with “E+Z” for around -0.03
Switch to selecting faces with 3 and select this whole loop with “ALT”.
285

![page_286_img_1.png](../images/page_286_img_1.png)

![page_286_img_2.png](../images/page_286_img_2.png)

![page_286_img_3.png](../images/page_286_img_3.png)

Beginners guide to Blender
Press “ALT+E” and choose Extrude faces along normals
and extrude it for around -0.028
Switch to selecting edges with 2 and select these edges.
286

![page_287_img_1.png](../images/page_287_img_1.png)

![page_287_img_2.png](../images/page_287_img_2.png)

![page_287_img_3.png](../images/page_287_img_3.png)

Beginners guide to Blender
and this
Press “CTRL+B” to bevel them all
Scroll the mouse wheel up to add more segment.I added 3 more segments.
287

![page_288_img_1.png](../images/page_288_img_1.png)

![page_288_img_2.png](../images/page_288_img_2.png)

![page_288_img_3.png](../images/page_288_img_3.png)

Beginners guide to Blender
Switch to object mode with “TAB” click RMB and choose Shade Smooth
Rename your object from Sphere to Balloon.
Now click here on Data
288

![page_289_img_1.png](../images/page_289_img_1.png)

![page_289_img_2.png](../images/page_289_img_2.png)

Beginners guide to Blender
You will see something new called Shape keys.
So what are Shape keys?
Shape keys are used to deform object geometry into new shapes for animation.
The most popular case is using shape keys for character facial animation, but you can use it
for other things, like in this case for making empty balloon inflated and vice versa.
First, click on that “+” sign to add a new Shape key.
289

![page_290_img_1.png](../images/page_290_img_1.png)

![page_290_img_2.png](../images/page_290_img_2.png)

![page_290_img_3.png](../images/page_290_img_3.png)

Beginners guide to Blender
The first Shape key is called Basis.
You can rename it however you want. I renamed it to Balloon_full
Click once more on the “+” sign to add another Shape key.
290

![page_291_img_1.png](../images/page_291_img_1.png)

![page_291_img_2.png](../images/page_291_img_2.png)

![page_291_img_3.png](../images/page_291_img_3.png)

Beginners guide to Blender
You can rename it however you want. I renamed it to Balloon_empty.
From now on whatever you are doing, make sure that the second shape key is selected
because the first Shape key is the base one and you shouldn’t change it.
Switch back to edit mode with “TAB.”
Change view to right orthographic view with numpad 3 or click red X on the screen.
291

![page_292_img_1.png](../images/page_292_img_1.png)

![page_292_img_2.png](../images/page_292_img_2.png)

![page_292_img_3.png](../images/page_292_img_3.png)

Beginners guide to Blender
Turn on the X-ray mode by clicking here or pressing “ALT+Z”.
Switch to selecting vertices with 1 and select this part
And scale it with “S” for around 2.13
292

![page_293_img_1.png](../images/page_293_img_1.png)

![page_293_img_2.png](../images/page_293_img_2.png)

![page_293_img_3.png](../images/page_293_img_3.png)

Beginners guide to Blender
Select this part
Click RMB and choose Smooth vertices
You can see that the new toolbar appeared in the left bottom corner - Smooth Vertices.
293

![page_294_img_1.png](../images/page_294_img_1.png)

![page_294_img_2.png](../images/page_294_img_2.png)

![page_294_img_3.png](../images/page_294_img_3.png)

Beginners guide to Blender
When you click on it, new options appeared
We will change Smoothing from 0.5 to 1
And change repeat to around 55
294

![page_295_img_1.png](../images/page_295_img_1.png)

![page_295_img_2.png](../images/page_295_img_2.png)

![page_295_img_3.png](../images/page_295_img_3.png)

Beginners guide to Blender
Scale it with “S+Z” for around 0.6
And move it with “G+Z” for around -0.55
Turn on the Proportional editing with “O” or by clicking here
295

![page_296_img_1.png](../images/page_296_img_1.png)

![page_296_img_2.png](../images/page_296_img_2.png)

![page_296_img_3.png](../images/page_296_img_3.png)

Beginners guide to Blender
Turn off the X-ray mode with “ALT+Z”
Scale it with “S+X” for around 0.69
296

![page_297_img_1.png](../images/page_297_img_1.png)

![page_297_img_2.png](../images/page_297_img_2.png)

![page_297_img_3.png](../images/page_297_img_3.png)

Beginners guide to Blender
and scroll the mouse wheel down so your area of influence (Proportional size) is somewhere
around 0.39.
After that scale it more with “S+X”so your balloon will look more deflated.
To improve look of your deflated ballon more, you can select a random vertex and move it
around with a “G”.
297

![page_298_img_1.png](../images/page_298_img_1.png)

![page_298_img_2.png](../images/page_298_img_2.png)

![page_298_img_3.png](../images/page_298_img_3.png)

Beginners guide to Blender
For example I selected this vertex and moved it a bit with proportional editing turned on.
I did the same with this vertex
and this
and this
298

![page_299_img_1.png](../images/page_299_img_1.png)

![page_299_img_2.png](../images/page_299_img_2.png)

![page_299_img_3.png](../images/page_299_img_3.png)

Beginners guide to Blender
If you switch to object mode with “TAB”, your balloon will be full again. That is because value
of the second shape key is set to 0.
As you are moving the value towards 1, the balloon becomes more and more deflated.
And if you are moving the value towards 0, the balloon become more full again. We will leave
it at 0 so it stays full for now.
299

![page_300_img_1.png](../images/page_300_img_1.png)

![page_300_img_2.png](../images/page_300_img_2.png)

![page_300_img_3.png](../images/page_300_img_3.png)

Beginners guide to Blender
It is time for texturing it. Click on Material properties
Click on New to add a new material
Rename the material to Balloon_red or anything else you want.
300

![page_301_img_1.png](../images/page_301_img_1.png)

![page_301_img_2.png](../images/page_301_img_2.png)

![page_301_img_3.png](../images/page_301_img_3.png)

Beginners guide to Blender
Switch to Material Preview mode by clicking here
Place the cursor on the upper side of the screen as shown, and when you see plus,
just pull it down to the left while holding the left mouse click.
301

![page_302_img_1.png](../images/page_302_img_1.png)

![page_302_img_2.png](../images/page_302_img_2.png)

![page_302_img_3.png](../images/page_302_img_3.png)

Beginners guide to Blender
Switch from 3D viewport to Shader editor.
Change the Base color to any color you want. I chose red.
Change Alpha to 0.5
302

![page_303_img_1.png](../images/page_303_img_1.png)

![page_303_img_2.png](../images/page_303_img_2.png)

![page_303_img_3.png](../images/page_303_img_3.png)

Beginners guide to Blender
Change Roughness to 0.3
Position the mouse to the Base color that you choose and copy it with “CTRL+C”
Duplicate the whole Principled BSDF with “SHIFT+D” and move it down a bit
303

![page_304_img_1.png](../images/page_304_img_1.png)

![page_304_img_2.png](../images/page_304_img_2.png)

![page_304_img_3.png](../images/page_304_img_3.png)

Beginners guide to Blender
Go to Add → Shader → Mix Shader
And put it between the first Principled BSDF and Material Output.
Connect BSDF from second Principled BSDF with Shader from Mix Shader.
304

![page_305_img_1.png](../images/page_305_img_1.png)

![page_305_img_2.png](../images/page_305_img_2.png)

![page_305_img_3.png](../images/page_305_img_3.png)

Beginners guide to Blender
Change Roughness in the second Principled BSDF to around 0.7
And Alpha to 1
If you change factor in Mix Shader to 0 your balloon will look like this
305

![page_306_img_1.png](../images/page_306_img_1.png)

![page_306_img_2.png](../images/page_306_img_2.png)

Beginners guide to Blender
and the more you increase it towards 1, it will look like this
Go to Data and make sure that the Second Shape key called Balloon_empty is selected
306

![page_307_img_1.png](../images/page_307_img_1.png)

![page_307_img_2.png](../images/page_307_img_2.png)

Beginners guide to Blender
Go to this Value
And now it is time to use something called Drivers.
And what are Drivers?
Drivers are a way to control values of properties by means of a function, or a mathematical
expression.
Let me show you in a real example.
Press RMB and choose Copy as a new Driver.
307

![page_308_img_1.png](../images/page_308_img_1.png)

![page_308_img_2.png](../images/page_308_img_2.png)

Beginners guide to Blender
Now select Mix Shader
Click RMB on Fac and choose Paste Driver.
308

![page_309_img_1.png](../images/page_309_img_1.png)

![page_309_img_2.png](../images/page_309_img_2.png)

Beginners guide to Blender
You Mix Shader Fac now looks like this
Now when you move the value of a Second Shape Key, your balloon gets inflated,rougness
also changes and vice versa.
309

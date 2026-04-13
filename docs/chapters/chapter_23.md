# Chapter 23: Modeling and texturing of a pumpkin

Since Halloween is approaching, I decided to teach you how to model and texture a pumpkin in Blender.

Let's start with the modeling. (You can check out the video tutorial on my YouTube channel: https://youtu.be/s9HeDfgO6nU?si=C4KRc9KMnQ9IS5P)

This time, you will delete the cube because this basic shape isn't ideal for modeling a pumpkin.

Delete the cube by pressing 'X'.

![page_273_img_1.png](../images/page_273_img_1.png)

Add a mesh - UV Sphere.

![page_273_img_2.png](../images/page_273_img_2.png)

A new panel appeared in the bottom-left corner. This is how the sphere looks with 32 segments. Since you don’t need that much topology for a simple pumpkin model, you can reduce the number of segments.

![page_274_img_1.png](../images/page_274_img_1.png)

I changed it from 32 to 21.

![page_274_img_2.png](../images/page_274_img_2.png)

Switch to edit mode with “TAB”.

Select this top vertex

![page_275_img_1.png](../images/page_275_img_1.png)

Move to the bottom of the pumpkin

![page_275_img_2.png](../images/page_275_img_2.png)

And while holding “CTRL”, click the LMB on the bottom vertex to select the whole loop.

![page_275_img_3.png](../images/page_275_img_3.png)

Select every third loop. You can select additional loops by holding 'SHIFT' and clicking 'CTRL' on the desired loop.

![page_276_img_1.png](../images/page_276_img_1.png)

When you selected all the loops

![page_276_img_2.png](../images/page_276_img_2.png)

Turn on the proportional editing with “O”

![page_276_img_3.png](../images/page_276_img_3.png)

make the area of the influence smaller by scrolling the mouse wheel

![page_277_img_1.png](../images/page_277_img_1.png)

and scale it with “S”.

![page_277_img_2.png](../images/page_277_img_2.png)

Then scale it using '`S+Z`' to make it look more like a pumpkin.

![page_277_img_3.png](../images/page_277_img_3.png)

Select only the top vertex

![page_278_img_1.png](../images/page_278_img_1.png)

make the area of influence a bit bigger

![page_278_img_2.png](../images/page_278_img_2.png)

and move it down a bit with “`G+Z`”.

![page_278_img_3.png](../images/page_278_img_3.png)

Select only the bottom vertex, and do the same.

![page_279_img_1.png](../images/page_279_img_1.png)

Switch to object mode with “TAB” and rename the sphere to pumpkin.

![page_279_img_2.png](../images/page_279_img_2.png)

Switch to Edit Mode by pressing 'TAB' and select the loop by holding 'ALT' and clicking with the LMB.

![page_279_img_3.png](../images/page_279_img_3.png)

Duplicate it with “SHIFT+D” and move it up with “Z”.

![page_280_img_1.png](../images/page_280_img_1.png)

Press “P” and choose separate collection.

![page_280_img_2.png](../images/page_280_img_2.png)

Switch to object mode, select that separated part and rename it to “Stem.”

![page_280_img_3.png](../images/page_280_img_3.png)

Switch back to Edit Mode. Select the stem, then go to *`Select → Checker`* Deselect to choose every second vertex.

Since you have an odd number of vertices, they won’t be evenly selected, but this won’t affect the stem. In fact, the slight imperfections will make it look more realistic.

![page_281_img_1.png](../images/page_281_img_1.png)

Scale it with “S”.

![page_281_img_2.png](../images/page_281_img_2.png)

Switch to the back orthographic view with “CTRL+1” on Numpad or click on the Y on the Gizmo.

![page_282_img_1.png](../images/page_282_img_1.png)

Select all with “A”.

![page_282_img_2.png](../images/page_282_img_2.png)

Extrude with “E”

![page_282_img_3.png](../images/page_282_img_3.png)

Extrude it with “E” one more time.

![page_283_img_1.png](../images/page_283_img_1.png)

Rotate with “R”

![page_283_img_2.png](../images/page_283_img_2.png)

and scale with “S.”

![page_283_img_3.png](../images/page_283_img_3.png)

Turn off proportional editing with “O” and fill with an “F.”

![page_284_img_1.png](../images/page_284_img_1.png)

Inset a new face with an “I”.

![page_284_img_2.png](../images/page_284_img_2.png)

And extrude inside with “E.”

![page_284_img_3.png](../images/page_284_img_3.png)

Switch to object mode with “TAB” and select the Pumpkin.

Go to modifier properties. Add *`modifier → Generate → Subdivision`* subsurface.

![page_285_img_1.png](../images/page_285_img_1.png)

Change Levels Viewport to 2.

![page_285_img_2.png](../images/page_285_img_2.png)

Click the RMB and choose shade smooth.

![page_285_img_3.png](../images/page_285_img_3.png)

Select the Stem. Go to modifier properties. Add *`modifier → Generate → Subdivision`* subsurface.

![page_286_img_1.png](../images/page_286_img_1.png)

Change Levels Viewport to 2.

![page_286_img_2.png](../images/page_286_img_2.png)

As you can see, something seems off with the stem. Do you remember what I told you about face orientation? Let's go over it again, just in case.

Click on overlays and turn on Face orientation.

![page_286_img_3.png](../images/page_286_img_3.png)

Face orientation shows the direction in which the normals are facing.

The blue color indicates that the face is facing outward, while the red color indicates it's facing inward.

Ideally, most of the mesh should appear blue rather than red, so you need to flip the red faces to ensure all surfaces are facing the correct direction.

Switch to Edit Mode by pressing 'TAB' and select all by pressing 'A'.

Go to Mesh - Normals - Recalculate Outside.

![page_287_img_1.png](../images/page_287_img_1.png)

Switch to object mode with “TAB.”

Click on overlays and turn off Face orientation.

![page_287_img_2.png](../images/page_287_img_2.png)

Switch to edit mode with “TAB.”

Add a loop with “CTRL+R” and move it up.

![page_288_img_1.png](../images/page_288_img_1.png)

Add one more loop and move it down.

![page_288_img_2.png](../images/page_288_img_2.png)

Add loop once again and move it up as shown.

![page_288_img_3.png](../images/page_288_img_3.png)

Choose the bottom loop while holding “ALT”+ LMB and scale it with “S” to the inside.

![page_289_img_1.png](../images/page_289_img_1.png)

Switch to object mode with “TAB.”

Move the Stem down along Z-axis with “`G+Z`.”

![page_289_img_2.png](../images/page_289_img_2.png)

Click on the camera icon. Click “N” to open the right sidebar.

![page_289_img_3.png](../images/page_289_img_3.png)

Choose view and turn on Camera to view.

![page_290_img_1.png](../images/page_290_img_1.png)

Adjust the camera. When you're satisfied, turn of camera to view to move freely without losing your perfect rendering angle.

![page_290_img_2.png](../images/page_290_img_2.png)

Switch to rendered mode.

![page_290_img_3.png](../images/page_290_img_3.png)

Change the render engine to Cycles and the device to GPU if your graphics card is better than the processor. Also, turn on denoise in the viewport.

![page_291_img_1.png](../images/page_291_img_1.png)

Click Blue Z on the Gizmo or 7 on your keyboard for the view from the top.

![page_291_img_2.png](../images/page_291_img_2.png)

Select the point light that you already had on the scene and duplicate it with “SHIFT+D.” (If you deleted it, just go to *`Add → Light → Point`*.)

Move it with “G.”

![page_291_img_3.png](../images/page_291_img_3.png)

Choose both lights and move them with “G” a bit if needed.

![page_292_img_1.png](../images/page_292_img_1.png)

Choose a second point light and duplicate it with “SHIFT+D.”

Move it with “G” as shown.

![page_292_img_2.png](../images/page_292_img_2.png)

Click on the light icon on the right and change the power to 500.

![page_292_img_3.png](../images/page_292_img_3.png)

Do the same for the second light.

![page_293_img_1.png](../images/page_293_img_1.png)

Select the stem and go to the material properties.

![page_293_img_2.png](../images/page_293_img_2.png)

Click new and rename the material to Stem.

![page_293_img_3.png](../images/page_293_img_3.png)

Select the Pumpkin and go to the material properties.

Click new and rename the material to Pumpkin.

![page_293_img_4.png](../images/page_293_img_4.png)

Place the cursor on the upper side of the screen as shown, and when you see a plus,

![page_294_img_1.png](../images/page_294_img_1.png)

just pull it down to the left while holding the left mouse click.

![page_294_img_2.png](../images/page_294_img_2.png)

Open the shader editor in the window you just created.

Click “N” to hide that sidebar on the right because you don’t need it.

![page_294_img_3.png](../images/page_294_img_3.png)

*`Add → Input → Geometry`*.

![page_294_img_4.png](../images/page_294_img_4.png)

Connect Pointiness from Geometry with Fac from Color ramp to create some edge highlights on the pumpkin.

![page_295_img_1.png](../images/page_295_img_1.png)

Connect Color from ColorRamp with Base Color from Principled BSDF.

![page_295_img_2.png](../images/page_295_img_2.png)

Move the first color picker more to the right. Change the first color in Color ramp to some brown.

![page_295_img_3.png](../images/page_295_img_3.png)

Move the second color picker the left.

![page_296_img_1.png](../images/page_296_img_1.png)

Change the second color in Color ramp to light orange.

![page_296_img_2.png](../images/page_296_img_2.png)

Adjust the colors more if necessary.

![page_296_img_3.png](../images/page_296_img_3.png)

Select the stem. Add a Geometry. Connect Pointiness from Geometry with Fac from Color ramp.

![page_296_img_4.png](../images/page_296_img_4.png)

Connect Color from Color ramp with Base Color from Principled BSDF.

![page_297_img_1.png](../images/page_297_img_1.png)

Move the first color picker more to the right.

![page_297_img_2.png](../images/page_297_img_2.png)

Right mouse click on the stem, shade smooth.

![page_297_img_3.png](../images/page_297_img_3.png)

Change the first color in Color ramp to dark green.

![page_298_img_1.png](../images/page_298_img_1.png)

Move the second color picker more to the left.

![page_298_img_2.png](../images/page_298_img_2.png)

Change the second color in Color ramp to llight green. And adjust any other color if necessary.

![page_298_img_3.png](../images/page_298_img_3.png)

If you like how your pumpkin looks, click Render and render image.

Congratulations! You’ve learned how to model and texture a Pumpkin in Blender!

Happy Blending!

Byee, see you next time!
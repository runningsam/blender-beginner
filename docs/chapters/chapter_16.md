# Chapter 16: Let's model a cake

Now, you have a plate.

It is time to add a cake.

Position the 3D cursor on the plate by clicking “SHIFT+RMB” on the place you want to add your next object

![page_141_img_1.png](images/page_141_img_1.png)

or if you want to do it more precisely, switch to the edit mode with “TAB”.

Select the faces where you want your 3D cursor to be

![page_141_img_2.png](images/page_141_img_2.png)

Press “SHIFT+S” to get this pie menu

![page_141_img_3.png](images/page_141_img_3.png)

and choose Cursor to selected.

Now your 3D cursor is in the middle of a plate.

![page_142_img_1.png](images/page_142_img_1.png)

Switch back to object mode and add a new object.

This time, you will add a cylinder because it's the best shape for making a cake out of.

Click “SHIFT+A” —> add Mesh —> Cylinder.

![page_142_img_2.png](images/page_142_img_2.png)

Scale it with “S” until you think it is the perfect size for the cake.

![page_143_img_1.png](images/page_143_img_1.png)

Move it up with “`G+Z`” and apply scale with “CTRL+A” — apply Scale.

![page_143_img_2.png](images/page_143_img_2.png)

You want to have your cake on the plate, right?

So it is time to teach you something called SNAP.

Select the object you want, in this case cylinder, and turn on snap tool by clicking where the arrow is pointing, or simply turn it on (and off) by pressing “SHIFT+TAB”.

![page_144_img_1.png](images/page_144_img_1.png)

Now move it down along the Z-axis and place the mouse on the face to which you want it to snap and confirm it with the LMB.

![page_144_img_2.png](images/page_144_img_2.png)

You can snap to the face, vertex, edge, and much more. I will show you more examples of snapping in the future, but for now, learn at least face snapping. So be sure that for a snap target is selected the face before you snap.

![page_145_img_1.png](images/page_145_img_1.png)

Now you can switch to edit mode with “TAB”.

Change the view to the top orthographic with 7 on the numpad or click on this blue Z in the top right corner.

![page_145_img_2.png](images/page_145_img_2.png)

Select vertices as shown

![page_146_img_1.png](images/page_146_img_1.png)

and join them with “J”.

![page_146_img_2.png](images/page_146_img_2.png)

Select the other two vertices

![page_146_img_3.png](images/page_146_img_3.png)

and joined them again with “J”.

![page_147_img_1.png](images/page_147_img_1.png)

Select these two vertices and join them with “J”.

![page_147_img_2.png](images/page_147_img_2.png)

Turn on X-ray mode with “ALT+Z” so you can select all vertices.

Select this left part,

![page_148_img_1.png](images/page_148_img_1.png)

and delete vertices with an “X”.

![page_148_img_2.png](images/page_148_img_2.png)

Repeat the previous steps until you get this.

![page_148_img_3.png](images/page_148_img_3.png)

I just realized that I didn’t teach you about moving the view until now. So let’s correct that because you will need it in the next step.

## MOVING THE VIEW

If you want to zoom in on something, you scroll your mouse wheel up.

![page_149_img_1.png](images/page_149_img_1.png)

If you want to zoom it out, scroll your mouse wheel down.

![page_149_img_2.png](images/page_149_img_2.png)

When you are holding the mouse wheel and moving the mouse, you can see all the different views.

![page_150_img_1.png](images/page_150_img_1.png)

If you are holding “SHIFT+mouse wheel,” you can move the view without rotating the object.

You can also zoom in/out the view if you click where the arrow is pointing and hold LMB while moving the mouse up or down.

![page_150_img_2.png](images/page_150_img_2.png)

You can also move the view if you click where the arrow is pointing and hold LMB while moving the mouse around.

![page_150_img_3.png](images/page_150_img_3.png)

Now we can move on with the cake.

After you delete all those vertices, move the camera while holding the mouse wheel and delete those vertices with “X” as well.

![page_151_img_1.png](images/page_151_img_1.png)

Select all with “A”.

![page_151_img_2.png](images/page_151_img_2.png)

And extrude it down along the Z-axis with “`E+Z`”.

![page_151_img_3.png](images/page_151_img_3.png)

Switch to object mode with “TAB” and turn off X-ray with “ALT+Z.

![page_152_img_1.png](images/page_152_img_1.png)

Position the 3D cursor with “SHIFT+RMB” to the bottom of the cake as it is shown.

![page_152_img_2.png](images/page_152_img_2.png)

Go to object —> set origin —> origin to 3d cursor.

![page_153_img_1.png](images/page_153_img_1.png)

And you will see that the origin is moved where the 3D cursor is.

![page_153_img_2.png](images/page_153_img_2.png)

Click on the wrench icon and then add a modifier.

Add modifier —> generate —> Bevel.

![page_154_img_1.png](images/page_154_img_1.png)

Change the Amount to around 0.021 and the segments to around 3. (You can change those as you want. Adjust the numbers as you think they would look best.)

![page_154_img_2.png](images/page_154_img_2.png)

Switch to edit mode with “TAB”.

![page_154_img_3.png](images/page_154_img_3.png)

Switch from selecting vertices to selecting faces with 3, and select those faces.

![page_155_img_1.png](images/page_155_img_1.png)

And now you are encountering something new and useful again - duplicating faces.

If you press “SHIFT+D,” you can duplicate the face.

So press it to duplicate selected faces. You want those duplicated faces at the exact same position as they were, so just click RMB to return them to the original position.

![page_155_img_2.png](images/page_155_img_2.png)

Click “ALT+E” and choose Extrude Faces Along Normals.

Last time, I think I didn’t mention about Even thickness off and on.

You can see that

![page_156_img_1.png](images/page_156_img_1.png)

currently, after you started extruding along normals, the cake shape is a bit off.

![page_156_img_2.png](images/page_156_img_2.png)

Because Even thickness is turned off, this happens.

![page_156_img_3.png](images/page_156_img_3.png)

To turn on” Even thickness”, either press S (for turning it off and on) or hold ALT.

And this is the result after turning on Even thickness.

![page_157_img_1.png](images/page_157_img_1.png)

Much better, right?

Now you can extrude your cake as much as you want.

![page_157_img_2.png](images/page_157_img_2.png)

Select this part of the cake by showing your pointer somewhere on the inside part of the cake, and then click “L” for linked.

![page_158_img_1.png](images/page_158_img_1.png)

Click “CTRL+R” to add loops to that part of the cake.

![page_158_img_2.png](images/page_158_img_2.png)

Scroll the mouse wheel how many loop cuts you want to add. In this case, I added 4 loop cuts.

![page_159_img_1.png](images/page_159_img_1.png)

Click LMB to confirm the number and then ESC or RMB to center them.

![page_159_img_2.png](images/page_159_img_2.png)

It is time to learn some basics about adding materials to objects.

ADDING MATERIALS TO THE OBJECTS If you want to add material to your objects, click where the arrow is pointing - Material properties.

![page_160_img_1.png](images/page_160_img_1.png)

Switch to a rendered view so you can see all the materials that you add.

![page_160_img_2.png](images/page_160_img_2.png)

I don’t want to bother you with adding light for now, so just click here and turn off the Scene world.

![page_160_img_3.png](images/page_160_img_3.png)

Thatwill do for a start.

Before you add materials, let’s rename your objects.

![page_161_img_1.png](images/page_161_img_1.png)

So instead of a cube and a cylinder, you can rename it to a plate and a cake.

Double-click with the LMB on the object that you want to rename. When letters look like this, type your new name.

![page_161_img_2.png](images/page_161_img_2.png)

![page_161_img_3.png](images/page_161_img_3.png)

Try to rename your objects from the start because it will be much easier to work like that, and you will save yourself a lot of time.

Now you can add a material.

Select this part with “L”.

![page_162_img_1.png](images/page_162_img_1.png)

Click this + to add a new material slot.

![page_162_img_2.png](images/page_162_img_2.png)

Click Assign to assign material to the selected face.

![page_162_img_3.png](images/page_162_img_3.png)

Click “NEW” to add new material.

![page_163_img_1.png](images/page_163_img_1.png)

![page_163_img_2.png](images/page_163_img_2.png)

Choose the base color as desired. I chose yellow.

![page_163_img_3.png](images/page_163_img_3.png)

Switch to selecting faces with 3. Press “ALT” and select this first loop.

![page_163_img_4.png](images/page_163_img_4.png)

While holding “SHIFT+ALT,” select two other loops.

![page_164_img_1.png](images/page_164_img_1.png)

Click + again to add a new material slot, assign, and a new.

![page_164_img_2.png](images/page_164_img_2.png)

Choose the base color as desired. I chose a lighter shade of yellow.

![page_164_img_3.png](images/page_164_img_3.png)

Switch to object mode. Select the cake. Turn on snap. Make sure that for a snap target is selected the face before you snap.

Click “`G+Z`” and snap it to the plate.

![page_165_img_1.png](images/page_165_img_1.png)

Change the view to the top orthographic with 7 on the numpad.

Duplicate the cake with “SHIFT+D” click “ESC” or RMB to return it to the original position.

Click “R” and rotate it as you want. When you decide on your new position for a piece of cake, confirm it with the LMB.

![page_165_img_2.png](images/page_165_img_2.png)

It is time to learn a new, fun trick.

If you want to repeat the same action again, you don’t need to duplicate and rotate it again, but just click “SHIFT+R” to repeat this step with as many pieces as you want to create.

![page_166_img_1.png](images/page_166_img_1.png)

![page_166_img_2.png](images/page_166_img_2.png)

Congratulations! You just made your 3D cartoony cake!

I think it is time to learn how to render.
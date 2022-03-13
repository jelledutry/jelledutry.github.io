---
layout: work
title:  🌊🤙
date:   2021-05-31 12:00:00 +0100
image: /images/SurferGirl.jpg
permalink: /work/surfergirl/
---

<p><iframe src="https://player.vimeo.com/video/558779155?h=5915cdaf8e" width="640" height="800" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></p>

When I saw this amazing illustration by [Sören Selleslagh](https://www.sorenselleslagh.com), I could not resist animating it! This was easier said than done, the illustration was full of different textures and elements.  
But what's better than a good challenge?

A good challenge with a great outcome ofcourse!

# Making of
There were three challenges to this illustration: the shading and textures, the undulating waves and the surfboard cutting through the water.
<h2>Shading</h2>
<video width="720" height="900" frameborder="0" autoplay muted loop class="post img">
  <source src="/images/Surfer_Compositing_01.mp4" type="video/mp4">
</video>
For the shading I used a couple of techniques. The background and some texture-overlays were painted in procreate to match the look of the original. The cliffs and other background elements are shapelayers with gradients and feathered mask.

The body was the most difficult to get right. To make things easier, I decided to build up every bodypart in their own composition. This way I could focus on the shading of one element at a time. Once again it's a combination of shapelayers, masks and gradients.

## The wave
<video width="720" height="360" frameborder="0" autoplay muted loop class="post img">
  <source src="/images/Surfer_C4D_ScreenRecording_01.mp4" type="video/mp4">
</video>
For the wave I used a combination of techniques. I first modelled a very basic wave in Cinema 4D, matching the perspective of the illustration. On this mesh I applied two deformers.

First a displacer with a displacement map out of After Effects. This displacement map is basically a turbulent noise moving up with some stretching on the top. You can see it below. The stretching is done with CC Scalewipe, this gives a smooth fallof.

The second deformer is a formula, adding some horizontal waves and variation to the whole. All of this combined was then rendered to a UV pass and a Depth pass.
<video width="720" height="300" frameborder="0" autoplay muted loop class="post img">
  <source src="/images/Surfer_Wave_01.mp4" type="video/mp4">
</video> 
The UV pass was used with [Pixmap](https://wunkolo.itch.io/pixmap) a cool little plugin that made my life a whole lot easier. Basicly it allows you to retexture your 3D renders directly in after effects. This made iterating on the wave texture super easy! It was a workflow I had never used before, but it a fun and fast way of working.

## The surfboard
<video width="720" height="300" frameborder="0" autoplay muted loop class="post img">
  <source src="/images/Surfer_WaveMatte_01.mp4" type="video/mp4">
</video> 
The Depth pass was used to mask out the surfboard cutting through the water. The Extract effect was used to cut off everything darker then a certain value. With a few keyframes it was easy to match the surfboard moving through the water.

Hope you learned something here!  
Jelle
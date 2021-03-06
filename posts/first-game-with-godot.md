---
title: 'My first app/game with Godot - February'
tags: ["godot"]
published: true
date: '2021-02-21'
---
  
This february I'm actually working on my first game prototype, I say prototype because I'm still too slow to produce anything coherent nor polished.
The first few months will be focused on learning the mechanics of the Godot Engine practically, I spent january completing the tutorials on the website and now I plunge my hands in the dirt.

I tried to make an armagetron clone which is himself a clone of the light cycle scene from the movie Tron (both old and new version has a scene of light bikes).

I followed the "your first game tutorial" in the godot documentation up to the point where you have to move the player, ignoring the parts where they add sprites and animations for the sake of keeping my prototype simple.
That's where the struggle started, first I had to make a wall that draws behind the player while he moves.
Many tutorials talk of the subject, but they are still quite cryptic sometimes because the people that share them have already a large knowledge about the engine.

Next I had to add collisions to these walls so that when the player or an ennemy make contact with a light wall, he dies.
On the paper it sounds easy, but I spent a lot of time understanding how to duplicate nodes and add to them children because otherwise all the children share the same instance and when you change a property like position, all the children move to the same position, annoying !
  
[Link to the github repo](https://github.com/spoogetti/TronRemake-godot) 
  
Some videos to have an idea of what I planned to make, but in 2D :  

Armagetron advanced game :  
  
<iframe style="width: 320px; height: 180px" src="https://www.youtube.com/embed/9rYk3056JTs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

The scene from Tron :   

<iframe style="width: 320px; height: 180px" src="https://www.youtube.com/embed/SqSuRdkglxM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    


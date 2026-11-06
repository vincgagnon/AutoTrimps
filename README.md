# AutoTrimps - Zek Fork



## Discussion / Discord Channel
<a href="https://discord.gg/Ztcnfjr"><img src="https://discord.com/assets/3437c10597c1526c3dbd98c737c2bcae.svg" width=48></a>
Discord is a chat program. Come to talk about AutoTrimps, for help, or suggestions for new features : https://discord.gg/Ztcnfjr



## Current Version - Ongoing Development!
- Zek Fork. All changes made by Zek using GenBTC as base. Currently up-to-date as of 06/2022.



## AT Script Installation
### Browser
Step 1:  
Install TamperMonkey:  
https://www.tampermonkey.net/

Step 2:  
Click this link: https://github.com/Zorn192/AutoTrimps/raw/gh-pages/.user.js  
If clicking the link does not work, copy the contents of user.js into a new script inside tampermonkey.  
If you are unsure how to do that, copy this:  
```
var script = document.createElement('script');
script.id = 'AutoTrimps-Zek';
script.src = 'https://vincgagnon.github.io/AutoTrimps/AutoTrimps2.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
```  
Press F12 inside the game, this opens the console, and paste the text into it and hit enter, this will load the script. You will have to do this everytime you refresh the game though so I recommend getting tampermonkey to do it for you!

Step 3:  
Configure settings. Will NOT work as intended with default settings. 

### Steam
Step 1:  
Go to this link to open the mods.js file on Github: <a href="https://github.com/Zorn192/AutoTrimps/blob/gh-pages/mods.js">mods.js</a>  
Then, right click the Raw button, hit Save link as, and save the mods.js file somewhere to your computer where you can find it, like desktop.  
![Download mods.js](https://i.imgur.com/opuO6yd.png)  

Step 2:  
In your Steam Library (where you see all your games in the Steam app), right click on Trimps, go to Manage, then Browse local files.  
A folder where Trimps is installed inside Steam should open.  
![Go to Trimps directory](https://imgur.com/cr35LK2.png)

Inside this folder, navigate to the mods folder (you should be in Steam\steamapps\common\Trimps\mods), and place the mods.js file there, like so:  
![Insert mods.js](https://imgur.com/muW6cUh.png)

Advanced users: If you have other mods installed then just copy the text in AT's mods.js and place it somewhere in your existing mods.js file.

Step 3:  
Restart the game, or if the game is already running, hit F5 to refresh.

Step 4:  
Configure your settings. AT will not work properly if they are not configured!

## Graphs only Script Installation
### Browser
Step 1:  
Install TamperMonkey:  
https://www.tampermonkey.net/

Step 2: 
Click this link: https://github.com/Zorn192/AutoTrimps/blob/gh-pages/GraphsOnly.user.js  
If clicking the link does not work, copy the contents of GraphsOnly.user.js into a new script inside tampermonkey.  
If you are unsure how to do that, copy this:  
```
var script = document.createElement('script');
script.id = 'AutoTrimps-Graphs';
script.src = 'https://vincgagnon.github.io/AutoTrimps/GraphsOnly.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
```  
Press F12 inside the game, this opens the console, and paste the text into it and hit enter, this will load the script. You will have to do this everytime you refresh the game though so I recommend getting tampermonkey to do it for you!  

Step 3:  
Enjoy your Graphs!

### Steam
Step 1:  
Go to this link to open the modsGRAPH.js file on Github: <a href="https://github.com/Zorn192/AutoTrimps/blob/gh-pages/modsGRAPH.js">modsGRAPH.js</a>  
Then, right click the Raw button, hit Save link as, and save the modsGRAPH.js file somewhere to your computer where you can find it, like desktop.  
![Download mods.js](https://i.imgur.com/opuO6yd.png)  

Step 2:  
Rename the modsGRAPH.js file to mods.js (Right click the file, rename, then remove GRAPH). Sorry but I can't have 2 mods.js named the same so Graphs Only users have to deal with it :(

Step 3:  
In your Steam Library (where you see all your games in the Steam app), right click on Trimps, go to Manage, then Browse local files.  
A folder where Trimps is installed inside Steam should open.  
![Go to Trimps directory](https://imgur.com/cr35LK2.png)

Inside this folder, navigate to the mods folder (you should be in Steam\steamapps\common\Trimps\mods), and place the mods.js file that we renamed earlier there, like so:  
![Insert mods.js](https://imgur.com/muW6cUh.png)

Advanced users: If you have other mods installed then just copy the text in AT's mods.js and place it somewhere in your existing mods.js file.

Step 4:  
Restart the game, or if the game is already running, hit F5 to refresh.

Step 5:  
Enjoy your Graphs!

## Equipment && Upgrade's colour explaination:

White - Upgrade is not available

Yellow - Upgrade is not affordable

Orange - Upgrade is affordable, but will lower stats

Red - Will buy next

## Troubleshooting

**Combat won't start** - Make sure you have enabled the Better Auto Fight/Vanilla setting in Combat & Stance Settings. If you're not on dark theme, you may see a tiny thin black bar in combat, click it to show this setting.

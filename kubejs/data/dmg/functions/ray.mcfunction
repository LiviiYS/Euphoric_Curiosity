execute unless block ~ ~ ~ #dmg:non_solid run function dmg:hit_block
scoreboard players add #distance chaintemp 1
execute if score #hit chaintemp matches 0 if score #distance chaintemp matches ..800 positioned ^ ^ ^0.1 run function dmg:ray
effect give @e[distance=..4,tag=!mist,tag=!undead] minecraft:instant_damage 1 1 true
effect give @e[distance=..4,tag=!mist,tag=undead] minecraft:instant_health 1 1 true


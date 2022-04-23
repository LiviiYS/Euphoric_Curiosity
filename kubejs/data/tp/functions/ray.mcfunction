execute unless block ~ ~ ~ #tp:non_solid run function tp:hit_block
scoreboard players add #distance chaintemp 1
execute if score #hit chaintemp matches 0 if score #distance chaintemp matches ..800 positioned ^ ^ ^0.1 run function tp:ray
execute if score #hit chaintemp matches 0 unless score #distance chaintemp matches ..800 positioned ^ ^ ^ run tp ^ ^ ^80
particle minecraft:dust 0 0 0 0.9 ~ ~ ~ .6 .5 .6 1 100

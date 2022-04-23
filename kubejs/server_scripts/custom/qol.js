/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  // Saddle

  event.remove({ output: "minecraft:saddle" });
  event.shaped("minecraft:saddle", ['A A', 'BAB', 'C C'], {A: "minecraft:leather", B: "additionaladditions:rope", C: "minecraft:iron_ingot"});

// Origins Orb
event.remove({output: 'origins:orb_of_origin'});
event.shaped('origins:orb_of_origin', [
['doom:argent_energy', 'bewitchment:cleansing_balm', 'minecraft:nether_star'],
]);

});

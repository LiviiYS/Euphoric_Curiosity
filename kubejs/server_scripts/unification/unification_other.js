/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  // Ropes

  event.replaceInput({}, "campanion:rope", "additionaladditions:rope");

  // BYG crafting tables

  ["aspen", "baobab", "blue_enchanted", "bulbis", "cherry", "cika", "cypress", "ebony", "ether", "fir", "green_enchanted", "holly", "imparius", "jacaranda", "lament", "mahogany", "mangrove", "maple", "nightshade", "palm", "pine", "rainbow_eucalyptus", "redwood", "skyris", "willow", "witch_hazel", "zelkova", "sythian", "embur"].forEach(function (item, index) {
    event.remove({ output: "byg:" + item + "_crafting_table"});
  });

  // BetterNether & BetterEnd crafting tables

  ["mossy_glowshroom", "pythadendron", "end_lotus", "lacugrove", "dragon_tree", "tenanea", "helix_tree", "umbrella_tree", "jellyshroom", "lucernia"].forEach(function (item, index) {
    event.remove({ output: "betterend:" + item + "_crafting_table"});
  });

  // Oh no something is wrong with the crating tables now

  //event.remove({ output: "minecraft:crafting_table" });
  //event.shaped('minecraft:crafting_table', ['AA', 'AA'], {A: '#minecraft:planks'});

  // Mortar and Pestle (yes i unified this)

  event.remove({ id: "botania:pestle_and_mortar" });
  event.remove({ id: "lightestlamp:stickandbowl" });

  event.replaceInput({}, "botania:pestle_and_mortar", "croptopia:mortar_and_pestle");

  // Ectoplasm

  event.replaceInput({}, "bewitchment:ectoplasm", "biomemakeover:ectoplasm");

});
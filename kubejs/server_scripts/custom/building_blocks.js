/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  // Magmas

  event.shaped("2x valley:scalding_stone", ['AB'], {A: "minecraft:stone", B: "minecraft:magma_block"});
  event.shaped("2x valley:scalding_sandstone", ['AB'], {A: "minecraft:sandstone", B: "minecraft:magma_block"});
  event.shaped("2x valley:scalding_volc_stone", ['AB'], {A: "valley:volc_stone", B: "minecraft:magma_block"});
  event.shaped("2x valley:glacial_stone", ['AB'], {A: "minecraft:packed_ice", B: "minecraft:magma_block"});

});

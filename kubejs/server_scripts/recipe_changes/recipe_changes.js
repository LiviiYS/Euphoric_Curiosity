/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  // Gilded netherite

  event.remove({ output: "adventurez:stone_golem_helmet" });
  event.remove({ output: "adventurez:stone_golem_chestplate" });
  event.remove({ output: "adventurez:stone_golem_leggings" });
  event.remove({ output: "adventurez:stone_golem_boots" });
  
  event.smithing('additionaladditions:gilded_netherite_helmet', 'minecraft:netherite_helmet', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_chestplate', 'minecraft:netherite_chestplate', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_leggings', 'minecraft:netherite_leggings', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_boots', 'minecraft:netherite_boots', 'adventurez:gilded_netherite_fragment');

  event.remove({ output: "crookedcrooks:gilded_netherite_crook" });
  
  event.smithing('additionaladditions:gilded_netherite_sword', 'minecraft:netherite_sword', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_pickaxe', 'minecraft:netherite_pickaxe', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_axe', 'minecraft:netherite_axe', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_shovel', 'minecraft:netherite_shovel', 'adventurez:gilded_netherite_fragment');
  event.smithing('additionaladditions:gilded_netherite_hoe', 'minecraft:netherite_hoe', 'adventurez:gilded_netherite_fragment');
  event.smithing('crookedcrooks:gilded_netherite_crook', 'crookedcrooks:netherite_crook', 'adventurez:gilded_netherite_fragment');

  // Gobber dragon armor

  event.remove({ output: "gobber2:dragon_star" });
  event.shaped('gobber2:dragon_star', [
    'ABA', 'CDC', 'ACA'
  ], {
    A: 'bosses_of_mass_destruction:void_lily',
    B: 'plushies:dragon_plushie',
    C: 'gobber2:gobber2_block_end',
    D: 'blockus:nether_stars_block'
  })

  event.remove({ output: "gobber2:dragon_elytra" });
  event.shaped('gobber2:dragon_elytra', [
    'ABA', 'CDC', 'ACA'
  ], {
    A: 'bosses_of_mass_destruction:void_lily',
    B: 'plushies:dragon_plushie',
    C: 'gobber2:gobber2_block_end',
    D: 'bosses_of_mass_destruction:levitation_block'
  })

  event.remove({ id: "gobber2:gobber2_ingot" });
  event.remove({ id: "gobber2:gobber2_ingot_nether" });
  event.remove({ id: "gobber2:gobber2_ingot_end" });

  event.shaped('gobber2:gobber2_ingot', ['AB', 'CD'], {
    A: 'gobber2:gobber2_glob',
    B: 'minecraft:diamond',
    C: 'minecraft:iron_ingot',
    D: 'minecraft:gold_ingot'
  })
  event.shaped('gobber2:gobber2_ingot_nether', ['AB', 'BC'], {
    A: 'gobber2:gobber2_glob_nether',
    B: 'gobber2:gobber2_ingot',
    C: 'minecraft:netherite_scrap'
  })
  event.shaped('gobber2:gobber2_ingot_end', ['AB', 'BC'], {
    A: 'gobber2:gobber2_glob_end',
    B: 'gobber2:gobber2_ingot_nether',
    C: 'minecraft:chorus_flower'
  })

  // Shields

  event.remove({ id: "basicshields:wooden_shield" });
  event.remove({ id: "gateofbabylon:shield/stone_shield" });
  event.shaped("basicshields:wooden_shield", ['ABA', 'AAA', ' A '], {A: "#minecraft:planks", B: "#minecraft:planks"});
  event.shaped("gateofbabylon:stone_shield", ['ABA', 'AAA', ' A '], {A: "minecraft:cobblestone", B: "minecraft:iron_ingot"});

  // MRE

  event.remove({ id: "campanion:mre" });

});

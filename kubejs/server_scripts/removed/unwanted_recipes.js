/// Made by LiviiYS ///
// We're deleting recipes here, but items will stay in the pack

onEvent('recipes', (event) => {

  // Wither totems

  event.remove({ output: "totemmod:totem_base" });
  event.remove({ output: "totemmod:totem_top" });

  // Bountiful

  event.remove({ output: "bountiful:bountyboard" });

  // Heart of the sky

  event.remove({ id: "winged:heart_of_the_sky" });
  event.remove({ id: "winged:heart_of_the_sky_25" });
  event.remove({ id: "winged:heart_of_the_sky_50" });

  // Staff of transformation

  event.remove({ id: "gobber2:wand_redstone_block_to_glowstone" });
  event.remove({ id: "gobber2:wand_obsidian_to_crying" });
  event.remove({ id: "gobber2:wand_lapis_block_to_quartz_block" });
  event.remove({ id: "gobber2:wand_granite_to_purpur" });
  event.remove({ id: "gobber2:wand_gold_block_to_end_rod" });
  event.remove({ id: "gobber2:wand_emerald_block_to_sea_lantern" });
  event.remove({ id: "gobber2:wand_diamond_block_to_ghast_tear" });

  // Gobber2's OP recipes

  // event.remove({ id: "gobber2:gobber2_netherite_scrap_from_smelting" });

});

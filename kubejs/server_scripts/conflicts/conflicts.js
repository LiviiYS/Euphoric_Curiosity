/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  // Boat Chests

  ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"].forEach(function (item, index) {
    event.remove({ output: "twm:" + item + "_chest_boat" });
  });

  // Small logs (to fix wooden bucket recipe)

  ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"].forEach(function (item, index) {
    event.remove({ output: "blockus:" + item + "_small_logs" });
    event.shaped("blockus:" + item + "_small_logs", ['AAA'], {A: "minecraft:" + item + "_log"})
  });

  // Croptopia Knife

  event.remove({ output: "croptopia:knife" });
  event.shaped("croptopia:knife", ['AA', 'B '], {A: "minecraft:iron_ingot", B: "minecraft:stick"});

  // Tools and armor

  ["sword", "pickaxe", "axe", "shovel", "hoe"].forEach(function (item, index) {
    event.remove({ output: "oxidized:rose_gold_" + item });
    event.remove({ output: "valley:rg_" + item });
  });
  ["helmet", "chestplate", "leggings", "boots"].forEach(function (item, index) {
    event.remove({ output: "valley:rg_" + item });
    event.remove({ output: "techreborn:silver_" + item });
    event.remove({ output: "techreborn:steel_" + item });
  });
  ["sword", "pickaxe", "axe", "spade", "hoe", "helmet", "chestplate", "leggings", "boots"].forEach(function (item, index) {
    event.remove({ output: "techreborn:bronze_" + item });
  });
  event.remove({ output: "adapaxels:tech_reborn_bronze_paxel" });

  // Copper Buttons

  event.remove({ output: "friendsandfoes:copper_button" });
  event.remove({ output: "oxidized:copper_button" });
  event.stonecutting("friendsandfoes:copper_button", "minecraft:copper_block");
});
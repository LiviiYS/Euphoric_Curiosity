/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  event.replaceInput({}, "croptopia:blueberry", "byg:blueberries");
  event.replaceInput({}, "promenade:blueberries", "byg:blueberries");
  event.replaceOutput({}, "promenade:blueberries", "byg:blueberries");
  event.replaceInput({}, "croptopia:corn", "tacocraft:corn");
  event.replaceInput({}, "croptopia:rice", "farmersdelight:rice");
  event.replaceInput({}, "croptopia:tomato", "farmersdelight:tomato");
  event.replaceInput({}, "sandwichable:tomato", "farmersdelight:tomato");
  event.replaceInput({}, "croptopia:onion", "farmersdelight:onion");
  event.replaceInput({}, "sandwichable:onion", "farmersdelight:onion");
  event.replaceInput({}, "croptopia:cabbage", "farmersdelight:cabbage");
  event.replaceInput({}, "croptopia:cucumber", "sandwichable:cucumber");
  event.replaceInput({}, "sandwichable:lettuce_head", "croptopia:lettuce");
  event.replaceInput({}, "croptopia:garlic", "bewitchment:garlic");
  event.replaceInput({}, "croptopia:banana", "promenade:banana");
  event.replaceInput({}, "croptopia:mango", "promenade:mango");
  event.replaceInput({}, "croptopia:apricot", "promenade:apricot");

  event.remove({ output: "croptopia:rice_seed" });
  event.remove({ output: "croptopia:tomato_seed" });
  event.remove({ output: "sandwichable:tomato_seeds" });
  event.remove({ output: "croptopia:onion_seed" });
  event.remove({ output: "croptopia:cabbage_seed" });
  event.remove({ output: "croptopia:blueberry_seed" });
  event.remove({ output: "croptopia:corn_seed" });
  event.remove({ output: "croptopia:cucumber_seed" });
  event.remove({ output: "croptopia:garlic_seed" });
  event.remove({ output: "croptopia:banana_sapling" });
  event.remove({ output: "croptopia:mango_sapling" });
  event.remove({ output: "croptopia:apricot_sapling" });

  event.remove({ output: "farmersdelight:fried_egg" });
  event.replaceInput({}, "farmersdelight:fried_egg", "additionaladditions:fried_egg");
  event.replaceInput({}, "croptopia:bacon", "farmersdelight:bacon");
  event.replaceInput({}, "croptopia:cooked_bacon", "farmersdelight:cooked_bacon");

  event.shaped("croptopia:flour", ['AA'], {A: "minecraft:wheat"});
  event.shaped("croptopia:flour", ['AA'], {A: "croptopia:barley"});
  event.shaped("croptopia:flour", ['AA'], {A: "croptopia:oat"});

  event.remove({ id: "tacocraft:tortilla_dough" });
  event.remove({ output: "croptopia:guide" });

  event.shaped("tacocraft:tortilla_dough", ['AAA'], {A: "tacocraft:corn"});
  event.shaped("croptopia:guide", ['AAA', 'B  '], {A: "#c:crops", B: "minecraft:book"});

  event.remove({ id: "sandwichable:salt" });
  event.shaped("2x bewitchment:salt", ['A'], {A: "sandwichable:salt"});

});
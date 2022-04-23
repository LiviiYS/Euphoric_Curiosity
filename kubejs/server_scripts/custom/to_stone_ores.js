/// Made by chuunkyz ///

onEvent('recipes', (event) => {

  // Deepslate

  event.shaped("indrev:nikolite_ore", ["A"], {A: "indrev:deepslate_nikolite_ore"});

  event.shaped("gobber2:gobber2_ore", ["A"], {A: "gobber2:gobber2_ore_deepslate"});

  ["bauxite", "galena", "iridium", "lead", "ruby", "sapphire", "silver", "tin"].forEach(function (item, index) {
    event.shaped("techreborn:" + item + "_ore", ["A"], {A: "techreborn:deepslate_" + item + "_ore"});
  });

  event.shaped("ae2:quartz_ore", ["A"], {A: "ae2:deepslate_quartz_ore"});

});

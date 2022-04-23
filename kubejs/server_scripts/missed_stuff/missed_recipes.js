/// Made by LiviiYS ///

onEvent('recipes', (event) => {
  
  // Storage Request

  event.shaped('slotlink:request', [
    'TCT', 'CGC', 'TCT'
  ], {
    G: '#c:gold_ingots',
    T: 'minecraft:crafting_table',
    C: 'slotlink:link_cable'
  });

});
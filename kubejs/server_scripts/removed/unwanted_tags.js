/// Made by chuunkyz ///
// We're deleting recipes here, but items will stay in the pack

onEvent('tags.items', (event) => {

  // Beacon Items

  event.remove('minecraft:beacon_payment_items', "bewitchment:silver_ingot");
  event.remove('minecraft:beacon_payment_items', "indrev:silver_ingot");
  event.remove('minecraft:beacon_payment_items', "modern_industrialization:silver_ingot");

  // Cincinnasite

  event.removeAllTagsFrom("betternether:cincinnasite_ingot");
  event.removeAllTagsFrom("betternether:cincinnasite_shears");

  // G.U.T. (General Unwanted Tags)

  event.removeAll('dehydration:hydrating_drinks');
  event.removeAll('dehydration:hydrating_foods');
  event.removeAll('nourish:carbohydrates');
  event.removeAll('nourish:fats');
  event.removeAll('nourish:fruit');
  event.removeAll('nourish:protein');
  event.removeAll('nourish:sweets');
  event.removeAll('nourish:vegetables');

});

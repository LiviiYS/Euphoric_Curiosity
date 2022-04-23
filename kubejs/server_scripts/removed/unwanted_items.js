/// Made by LiviiYS ///
// We're deleting recipes here, and hiding the items from REI then

onEvent('recipes', (event) => {

  // Rings

  event.remove({ output: "kibe:diamond_ring" });
  event.remove({ output: "kibe:angel_ring" });
  event.remove({ output: "kibe:light_ring" });

  // Sleeping Bags

  ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "green", "brown", "red", "black"].forEach(function (item, index) {
    event.remove({ output: "kibe:" + item + "_sleeping_bag" });
  });
  event.remove({ output: "kibe:sleeping_bag" });

  // Campanion

  event.remove({ id: "campanion:rope" });
  event.remove({ id: "campanion:sleeping_bag" });
  event.remove({ id: "campanion:grappling_hook" });

});

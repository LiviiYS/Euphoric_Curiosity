/// Made by LiviiYS ///

onEvent('recipes', (event) => {

  // Quantum Armor

  event.remove({ output: "modern_industrialization:quantum_helmet" });
  event.remove({ output: "modern_industrialization:quantum_chestplate" });
  event.remove({ output: "modern_industrialization:quantum_leggings" });
  event.remove({ output: "modern_industrialization:quantum_boots" });
  event.remove({ output: "modern_industrialization:quantum_sword" });

  event.smithing("modern_industrialization:quantum_helmet", "dragonloot:dragon_helmet", "modern_industrialization:quantum_upgrade");
  event.smithing("modern_industrialization:quantum_chestplate", "dragonloot:upgraded_dragon_chestplate", "modern_industrialization:quantum_upgrade");
  event.smithing("modern_industrialization:quantum_leggings", "dragonloot:dragon_leggings", "modern_industrialization:quantum_upgrade");
  event.smithing("modern_industrialization:quantum_boots", "dragonloot:dragon_boots", "modern_industrialization:quantum_upgrade");
  event.smithing("modern_industrialization:quantum_sword", "dragonloot:dragon_sword", "modern_industrialization:quantum_upgrade");

});

document.addEventListener("DOMContentLoaded", () => {
  const aimbotToggle = document.getElementById("aimbot-toggle");
  const aimfovSlider = document.getElementById("aimfov-slider");
  const fovValueDisplay = document.getElementById("fov-value");
  const recoilToggle = document.getElementById("recoil-toggle");

  // Atualiza a exibição do valor do FOV em tempo real
  aimfovSlider.addEventListener("input", (e) => {
    fovValueDisplay.textContent = `${e.target.value}°`;
  });

  // Eventos de alteração das opções
  aimbotToggle.addEventListener("change", (e) => {
    console.log("Aimbot:", e.target.checked ? "Ativado" : "Desativado");
  });

  recoilToggle.addEventListener("change", (e) => {
    console.log("No Recoil:", e.target.checked ? "Ativado" : "Desativado");
  });
});
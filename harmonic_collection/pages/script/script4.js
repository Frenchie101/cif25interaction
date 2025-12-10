const Lbtn = document.getElementById("L");
const Mbtn = document.getElementById("M");
const Sbtn = document.getElementById("S");
const hueSlider = document.getElementById("hueSlider");
const hueValue = document.getElementById("hueValue");
const colorBox = document.getElementById("colorBox");

let cones = {
  L: true,
  M: true,
  S: true
};

function updateColor() {
  const hue = parseInt(hueSlider.value);
  hueValue.textContent = hue + "°";

  let rgb = hslToRgb(hue / 360, 0.9, 0.5);

  if (!cones.L) rgb[0] = 0;
  if (!cones.M) rgb[1] = 0;
  if (!cones.S) rgb[2] = 0;

  colorBox.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function toggleCone(type, btn) {
  cones[type] = !cones[type];
  btn.classList.toggle("active");
  updateColor();
}

Lbtn.onclick = () => toggleCone("L", Lbtn);
Mbtn.onclick = () => toggleCone("M", Mbtn);
Sbtn.onclick = () => toggleCone("S", Sbtn);
hueSlider.oninput = updateColor;

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

updateColor();
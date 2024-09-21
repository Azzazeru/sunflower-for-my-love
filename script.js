const pixelArt = document.getElementById('pixelArt');

const pixelColors = [
    { index: 0, color: 'color1' }, { index: 1, color: 'color1' }, { index: 2, color: 'color1' }, { index: 3, color: 'color1' },
    { index: 4, color: 'color2' }, { index: 5, color: 'color2' }, { index: 6, color: 'color1' }, { index: 7, color: 'color2' },
    { index: 8, color: 'color2' }, { index: 9, color: 'color1' }, { index: 10, color: 'color1' }, { index: 11, color: 'color1' },
    { index: 12, color: 'color1' }, { index: 13, color: 'color4' }, { index: 14, color: 'color3' }, { index: 15, color: 'color3' },

    { index: 16, color: 'color1' }, { index: 17, color: 'color1' }, { index: 18, color: 'color1' }, { index: 19, color: 'color2' },
    { index: 20, color: 'color3' }, { index: 21, color: 'color3' }, { index: 22, color: 'color2' }, { index: 23, color: 'color3' },
    { index: 24, color: 'color3' }, { index: 25, color: 'color2' }, { index: 26, color: 'color1' }, { index: 27, color: 'color1' },
    { index: 28, color: 'color1' }, { index: 29, color: 'color1' }, { index: 30, color: 'color4' }, { index: 31, color: 'color3' },

    { index: 32, color: 'color1' }, { index: 33, color: 'color1' }, { index: 34, color: 'color2' }, { index: 35, color: 'color4' },
    { index: 36, color: 'color3' }, { index: 37, color: 'color5' }, { index: 38, color: 'color4' }, { index: 39, color: 'color5' },
    { index: 40, color: 'color3' }, { index: 41, color: 'color4' }, { index: 42, color: 'color2' }, { index: 43, color: 'color1' },
    { index: 44, color: 'color1' }, { index: 45, color: 'color1' }, { index: 46, color: 'color1' }, { index: 47, color: 'color4' },

    { index: 48, color: 'color1' }, { index: 49, color: 'color2' }, { index: 50, color: 'color3' }, { index: 51, color: 'color3' },
    { index: 52, color: 'color4' }, { index: 53, color: 'color2' }, { index: 54, color: 'color6' }, { index: 55, color: 'color2' },
    { index: 56, color: 'color4' }, { index: 57, color: 'color3' }, { index: 58, color: 'color3' }, { index: 59, color: 'color2' },
    { index: 60, color: 'color1' }, { index: 61, color: 'color1' }, { index: 62, color: 'color1' }, { index: 63, color: 'color1' },

    { index: 64, color: 'color1' }, { index: 65, color: 'color2' }, { index: 66, color: 'color3' }, { index: 67, color: 'color5' },
    { index: 68, color: 'color2' }, { index: 69, color: 'color6' }, { index: 70, color: 'color2' }, { index: 71, color: 'color6' },
    { index: 72, color: 'color2' }, { index: 73, color: 'color5' }, { index: 74, color: 'color3' }, { index: 75, color: 'color2' },
    { index: 76, color: 'color1' }, { index: 77, color: 'color1' }, { index: 78, color: 'color1' }, { index: 79, color: 'color1' },

    { index: 80, color: 'color1' }, { index: 81, color: 'color1' }, { index: 82, color: 'color2' }, { index: 83, color: 'color4' },
    { index: 84, color: 'color6' }, { index: 85, color: 'color2' }, { index: 86, color: 'color6' }, { index: 87, color: 'color2' },
    { index: 88, color: 'color6' }, { index: 89, color: 'color4' }, { index: 90, color: 'color2' }, { index: 91, color: 'color1' },
    { index: 92, color: 'color1' }, { index: 93, color: 'color1' }, { index: 94, color: 'color1' }, { index: 95, color: 'color1' },

    { index: 96, color: 'color1' }, { index: 97, color: 'color2' }, { index: 98, color: 'color3' }, { index: 99, color: 'color5' },
    { index: 100, color: 'color2' }, { index: 101, color: 'color6' }, { index: 102, color: 'color2' }, { index: 103, color: 'color6' },
    { index: 104, color: 'color2' }, { index: 105, color: 'color5' }, { index: 106, color: 'color3' }, { index: 107, color: 'color2' },
    { index: 108, color: 'color1' }, { index: 109, color: 'color1' }, { index: 110, color: 'color1' }, { index: 111, color: 'color1' },

    { index: 112, color: 'color1' }, { index: 113, color: 'color2' }, { index: 114, color: 'color3' }, { index: 115, color: 'color3' },
    { index: 116, color: 'color4' }, { index: 117, color: 'color2' }, { index: 118, color: 'color6' }, { index: 119, color: 'color2' },
    { index: 120, color: 'color4' }, { index: 121, color: 'color3' }, { index: 122, color: 'color3' }, { index: 123, color: 'color2' },
    { index: 124, color: 'color1' }, { index: 125, color: 'color1' }, { index: 126, color: 'color1' }, { index: 127, color: 'color1' },

    { index: 128, color: 'color1' }, { index: 129, color: 'color1' }, { index: 130, color: 'color2' }, { index: 131, color: 'color4' },
    { index: 132, color: 'color3' }, { index: 133, color: 'color5' }, { index: 134, color: 'color4' }, { index: 135, color: 'color5' },
    { index: 136, color: 'color3' }, { index: 137, color: 'color4' }, { index: 138, color: 'color2' }, { index: 139, color: 'color1' },
    { index: 140, color: 'color1' }, { index: 141, color: 'color1' }, { index: 142, color: 'color1' }, { index: 143, color: 'color1' },

    { index: 144, color: 'color1' }, { index: 145, color: 'color1' }, { index: 146, color: 'color1' }, { index: 147, color: 'color2' },
    { index: 148, color: 'color3' }, { index: 149, color: 'color3' }, { index: 150, color: 'color2' }, { index: 151, color: 'color3' },
    { index: 152, color: 'color3' }, { index: 153, color: 'color2' }, { index: 154, color: 'color1' }, { index: 155, color: 'color1' },
    { index: 156, color: 'color1' }, { index: 157, color: 'color1' }, { index: 158, color: 'color1' }, { index: 159, color: 'color1' },

    { index: 160, color: 'color7' }, { index: 161, color: 'color7' }, { index: 162, color: 'color7' }, { index: 163, color: 'color1' },
    { index: 164, color: 'color2' }, { index: 165, color: 'color2' }, { index: 166, color: 'color8' }, { index: 167, color: 'color2' },
    { index: 168, color: 'color2' }, { index: 169, color: 'color1' }, { index: 170, color: 'color1' }, { index: 171, color: 'color1' },
    { index: 172, color: 'color1' }, { index: 173, color: 'color1' }, { index: 174, color: 'color1' }, { index: 175, color: 'color1' },

    { index: 176, color: 'color7' }, { index: 177, color: 'color9' }, { index: 178, color: 'color9' }, { index: 179, color: 'color7' },
    { index: 180, color: 'color1' }, { index: 181, color: 'color8' }, { index: 182, color: 'color8' }, { index: 183, color: 'color8' },
    { index: 184, color: 'color1' }, { index: 185, color: 'color1' }, { index: 186, color: 'color1' }, { index: 187, color: 'color1' },
    { index: 188, color: 'color1' }, { index: 189, color: 'color1' }, { index: 190, color: 'color1' }, { index: 191, color: 'color1' },

    { index: 192, color: 'color7' }, { index: 193, color: 'color9' }, { index: 194, color: 'color7' }, { index: 195, color: 'color9' },
    { index: 196, color: 'color7' }, { index: 197, color: 'color8' }, { index: 198, color: 'color7' }, { index: 199, color: 'color8' },
    { index: 200, color: 'color1' }, { index: 201, color: 'color1' }, { index: 202, color: 'color1' }, { index: 203, color: 'color1' },
    { index: 204, color: 'color1' }, { index: 205, color: 'color1' }, { index: 206, color: 'color1' }, { index: 207, color: 'color1' },

    { index: 208, color: 'color7' }, { index: 209, color: 'color9' }, { index: 210, color: 'color7' }, { index: 211, color: 'color7' },
    { index: 212, color: 'color7' }, { index: 213, color: 'color7' }, { index: 214, color: 'color7' }, { index: 215, color: 'color8' },
    { index: 216, color: 'color1' }, { index: 217, color: 'color1' }, { index: 218, color: 'color1' }, { index: 219, color: 'color1' },
    { index: 220, color: 'color1' }, { index: 221, color: 'color1' }, { index: 222, color: 'color1' }, { index: 223, color: 'color1' },

    { index: 224, color: 'color1' }, { index: 225, color: 'color7' }, { index: 226, color: 'color9' }, { index: 227, color: 'color9' },
    { index: 228, color: 'color9' }, { index: 229, color: 'color9' }, { index: 230, color: 'color9' }, { index: 231, color: 'color8' },
    { index: 232, color: 'color1' }, { index: 233, color: 'color1' }, { index: 234, color: 'color1' }, { index: 235, color: 'color1' },
    { index: 236, color: 'color1' }, { index: 237, color: 'color1' }, { index: 238, color: 'color1' }, { index: 239, color: 'color1' },

    { index: 240, color: 'color1' }, { index: 241, color: 'color1' }, { index: 242, color: 'color7' }, { index: 243, color: 'color7' },
    { index: 244, color: 'color7' }, { index: 245, color: 'color7' }, { index: 246, color: 'color7' }, { index: 247, color: 'color8' },
    { index: 248, color: 'color1' }, { index: 249, color: 'color1' }, { index: 250, color: 'color1' }, { index: 251, color: 'color1' },
    { index: 252, color: 'color1' }, { index: 253, color: 'color1' }, { index: 254, color: 'color1' }, { index: 255, color: 'color1' },
];

for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = getRandomColor();
    pixelArt.appendChild(pixel);
}


let currentPixel = 0;
const interval = setInterval(() => {
    if (currentPixel < pixelColors.length) {
        const pixel = pixelArt.children[currentPixel];
        pixel.classList.add(pixelColors[currentPixel].color);
        pixel.style.backgroundColor = '';
        currentPixel++;
    } else {
        clearInterval(interval);
    }
}, 50);

function getRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
}
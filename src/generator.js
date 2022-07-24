import html2canvas from 'html2canvas';

const generator = () => {
    const text_input = document.getElementById('text-input');
    const font_size_slider = document.getElementById('font-size-slider');
    const font_line_height_slider = document.getElementById('font-line-height-slider');
    const text = document.getElementById('text');
    const save_button = document.getElementById('save');
    const generator_content = document.getElementById('generator-content');



    let original_font_size = window.getComputedStyle(text, null).getPropertyValue('font-size');
    original_font_size = parseFloat(original_font_size.replace('px', ''));

    let original_font_line_height = window.getComputedStyle(text, null).getPropertyValue('line-height');
    original_font_line_height = parseFloat(original_font_line_height);


    save_button.addEventListener('click', () => {
        html2canvas(generator_content).then(canvas => {
            const base64image = canvas.toDataURL("image/png")
            const anchor = document.createElement('a');
            anchor.setAttribute("href", base64image);
            anchor.setAttribute("download", "little_miss_meme.png");
            anchor.click();
            anchor.remove();
        });
    });

    text_input.addEventListener('input', () => {
        text.innerText = text_input.value.toUpperCase();

        if (text.innerText === '') {
            text.innerText = "LITTLE MISS TUMMY ACHE"
        }
    })

    font_size_slider.addEventListener('input', () => {
        text.style.fontSize = `${original_font_size * (font_size_slider.value / 100)}px`
    });

    font_line_height_slider.addEventListener('input', () => {
        text.style.lineHeight = `${font_line_height_slider.value / 100}`
    });


    let modal = document.getElementById("modal");
    let span = document.getElementById('modal-close');

// Get the button that opens the modal
    let btn = document.getElementById("modal-btn");

    btn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    const modal_items = document.querySelectorAll('.modal__image');
    const generator_image = document.getElementById('generator-image');

    modal_items.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            generator_image.src = item.src;
            modal.style.display = "none";
        });
    });
};

export default generator;
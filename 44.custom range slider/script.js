const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +range.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const range_num_width = +range_width.substring(0, range_width.length - 2);
    const label_num_width = +label_width.substring(0, label_width.length - 2);

    const max = e.target.max
    const min = e.target.min

    const left = value * ((range_num_width - 24) / max) - (label_num_width - 24) / 2;

    console.log(left);

    label.style.left = `${left}px`;
})
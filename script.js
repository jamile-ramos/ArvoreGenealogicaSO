document.addEventListener('DOMContentLoaded', function () {
    const sheets = document.querySelectorAll('.sheet');

    sheets.forEach(sheet => {
        sheet.addEventListener('mouseover', function (event) {
            const tooltipText = sheet.getAttribute('data-tooltip');
            if (tooltipText) {
                let tooltip = sheet.querySelector('.tooltip');
                if (!tooltip) {
                    tooltip = document.createElement('div');
                    tooltip.classList.add('tooltip');
                    tooltip.innerText = tooltipText;
                    sheet.appendChild(tooltip);
                }

                const rect = sheet.getBoundingClientRect();
                tooltip.style.left = `${rect.width / 2}px`;
                tooltip.style.top = `-${tooltip.offsetHeight + 15}px`;
            }
        }); 

        sheet.addEventListener('mouseleave', function () {
            const tooltip = sheet.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

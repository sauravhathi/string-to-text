const code = document.getElementById('code');
const output = document.querySelector('.output');
const text = document.getElementById('text');
const copyButton = document.getElementById('copyButton');

code.addEventListener('input', () => {
    if (code.value == '') {
        output.style.display = 'none';
        return;
    }
    output.style.display = 'block';
    try {
        const inputCode = JSON.parse('"' + code.value + '"');
        text.textContent = inputCode;
        Prism.highlightAll();
    } catch (error) {
        text.textContent = "Invalid code";
    }
});

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(text);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        setTimeout(() => {
            copyButton.textContent = 'Copied';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 3000);
        }, 0);
    } catch (error) {
        alert('Copy failed');
    }

    window.getSelection().removeAllRanges();
});
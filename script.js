function copyToClipboard(button) {
    const codeBlock = button.parentElement;
    const codeText = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(codeText).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#2ecc71';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    });
} 
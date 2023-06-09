// clipboard.js

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
  }
  
  
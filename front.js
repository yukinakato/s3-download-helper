chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.operation) {
    case 'downloadObject':
      const downloadButton = document.getElementById('download-object-button')
      downloadButton.click()

      const inputs = document.getElementsByTagName('input')
      for (const input of inputs) {
        if (input.type === 'checkbox' && input.checked) {
          input.click()
        }
      }

      sendResponse()
      break

    default:
      sendResponse()
  }
})

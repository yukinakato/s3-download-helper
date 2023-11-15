async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 100))
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.operation) {
    case 'downloadObject': {
      const downloadButton = document.getElementById('download-object-button')

      const allCheckInput = document.getElementsByTagName('thead')[0].getElementsByTagName('input')[0]
      const checkedFileInputs = [...document.getElementsByTagName('tbody')[0].getElementsByTagName('input')].filter(
        (el) => el.type === 'checkbox' && el.checked
      )

      if (allCheckInput.checked) {
        allCheckInput.click()
        await sleep()
      } else {
        for (const input of checkedFileInputs) {
          input.click()
          await sleep()
        }
      }

      for (const input of checkedFileInputs) {
        input.click()
        await sleep()
        downloadButton.click()
        await sleep()
        input.click()
        await sleep()
      }

      sendResponse()
      break
    }
    default: {
      sendResponse()
    }
  }
})

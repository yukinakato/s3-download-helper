async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 100))
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.operation) {
    case 'downloadObject': {
      const downloadButton = document.getElementById('download-object-button')
      const targetInputs = [...document.getElementsByTagName('input')].filter((el) => el.type === 'checkbox' && el.checked)

      for (const input of targetInputs) {
        input.click()
        await sleep()
      }

      for (const input of targetInputs) {
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

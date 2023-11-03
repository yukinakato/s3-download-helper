async function downloadObject() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  await chrome.tabs.sendMessage(tab.id, { operation: 'downloadObject' })
}

chrome.action.onClicked.addListener(() => {
  downloadObject()
})

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'downloadObject':
      downloadObject()
      break
  }
})

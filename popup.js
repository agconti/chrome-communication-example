const button = document.getElementById('start')
const event = {'type': 'login', "data": {"username": 'testuser'}}
button.addEventListener("click", () => {
  const p = document.createElement('p')
  p.innerHTML = "clicked"
  document.body.appendChild(p)

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, event)
  })
})

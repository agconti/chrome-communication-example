alert("dsfads")


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

  if (message.type === 'login') {
    alert(message.data.username)
    sendResponse({})
    return true
  }
  
  return true
});

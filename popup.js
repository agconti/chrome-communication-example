// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @filedescription Initializes the extension's popup page.
 */

const button = document.getElementById('start')
const event = {'type': 'login', "data": {"username": 'testuser'}}
button.addEventListener("click", () => {
  const p = document.createElement('p')
  p.innerHTML = "clicked"
  document.body.appendChild(p)

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, event)
  });
})

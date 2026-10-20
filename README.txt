Scratch Touch Batch Fill — prototype 0.1.0

IMPORTANT
This is only a UI prototype. It adds a touch-friendly ON/OFF button on Scratch pages, but does NOT yet connect to Scratch's actual paint editor or implement batch recoloring. Do not treat it as a working batch-fill tool.

Install in a Chromium-based desktop browser:
1. Extract the ZIP.
2. Open chrome://extensions (or your browser's extension management page).
3. Enable Developer mode.
4. Choose Load unpacked and select this extracted folder.
5. Open https://scratch.mit.edu/ and test the prototype button.

Tablet support depends on the browser; many tablet browsers do not support loading unpacked extensions.

Next step for a real implementation: inspect the current Scratch paint editor's UI and source to identify the exact Ctrl-based batch-fill behavior, then hook the added control into that same operation. This prototype does not do that yet.

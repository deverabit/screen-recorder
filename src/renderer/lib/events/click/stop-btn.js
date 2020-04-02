document
  .getElementById('stopBtn')
  .addEventListener('click', ({ target }) => {
    const startBtn = document.getElementById('startBtn')
    const saveBtn = document.getElementById('saveBtn')
    const videoSelectBtn = document.getElementById('videoSelectBtn')

    window.mediaRecorder.stop()
    
    startBtn
      .classList
      .remove('is-danger')
    
    startBtn.textContent = 'Start'

    saveBtn.removeAttribute('disabled')
    videoSelectBtn.removeAttribute('disabled')
  })
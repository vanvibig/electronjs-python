const {app, BrowserWindow} = require('electron')

function createWindow () {
  window = new BrowserWindow({width: 800, height: 600})
  window.loadFile('index.html')

  // var python = require('child_process').spawn('python', ['./hello.py']);
  // python.stdout.on('data',function(data){
  //     console.log("data: ",data.toString('utf8'));
  // });

  const {PythonShell} = require('python-shell');

  PythonShell.run('hello.py', {
    pythonPath: 'C:\\Anaconda3\\python.exe',
  }, function (err, results) {
    if (err) throw err;
    console.log('finished');
    console.log(results);
  });	
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

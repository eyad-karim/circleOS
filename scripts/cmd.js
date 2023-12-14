cmdInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      try {
          cmd(cmdInput.value)
      } catch (error) {
        cmdOutput.innerHTML += `<p style='margin-bottom:8px;'><span style='color:red;text-weight:bold;'>Error! ${error}</span></p><br>`;
      }
      cmdInput.value = ""
      cmdInput.focus()
      cmdBody.scrollTop = cmdBody.scrollHeight
    }
});
function cmd(command) {
    let commands = command.split(' ')
    let app = commands[0]
    let fun = commands[1]
    let params = commands.slice(2)

    cmdOutput.innerHTML += `<p><span style='color:#0085ff;'>c:\\users\\user1\\apps\\${app}&gt;</span></p><p>$ ${command}</p>`;
    function output(output) {
        cmdOutput.innerHTML += `<p>${output}</p>`
    }

    switch (app) {
        case "calc":
            switch (fun) {
                case "add":
                    let addOutput = 0
                    for(i = 0;i<params.length;i++) {
                        addOutput += parseFloat(params[i])
                    }
                    output(addOutput)
                    break;

                case "sub":
                    let subOutput = params[0]
                    for(i = 1;i<params.length;i++) {
                        subOutput = subOutput - parseFloat(params[i])
                    }
                    output(subOutput)
                    break;
                    
                case "mul":
                    let mulOutput = 1
                    for(i = 0;i<params.length;i++) {
                        mulOutput = mulOutput * parseFloat(params[i])
                    }
                    output(mulOutput)
                    break;

                case "div":
                    let divOutput = params[0]
                    for(i = 1;i<params.length;i++) {
                        divOutput = divOutput / parseFloat(params[i])
                    }
                    output(divOutput)
                    break;
                


                case "!add":
                    let _addOutput = 0
                    for(i = 0;i<params.length;i++) {
                        output(_addOutput + " + " + parseFloat(params[i]) + " = " + (_addOutput+parseFloat(params[i])))
                        _addOutput += parseFloat(params[i])
                    }
                    output(_addOutput)
                    break;

                case "!sub":
                    let _subOutput = params[0]
                    for(i = 1;i<params.length;i++) {
                        output(_subOutput + " - " + parseFloat(params[i]) + " = " + (_subOutput-parseFloat(params[i])))
                        _subOutput = _subOutput - parseFloat(params[i])
                    }
                    output(_subOutput)
                    break;
                    
                case "!mul":
                    let _mulOutput = 1
                    for(i = 0;i<params.length;i++) {
                        output(_mulOutput + " * " + parseFloat(params[i]) + " = " + (_mulOutput*parseFloat(params[i])))
                        _mulOutput = _mulOutput * parseFloat(params[i])
                    }
                    output(_mulOutput)
                    break;

                case "!div":
                    let _divOutput = params[0]
                    for(i = 1;i<params.length;i++) {
                        output(_divOutput + " / " + parseFloat(params[i]) + " = " + (_divOutput/parseFloat(params[i])))
                        _divOutput = _divOutput / parseFloat(params[i])
                    }
                    output(_divOutput)
                    break;
                
                case "help":
                    output(`add 1 2 => 1+2`)
                    output(`sub 1 2 => 1-2`)
                    output(`mul 1 2 => 1*2`)
                    output(`div 1 2 => 1/2`)
                    output(`!add 1 2 => ... 1+2`)
                    output(`!sub 1 2 => ... 1-2`)
                    output(`!mul 1 2 => ... 1*2`)
                    output(`!div 1 2 => ... 1/2`)
                    break;
            
                default:
                    output("'" + fun + "' is not a 'calc' function")
                    break;
            }
            break;
        
        case "cmd":
            switch (fun) {
                case "help":
                    output("open browser => open an app")
                    break;
                
                case "open":
                    for(i=0;i<=params.length;i++) {
                        openWindow(params[i])
                        topWindow(params[i])
                        output("opening " + params[i] + "...")
                    }
                    break;
            
                default:
                    output("'" + fun + "' is not a 'cmd' function")
                    break;
            }
            break;
        case "browser":
            switch (fun) {
                case "help":
                    output("search www.example.com => open a website")
                    break;

                case "search":
                    output("searching...")
                    browser(params[0])
                    openWindow('browser')
                    break;

                default:
                    output("'" + fun + "' is not a 'browser' function")
                    break;
            }
            break;
        default:
            output("'" + app + "' is not an app ... path /" + app + "/ not defind")
            break;
    }
    cmdOutput.innerHTML += `<br>`
}
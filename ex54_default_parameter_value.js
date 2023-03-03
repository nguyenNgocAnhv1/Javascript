// Default parameter is: type = "log"
// if the call function do not put a value, the parameter will be type = "log"
function log (content, type = "log"){
    console[type](content)
}
log("Message","error")
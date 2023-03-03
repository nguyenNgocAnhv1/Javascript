import{
    error,
    log
}from "./var.js"

function logger(log,type = log){
    console[type](log)
}
export default logger

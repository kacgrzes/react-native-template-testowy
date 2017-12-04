const createDebuggingConfig = () => {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
}

export default createDebuggingConfig

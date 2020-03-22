const ajaxP = function (url, type = 'GET') {

  return new Promise((result, rej) => {
    // 简单检测
    let u = url.split(':')[0]
    if (u !== 'http' && u !== 'https') {
      // console.log(u == 'http')
      return rej('url 不合法')

    }

    var ajax = new XMLHttpRequest()

    ajax.open(type, url, true)

    ajax.setRequestHeader('Content-Type', 'Application/json')

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status === 200) {
        console.log('state change', ajax.readyState)
        // var json = JSON.parse(ajax.response)
         return result(ajax.response)

      } else {
        console.log('state change', ajax.readyState)
      }
    }

    setTimeout(function () {
      return  rej(ajax)
    }, 3000)

    ajax.send()

  })

}
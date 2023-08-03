// return masked string
function maskify(cc) {
    return cc.length <= 4 ? cc : cc.slice(0,-4).replaceAll(/./g, '#')+cc.slice(-4)
    }
    
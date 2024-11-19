var licenseKeyFormatting = function(s, k) {
    let str = s.replace(/\-/g, "").toUpperCase()

    let ret = ""
    while(str.length > 0) {
        const group = str.substring(str.length - k)
        ret = "-" + group + ret
        str = str.substring(0, str.length - k)
    }
    return ret[0] === "-" ? ret.slice(1) : ret
};
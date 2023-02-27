function(instance, properties) {
 var d = document.createElement("div")
    d.style.display = "flex"
    d.style.width = properties.bubble.width()-0 + "px"
    d.style.height = properties.bubble.height()-0 + "px"
    d.style.overflow = "hidden"
    d.style.justifyContent = "center"
    d.style.background = "none"
    d.style.backgroundImage = "url('https://meta.cdn.bubble.io/f1676822240905x246643220755184060/Frame%203.png')"
    d.style.backgroundRepeat = "no-repeat"
    d.style.backgroundSize = "100% 100%"
    d.style.backgroundOrigin = "border-box"
    d.style.margin = "0 auto"
    instance.canvas[0].appendChild(d) 
}
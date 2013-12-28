sl =  [
    "line one"
    "line two"
    "line three"
    "line four"
    "line five"
]

lin_end = 0
index = 0
speed = 60

type_text = ->
    contents = ""
    row = Math.max( 0 , index - 4 )
    while row < index
        contents += sl[row++] + "\r\n"
    document.forms[0].elements[0].value = contents + sl[index].substring(0, lin_end) + "_"
    if lin_end++ == sl[index].length
        lin_end = 0
        index++
        if index != sl.length
            setTimeout(type_text,1500)
    else
        setTimeout(type_text, speed)
window.onload = -> type_text()


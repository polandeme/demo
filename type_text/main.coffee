sl =  [
    "line one"
    "line two"
    "line three"
]

lin_end = 0
index = 0
speed = 60

type_text = ->
    contents = " "
    row = Math.max( 0 , index - 2 )
    while row < index
        contents += sl[index++] + "\r\n"
    document.forms[0].elements[0].value = contents + sl[index].substring(0, lin_end) + "_"
    if lin_end++ == sl[index].length
        lin_end = 0
        index++
        if index != sl.length
            setTimeout("type_text()",1500)
    else
        setTimeout("type_text()", speed)
window.onload = -> type_text()


fun = ->
    you
    ni='o'

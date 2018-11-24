var i=0;
$('input').on('click',function(){
    console.log(i)
    $(document).one('click',function(){
        if (i % 2 !== 0) {
             $('#dv1').css('display', 'none')}
    })
    if(i%2===0) {
        $('input').css('background', 'pink')
        $('#dv1').css('display','block')
    } else { 
        $('input').css('background', 'grey')
        $('#dv1').css('display', 'none')
    }
    i++;
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})
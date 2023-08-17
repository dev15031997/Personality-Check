$(document).ready(function()
{
    $('button').click(function()
    {
        let name=$('#nameid').val()
        $('#imgchange').attr('src',`https://joesch.moe/api/v1/${name}`)       

    });
})


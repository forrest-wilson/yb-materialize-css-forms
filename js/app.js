$(document).ready(function() {
    var obj = {};

    $('select').material_select();

    function myFunction() {
        $("#myForm input, #myForm select").each(function(i) {
            var input = $(this);

            alert('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());

            obj['prop' + i] = input.val();
        });
        
        console.log(obj['prop' + 1], obj);
    }

    $("#button").on("click", myFunction);
});
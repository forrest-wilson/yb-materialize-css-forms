$(document).ready(function() {
    $('select').material_select();
    
    // jQuery Form Stuff

    // var obj = {};

    // function myFunction() {
    //     $("#myForm input, #myForm select").each(function(i) {
    //         var input = $(this);

    //         alert('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());

    //         obj['prop' + i] = input.val();
    //     });
        
    //     console.log(obj['prop' + 1], obj);
    // }

    // $("#button").on("click", myFunction);


    // Vanilla JS Form Stuff

    // Setup an onclick event handler for the form. This ensures that
    // we get to physically type some real values into the form before 
    // accessing the value data with the js below.
    document.getElementById('button').onclick = function(){
        // Access the forms property of the document object
        // var oForm = document.forms[0]; same as line below
        var oForm = document.forms['a-form'];

        // Access the elements of the form property. We could access the 
        // values of the form with index notation into the array via the els
        // variable, eg els[0].value. However this is a perfect chance to use a loop
        // to cycle through the form - loopFormEls(). 
        var els = oForm.elements;
        console.log(els);
        var values;
        function loopFormEls(elements){
            // create an empty array to push values from the loop to.
            // this is a common and useful pattern i.e = empty array.  
            var valuesPlease = [];
            // use a for loop to cycle through the form elements
            // and extract their value/s.   
            for (var i = 0; i < elements.length; i++) {
                valuesPlease.push(elements[i].value);
            };
            // 'values' below is the variable above/outside the function
            // this means that we can access this array outside of the function
            // with ease by using the values variable declared above the function
            values = valuesPlease;

            // here we also return the newly populated array so invoking the function
            // also gives us all the values in the array
            return valuesPlease;
        }

        loopFormEls(els);

        // values = loopFormEls(els);
        console.log(values);
    }
});
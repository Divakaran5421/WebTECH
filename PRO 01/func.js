function feed() //Feedback function
            {
                if(confirm("Are you share your feedback..!"))
                {
                        if(prompt('Share our feedback'))
                                {
                                        alert('Thank you...');
                                }
                                else
                                {
                                    alert('yup..! Thank you for registering...');
                                }
                }
                else
                {
                    alert('Thank you for registering...');
                }
            }/*
function feed() //text change functions
{
    document.getElementById('demo').innerHTML=("Thanks for submitting...");
}*/
function cancel()
{
    document.getElementById('demo').innerHTML=("Cancelled...");
}
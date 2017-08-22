function toggleButton(value)
{
    var buttonValue = ["educationDiv", "skillsDiv", "projectDiv", "experiencesDiv"];
    var x = document.getElementById(buttonValue[value]);
    if (x.style.display == "none")
    {
        $(x).slideDown("slow");
       
    }
       
    else
    {
        $(x).slideUp("slow");
        
    }
        
}


            //based on optionsScript.js from F7U12

            // Saves options to localStorage.
            function save_options() {
                var checkbox_openvisitedlinks = document.getElementById("openvisitedlinks");
                var input_tabslimit = document.getElementById("tabslimit");

                if(isNaN(input_tabslimit.value)) {
                    alert("Only Integer for New Tabs Limit !");
                    input_tabslimit.value = localStorage["tabslimit"];
                    return;
                }


                localStorage["openlinksdirectly"] = checkbox_openlinksdirectly.checked;



                var bg = chrome.extension.getBackgroundPage();

                bg.updateSettings();

                // Update status to let user know options were saved.
                var status = document.getElementById("status");
                status.innerHTML = '<span style="color:#FF0000">Options Saved.</span><br>';
                setTimeout(function() {
                    status.innerHTML = "";
                }, 750);
            }

            // Restores select box state to saved value from localStorage.
            function restore_options() {

                var tabslimit = localStorage["tabslimit"];            

                var checkbox_openvisitedlinks = document.getElementById("openvisitedlinks");
                var input_tabslimit = document.getElementById("tabslimit");



                checkbox_openvisitedlinks.checked = (openvisitedlinks == "true");

                input_tabslimit.value = tabslimit;

            }
            
function clickHandler(e) {
  setTimeout(save_options, 0);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  restore_options();
});
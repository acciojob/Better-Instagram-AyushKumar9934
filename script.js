
let lists = document.querySelectorAll(".image");

// Add event listeners to each div
lists.forEach((div) => {
    div.addEventListener("dragstart", (e) => {
        // Store the id of the dragged div
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(e.target.id + " dragstart");
    });

    div.addEventListener("dragover", (e) => {
        // Prevent the default action to allow dropping
        e.preventDefault();
        console.log(e.target.id + " dragover");
    });

    div.addEventListener("drop", (e) => {
        // Prevent the default action
        e.preventDefault();

        // Get the id of the dragged div from the stored data
        let draggedId = e.dataTransfer.getData("text/plain");
        console.log(draggedId + " dropped");

        // Get the dragged div and the target div
        let draggedDiv = document.getElementById(draggedId);
        console.log("draggedDiv",draggedDiv);
        let targetDiv = e.target;
        console.log("target div",targetDiv)

     
        let draggedDivStyle = window.getComputedStyle(draggedDiv);
        let targetDivStyle = window.getComputedStyle(targetDiv);

       
        let temp = draggedDivStyle.backgroundImage;
        draggedDiv.style.backgroundImage = targetDivStyle.backgroundImage;
        targetDiv.style.backgroundImage = temp;

    });
});
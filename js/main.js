$(function () {


    $("#groceryListForm").ready(function () {
        $("div.lists").append(
            `<div class="list low">
                <h3>Item: Jasmine Rice</h3>
                <p>Amount: 1</p>
                <p>Category: Grain</p>
            </div>`
        )

        $("div.lists").append(
            `<div class="list low">
                <h3>Item: Chicken</h3>
                <p>Amount: 4</p>
                <p>Category: Meat</p>
            </div>`
        )

        $("div.lists").append(
            `<div class="list low">
                <h3>Item: Potatoes</h3>
                <p>Amount: 6</p>
                <p>Category: Produce</p>
            </div>`
        )
    });

    $("#groceryListForm").on("submit", function (e) {
        e.preventDefault();

        let groceryListVal = $("#groceryList").val();
        let quantityItemVal = $("#quantityItem").val();
        let foodCategoryVal = $("#foodCategory").val();


        $("div.lists").append(
            `<div class="list low">
                <h3>Item: ${groceryListVal}</h3>
                <p>Amount: ${quantityItemVal}</p>
                <p>Category: ${foodCategoryVal}</p>
            </div>`)

        this.reset();

    })

$("div.lists").on("click", function(e){
    const $task = $(e.target.closest("div.list"));
    console.log($task)
    if($task.hasClass("low"))
    {
        $task.removeClass("low");
        $task.addClass("high");
    }
    else if ($task.hasClass("high"))
    {
        $task.removeClass("high");
        $task.addClass("low");
    }

    
})
$("#crossOutItem").on("click", function(e){
    if($("div.list").hasClass("high"))
    {
        $("div.high").addClass("del")
        $("div.high").addClass("higher")
        $("div.high").removeClass("high")


    }
})













})
/**
 * Created by MNickey on 10/12/16.
 */

// state objects
var state = {
    items: []
};

// state modification functions
function addItem(state, item) {
    var id = state.items.length;
    state.items.push({
        name: item,
        checked: "False",
        id: id
    });
}

// Render functions
function renderList(state, element) {
    var itemsHTML = state.items.map(function (item) {
        var addedItem = '<li>' + '<span class="shopping-item">' + item.name + '</span>';
        addedItem += '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' + '</button>' +
            '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' +
            '</button>' + '</div>' + '</li>';
        return addedItem;
    });
    element.html(itemsHTML);
}

function checkItem(element) {
    // toggles the class shopping-item__checked when button inside the parent <li> is clicked
    element.parent('li').toggleClass('shopping-item__checked');
    console.log(element);
}

// Event listeners
$(document).ready(function () {
    console.log("ready!");
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        renderList(state, $('.shopping-list'));
    });
    $('ul.shopping-list > li').click(checkItem($(this).closest('shopping-item')));
});
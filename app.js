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

function checkItem(element) {
    // toggles the class shopping-item__checked when button inside the parent <li> is clicked
    element.closest('li').toggleClass('shopping-item__checked');
    console.log(element.find('shopping-item').text());
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

// Event listeners
$(document).ready(function () {
    console.log("ready!");
    // event listener for adding an item
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        renderList(state, $('.shopping-list'));
    });
    // Checking an item off event listener
    $('.shopping-list').on('click', '.shopping-item-toggle', (function (event) {
        checkItem($(this));
    }));
});
/**
 * Created by MNickey on 10/12/16.
 */

// state objects
var state = {
    items: []
};

// state modification functions
function addItem(state, item) {
    state.items.push(item);
}

function checkItem(element) {
    // toggles the class shopping-item__checked when button inside the parent <li> is clicked
    element.closest('li').toggleClass('shopping-item__checked');
    console.log(element.find('shopping-item').text());
}

// Render functions
var renderList = function (state, element) {
    var itemName = $('#shopping-list-entry').val();
    var newItem = '<li><span class="shopping-item">' + itemName +'</span>' +
        '<div class="shopping-item-controls"><button class="shopping-item-toggle">' +
        '<span class="button-label">';
    newItem += 'check</span></button> <button class = "shopping-item-delete" > <span class = "button-label" > ' +
        'delete </span > </button > </div > </li > ';
    element.append(newItem);
};

var deleteItem = function (state, item) {
    var itemIndex = state.items.indexOf(item);
    state.items.splice(itemIndex, 1);
};

// Event listeners
$(document).ready(function () {

// event listener for adding an item
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        renderList(state, $('.shopping-list'));
    });

    // deleting an item event listener
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        event.preventDefault();
        deleteItem(state, $(this).closest('li').find('.shopping-item').text());
        $(this).closest('li').remove();
    });

// Checking an item off event listener
    $('.shopping-list').on('click', '.shopping-item-toggle', (function (event) {
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }));

});
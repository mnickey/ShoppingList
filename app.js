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
    console.log(state.items);
}

// Render functions
function renderList(state, element) {
    var itemsHTML = state.items.map(function (item) {
        var addedItem = '<li>' + '<span class="shopping-item">' + item + '</span>';
        addedItem += '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' + '</button>' +
            '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' +
                '</button>' + '</div>' + '</li>';
        // console.log(addedItem);
        return addedItem;
    });
    element.html(itemsHTML);
}

function checkItem(element) {
    return $(this).closest('li').toggleClass(element);
    // return ($(element).find('span').addClass('shopping-item__checked'));
}

// Event listeners
$('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    checkItem($('.shopping-list').text());
    renderList(state, $('.shopping-list'));
});

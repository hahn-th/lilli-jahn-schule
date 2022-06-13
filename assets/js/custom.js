const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function copyToClipboardAndHidePopover($textbox, $button) {
    navigator.clipboard.writeText(document.getElementById($textbox).value); 

    $popover = bootstrap.Popover.getInstance($button)

    setTimeout(function() {$popover.hide()},3000);
}
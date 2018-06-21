export default (button, msg) => {
    $(button).on('click', function(){
        alert(msg)
    })
}
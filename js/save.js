function openSave() {
    var popup = document.getElementById("mySave");
    popup.classList.toggle("show");
}
// const items = [{
//     name: 'Flc green home 18 phạm hùng 78m² 3 phòng ngủ full đồ đẹp - cho thuê chung cư cao cấp',
//     city: '- Quận Nam Từ Liêm',
//     price: '10,000,000 đ',
//     image: 'img' + '/' + 'quantam_1.jpg',

// }]

// items.splice(0, 1);

// function add() {


//         items.push({
//             name: 'Flc green home 18 phạm hùng 78m² 3 phòng ngủ full đồ đẹp - cho thuê chung cư cao cấp',
//             city: '- Quận Nam Từ Liêm',
//             price: '10,000,000 đ',
//             image: 'img' + '/' + 'quantam_2.jpg',
//         })

//         render();


// }

// function remove(index) {
//     items.splice(index, 1)
//     var item = $(".book_mark_item");
//     item.del

// }

// function render() {
//     const html = items.map(item => `
// <li class="book_mark_item">
//         <a class="image" href="#">
//             <img src="${item.image}">
//         </a>
//         <div class="info">
//             <a href="#" class="title">
//     ${item.name}                              
//     <span class="city">${item.city}</span>
// </a>
//             <span class="price">${item.price}</span>
//             <div class="delete">×</div>
// //         </div>
// //     </li>
// // `).join('')
// document.getElementById('book_mark_item').innerHTML = html
// var deleteButtons = $('.delete')
// for (let i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].addEventListener("click", function() {
//         remove(i)
//     })
// }
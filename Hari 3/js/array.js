// Jika tanpa Array
var nama1 = 'Jhon Snow';
var nama2 = 'Stark';
var nama3 = 'Night King';

// Array
var nama = ['Jhon Snow', 'Stark', 'Night King'];

console.log(nama[1]);

// Mengganti value array index 1
nama[1] = 'Greyjoy';

// Menambahkan data dengn function bawaan js
nama.push('Sansa');

// Menghapus array terakhir
nama.pop();

// Menghapus dari index berapa sampai keberapa kemudian insert
nama.splice(2, 0, 'Catly', 'Tormund');

console.log(nama);

var tampil = '';

nama.forEach(function(item, index) {
	tampil += index + ' ' +item + '<br/>';
});

document.querySelector('#nama').innerHTML = tampil;
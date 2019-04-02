// function tambah(angka1 = 0, angka2 = 0) {
// 	var hasil = angka1 + angka2;

// 	return hasil;
// }

// // anonymous function
// var kurang = function(angka1 = 0, angka2 = 0) {
// 	var hasil = angka1 - angka2;

// 	return hasil;
// }

// // fuction di ES6
// var bagi = (angka1 = 0, angka2 = 0) => {
// 	var hasil = angka1 / angka2;

// 	return hasil;
// }

// var hasil2 = tambah(3, 4);
// var hasil3 = tambah(4, 5);
// var hasil4 = tambah();
// var hasil5 = kurang(4, 5);

// console.log(hasil2);
// console.log(hasil3);
// console.log(hasil4);
// console.log(hasil5);

function caraRataRata(angka1=0, angka2=0, angka3=0) {
	var jumlah = angka1 + angka2 + angka3;
	var rataRata = jumlah/3;

	return rataRata;
}

function isGanjil(angka) {
	var hasil = '';

	if(angka % 2 === 0){
		hasil = false;
	}else{
		hasil = true;
	}

	return hasil;
}

console.log(isGanjil(3));
console.log(isGanjil(30));
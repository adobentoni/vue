// Inisissi vue js
var v = new Vue ({
  el: '#app',//el adalah element di div, standarisasi dari vue
  data: { //data adalah data yang akan dipakai, standarisasi dari vue 
    members : 
      { nama: "hardi", umur:22,makanan:"pecel"},
    
    raw: '<h1> Learn VueJS </h1>',
    done: true //data boolean true false
  },
  // //computed properties, dimana suatu variabel bergantung dengan variabel lainnya
  // computed: {// pertama inisiasi computed
  //   biodata: {// disini menggunakan variabel biodata sebagai variabel induknya
  //     get: function(){ // get untuk mendeklarasikan variabel anakannya, bisa juga menentukan tampilannya seperti apa
  //       return this.nama + " umure " + this.umur
  //     },
  //     set: function (params) { // mengeset variabel anakan, dibentuk dalam array
  //       var contoh = params.split('-')//pengaturan array (dsini bebas penamaan array, saya menggunakan ) di pisahkan dengan tanda '-', bisa juga dengan tanda lainnya misal ? / + , dan lain"nya
  //       this.nama= contoh[0]//masing" variabel di masukkan dalam array yang dimulai dengan angka 0
  //       this.umur=contoh[1]
  //     }
  //   }
  // }
});
// File JS Script

// pengumpulan data lewat id
function validatefirstform() {
    let inputBeratBadan = document.getElementById('berat-badan-input').value
    let inputUsia = document.getElementById('usia-input').value
    let inputTinggiBadan = document.getElementById('tinggi-badan-input').value

    // pengaturan kalkulator BMI
    console.log('BB:' + inputBeratBadan)
    console.log('Usia:' + inputUsia)
    console.log('Tinggi:' + inputTinggiBadan)
    
    // perhitungan kalkulator BMI
    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '') {
        let beratBadan = parseFloat(inputBeratBadan)
        let tinggibadan = parseFloat(inputTinggiBadan)
        let calculate = beratBadan / (tinggibadan ** 2)
        updateresult(calculate.toFixed(2));
    } else {
        alert('Tidak bisa diproses, Mohon lengkapi data anda !'); //notifikasi bila data tidak lengkap
    }
}

// tampilan hasil perhitungan
function updateresult(value) {
    document.getElementById('result-calculation').innerHTML = value;
}

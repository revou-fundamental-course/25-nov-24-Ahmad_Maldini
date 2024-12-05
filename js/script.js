// File JS Script

// pengumpulan data lewat id
function validatefirstform() {
    let inputBeratBadan = document.getElementById('berat-badan-input').value;
    let inputUsia = document.getElementById('usia-input').value;
    let inputTinggiBadan = document.getElementById('tinggi-badan-input').value;
  
     // pengaturan kalkulator BMI
     console.log('BB:' + inputBeratBadan);
     console.log('Usia:' + inputUsia);
     console.log('Tinggi:' + inputTinggiBadan);
    
   // perhitungan kalkulator BMI
   if (inputBeratBadan !== '' && inputUsia !== '' && inputTinggiBadan !== '') {
    let beratBadan = parseFloat(inputBeratBadan);
    let tinggibadan = parseFloat(inputTinggiBadan);
    let calculate = beratBadan / (tinggibadan ** 2);
    let bmi = calculate.toFixed(1);
    updateresult(bmi);
    kategoriBMI(bmi);
  } else {
    alert('Tidak bisa diproses, Mohon lengkapi data anda!'); // notifikasi bila data tidak lengkap
  }
  }
  
  // tampilan hasil perhitungan
  function updateresult(value) {
    document.getElementById('result-calculation').innerHTML = value;
  }
  
  // logika kategori BMI
  function kategoriBMI(bmi) {
    let status = '';
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else if (bmi >= 30) {
        status = 'Kegemukan (Obesitas)';
    }
  }
  
  // fungsi reset result-calculation
  function resetForm() {
    document.getElementById('result-calculation').innerHTML = '-'; // Reset hasil ke nilai awal
    document.getElementById('berat-badan-input').value = ''; // Reset input berat badan
    document.getElementById('usia-input').value = ''; // Reset input usia
    document.getElementById('tinggi-badan-input').value = ''; // Reset input tinggi badan

    // Reset pilihan gender
    let genderInputs = document.getElementsByName('jenis-kelamin');
    for (let i = 0; i < genderInputs.length; i++) {
        genderInputs[i].checked = false;
    }
  }
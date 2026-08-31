function hitungPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 70) return "B";
    if (nilai >= 55) return "C";
    return "D";
}

function prosesNilai() {
    // Ambil elemen DOM
    const nama = document.getElementById('nama').value.trim();
    const jam = document.getElementById('jam').value;
    const tugasStr = document.getElementById('tugas').value;
    const utsStr = document.getElementById('uts').value;
    const uasStr = document.getElementById('uas').value;

    const alertError = document.getElementById('alert-error');
    const resultCard = document.getElementById('result-card');

    // Sembunyikan pesan awal
    alertError.style.display = 'none';
    resultCard.style.display = 'none';

    // 1. Validasi data & jadwal tidak boleh kosong
    if (!nama || !jam || tugasStr === '' || utsStr === '' || uasStr === '') {
        alertError.innerText = "⚠️ Gagal: Semua kolom (Nama, Jadwal Jam, Nilai Tugas, UTS, UAS) wajib diisi!";
        alertError.style.display = 'block';
        return;
    }

    const tugas = parseFloat(tugasStr);
    const uts = parseFloat(utsStr);
    const uas = parseFloat(uasStr);

    // 2. Validasi range nilai
    if (tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alertError.innerText = "⚠️ Gagal: Input nilai harus berada dalam rentang 0 sampai 100!";
        alertError.style.display = 'block';
        return;
    }

    // 3. Hitung Rumus: 30% Tugas + 30% UTS + 40% UAS
    const nilaiAkhir = (0.30 * tugas) + (0.30 * uts) + (0.40 * uas);
    const predikat = hitungPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "LULUS" : "TIDAK LULUS";

    // 4. Tampilkan Hasil ke DOM
    document.getElementById('res-nama').innerText = nama;
    document.getElementById('res-jam').innerText = jam;
    document.getElementById('res-tugas').innerText = tugas.toFixed(1);
    document.getElementById('res-uts').innerText = uts.toFixed(1);
    document.getElementById('res-uas').innerText = uas.toFixed(1);
    document.getElementById('res-akhir').innerText = nilaiAkhir.toFixed(2);
    document.getElementById('res-predikat').innerText = predikat;

    const statusBadge = document.getElementById('res

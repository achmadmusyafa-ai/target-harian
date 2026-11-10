# Target Harian

Aplikasi web statis untuk mencatat kegiatan harian: target dengan progres, prioritas dan kategori, pengingat jam, tugas berulang, streak, statistik 7 hari, catatan harian, ekspor CSV, cadangan JSON, dan sinkronisasi opsional ke Google Sheets. Tanpa build, tanpa dependensi. Bisa dipasang di layar utama HP (PWA) dan jalan offline setelah dibuka sekali.

## Isi folder
- `index.html` aplikasi utama
- `manifest.json`, `icon.svg`, `sw.js` untuk PWA
- `netlify.toml` konfigurasi Netlify
- `apps-script-sheets.gs` backend Google Sheets (opsional)

## Unggah ke GitHub
1. Buat repository baru di github.com, misalnya `target-harian`.
2. Klik **Add file > Upload files**, seret semua isi folder ini (bukan zip-nya), lalu **Commit changes**.
   Atau lewat terminal:
   ```
   git init
   git add .
   git commit -m "Target Harian"
   git branch -M main
   git remote add origin https://github.com/USERNAME/target-harian.git
   git push -u origin main
   ```

## Deploy ke Netlify
1. Masuk ke app.netlify.com, pilih **Add new site > Import an existing project**.
2. Hubungkan GitHub dan pilih repository `target-harian`.
3. Kolom build command dikosongkan, publish directory `.`, lalu **Deploy**.
4. Alternatif tanpa GitHub: buka app.netlify.com/drop lalu seret folder ini.

Alamat situs bisa diganti di **Site configuration > Change site name**.

## Memasang di HP
- Android (Chrome): menu tiga titik, **Install app** atau **Add to Home screen**.
- iPhone (Safari): **Share > Add to Home Screen**.

## Sinkronisasi Google Sheets (opsional)
1. Buat Google Sheet baru, buka **Extensions > Apps Script**.
2. Tempel isi `apps-script-sheets.gs`, simpan.
3. **Deploy > New deployment > Web app**, *Execute as: Me*, *Who has access: Anyone*, lalu salin URL web app.
4. Di aplikasi, buka tab **Data**, tempel URL, lalu pakai **Kirim ke Sheets** atau **Ambil dari Sheets**.

Catatan: data utama tetap di peramban (localStorage). Sheets berfungsi sebagai cadangan cloud. URL "Anyone" berarti siapa pun yang tahu URL-nya dapat membaca dan menimpa data, jadi jangan dibagikan.

## Memperbarui
Ubah file di GitHub, Netlify otomatis deploy ulang. Setelah pembaruan, buka aplikasi dua kali agar service worker memuat versi baru.

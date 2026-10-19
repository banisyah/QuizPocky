// Sumber soal: EMC 2025 (Eduversal Mathematics Competition) Tingkat Provinsi, Kelas 7.
// Soal pilgan memakai kunci resmi dari PDF (sudah dicek ulang). Soal isian (31-35) tidak punya kunci di PDF,
// jawabannya dihitung sendiri. Tidak dimasukkan: no. 10 (kunci bergantung tafsir) dan no. 19 (jawaban sebenarnya 180, tidak ada di pilihan).
const rp = String.raw;

const EMCPV_QUESTIONS = [
  /* 1 */ {
    type: "mc",
    q: rp`Diketahui ekspresi $3(2x-1)-2(x+4)$.<br><b>Bentuk sederhana dari ekspresi tersebut adalah ...</b>`,
    opts: ["$6x-11$", "$4x-11$", "$4x+5$", "$6x+5$"],
    ans: "B",
    hint: rp`Buka kurung dengan sifat distributif: $3(2x-1)=6x-3$ dan $2(x+4)=2x+8$.<br>
      $6x-3-(2x+8)=6x-3-2x-8=4x-11$.`,
  },
  /* 2 */ {
    type: "mc",
    q: rp`Seorang guru mencatat jumlah buku yang dibaca oleh 5 siswa dalam 1 bulan:
      <table class="tbl"><thead><tr><th>Siswa</th><th>Jumlah Buku</th></tr></thead><tbody>
      <tr><td>A</td><td>3</td></tr><tr><td>B</td><td>5</td></tr><tr><td>C</td><td>2</td></tr><tr><td>D</td><td>6</td></tr><tr><td>E</td><td>4</td></tr></tbody></table>
      <b>Berdasarkan tabel di atas, berapa persentase siswa yang membaca lebih dari 3 buku dalam sebulan?</b>`,
    opts: ["50%", "40%", "60%", "20%"],
    ans: "C",
    hint: rp`"Lebih dari 3 buku" berarti 4, 5, atau 6 buku: siswa B (5), D (6), dan E (4), yaitu 3 siswa.<br>
      Persentase $=\frac35\times100\%=60\%$.`,
  },
  /* 3 */ {
    type: "mc",
    q: rp`Sebuah kantong berisi 6 kelereng merah dan 4 kelereng biru. Diambil satu kelereng secara acak.<br><b>Peluang yang terambil kelereng biru adalah ...</b>`,
    opts: [rp`$\frac23$`, rp`$\frac35$`, rp`$\frac25$`, rp`$\frac1{10}$`],
    ans: "C",
    hint: rp`Peluang $=\dfrac{\text{banyak kelereng biru}}{\text{banyak seluruh kelereng}}=\dfrac4{6+4}=\dfrac4{10}=\dfrac25$.`,
  },
  /* 4 */ {
    type: "mc",
    q: rp`Lingkaran pada gambar di bawah memiliki luas $7\pi$ unit persegi.
      <figure class="fig"><svg viewBox="0 0 140 140" width="150" role="img" aria-label="Lingkaran di dalam persegi, keempat sudut persegi diarsir"><rect x="10" y="10" width="120" height="120" fill="currentColor" fill-opacity=".35" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="70" r="60" fill="var(--panel)" stroke="currentColor" stroke-width="1.6"/></svg></figure>
      <b>Luas daerah abu-abu adalah ... unit persegi.</b>`,
    opts: [rp`$21-7\pi$`, rp`$28-7\pi$`, rp`$42-8\pi$`, rp`$36-8\pi$`],
    ans: "B",
    hint: rp`Lingkaran menyinggung keempat sisi persegi, jadi sisi persegi $=2r$.<br>
      $\pi r^2=7\pi\Rightarrow r^2=7$. Luas persegi $=(2r)^2=4r^2=28$.<br>
      Luas daerah abu-abu $=$ luas persegi $-$ luas lingkaran $=28-7\pi$.`,
  },
  /* 5 */ {
    type: "mc",
    q: rp`Diberikan dua bilangan. Hasil penjumlahan kedua bilangan tersebut adalah 8 sementara selisih dari keduanya adalah 2.<br><b>Selisih dari kuadrat kedua bilangan tersebut adalah ...</b>`,
    opts: ["16", "8", "4", "2"],
    ans: "A",
    hint: rp`Selisih kuadrat: $a^2-b^2=(a+b)(a-b)$.<br>
      $=8\times2=16$. (Cek: bilangannya 5 dan 3, $25-9=16$.)`,
  },
  /* 6 */ {
    type: "mc",
    q: rp`Manakah dari pilihan berikut yang ekuivalen dengan $\dfrac{1}{\frac1a+\frac1b}$?`,
    opts: [rp`$\frac{ab}{a^2+b^2}$`, rp`$\frac{a+b}{ab}$`, rp`$\frac{a^2+b^2}{ab}$`, rp`$\frac{ab}{a+b}$`],
    ans: "D",
    hint: rp`Jumlahkan dulu penyebutnya: $\frac1a+\frac1b=\frac{b+a}{ab}$.<br>
      Lalu $\dfrac1{(a+b)/ab}=\dfrac{ab}{a+b}$.`,
  },
  /* 7 */ {
    type: "mc",
    q: rp`Bentuk sederhana dari $\dfrac{3^5\cdot3^{-2}}{3^{-1}}$ adalah ...`,
    opts: ["9", "243", "81", "27"],
    ans: "C",
    hint: rp`Gunakan sifat pangkat: perkalian menjumlahkan pangkat, pembagian mengurangkan pangkat.<br>
      $3^5\cdot3^{-2}=3^3$, lalu $\dfrac{3^3}{3^{-1}}=3^{3-(-1)}=3^4=81$.`,
  },
  /* 8 */ {
    type: "mc",
    q: rp`Jumlah pakan yang dikonsumsi oleh seekor ikan per hari sebanding dengan massa dari ikan tersebut. Diketahui bahwa jumlah pakan yang dimakan ikan dengan massa 50 gram per hari adalah 8 gram.<br><b>Jumlah pakan yang dimakan per hari oleh ikan dengan massa 150 gram adalah ... gram.</b>`,
    opts: ["16", "12", "18", "24"],
    ans: "D",
    hint: rp`"Sebanding" berarti perbandingannya tetap. Massa naik dari 50 ke 150 gram, yaitu $3$ kali lipat.<br>
      Pakan juga $3$ kali lipat: $8\times3=24$ gram.`,
  },
  /* 9 */ {
    type: "mc",
    q: rp`Ani membawa uang sebesar Rp200.000 untuk berbelanja. Ia ingin membeli 3 buah buku yang masing-masing berharga Rp45.500. Untuk pembelian 3 buku tersebut toko memberikan <b>diskon 15%</b> pada total harga 3 buku. Sisa uang Ani setelah membeli buku akan dipakai untuk membeli pensil yang masing-masing berharga Rp2.750.<br><b>Berapakah banyaknya pensil maksimum yang dapat dibeli Ani setelah mendapat diskon?</b>`,
    opts: ["31 batang", "30 batang", "29 batang", "28 batang"],
    ans: "B",
    hint: rp`Total harga 3 buku $=3\times45.500=136.500$. Diskon 15% berarti bayar $85\%$: $136.500\times0{,}85=116.025$.<br>
      Sisa uang $=200.000-116.025=83.975$.<br>
      Banyak pensil $=\lfloor83.975\div2.750\rfloor=\lfloor30{,}5\ldots\rfloor=30$ batang.`,
  },
  /* 11 */ {
    type: "mc",
    q: rp`<b>Berapakah banyaknya bilangan bulat $x$ yang memenuhi persamaan berikut?</b><br>
      $\dfrac{1}{1-\dfrac{1}{1-x}}=x$`,
    opts: ["tak terhingga", "1", "2", "0"],
    ans: "D",
    hint: rp`Sederhanakan: $1-\dfrac1{1-x}=\dfrac{(1-x)-1}{1-x}=\dfrac{-x}{1-x}$, sehingga $\dfrac1{\,-x/(1-x)\,}=\dfrac{1-x}{-x}=\dfrac{x-1}{x}$.<br>
      Persamaan: $\dfrac{x-1}x=x\Rightarrow x-1=x^2\Rightarrow x^2-x+1=0$.<br>
      Diskriminan $=1-4=-3<0$, tidak ada solusi real, jadi banyak bilangan bulat yang memenuhi $=0$.`,
  },
  /* 12 */ {
    type: "mc",
    q: rp`<b>Berapa banyak bilangan cacah antara 0 dan 999 (termasuk 0 dan 999) yang memenuhi sifat: digit ratusannya sama dengan jumlah digit puluhan dan satuannya?</b><br>Contoh: 321 memenuhi karena digit ratusnya 3 dan $2+1=3$.`,
    opts: ["60", "50", "45", "55"],
    ans: "D",
    hint: rp`Tulis bilangan sebagai $\overline{htu}$ dengan $h=t+u$ (bilangan kurang dari 3 digit dianggap $h=0$ di depan).<br>
      Syarat $t+u\le9$ (karena $h$ satu digit). Untuk jumlah $s$, ada $s+1$ pasangan $(t,u)$.<br>
      Total $=1+2+3+\cdots+10=55$.`,
  },
  /* 13 */ {
    type: "mc",
    q: rp`Hasil penjumlahan sudut dalam pada sebuah segilima beraturan adalah ... .`,
    opts: ["$360^\\circ$", "$540^\\circ$", "$180^\\circ$", "$90^\\circ$"],
    ans: "B",
    hint: rp`Jumlah sudut dalam segi-$n$ $=(n-2)\times180^\circ$. Untuk segilima ($n=5$): $3\times180^\circ=540^\circ$.`,
  },
  /* 14 */ {
    type: "mc",
    q: rp`Diambil 3 bilangan secara serentak (tanpa pengembalian) dari himpunan bilangan $\{1,2,\ldots,9\}$.<br><b>Peluang bahwa ketiga bilangan yang terambil membentuk barisan aritmetika (artinya dapat disusun menjadi suatu progresi aritmetika dengan beda konstan) adalah ...</b>`,
    opts: [rp`$\frac4{21}$`, rp`$\frac16$`, rp`$\frac2{11}$`, rp`$\frac17$`],
    ans: "A",
    hint: rp`Banyak cara memilih 3 bilangan: $\binom93=84$.<br>
      Hitung tiga bilangan berbeda $a,a+d,a+2d$: beda $d=1$ ada 7 (1-2-3 sampai 7-8-9), $d=2$ ada 5, $d=3$ ada 3, $d=4$ ada 1. Total $=16$.<br>
      Peluang $=\dfrac{16}{84}=\dfrac4{21}$.`,
  },
  /* 15 */ {
    type: "mc",
    q: rp`Diketahui bahwa bilangan $p$ dan $q$ adalah <b>bilangan prima berurutan</b>.<br><b>Jika hasil kali kedua bilangan tersebut ditambah dengan jumlahnya menghasilkan 95, maka nilai $p+q$ adalah ...</b>`,
    opts: ["20", "18", "22", "16"],
    ans: "B",
    hint: rp`$pq+p+q=95$. Tambah 1 di kedua ruas: $pq+p+q+1=96\Rightarrow(p+1)(q+1)=96$.<br>
      Coba pasangan bilangan prima berurutan: $(5,7)\to6\cdot8=48$, $(7,11)\to8\cdot12=96$ ✓, $(11,13)\to12\cdot14=168$.<br>
      Jadi $p+q=7+11=18$.`,
  },
  /* 16 */ {
    type: "mc",
    q: rp`Tiga bilangan $a,b,$ dan $c$ memiliki rasio $2:3:5$.<br><b>Jika jumlah $b$ dan $c$ dikurangi $a$ menghasilkan 48, maka nilai $c$ adalah ... .</b>`,
    opts: ["50", "30", "40", "20"],
    ans: "C",
    hint: rp`Misal $a=2k$, $b=3k$, $c=5k$. Maka $b+c-a=3k+5k-2k=6k=48\Rightarrow k=8$.<br>
      $c=5k=40$.`,
  },
  /* 17 */ {
    type: "mc",
    q: rp`<b>Tentukan banyak pasangan bilangan bulat $(x,y)$ yang memenuhi</b><br>$|x|+|y|=10$<br>dan $xy$ habis dibagi 4.`,
    opts: ["16", "28", "20", "24"],
    ans: "C",
    hint: rp`Kasus 1: $x=0$ atau $y=0$, maka $xy=0$ (habis dibagi 4): $(0,\pm10)$ dan $(\pm10,0)$ &rarr; 4 pasangan.<br>
      Kasus 2: $|x|=a$ dan $|y|=10-a$ dengan $a=1,\ldots,9$. Hasil kali $a(10-a)$ habis dibagi 4 untuk $a=2,4,6,8$ (16, 24, 24, 16). Tiap $a$ punya $4$ kombinasi tanda: $4\times4=16$ pasangan.<br>
      Total $=4+16=20$.`,
  },
  /* 18 */ {
    type: "mc",
    q: rp`Fungsi $f$ didefinisikan sebagai $f(x)=3x-a$.<br><b>Jika diketahui $f(2)=11$, maka nilai dari $f(-3)$ adalah ...</b>`,
    opts: ["$-16$", "$16$", "$-4$", "$20$"],
    ans: "C",
    hint: rp`$f(2)=6-a=11\Rightarrow a=-5$, sehingga $f(x)=3x+5$.<br>
      $f(-3)=3(-3)+5=-4$.`,
  },
  /* 20 */ {
    type: "mc",
    q: rp`Sebuah tangki air berbentuk balok dengan ukuran $75\text{ cm}\times60\text{ cm}\times50\text{ cm}$ diisi air melalui dua keran, $A$ dan $B$. Debit keran $A$ adalah 3 liter/menit dan debit keran $B$ adalah 5 liter/menit. Tangki tersebut memiliki lubang kebocoran di dasarnya yang menyebabkan air keluar dengan debit 5,5 liter/menit.<br>
      Jika pada pukul 08.00 WIB tangki dalam keadaan kosong dan kedua keran dibuka bersamaan, <b>maka tangki akan mulai penuh dan meluap pada pukul ... .</b>`,
    opts: ["09.30 WIB", "10.00 WIB", "10.15 WIB", "09.45 WIB"],
    ans: "A",
    hint: rp`Volume tangki $=75\times60\times50=225.000$ cm$^3=225$ liter.<br>
      Debit bersih $=3+5-5{,}5=2{,}5$ liter/menit. Waktu penuh $=\dfrac{225}{2{,}5}=90$ menit.<br>
      $08.00+1$ jam $30$ menit $=09.30$ WIB.`,
  },
  /* 21 */ {
    type: "mc",
    q: rp`Dua bilangan $A$ dan $B$ memenuhi syarat berikut:<br>&bull; KPK $(A,B)=360$<br>&bull; FPB $(A,B)=12$<br>Jika $A$ dan $B$ bilangan bulat positif, <b>maka selisih terkecil antara $A$ dan $B$ adalah ... .</b>`,
    opts: ["12", "36", "48", "24"],
    ans: "A",
    hint: rp`Tulis $A=12a$ dan $B=12b$ dengan $a,b$ saling prima. KPK $=12ab=360\Rightarrow ab=30$.<br>
      Pasangan saling prima dengan hasil kali 30: $(1,30),(2,15),(3,10),(5,6)$. Selisih terkecil $|a-b|=1$ (dari 5 dan 6).<br>
      $|A-B|=12\times1=12$ ($A=60$, $B=72$).`,
  },
  /* 22 */ {
    type: "mc",
    q: rp`Diketahui titik-titik $A(2,3)$, $B(8,3)$ dan $C(5,9)$ membentuk segitiga $ABC$. Titik $D$ adalah bayangan titik $C$ terhadap garis yang melalui $A$ dan $B$.<br><b>Koordinat titik $D$ adalah ... .</b>`,
    opts: ["$(5,-3)$", "$(5,-1)$", "$(5,-6)$", "$(5,-9)$"],
    ans: "A",
    hint: rp`Garis melalui $A(2,3)$ dan $B(8,3)$ adalah garis mendatar $y=3$.<br>
      Pencerminan terhadap $y=3$ mempertahankan $x$ dan jarak vertikal: $C(5,9)$ berjarak $6$ di atas garis, jadi $D$ berjarak $6$ di bawah garis, yaitu $y=3-6=-3$.<br>
      $D=(5,-3)$.`,
  },
  /* 23 */ {
    type: "mc",
    q: rp`Tentukan banyaknya tripel terurut $(x,y,z)$ bilangan cacah (yaitu $x,y,z\ge0$) yang memenuhi semua syarat berikut:<br>
      1. $x+y+z=30$,<br>2. $x\le10$,<br>3. $y>5$,<br>4. $z$ genap.<br>
      <b>Banyak solusi $(x,y,z)$ adalah ... .</b>`,
    opts: ["100", "108", "113", "96"],
    ans: "C",
    hint: rp`Tulis $y=6+y'$ ($y'\ge0$) dan $z=2k$ ($k\ge0$). Persamaan menjadi $x+y'+2k=24$.<br>
      Untuk tiap $x=0,1,\ldots,10$, nilai $k$ boleh $0,1,\ldots,\lfloor\frac{24-x}2\rfloor$ (lalu $y'$ ditentukan): banyaknya $\lfloor\frac{24-x}2\rfloor+1$.<br>
      $x=0..10$: $13,12,12,11,11,10,10,9,9,8,8$. Jumlahnya $=113$.`,
  },
  /* 24 */ {
    type: "mc",
    q: rp`Nilai ulangan Matematika 22 siswa ditunjukkan pada tabel berikut:
      <table class="tbl"><thead><tr><th>Nilai</th><th>Frekuensi</th></tr></thead><tbody>
      <tr><td>40</td><td>4</td></tr><tr><td>50</td><td>5</td></tr><tr><td>60</td><td>8</td></tr><tr><td>70</td><td>3</td></tr><tr><td>80</td><td>2</td></tr></tbody></table>
      Guru kemudian menghapus dua nilai tertinggi (80 dan 80) karena dianggap hasil kecurangan.<br><b>Rata-rata nilai siswa setelah dua data tersebut dihapus adalah ... .</b>`,
    opts: ["58", "56", "55", "57"],
    ans: "C",
    hint: rp`Jumlah nilai awal $=4\cdot40+5\cdot50+8\cdot60+3\cdot70+2\cdot80=160+250+480+210+160=1260$.<br>
      Setelah menghapus $80+80=160$: jumlah $=1100$ dengan $20$ siswa.<br>
      Rata-rata $=\dfrac{1100}{20}=55$.`,
  },
  /* 25 */ {
    type: "mc",
    q: rp`Perhatikan pola berikut:<br>$2,\ 6,\ 12,\ 20,\ 30,\ 42,\ \ldots$<br><b>Jika pola tersebut dilanjutkan, maka jumlah 10 suku pertama dari barisan itu adalah ... .</b>`,
    opts: ["440", "500", "460", "480"],
    ans: "A",
    hint: rp`Suku ke-$n$: $n(n+1)$ ($1\cdot2,\ 2\cdot3,\ 3\cdot4,\ \ldots$).<br>
      Jumlah $n$ suku pertama $=\dfrac{n(n+1)(n+2)}3$. Untuk $n=10$: $\dfrac{10\cdot11\cdot12}3=440$.`,
  },
  /* 26 */ {
    type: "mc",
    q: rp`Bilangan $x$ memenuhi persamaan $x=1+\dfrac1x$.<br><b>Maka bilangan $x$ termasuk dalam himpunan bilangan ... .</b>`,
    opts: ["ganjil", "bulat", "riil", "pecahan"],
    ans: "C",
    hint: rp`Kalikan dengan $x$: $x^2=x+1\Rightarrow x^2-x-1=0$, sehingga $x=\dfrac{1\pm\sqrt5}2$.<br>
      Nilai ini adalah bilangan irasional (bukan ganjil, bukan bulat, bukan pecahan), tetapi tetap merupakan bilangan <b>riil</b>.`,
  },
  /* 27 */ {
    type: "mc",
    q: rp`Perhatikan bilangan desimal berikut:<br>$0,\overline{36}=0{,}363636\ldots$<br><b>Jika bilangan desimal tersebut diubah menjadi bentuk pecahan paling sederhana, hasilnya adalah ... .</b>`,
    opts: [rp`$\frac{36}{99}$`, rp`$\frac9{25}$`, rp`$\frac4{11}$`, rp`$\frac5{11}$`],
    ans: "C",
    hint: rp`Desimal berulang 2 digit: $0,\overline{36}=\dfrac{36}{99}$.<br>
      Sederhanakan dengan FPB 9: $\dfrac{36}{99}=\dfrac4{11}$.`,
  },
  /* 28 */ {
    type: "mc",
    q: rp`Sebuah kubus $ABCD.EFGH$ memiliki panjang rusuk 6 cm. Titik $M$, $N$, dan $P$ masing-masing adalah titik tengah rusuk $AB$, $AD$, dan $AE$.<br><b>Tentukan volume tetrahedron $MNPG$.</b>`,
    opts: [rp`$54\text{ cm}^3$`, rp`$9\text{ cm}^3$`, rp`$27\text{ cm}^3$`, rp`$\frac{45}2\text{ cm}^3$`],
    ans: "D",
    hint: rp`Pasang koordinat: $A(0,0,0)$, $B(6,0,0)$, $D(0,6,0)$, $E(0,0,6)$, sehingga $G(6,6,6)$. Maka $M(3,0,0)$, $N(0,3,0)$, $P(0,0,3)$.<br>
      Volume tetrahedron $=\frac16\left|\det\big(\vec{MN},\vec{MP},\vec{MG}\big)\right|$ dengan $\vec{MN}=(-3,3,0)$, $\vec{MP}=(-3,0,3)$, $\vec{MG}=(3,6,6)$.<br>
      Determinan $=135$, sehingga volume $=\frac{135}6=\frac{45}2\text{ cm}^3$.`,
  },
  /* 29 */ {
    type: "mc",
    q: rp`<b>Berapa banyak bilangan prima $p$ yang memenuhi $1<p<100$ sehingga $p^2-1$ habis dibagi 24?</b>`,
    opts: ["23", "21", "24", "22"],
    ans: "A",
    hint: rp`$p^2-1=(p-1)(p+1)$. Untuk prima $p>3$: $p$ ganjil dan tidak habis dibagi 3, sehingga $(p-1)(p+1)$ habis dibagi $8$ (dua genap berurutan, salah satunya kelipatan 4) dan habis dibagi $3$. Jadi habis dibagi $24$.<br>
      Untuk $p=2$: $3$ dan untuk $p=3$: $8$, keduanya tidak habis dibagi 24.<br>
      Ada 25 bilangan prima di bawah 100, dikurangi 2 dan 3: $25-2=23$.`,
  },
  /* 30 */ {
    type: "mc",
    q: rp`Diberikan sebuah bujur sangkar $ABCD$ dengan panjang sisi 12 cm. Titik $P$ terletak di dalam bujur sangkar sehingga luas<br>
      $L_{\triangle PAB}=9\text{ cm}^2$, $L_{\triangle PBC}=16\text{ cm}^2$, $L_{\triangle PCD}=63\text{ cm}^2$.<br>
      <b>Berapakah luas $\triangle PDA$ dalam $\text{cm}^2$?</b>`,
    opts: ["56", "48", "60", "54"],
    ans: "A",
    hint: rp`Tinggi $\triangle PAB$ dan $\triangle PCD$ dari $P$ ke sisi sejajar $AB$ dan $CD$ berjumlah $12$ cm, jadi luas keduanya berjumlah $\frac12\cdot12\cdot12=72$ ($9+63=72$ ✓).<br>
      Begitu juga luas $\triangle PBC$ dan $\triangle PDA$ berjumlah $72$.<br>
      $L_{\triangle PDA}=72-16=56$ cm$^2$.`,
  },
  /* 31 */ {
    type: "num",
    q: rp`Sebuah kubus besar memiliki panjang rusuk 12 cm. Kubus itu dipotong menjadi 8 kubus kecil yang sama besar. Seluruh kubus kecil kemudian disusun menjadi satu balok baru sedemikian rupa sehingga panjang balok $=2\times$ lebar balok dan lebar balok $=2\times$ tinggi balok.<br><b>Tentukan luas permukaan balok baru dalam satuan $\text{cm}^2$.</b> (Tulis angkanya saja.)`,
    ans: "1008",
    hint: rp`Rusuk kubus kecil $=12\div2=6$ cm. Volume total $=8\times6^3=1728$ cm$^3$.<br>
      Misal tinggi $=h$, lebar $=2h$, panjang $=4h$: $4h\cdot2h\cdot h=8h^3=1728\Rightarrow h=6$. Jadi balok berukuran $24\times12\times6$.<br>
      Luas permukaan $=2(24\cdot12+24\cdot6+12\cdot6)=2(288+144+72)=1008$ cm$^2$.`,
  },
  /* 32 */ {
    type: "num",
    q: rp`Sebuah kotak berisi 12 bola: 6 bola merah, 4 bola biru, dan 2 bola hijau. Diambil 3 bola secara acak tanpa pengembalian.<br>Peluang bahwa ketiga bola yang terambil <b>mengandung tepat dua warna</b> dalam bentuk pecahan paling sederhana adalah $\frac ab$ (artinya salah satu warna muncul dua kali dan warna lain muncul sekali).<br><b>Tentukan nilai $b-a$.</b> (Tulis angkanya saja.)`,
    ans: "18",
    hint: rp`Total cara: $\binom{12}3=220$. Hitung pola "dua sewarna + satu warna lain":<br>
      merah-merah + biru: $\binom62\cdot4=60$; merah-merah + hijau: $15\cdot2=30$;<br>
      biru-biru + merah: $6\cdot6=36$; biru-biru + hijau: $6\cdot2=12$;<br>
      hijau-hijau + merah: $1\cdot6=6$; hijau-hijau + biru: $1\cdot4=4$. Total $=148$.<br>
      Peluang $=\dfrac{148}{220}=\dfrac{37}{55}$, sehingga $a=37$, $b=55$, dan $b-a=18$.`,
  },
  /* 33 */ {
    type: "num",
    q: rp`Suatu pecahan $\dfrac ab$ (dengan $a,b$ bilangan bulat positif dan $\text{FPB}(a,b)=1$) memiliki sifat berikut:<br>
      $\dfrac ab+\dfrac3b=\dfrac7a$<br><b>Tentukan nilai $a+b$.</b> (Tulis angkanya saja.)`,
    ans: "17",
    hint: rp`$\dfrac{a+3}b=\dfrac7a\Rightarrow a(a+3)=7b$.<br>
      Karena $\text{FPB}(a,b)=1$ dan $a$ membagi $7b$, maka $a$ membagi $7$: $a=1$ atau $a=7$.<br>
      $a=1$: $4=7b$ (tidak bulat). $a=7$: $70=7b\Rightarrow b=10$ ($\text{FPB}(7,10)=1$ ✓).<br>
      $a+b=17$.`,
  },
  /* 34 */ {
    type: "num",
    q: rp`Suatu barisan $(a_n)$ didefinisikan oleh $a_1=1,\ a_{n+1}=a_n+T_n$ untuk $n\ge1$, dengan $T_n$ adalah bilangan segitiga ke-$n$, yaitu $T_n=\dfrac{n(n+1)}2$.<br><b>Tentukan nilai $a_{12}$.</b> (Tulis angkanya saja.)`,
    ans: "287",
    hint: rp`$a_{12}=1+T_1+T_2+\cdots+T_{11}$. Jumlah bilangan segitiga $\sum_{k=1}^{m}T_k=\dfrac{m(m+1)(m+2)}6$.<br>
      Untuk $m=11$: $\dfrac{11\cdot12\cdot13}6=286$. Maka $a_{12}=1+286=287$.`,
  },
  /* 35 */ {
    type: "num",
    q: rp`Tiga wadah berisi cairan $A$ dan $B$ dengan perbandingan sebagai berikut:<br>
      &bull; Wadah I: $A:B=2:3$<br>&bull; Wadah II: $A:B=1:2$<br>&bull; Wadah III: $A:B=3:5$<br>
      Dari masing-masing wadah diambil 60 mL campuran, kemudian ketiga campuran tersebut dicampur menjadi satu wadah besar. Perbandingan akhir dalam bentuk paling sederhana cairan pada wadah besar tersebut adalah $A:B$.<br><b>Tentukan nilai dari $A+B$.</b> (Tulis angkanya saja.)`,
    ans: "360",
    hint: rp`Hitung banyak cairan $A$ dari tiap wadah (60 mL): I: $60\cdot\frac25=24$; II: $60\cdot\frac13=20$; III: $60\cdot\frac38=22{,}5$. Total $A=66{,}5$ mL.<br>
      Total campuran $=180$ mL, jadi $B=180-66{,}5=113{,}5$ mL.<br>
      $A:B=66{,}5:113{,}5=133:227$ (FPB 1, karena $133=7\cdot19$ dan $227$ prima).<br>
      $A+B=133+227=360$.`,
  },
];

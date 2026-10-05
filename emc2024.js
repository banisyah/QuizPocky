// Sumber soal: EMC 2024 (Komodo/Eduversal Math Competition) Babak Penyisihan, Kelas 7.
// Soal pilgan memakai kunci resmi dari PDF (sudah dicek ulang). Soal isian (31-40) tidak punya kunci di PDF,
// jawabannya dihitung sendiri. Tidak dimasukkan: no. 7, 18, 25, 30 (kunci tidak cocok dengan hitungan) dan no. 38 (jawaban tidak berupa angka biasa).
const rt = String.raw;

const EMC24_QUESTIONS = [
  /* 1 */ {
    type: "mc",
    q: rt`Di dalam sebuah lingkaran, dibuat sebuah persegi dimana setiap titik sudutnya menyentuh sisi lingkaran.<br><b>Berapakah perbandingan antara diagonal persegi dengan panjang jari-jari lingkaran tersebut?</b>`,
    opts: [rt`$1:\sqrt2$`, rt`$\sqrt2:1$`, "$2:1$", "$1:2$"],
    ans: "C",
    hint: rt`Karena keempat titik sudut persegi berada di lingkaran, diagonal persegi adalah <b>diameter</b> lingkaran.<br>Diameter $=2r$, jadi diagonal : jari-jari $=2r:r=2:1$.`,
  },
  /* 2 */ {
    type: "mc",
    q: rt`Naewari menyusun sebuah bilangan 5 angka dengan digit-digitnya berbeda dan tersusun dari angka $1,2,3,4$ dan $5$. Peluang pada susunan angkanya, jumlah angka-angka sebelah kiri angka $5$ lebih kecil dari jumlah angka-angka sebelah kanannya adalah pecahan sederhana $\frac pq$, dimana $p$ dan $q$ bilangan asli.<br><b>Nilai dari $p+q$ adalah ...</b>`,
    opts: ["20", "22", "24", "26"],
    ans: "B",
    hint: rt`Total susunan $=5!=120$. Jumlah semua angka selain 5 adalah $1+2+3+4=10$, jadi jumlah kiri harus $<5$.<br>
      Himpunan angka di kiri 5 dengan jumlah $<5$: kosong (24 susunan), $\{1\},\{2\},\{3\},\{4\}$ ($4\times6=24$), $\{1,2\},\{1,3\}$ ($2\times4=8$). Total $=56$.<br>
      Peluang $=\frac{56}{120}=\frac7{15}$, sehingga $p+q=7+15=22$.`,
  },
  /* 3 */ {
    type: "mc",
    q: rt`Terdapat lima bilangan bulat positif dengan rata-rata 50 dan jangkauan (selisih nilai terbesar dan terkecil) 10.<br><b>Nilai minimum yang mungkin untuk bilangan terkecil dari lima bilangan tersebut adalah ...</b>`,
    opts: ["40", "45", "41", "42"],
    ans: "D",
    hint: rt`Jumlah kelima bilangan $=5\times50=250$. Misal terkecil $=a$, maka tiap bilangan paling besar $a+10$.<br>
      Jumlah paling besar yang mungkin $=a+4(a+10)=5a+40$, dan harus $\ge250$, sehingga $a\ge42$.<br>
      Terkecil yang mungkin: $42$ (misalnya $42,52,52,52,52$).`,
  },
  /* 4 */ {
    type: "mc",
    q: rt`Tentukan jumlah semua solusi dari $x$ yang memenuhi $\sqrt[x]{4}\cdot4^x=32$.`,
    opts: ["1", "2", "1,5", "2,5"],
    ans: "D",
    hint: rt`Ubah ke basis 2: $\sqrt[x]{4}=4^{1/x}=2^{2/x}$ dan $4^x=2^{2x}$, jadi $2^{2/x+2x}=2^5$.<br>
      $\frac2x+2x=5\Rightarrow2x^2-5x+2=0\Rightarrow(2x-1)(x-2)=0$, yaitu $x=\tfrac12$ atau $x=2$.<br>
      Jumlah solusi $=\tfrac12+2=2{,}5$.`,
  },
  /* 5 */ {
    type: "mc",
    q: rt`Perhatikan dua persamaan berikut.<br>$2x-y=3$<br>$2x^2+xy-y^2-4x=4y-2$<br><b>Tentukan nilai dari $x+y$.</b>`,
    opts: ["1", "-2", "0", "2"],
    ans: "D",
    hint: rt`Faktorkan $2x^2+xy-y^2=(2x-y)(x+y)$.<br>
      Persamaan kedua: $(2x-y)(x+y)-4(x+y)+2=0$. Substitusi $2x-y=3$: $3(x+y)-4(x+y)+2=0$.<br>
      $-(x+y)+2=0\Rightarrow x+y=2$.`,
  },
  /* 6 */ {
    type: "mc",
    q: rt`Perhatikan dua persamaan berikut.<br>$2x=5y=7z$<br>$x+y+z=118$.<br><b>Tentukan nilai dari $2x+3y-4z$.</b>`,
    opts: ["126", "136", "144", "-136"],
    ans: "C",
    hint: rt`Misal $2x=5y=7z=k$, maka $x=\frac k2$, $y=\frac k5$, $z=\frac k7$.<br>
      $\frac k2+\frac k5+\frac k7=\frac{59k}{70}=118\Rightarrow k=140$, sehingga $x=70$, $y=28$, $z=20$.<br>
      $2x+3y-4z=140+84-80=144$.`,
  },
  /* 8 */ {
    type: "mc",
    q: rt`Perhatikan persamaan berikut.<br>
      $\dfrac{1}{2+\dfrac{1+\frac1m}{\frac15+\dfrac{1}{1+\frac13}}}=\dfrac13$.<br>
      <b>Tentukan jumlah semua nilai yang mungkin dari $m$.</b>`,
    opts: ["-5", "-20", "-10", "10"],
    ans: "B",
    hint: rt`Karena $\frac1{(\ldots)}=\frac13$, maka penyebut besar $=3$, yaitu $2+\dfrac{1+\frac1m}{\frac15+\frac1{4/3}}=3$.<br>
      $\frac15+\frac34=\frac{19}{20}$, jadi $\dfrac{1+\frac1m}{19/20}=1\Rightarrow1+\frac1m=\frac{19}{20}$.<br>
      $\frac1m=-\frac1{20}\Rightarrow m=-20$ (hanya satu nilai), jumlahnya $-20$.`,
  },
  /* 9 */ {
    type: "mc",
    q: rt`Bilangan $\overline{yx}$ adalah bilangan dua digit, $y$ digit puluhan dan $x$ digit satuan. Jika $\dfrac{x}{0,y}+m=\dfrac{\overline{yx}}{0,y}$, <b>nilai dari $m$ adalah ...</b>`,
    opts: ["10", "1000", "1", "100"],
    ans: "D",
    hint: rt`$\overline{yx}=10y+x$ dan $0,y=\frac y{10}$.<br>
      $m=\dfrac{\overline{yx}}{0,y}-\dfrac x{0,y}=\dfrac{10y+x-x}{y/10}=\dfrac{10y}{y/10}=100$.<br>
      <i>Catatan: teks asli menyebut "x puluhan, y satuan", tetapi notasi $\overline{yx}$ dan kunci resmi (100) hanya konsisten jika $y$ adalah digit puluhan. Soal di sini sudah disesuaikan.</i>`,
  },
  /* 10 */ {
    type: "mc",
    q: rt`Bilangan desimal $0{,}2024202420242024\ldots$ dapat dituliskan dalam bentuk $\frac ab$ dengan $\text{FPB}(a,b)=1$.<br><b>Nilai dari $b-a$ adalah ...</b>`,
    opts: ["1322", "2024", "725", "682"],
    ans: "C",
    hint: rt`Desimal berulang 4 digit: $0{,}\overline{2024}=\frac{2024}{9999}$.<br>
      $\text{FPB}(2024,9999)=11$ (karena $2024=8\cdot11\cdot23$ dan $9999=9\cdot11\cdot101$), jadi pecahan sederhananya $\frac{184}{909}$.<br>
      $b-a=909-184=725$.`,
  },
  /* 11 */ {
    type: "mc",
    q: rt`Tiga bilangan $a,2,b$ membentuk barisan aritmatika (selisih $a$ dan $2$ sama dengan selisih $2$ dan $b$). Jumlah kuadrat ketiganya adalah $16$.<br><b>Tentukan nilai dari hasil kali $a$ dan $b$.</b>`,
    opts: ["2", "6", "3", "4"],
    ans: "A",
    hint: rt`Barisan aritmatika: suku tengah adalah rata-rata, $2=\frac{a+b}2\Rightarrow a+b=4$.<br>
      Jumlah kuadrat: $a^2+4+b^2=16\Rightarrow a^2+b^2=12$.<br>
      $ab=\dfrac{(a+b)^2-(a^2+b^2)}{2}=\dfrac{16-12}2=2$.`,
  },
  /* 12 */ {
    type: "mc",
    q: rt`Tentukan nilai dari<br>
      $\left(\dfrac{2-1}{2^3-1}\right)\cdot\left(\dfrac{3^3+1}{3+1}\right)\cdot\left(\dfrac{4-1}{4^3-1}\right)\cdots\left(\dfrac{2024-1}{2024^3-1}\right)\cdot\left(\dfrac{2025^3+1}{2025+1}\right)$`,
    opts: [rt`$\frac1{2024}$`, rt`$\frac1{2023}$`, "$2024$", "$1$"],
    ans: "D",
    hint: rt`Untuk $n$ genap: $\dfrac{n-1}{n^3-1}=\dfrac1{n^2+n+1}$. Untuk $n$ ganjil: $\dfrac{n^3+1}{n+1}=n^2-n+1$.<br>
      Perhatikan $n^2-n+1$ untuk $n=k+1$ sama dengan $k^2+k+1$. Jadi suku $n=2$ ($\tfrac17$) dibatalkan suku $n=3$ ($7$), suku $n=4$ ($\tfrac1{21}$) dibatalkan suku $n=5$ ($21$), dan seterusnya.<br>
      Semua suku berpasangan dan saling membatalkan, hasilnya $1$.`,
  },
  /* 13 */ {
    type: "mc",
    q: rt`Tentukan jumlah dari penjumlahan berikut<br>$1+5+7+11+13+17+19+23+25+\cdots+91+95+97$`,
    opts: ["1634", "1635", "1633", "1636"],
    ans: "C",
    hint: rt`Bilangan-bilangan itu adalah bilangan dari $1$ sampai $97$ yang tidak habis dibagi 2 maupun 3, yaitu berbentuk $6k\pm1$.<br>
      Pasangkan $(6k-1)+(6k+1)=12k$ untuk $k=1,\ldots,16$: $12(1+2+\cdots+16)=12\cdot136=1632$.<br>
      Tambah suku pertama $1$: $1632+1=1633$.`,
  },
  /* 14 */ {
    type: "mc",
    q: rt`<b>Berapa banyak bilangan asli dua digit yang jumlah digitnya adalah bilangan prima?</b>`,
    opts: ["35", "33", "34", "36"],
    ans: "B",
    hint: rt`Jumlah digit dua digit berkisar 1 sampai 18; prima yang mungkin: $2,3,5,7,11,13,17$. Hitung banyak bilangannya:<br>
      jumlah 2: 11, 20 (2) &nbsp; jumlah 3: 12, 21, 30 (3) &nbsp; jumlah 5: 14, 23, 32, 41, 50 (5)<br>
      jumlah 7: 16, 25, 34, 43, 52, 61, 70 (7) &nbsp; jumlah 11: 29, 38, 47, 56, 65, 74, 83, 92 (8)<br>
      jumlah 13: 49, 58, 67, 76, 85, 94 (6) &nbsp; jumlah 17: 89, 98 (2)<br>
      Total $=2+3+5+7+8+6+2=33$.`,
  },
  /* 15 */ {
    type: "mc",
    q: rt`Naewari menyusun beberapa bilangan 2 digit dan 3 digit yang digit-digitnya antara $a$ atau $b$, $a<b$. <b>Jika jumlah semua angka yang disusun adalah $5592$, maka banyaknya kemungkinan pasangan $(a,b)$ yang mungkin ada ... .</b>`,
    opts: ["4", "2", "3", "1"],
    ans: "C",
    hint: rt`Semua bilangan 2 digit dan 3 digit dengan digit $a$ atau $b$ (misalnya $aa,ab,ba,bb$ dan 8 bilangan tiga digit).<br>
      Untuk $a,b\neq0$: tiap posisi digit berisi $a$ dan $b$ sama banyak. Jumlah 2 digit $=2(a+b)(10+1)=22(a+b)$, jumlah 3 digit $=4(a+b)(100+10+1)=444(a+b)$.<br>
      Total $=466(a+b)=5592\Rightarrow a+b=12$. Pasangan $a<b$: $(3,9),(4,8),(5,7)$ &rarr; <b>3</b> pasangan.<br>
      (Kasus $a=0$ dicek terpisah dan tidak menghasilkan jumlah 5592.)`,
  },
  /* 16 */ {
    type: "mc",
    q: rt`Banyaknya pasangan bilangan $a,\ b,\ a<b$, sehingga $\text{FPB}(a,b)=6$ dan $\text{KPK}(a,b)=840$ adalah ...`,
    opts: ["1", "4", "8", "2"],
    ans: "B",
    hint: rt`Tulis $a=6m$ dan $b=6n$ dengan $\text{FPB}(m,n)=1$. Maka $\text{KPK}=6mn=840\Rightarrow mn=140=2^2\cdot5\cdot7$.<br>
      Karena $m,n$ saling prima, tiap faktor prima (dengan pangkatnya) masuk utuh ke salah satunya: $2^3=8$ pembagian berurutan.<br>
      Syarat $a<b$ hanya memilih satu dari tiap pasangan: $8\div2=4$.`,
  },
  /* 17 */ {
    type: "mc",
    q: rt`Tentukan nilai dari<br>
      $1+\dfrac{1+\dfrac{1+\dfrac{1+\cdots}{4}}{4}}{1+\dfrac{2}{1+\dfrac{2}{1+\dfrac{2}{\ddots}}}}$`,
    opts: [rt`$\frac34$`, rt`$\frac53$`, rt`$\frac43$`, rt`$\frac35$`],
    ans: "B",
    hint: rt`<b>Pembilang:</b> $P=1+\dfrac{P}{4}$ (pola berulang) $\Rightarrow\frac34P=1\Rightarrow P=\frac43$.<br>
      <b>Penyebut:</b> $Q=1+\dfrac2Q\Rightarrow Q^2-Q-2=0\Rightarrow Q=2$ (ambil yang positif).<br>
      Nilai $=1+\dfrac{4/3}{2}=1+\dfrac23=\dfrac53$.`,
  },
  /* 19 */ {
    type: "mc",
    q: rt`Terdapat dua buah akuarium dengan ukuran berbeda yang dijual di sebuah toko. Akuarium pertama berbentuk balok dengan ukuran $0{,}6\text{ m}\times90\text{ cm}\times250\text{ mm}$. Akuarium kedua berbentuk tabung dengan jari-jari $70\text{ cm}$ dan tinggi $500\text{ mm}$.<br><b>Berapakah selisih dari volume kedua akuarium tersebut? (dalam $\text{cm}^3$)</b><br>(Gunakan $\pi=\frac{22}7$)`,
    opts: ["650000", "660000", "635000", "645000"],
    ans: "C",
    hint: rt`Samakan satuan ke cm: $0{,}6\text{ m}=60$ cm, $250\text{ mm}=25$ cm, $500\text{ mm}=50$ cm.<br>
      Balok: $60\times90\times25=135.000$ cm$^3$.<br>
      Tabung: $\frac{22}7\cdot70^2\cdot50=22\cdot700\cdot50=770.000$ cm$^3$.<br>
      Selisih $=770.000-135.000=635.000$.`,
  },
  /* 20 */ {
    type: "mc",
    q: rt`<b>Banyaknya pasangan dua bilangan prima yang selisih kuadratnya bernilai 2024?</b>`,
    opts: ["0", "2", "1", "tak hingga"],
    ans: "A",
    hint: rt`$p^2-q^2=(p-q)(p+q)=2024=2^3\cdot11\cdot23$.<br>
      Jika kedua prima ganjil, $p-q$ dan $p+q$ sama-sama genap. Pasangan faktor genap: $(2,1012),(4,506),(22,92),(44,46)$ memberi $p=507,255,57,45$ &rarr; semuanya komposit.<br>
      Jika $q=2$: $p^2=2028$ bukan kuadrat sempurna. Jadi tidak ada pasangan: $0$.`,
  },
  /* 21 */ {
    type: "mc",
    q: rt`Sebuah kerucut dengan jari-jari alas 9 cm dan tinggi 15 cm dipotong secara horizontal pada sepertiga tinggi kerucut dari bagian puncaknya.<br><b>Berapakah perbandingan antara volume bagian yang dipotong dan volume bagian yang tersisa?</b>`,
    opts: ["1 : 27", "1 : 9", "1 : 8", "1 : 26"],
    ans: "D",
    hint: rt`Bagian yang dipotong adalah kerucut kecil dengan tinggi $\frac13$ tinggi semula. Volume sebanding dengan (tinggi)$^3$: $\left(\frac13\right)^3=\frac1{27}$ dari volume utuh.<br>
      Sisanya $\frac{26}{27}$. Perbandingan potongan : sisa $=1:26$.`,
  },
  /* 22 */ {
    type: "mc",
    q: rt`9 kolam renang identik dapat diisi oleh 3 pipa identik yang mengalir selama 5 jam per hari selama 9 hari.<br><b>Berapa kolam renang dapat diisi oleh 15 pipa selama 2 hari jika mereka mengalir selama 7 jam per hari?</b>`,
    opts: ["21", "9", "7", "14"],
    ans: "D",
    hint: rt`Hitung dengan "pipa-jam". Kasus pertama: $3\times5\times9=135$ pipa-jam untuk 9 kolam, jadi 1 kolam $=15$ pipa-jam.<br>
      Kasus kedua: $15\times7\times2=210$ pipa-jam, sehingga kolam yang terisi $=\dfrac{210}{15}=14$.`,
  },
  /* 23 */ {
    type: "mc",
    q: rt`Banyaknya bilangan asli $n>9$ yang tidak dapat dinyatakan dalam bentuk $n=4a+5b$ untuk suatu bilangan asli $a$ dan $b$ ada ...`,
    opts: ["9", "6", "8", "7"],
    ans: "B",
    hint: rt`Karena $a,b\ge1$, tulis $n-9=4a'+5b'$ dengan $a',b'\ge0$.<br>
      Bilangan yang tidak bisa dinyatakan sebagai $4a'+5b'$ (bilangan koin 4 dan 5) hanya: $1,2,3,6,7,11$ (ada $\frac{(4-1)(5-1)}2=6$ bilangan).<br>
      Jadi $n=10,11,12,15,16,20$: ada $6$ bilangan.`,
  },
  /* 24 */ {
    type: "mc",
    q: rt`Andra membeli sebuah sepeda dengan harga Rp5.000.000. Andra kemudian menjual sepeda tersebut kepada Chandra dengan harga 10% lebih mahal dari harga sebelumnya. Chandra kemudian menjual sepedanya Hendra dengan harga 20% lebih mahal dari harga sebelumnya. Setelah pemakaian 9 bulan, Hendra kemudian menjual sepeda tersebut kepada Nandra dengan harga 30% lebih murah dari harga sebelumnya.<br><b>Berapakah uang yang Nandra gunakan untuk membeli sepeda dari Hendra?</b>`,
    opts: ["Rp4.620.000", "Rp5.000.000", "Rp4.800.000", "Rp5.100.000"],
    ans: "A",
    hint: rt`Kalikan faktor perubahan harga secara berurutan:<br>
      $5.000.000\times1{,}1=5.500.000$ (Chandra), $\times1{,}2=6.600.000$ (Hendra), $\times0{,}7=4.620.000$ (Nandra).`,
  },
  /* 26 */ {
    type: "mc",
    q: rt`Sebuah peta sekolah digambar di atas bidang koordinat Kartesius. Gedung-gedung utama dan fasilitas di sekolah berada di titik-titik koordinat sebagai berikut:<br>
      &bull; Kantor Guru: A$(2,6)$ &nbsp; &bull; Perpustakaan: B$(8,6)$<br>
      &bull; Kantin: C$(8,2)$ &nbsp; &bull; Lapangan Olahraga: D$(2,2)$<br>
      <b>Jika terdapat sebuah kolam kecil di tengah-tengah antara Kantor Guru dan Kantin, tentukan koordinat titik kolam tersebut.</b>`,
    opts: ["$(4,5)$", "$(5,5)$", "$(4,4)$", "$(5,4)$"],
    ans: "D",
    hint: rt`Titik tengah adalah rata-rata koordinat: A$(2,6)$ dan C$(8,2)$.<br>
      $\left(\frac{2+8}2,\frac{6+2}2\right)=(5,4)$.`,
  },
  /* 27 */ {
    type: "mc",
    q: rt`23 habis membagi 2024. <b>Banyaknya bilangan $n\le2024$ yang jumlah digit-digitnya habis dibagi oleh 23 adalah ...</b>`,
    opts: ["36", "29", "41", "23"],
    ans: "A",
    hint: rt`Untuk $n\le2024$, jumlah digit paling besar $28$ (misalnya 1999), jadi yang habis dibagi 23 hanya jumlah digit $=23$.<br>
      Bilangan $\le999$ dengan jumlah digit 23: kombinasi $(9,9,5),(9,8,6),(9,7,7),(8,8,7)$ memberi $3+6+3+3=15$.<br>
      Bilangan $1abc$ dengan $a+b+c=22$: $(9,9,4),(9,8,5),(9,7,6),(8,8,6),(8,7,7)$ memberi $3+6+6+3+3=21$. Bilangan 2000 ke atas tidak memenuhi.<br>
      Total $=15+21=36$.`,
  },
  /* 28 */ {
    type: "mc",
    q: rt`$ABCD$ sebuah persegi panjang dengan titik $E$ pada segmen $CD$ dan titik $F$ pada segmen $BD$ sehingga luas $\triangle ADF=\frac16$ luas persegi panjang $ABCD$. Jika $BC=9$ cm dan $BF=10$ cm.<br><b>Tentukan panjang $AB$.</b>`,
    opts: ["14 cm", "12 cm", "15 cm", "16 cm"],
    ans: "B",
    hint: rt`Segitiga $ADF$ dan $ABD$ punya alas $AD$; tinggi dari $F$ ke $AD$ sebanding dengan $\frac{DF}{DB}$. Luas $\triangle ABD=\frac12$ persegi panjang, jadi $\frac{DF}{DB}=\dfrac{1/6}{1/2}=\frac13$.<br>
      Maka $BF=\frac23BD=10\Rightarrow BD=15$.<br>
      $AB=\sqrt{BD^2-BC^2}=\sqrt{225-81}=12$ cm.`,
  },
  /* 29 */ {
    type: "mc",
    q: rt`Perhatikan gambar di bawah, $EC$ adalah diameter dari lingkaran dan sudut $DNC$ 37 derajat. <b>Besar sudut $\angle DCE$ adalah ...</b>
      <figure class="fig"><svg viewBox="0 0 230 200" width="250" role="img" aria-label="Lingkaran dengan diameter EC dan titik D, N pada lingkaran">
        <circle cx="110" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="34.8" y1="127.4" x2="185.2" y2="72.6"/><line x1="96.1" y1="21.2" x2="34.8" y2="127.4"/><line x1="96.1" y1="21.2" x2="185.2" y2="72.6"/><line x1="96.1" y1="21.2" x2="150" y2="169.3"/><line x1="150" y1="169.3" x2="185.2" y2="72.6"/></g>
        <g fill="currentColor"><circle cx="110" cy="100" r="2.5"/><circle cx="34.8" cy="127.4" r="3"/><circle cx="185.2" cy="72.6" r="3"/><circle cx="96.1" cy="21.2" r="3"/><circle cx="150" cy="169.3" r="3"/></g>
        <g fill="currentColor" font-size="14" font-weight="600"><text x="14" y="132">E</text><text x="190" y="72">C</text><text x="92" y="14">D</text><text x="154" y="182">N</text><text x="138" y="146" font-size="12">37°</text><text x="160" y="90" font-size="13">?</text></g>
      </svg></figure>`,
    opts: ["$74^\\circ$", "$53^\\circ$", "$45^\\circ$", "$37^\\circ$"],
    ans: "B",
    hint: rt`Sudut keliling yang menghadap busur yang sama besarnya sama: $\angle DNC$ dan $\angle DEC$ sama-sama menghadap busur $DC$, jadi $\angle DEC=37^\circ$.<br>
      $EC$ adalah diameter, sehingga $\angle EDC=90^\circ$ (sudut di setengah lingkaran).<br>
      Pada segitiga $DEC$: $\angle DCE=180^\circ-90^\circ-37^\circ=53^\circ$.`,
  },
  /* 31 */ {
    type: "num",
    q: rt`Sistem persamaan<br>$mx+2y=8$<br>$4x-5y=4$<br>memiliki penyelesaian bilangan bulat $x$ dan $y$ (dengan $m$ juga bilangan bulat).<br><b>Maka banyaknya penyelesaian yang mungkin ada ... .</b> (Tulis angkanya saja.)`,
    ans: "5",
    hint: rt`Dari $4x-5y=4$: $4\mid5y\Rightarrow y=4t$, lalu $x=1+5t$ ($t$ bilangan bulat).<br>
      Substitusi: $m(1+5t)+8t=8\Rightarrow m=\dfrac{8-8t}{1+5t}$. Agar $m$ bulat, $1+5t$ harus membagi $5(8-8t)+8(1+5t)=48$.<br>
      Pembagi 48 yang bersisa 1 jika dibagi 5: $1,6,16,-4,-24$ (semuanya menghasilkan $m$ bulat: $8,0,-1,-4,-2$). Ada <b>5</b> penyelesaian.<br>
      <i>Catatan: soal asli tidak menyebut $m$ bulat; asumsi itu diperlukan agar jawabannya terhingga.</i>`,
  },
  /* 32 */ {
    type: "num",
    q: rt`Pada bidang Kartesius, persegi $ABCD$ dicerminkan terhadap garis $y=5$, seperti terlihat pada gambar di bawah. Titik-titiknya: $A(2,2)$, $B(4{,}5;\,2)$, $C(4{,}5;\,4{,}5)$, $D(2;\,4{,}5)$.
      <figure class="fig"><svg viewBox="0 0 235 215" width="260" role="img" aria-label="Persegi ABCD pada bidang Kartesius dan garis y = 5">
        <g stroke="currentColor" stroke-width="1.2" fill="none"><line x1="30" y1="200" x2="225" y2="200"/><line x1="30" y1="200" x2="30" y2="6"/></g>
        <line x1="30" y1="80" x2="225" y2="80" stroke="#8b5cf6" stroke-width="2"/>
        <rect x="78" y="92" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <g fill="currentColor" font-size="11"><text x="74" y="214">2</text><text x="122" y="214">4</text><text x="170" y="214">6</text><text x="16" y="156">2</text><text x="16" y="108">4</text><text x="16" y="60">6</text><text x="16" y="12">8</text><text x="196" y="74" fill="#8b5cf6">y = 5</text></g>
        <g fill="currentColor" font-size="12" font-weight="600"><text x="52" y="164">A(2,2)</text><text x="136" y="164">B(4,5; 2)</text><text x="124" y="88">C</text><text x="60" y="88">D</text></g>
      </svg></figure>
      Jika $A'B'C'D'$ adalah hasil pencerminan persegi $ABCD$, <b>hitunglah jarak dari $B$ ke $A'$ dikali 2.</b> (Tulis angkanya saja.)`,
    ans: "13",
    hint: rt`Pencerminan terhadap $y=5$ mengubah $(x,y)$ menjadi $(x,10-y)$. Jadi $A(2,2)\to A'(2,8)$.<br>
      Jarak $B(4{,}5;\,2)$ ke $A'(2,8)$: $\sqrt{(4{,}5-2)^2+(2-8)^2}=\sqrt{6{,}25+36}=\sqrt{42{,}25}=6{,}5$.<br>
      Dikali 2: $6{,}5\times2=13$.`,
  },
  /* 33 */ {
    type: "num",
    q: rt`Qushay menuliskan 10 bilangan 2 digit (angka) yang berbeda. Rata-rata dari 10 bilangan tersebut adalah 15.<br><b>Banyaknya kemungkinan salah satu dari bilangan tersebut bernilai 20 adalah ... .</b> (Tulis angkanya saja.)`,
    ans: "3",
    hint: rt`Jumlah 10 bilangan $=150$. Bilangan dua digit terkecil yang berbeda: $10,11,\ldots,19$ berjumlah $145$, jadi hanya "tambahan" $5$ yang boleh dibagi.<br>
      Himpunan yang mungkin sesuai cara membagi $5$ ke bilangan-bilangan terbesar. Yang memuat $20$ hanya:<br>
      $\{10,\ldots,17,20,22\}$, $\{10,\ldots,16,18,20,21\}$, dan $\{10,\ldots,14,16,17,18,19,20\}$.<br>
      Jadi ada $3$ kemungkinan.`,
  },
  /* 34 */ {
    type: "num",
    q: rt`Diketahui pipa A dapat mengisi penuh kolam 4 jam lebih cepat daripada pipa B. Pipa A mengisi kolam dalam waktu 4 jam kemudian pipa B dibuka juga dan selama 3 jam kedua pipa mengisi kolam. Kemudian pipa A ditutup tetapi pipa B masih mengisi kolam selama 3 jam kemudian ditutup. Jika dari proses di atas, $\frac35$ kolam sudah terisi.<br><b>Maka berapa lama pipa A dapat mengisi penuh kolam tersebut sendiri dari keadaan kolam yang kosong?</b> (Tulis angkanya saja.)`,
    ans: "20",
    hint: rt`Misal A sendiri $t$ jam, maka B sendiri $t+4$ jam. Debit A $=\frac1t$, B $=\frac1{t+4}$.<br>
      A bekerja $4+3=7$ jam, B bekerja $3+3=6$ jam: $\dfrac7t+\dfrac6{t+4}=\dfrac35$.<br>
      Kalikan: $35(t+4)+30t=3t(t+4)\Rightarrow3t^2-53t-140=0\Rightarrow(3t+7)(t-20)=0$, jadi $t=20$.`,
  },
  /* 35 */ {
    type: "num",
    q: rt`Diketahui sebuah barisan aritmatika bilangan bulat $a_n$ (sehingga $a_{n+2}-a_{n+1}=a_{n+1}-a_n$ untuk setiap $n$ bilangan asli). Jumlah 30 suku pertama sama dengan 2 kali jumlah 10 suku pertama barisan tersebut. Jika suku pertama $a_1=207$.<br><b>Maka jumlah 70 suku pertama barisan tersebut ditambah satu adalah ... .</b> (Tulis angkanya saja.)`,
    ans: "1",
    hint: rt`$S_n=\frac n2(2a+(n-1)d)$ dengan $a=207$. $S_{30}=15(414+29d)$ dan $S_{10}=5(414+9d)$.<br>
      $S_{30}=2S_{10}\Rightarrow6210+435d=4140+90d\Rightarrow d=-6$.<br>
      $S_{70}=35(414+69\cdot(-6))=35(414-414)=0$. Ditambah satu: $0+1=1$.`,
  },
  /* 36 */ {
    type: "num",
    q: rt`<b>Banyaknya bilangan prima berbentuk $n^4+4$ untuk suatu $n$ bilangan bulat ada ... .</b> (Tulis angkanya saja.)`,
    ans: "1",
    hint: rt`Faktorkan (identitas Sophie Germain): $n^4+4=(n^2+2n+2)(n^2-2n+2)$.<br>
      Agar prima, salah satu faktor harus $1$. $n^2-2n+2=(n-1)^2+1=1\Rightarrow n=1$, dan $n^2+2n+2=(n+1)^2+1=1\Rightarrow n=-1$. Keduanya memberi $1+4=5$.<br>
      Nilai $n$ lain menghasilkan hasil kali dua bilangan lebih dari 1 (komposit). Jadi hanya bilangan prima $5$: ada <b>1</b>.`,
  },
  /* 37 */ {
    type: "num",
    q: rt`Sebuah tangki air berbentuk silinder memiliki jari-jari 1,4 meter dan tinggi 5 meter. Tangki tersebut diisi air dengan kecepatan 1.400 liter per menit. (Gunakan $\pi=\frac{22}7$)<br><b>Lama waktu yang diperlukan untuk mengisi penuh tangki tersebut jika 1 liter air setara dengan 0,001 meter kubik adalah ... menit.</b> (Tulis angkanya saja.)`,
    ans: "22",
    hint: rt`Volume tangki $=\pi r^2h=\frac{22}7\times1{,}4^2\times5=\frac{22}7\times1{,}96\times5=30{,}8$ m$^3$.<br>
      Dalam liter: $30{,}8\div0{,}001=30.800$ liter.<br>
      Waktu $=\dfrac{30.800}{1.400}=22$ menit.<br>
      <i>Catatan: soal asli tidak menyebut nilai $\pi$; $1{,}4$ dipilih agar cocok dengan $\frac{22}7$.</i>`,
  },
  /* 39 */ {
    type: "num",
    q: rt`Pada sebuah kubus dengan panjang sisi 8 cm, ditempelkan sebuah limas di setiap permukaan kubus dengan alas limas sama dengan persamaan kubus. Tinggi dari setiap limas adalah 3 cm.<br><b>Luas permukaan dari bangun ruang yang terbentuk adalah ... $\text{cm}^2$.</b> (Tulis angkanya saja.)`,
    ans: "480",
    hint: rt`Setelah limas menempel, permukaan kubus tertutup seluruhnya. Permukaan bangun baru = sisi tegak limas saja.<br>
      Tinggi sisi tegak limas (apotema) $=\sqrt{3^2+4^2}=5$ cm (4 = setengah sisi alas). Luas satu segitiga $=\frac12\cdot8\cdot5=20$ cm$^2$.<br>
      Ada $6$ limas $\times4$ sisi tegak $=24$ segitiga: $24\times20=480$ cm$^2$.`,
  },
  /* 40 */ {
    type: "num",
    q: rt`Di kelas VII terdapat 12 siswa. Pada saat ulangan IPA, ada dua orang siswa yang sakit sehingga harus mengikuti ulangan susulan. Nilai 10 siswa yang mengikuti ulangan pada waktunya adalah 20, 10, 40, 80, 50, 60, 50, 70, 90, dan 30. Jika nilai siswa yang mengikuti ulangan susulan diperhitungkan, maka rata-rata nilai yang diperoleh sama dengan median. Nilai ulangan siswa juga bilangan kelipatan 10, minimum 10 dan maksimum 100.<br><b>Selisih nilai terbesar yang mungkin diperoleh dua siswa yang mengikuti ujian susulan adalah ... .</b> (Tulis angkanya saja.)`,
    ans: "80",
    hint: rt`Jumlah 10 nilai awal $=500$ (rata-rata 50). Misal nilai susulan $x\le y$ (kelipatan 10, antara 10 dan 100).<br>
      Jika satu nilai susulan $\le50$ dan satu lagi $\ge50$, median 12 data tetap $50$ (suku ke-6 dan ke-7 sama-sama 50), sehingga rata-rata juga harus 50: $x+y=100$.<br>
      Selisih terbesar dengan $x\ge10$: $x=10$, $y=90$, selisih $80$. (Pasangan $(10,100)$ tidak memenuhi karena rata-rata tidak sama dengan median.)`,
  },
];

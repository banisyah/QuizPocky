// Sumber soal: Eduversal Mathematics Competition (EMC) 2025 - Tingkat Kota Kelas 7
// type "mc" = pilihan ganda (ans = huruf), type "num" = isian singkat (ans = angka)
const r = String.raw;

const EMC_QUESTIONS = [
  {
    type: "mc",
    q: r`Hasil penyederhanaan pecahan di bawah adalah ...<br>$\dfrac{\frac12+\frac14}{\frac14+\frac18}=$`,
    opts: [r`$2$`, r`$\frac12$`, r`$\frac14$`, r`$4$`],
    ans: "A",
    hint: r`Hitung pembilang dan penyebut terpisah dulu.<br>
      Pembilang: $\frac12+\frac14=\frac34$.<br>
      Penyebut: $\frac14+\frac18=\frac38$.<br>
      Lalu $\frac34\div\frac38=\frac34\times\frac83=2$.`,
  },
  {
    type: "mc",
    q: r`Manakah dari operasi berikut yang memiliki hasil <b>bilangan bulat</b>?`,
    opts: [r`$\frac13+\frac1{12}$`, r`$\frac13\cdot\frac1{12}$`, r`$\frac13-\frac1{12}$`, r`$\frac13\div\frac1{12}$`],
    ans: "D",
    hint: r`Hitung tiap pilihan:<br>
      A: $\frac4{12}+\frac1{12}=\frac5{12}$<br>
      B: $\frac1{36}$<br>
      C: $\frac4{12}-\frac1{12}=\frac3{12}=\frac14$<br>
      D: $\frac13\times 12=4$ &rarr; bilangan bulat.`,
  },
  {
    type: "mc",
    q: r`Manakah dari ekspresi pada pilihan yang <b>ekuivalen</b> (selalu memiliki hasil yang sama) dengan ekspresi $3(m-n)$?`,
    opts: [r`$3m-3n$`, r`$m-3n$`, r`$3m-n$`, r`$3+m-n$`],
    ans: "A",
    hint: r`Gunakan sifat distributif: angka di luar kurung dikalikan ke <b>setiap</b> suku di dalam kurung.<br>
      $3(m-n)=3\cdot m-3\cdot n=3m-3n$.`,
  },
  {
    type: "mc",
    q: r`Sebuah persegi memiliki keliling $8\text{ cm}$.<br><b>Luas persegi tersebut adalah ... $\text{cm}^2$.</b>`,
    opts: ["8", "12", "6", "4"],
    ans: "D",
    hint: r`Keliling persegi $=4\times$ sisi.<br>
      Sisi $=8\div4=2$ cm.<br>
      Luas $=\text{sisi}^2=2^2=4$ cm$^2$.`,
  },
  {
    type: "mc",
    q: r`Hasil penjumlahan semua sudut dalam pada segitiga beraturan adalah $180^\circ$. Hasil penjumlahan semua sudut dalam pada persegi adalah $360^\circ$.<br>
      <b>Hasil penjumlahan semua sudut dalam pada segilima beraturan adalah ...$^\circ$.</b>`,
    opts: ["720", "540", "180", "360"],
    ans: "B",
    hint: r`Rumus jumlah sudut dalam segi-$n$: $(n-2)\times180^\circ$.<br>
      Segitiga ($n=3$): $1\times180=180$. Persegi ($n=4$): $2\times180=360$.<br>
      Segilima ($n=5$): $3\times180=540$.`,
  },
  {
    type: "mc",
    q: r`Ali memiliki sejumlah kelereng, <b>dua</b> di antaranya berwarna <b>biru</b>, dan sisanya berwarna kuning. Apabila Ali mengambil satu kelereng secara acak, peluang terambilnya kelereng kuning adalah $80\%$.<br>
      <b>Banyaknya kelereng Ali adalah ... butir.</b>`,
    opts: ["4", "8", "6", "10"],
    ans: "D",
    hint: r`Peluang kuning $=80\%$, jadi peluang biru $=100\%-80\%=20\%$.<br>
      Kelereng biru ada 2 butir $=20\%$ dari total.<br>
      Total $=2\div0{,}2=10$ butir.`,
  },
  {
    type: "mc",
    q: r`Terdapat sebuah lempeng besi berbentuk persegi panjang dengan luas $5\text{ cm}^2$. Kemudian persegi tersebut dipanaskan sehingga panjang dan lebarnya naik menjadi <b>tiga kali lipat</b> panjang dan lebar semula.<br>
      <b>Luas persegi panjang sekarang adalah ... $\text{cm}^2$.</b>`,
    opts: ["15", "30", "9", "45"],
    ans: "D",
    hint: r`Panjang jadi $3\times$ dan lebar jadi $3\times$, maka luas jadi $3\times3=9$ kali.<br>
      Luas baru $=9\times5=45$ cm$^2$.`,
  },
  {
    type: "mc",
    q: r`Manakah dari pilihan berikut yang <b>bukan</b> merupakan faktor dari $16^4-1$?`,
    opts: ["255", "257", "17", "67"],
    ans: "D",
    hint: r`Gunakan selisih kuadrat: $a^2-b^2=(a-b)(a+b)$.<br>
      $16^4-1=(16^2-1)(16^2+1)=255\times257$.<br>
      $255=3\times5\times17$, dan $257$ bilangan prima.<br>
      Jadi faktornya antara lain 255, 257, 17. Angka $67$ tidak muncul &rarr; <b>bukan faktor</b>.`,
  },
  {
    type: "mc",
    q: r`Pada koordinat kartesius, Budi harus bergerak dari $(1,1)$ ke $(5,3)$. Tetapi ia harus menyentuh sumbu $x$ satu kali pada perjalanannya.<br>
      <b>Jalur terpendek yang dapat Budi tempuh memiliki panjang ... unit.</b>`,
    opts: [r`$8\sqrt2$`, r`$2\sqrt5$`, r`$4\sqrt2$`, "$4$"],
    ans: "C",
    hint: r`Trik pencerminan: cerminkan titik $(5,3)$ terhadap sumbu $x$ menjadi $(5,-3)$.<br>
      Jalur terpendek lewat sumbu $x$ sama dengan garis lurus dari $(1,1)$ ke $(5,-3)$.<br>
      Jarak $=\sqrt{(5-1)^2+(-3-1)^2}=\sqrt{16+16}=\sqrt{32}=4\sqrt2$.`,
  },
  {
    type: "mc",
    q: r`Untuk menjawab pertanyaan ini, anda dapat menggunakan pola pada tiga penjumlahan.<br>
      $1+3=4$<br>$1+3+5=9$<br>$1+3+5+7=16$<br>
      Hasil dari penjumlahan berikut adalah ...<br>
      $1+3+5+\cdots+27+29=$`,
    opts: ["255", "169", "196", "225"],
    ans: "D",
    hint: r`Pola: jumlah $n$ bilangan ganjil pertama $=n^2$.<br>
      (2 bilangan &rarr; 4, 3 bilangan &rarr; 9, 4 bilangan &rarr; 16.)<br>
      Banyak suku dari 1 sampai 29: $(29+1)\div2=15$ suku.<br>
      Jumlah $=15^2=225$.`,
  },
  {
    type: "mc",
    q: r`Terdapat <b>tujuh</b> bilangan yang diurutkan secara acak. Rata-rata dari <b>empat</b> bilangan pertama adalah $6$ dan rata-rata dari <b>empat</b> bilangan terakhir adalah $11$.<br>
      <b>Jika rata-rata semua bilangan adalah 8, maka bilangan urutan ke-4 adalah ...</b>`,
    opts: ["12", "11", "13", "10"],
    ans: "A",
    hint: r`Ubah rata-rata jadi jumlah:<br>
      4 bilangan pertama: $4\times6=24$<br>
      4 bilangan terakhir: $4\times11=44$<br>
      Semua 7 bilangan: $7\times8=56$.<br>
      Bilangan ke-4 terhitung dua kali pada $24+44$, jadi $24+44-56=12$.`,
  },
  {
    type: "mc",
    q: r`Tiga siswa kelas 10B mengikuti ujian matematika. Modus dari ujian ketiga peserta tersebut sama dengan rata-rata ketiga ujian tersebut, yaitu $80$.<br>
      <b>Nilai tertinggi dari ketiga peserta tersebut adalah ...</b>`,
    opts: ["84", "80", "90", "100"],
    ans: "B",
    hint: r`Modus ada hanya jika minimal dua nilai sama. Karena modus $=80$, dua nilai adalah $80$.<br>
      Rata-rata $80$ berarti jumlah $=3\times80=240$.<br>
      Nilai ketiga $=240-80-80=80$. Jadi ketiganya $80$, nilai tertinggi $=80$.`,
  },
  {
    type: "mc",
    q: r`Sebuah kerucut dengan tinggi $9$ unit dipotong menjadi dua bagian. Bagian atas potongan berbentuk kerucut dengan volume $\frac17$ dari volume potongan yang lainnya.<br>
      <b>Tinggi kerucut hasil pemotongan tersebut adalah ... unit.</b>`,
    opts: ["6", "4.5", "3", "1.5"],
    ans: "B",
    hint: r`Kerucut kecil $=\frac17$ dari sisanya, jadi kerucut kecil $=\frac1{1+7}=\frac18$ dari kerucut utuh.<br>
      Volume sebanding dengan (tinggi)$^3$, maka perbandingan tinggi $=\sqrt[3]{\frac18}=\frac12$.<br>
      Tinggi kerucut kecil $=\frac12\times9=4{,}5$ unit.`,
  },
  {
    type: "mc",
    q: r`Diberikan persegi dengan sisi $2$ unit. Kemudian dipilih empat titik secara sembarang. Lalu pada segiempat tersebut akan dipilih satu titik lagi.<br>
      <b>Jarak terjauh yang mungkin antara titik kelima dengan titik terdekatnya adalah ... unit.</b>`,
    opts: [r`$\sqrt2$`, "$1$", r`$\sqrt3$`, "$2$"],
    ans: "A",
    hint: r`Bayangkan keempat titik disebar sejauh mungkin, yaitu di empat sudut persegi.<br>
      Titik kelima yang paling jauh dari semua sudut ada di <b>pusat</b> persegi.<br>
      Jaraknya ke sudut $=\frac12\times\text{diagonal}=\frac12\times2\sqrt2=\sqrt2$.<br>
      <i>Catatan: soal ini agak ambigu, tapi kunci resmi EMC adalah $\sqrt2$.</i>`,
  },
  {
    type: "mc",
    q: r`Sebuah fungsi $f(x)$ dengan $x$ bilangan bulat menghasilkan banyaknya faktor positif yang dapat membagi $x$. Misalnya $f(6)=4$, karena 6 memiliki empat pembagi positif: 1, 2, 3, dan 6.<br>
      <b>Manakah dari ekspresi berikut yang merupakan bilangan ganjil?</b>`,
    opts: ["$f(18)$", "$f(13)$", "$f(16)$", "$f(12)$"],
    ans: "C",
    hint: r`Faktor biasanya berpasangan (misal $2\times3=6$), jadi jumlahnya genap. Jumlahnya ganjil hanya jika bilangannya <b>kuadrat sempurna</b> (satu faktor berpasangan dengan dirinya sendiri).<br>
      Di antara 18, 13, 16, 12, hanya $16=4^2$ yang kuadrat sempurna.<br>
      Cek: faktor 16 &rarr; 1, 2, 4, 8, 16 (5 faktor, ganjil).`,
  },
  {
    type: "mc",
    q: r`Sebuah benang digunakan untuk mengukur keliling sebuah segienam beraturan dengan luas $3\sqrt3\text{ cm}^2$.<br>
      <b>Panjang benang yang digunakan adalah ... cm.</b>`,
    opts: [r`$\sqrt{96}$`, r`$\sqrt{12}$`, r`$\sqrt2$`, r`$\sqrt{72}$`],
    ans: "D",
    hint: r`Segienam beraturan tersusun dari 6 segitiga sama sisi dengan sisi $s$.<br>
      Luas $=6\times\frac{\sqrt3}{4}s^2=\frac{3\sqrt3}{2}s^2$.<br>
      $\frac{3\sqrt3}{2}s^2=3\sqrt3\Rightarrow s^2=2\Rightarrow s=\sqrt2$.<br>
      Keliling $=6s=6\sqrt2=\sqrt{36\times2}=\sqrt{72}$.`,
  },
  {
    type: "mc",
    q: r`Hasil dari penjumlahan pecahan berikut adalah ...<br>
      $1+\dfrac{1}{1+\dfrac{1}{1+\frac12}}=$`,
    opts: [r`$\frac57$`, r`$\frac53$`, r`$\frac23$`, r`$\frac85$`],
    ans: "D",
    hint: r`Selesaikan dari bagian paling dalam:<br>
      $1+\frac12=\frac32$<br>
      $1+\frac1{3/2}=1+\frac23=\frac53$<br>
      $1+\frac1{5/3}=1+\frac35=\frac85$.`,
  },
  {
    type: "mc",
    q: r`Ekspresi di bawah yang <b>ekuivalen</b> dengan $(x+y+z)^2-(2xy+2xz+2yz)$ adalah ...`,
    opts: ["$3xyz$", "$x^2$", "$3x^2y^2z^2$", "$x^2+y^2+z^2$"],
    ans: "D",
    hint: r`Ingat: $(x+y+z)^2=x^2+y^2+z^2+2xy+2xz+2yz$.<br>
      Kurangi dengan $(2xy+2xz+2yz)$, maka suku silangnya habis.<br>
      Sisanya $x^2+y^2+z^2$.`,
  },
  {
    type: "mc",
    q: r`Hasil penjumlahan berikut adalah ...<br>
      $\dfrac12+\dfrac24+\dfrac38+\dfrac4{16}+\dfrac5{32}=$`,
    opts: [r`$\frac{57}{32}$`, r`$\frac{41}{32}$`, r`$\frac{65}{32}$`, r`$\frac{83}{32}$`],
    ans: "A",
    hint: r`Samakan penyebut ke $32$:<br>
      $\frac{16}{32}+\frac{16}{32}+\frac{12}{32}+\frac{8}{32}+\frac{5}{32}$<br>
      $=\frac{16+16+12+8+5}{32}=\frac{57}{32}$.`,
  },
  {
    type: "mc",
    q: r`Anton hendak menyusun kursi di ruang tunggu klinik sekolah sehingga jumlah kursi pada setiap baris dan kolom sama.<br>
      <b>Jumlah kursi yang mungkin dipakai oleh Anton adalah ...</b>`,
    opts: ["16", "12", "20", "15"],
    ans: "A",
    hint: r`Baris sama dengan kolom artinya susunannya persegi: jumlah kursi $=n\times n$.<br>
      Jadi jumlah kursi harus <b>kuadrat sempurna</b>.<br>
      Dari pilihan, hanya $16=4\times4$.`,
  },
  {
    type: "mc",
    q: r`Hasil dari penjumlahan berikut adalah ...<br>
      $-1+2-3+4-5+6-\cdots-33=$`,
    opts: ["-17", "-16", "16", "17"],
    ans: "A",
    hint: r`Kelompokkan berpasangan: $(-1+2)+(-3+4)+\cdots+(-31+32)$. Setiap pasangan bernilai $+1$.<br>
      Ada $32\div2=16$ pasangan, jumlahnya $16$.<br>
      Sisa suku terakhir $-33$, jadi $16-33=-17$.`,
  },
  {
    type: "mc",
    q: r`Manakah dari hasil operasi berikut yang <b>bukan</b> merupakan bilangan genap?`,
    opts: ["$18+54$", "$18-54$", r`$54\times18$`, r`$54\div18$`],
    ans: "D",
    hint: r`Hitung hasilnya:<br>
      A: $72$ (genap)<br>
      B: $-36$ (genap)<br>
      C: $972$ (genap)<br>
      D: $54\div18=3$ &rarr; <b>ganjil</b>.`,
  },
  {
    type: "mc",
    q: r`Hasil penjumlahan di bawah adalah ...<br>
      $\dfrac1{3\cdot5}+\dfrac1{5\cdot7}+\dfrac1{7\cdot9}+\dfrac1{9\cdot11}+\dfrac1{11\cdot13}=$`,
    opts: [r`$\frac5{39}$`, r`$\frac3{39}$`, r`$\frac3{24}$`, r`$\frac5{24}$`],
    ans: "A",
    hint: r`Pecah tiap suku (teleskopik): $\frac1{a(a+2)}=\frac12\left(\frac1a-\frac1{a+2}\right)$.<br>
      Hampir semua suku saling menghapus:<br>
      $\frac12\left(\frac13-\frac15+\frac15-\frac17+\cdots+\frac1{11}-\frac1{13}\right)=\frac12\left(\frac13-\frac1{13}\right)$<br>
      $=\frac12\cdot\frac{10}{39}=\frac5{39}$.`,
  },
  {
    type: "mc",
    q: r`Pada persamaan di bawah $A$, $B$, dan $C$ menunjukkan digit bilangan.<br>
      $\dfrac{AB}{CC}=0{,}ABABAB\ldots$<br>
      <b>Nilai dari $C$ adalah ...</b>`,
    opts: ["8", "9", "5", "4"],
    ans: "B",
    hint: r`Desimal berulang dua digit: $0{,}\overline{AB}=\frac{AB}{99}$.<br>
      Jadi $\frac{AB}{CC}=\frac{AB}{99}\Rightarrow CC=99$.<br>
      Maka $C=9$.`,
  },
  {
    type: "mc",
    q: r`Segitiga ABC dan DEF adalah segitiga sama sisi, dengan D, E, F berturut-turut terletak pada sisi AB, BC, CA. Diketahui bahwa AD : DB = BE : EC = CF : FA = 1 : 2.<br>
      <b>Jika luas DEF 8 unit persegi, maka luas ABC ... unit persegi.</b>`,
    opts: ["18", "24", "28", "16"],
    ans: "B",
    hint: r`Misal sisi ABC $=3$. Maka AD $=1$, DB $=2$, dan seterusnya.<br>
      Di sudut A: segitiga ADF punya AD $=1$, AF $=2$, sudut $60^\circ$. Luasnya $=\frac{1\cdot2}{3\cdot3}=\frac29$ dari luas ABC.<br>
      Ada 3 segitiga sudut yang sama, total $3\times\frac29=\frac23$.<br>
      Luas DEF $=1-\frac23=\frac13$ luas ABC. Jadi ABC $=3\times8=24$.`,
  },
  {
    type: "num",
    q: r`Tiga buah dadu biasa dilempar secara bersamaan. Peluang bahwa hasil penjumlahan nilai yang muncul sama dengan $6$ dalam bentuk pecahan paling sederhana adalah $\frac pq$.<br>
      <b>Maka $p+q=$ ...</b>`,
    ans: "113",
    hint: r`Total hasil $=6^3=216$.<br>
      Kombinasi jumlah 6: $(1,1,4)$ ada 3 urutan, $(1,2,3)$ ada 6 urutan, $(2,2,2)$ ada 1 urutan &rarr; total $10$.<br>
      Peluang $=\frac{10}{216}=\frac5{108}$.<br>
      $p+q=5+108=113$.`,
  },
  {
    type: "num",
    q: r`Terdapat dua bilangan bulat. Perbandingan antara hasil penjumlahan dan selisih antara dua bilangan tersebut adalah $7:3$.<br>
      <b>Nilai terkecil yang mungkin dari selisih antara kuadrat kedua bilangan adalah ...</b>`,
    ans: "21",
    hint: r`Misal bilangannya $a$ dan $b$: $\frac{a+b}{a-b}=\frac73\Rightarrow3a+3b=7a-7b\Rightarrow a=\frac52b$.<br>
      Agar keduanya bulat, $b=2k$, $a=5k$.<br>
      Selisih kuadrat $=a^2-b^2=25k^2-4k^2=21k^2$.<br>
      Terkecil saat $k=1$: $21$.`,
  },
  {
    type: "num",
    q: r`Hasil <b>penjumlahan dari semua faktor $2025$</b> yang <b>tidak dapat dibagi lima</b> adalah ...`,
    ans: "121",
    hint: r`Faktorkan: $2025=3^4\times5^2$.<br>
      Faktor yang tidak habis dibagi 5 adalah faktor yang hanya terdiri dari $3$: $1,3,9,27,81$.<br>
      Jumlahnya $=1+3+9+27+81=121$.`,
  },
  {
    type: "num",
    q: r`Terdapat dua buah bilangan cacah. Lima kali bilangan pertama ditambah empat kali bilangan kedua sama dengan $100$.<br>
      <b>Jika salah satu bilangan adalah 12, maka hasil penjumlahan kedua bilangan tersebut adalah ...</b>`,
    ans: "22",
    hint: r`Persamaan: $5x+4y=100$.<br>
      Coba $x=12$: $60+4y=100\Rightarrow y=10$ (bilangan cacah, cocok).<br>
      Coba $y=12$: $5x+48=100\Rightarrow x=10{,}4$ (bukan bilangan cacah, tidak cocok).<br>
      Jadi jumlahnya $12+10=22$.`,
  },
  {
    type: "num",
    q: r`Nilai terbesar bilangan bulat $p$ agar $2^p$ membagi $25!$ adalah ...`,
    ans: "22",
    hint: r`Hitung banyaknya faktor 2 pada $25!$ (rumus Legendre): $\left\lfloor\frac{25}2\right\rfloor+\left\lfloor\frac{25}4\right\rfloor+\left\lfloor\frac{25}8\right\rfloor+\left\lfloor\frac{25}{16}\right\rfloor$<br>
      $=12+6+3+1=22$.`,
  },
];

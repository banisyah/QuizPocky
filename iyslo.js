// Sumber soal: IYSLO 2025 (Indonesian Youth Science and Language Olympiad) - Matematika Level 4
// Soal asli no. 22 (pilihan tanpa gambar) dan no. 23 (kunci tidak dapat diverifikasi) tidak dimasukkan.
const rr = String.raw;


const IYSLO_QUESTIONS = [
  {
    type: "mc",
    q: rr`Misalkan $a>b>c>d$ bilangan real sehingga $a+b+c+d=1$ dan $ab+bc+cd+da=-1$.<br>
      <b>Nilai $(a-b+c-d)^2$ yang mungkin adalah ...</b>`,
    opts: ["2", "3", "5", "7"],
    ans: "C",
    hint: rr`Faktorkan: $ab+bc+cd+da=(a+c)(b+d)$.<br>
      Misal $s=a+c$ dan $t=b+d$. Maka $s+t=1$ dan $st=-1$.<br>
      $(a-b+c-d)^2=(s-t)^2=(s+t)^2-4st=1+4=5$.`,
  },
  {
    type: "mc",
    q: rr`Diketahui $a,b\in\mathbb{R}$ yang memenuhi<br>
      $a+\dfrac{1}{a+2025}=b-4050+\dfrac{1}{b-2025}$<br>
      dan $|a-b|>5000$. Nilai dari $\dfrac{ab}{2025}-a+b$ adalah ...`,
    opts: [rr`$\frac{4.100.626}{2025}$`, rr`$\frac{4.100.624}{2025}$`, rr`$\frac{4.100.628}{2025}$`, rr`$\frac{4.100.622}{2025}$`],
    ans: "A",
    hint: rr`Misal $x=a+2025$ dan $y=b-2025$. Persamaan jadi $x+\frac1x=y+\frac1y$, yaitu $(x-y)\left(1-\frac1{xy}\right)=0$.<br>
      Jika $x=y$ maka $|a-b|=4050$, tidak memenuhi $>5000$. Jadi $xy=1$.<br>
      $(a+2025)(b-2025)=1\Rightarrow ab-2025a+2025b=1+2025^2$.<br>
      Bagi dengan $2025$: $\frac{ab}{2025}-a+b=\frac{1+2025^2}{2025}=\frac{4.100.626}{2025}$.`,
  },
  {
    type: "mc",
    q: rr`Misalkan $a,b,c$ adalah akar-akar polinom $p(x)=x^3-x-2025$. Nilai dari<br>
      $\left(a+\dfrac1b\right)\left(b+\dfrac1c\right)\left(c+\dfrac1a\right)$ adalah ...`,
    opts: ["2024", "2025", "2026", "2027"],
    ans: "B",
    hint: rr`Dari Vieta: $a+b+c=0$, $ab+bc+ca=-1$, $abc=2025$.<br>
      Tiap faktor: $a+\frac1b=\frac{ab+1}{b}$, dst. Hasil kali $=\dfrac{(ab+1)(bc+1)(ca+1)}{abc}$.<br>
      Pembilang $=(abc)^2+abc(a+b+c)+(ab+bc+ca)+1=2025^2+0-1+1=2025^2$.<br>
      Jadi hasilnya $\frac{2025^2}{2025}=2025$.`,
  },
  {
    type: "mc",
    q: rr`Bilangan asli $k$ disebut bilangan keras jika memenuhi sifat bahwa tidak terdapat bilangan asli $a,b$ hingga $a+b+ab=k$. Banyaknya bilangan keras di dalam himpunan $\{1,2,3,\ldots,50\}$ adalah ...`,
    opts: ["13", "14", "15", "16"],
    ans: "C",
    hint: rr`Trik: $a+b+ab+1=(a+1)(b+1)$, jadi $k+1=(a+1)(b+1)$ dengan kedua faktor $\ge2$.<br>
      Artinya $k$ <b>bisa</b> dibentuk jika $k+1$ bilangan komposit. Jadi $k$ <b>keras</b> jika $k+1$ bilangan prima.<br>
      Hitung bilangan prima dari 2 sampai 51: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 &rarr; ada $15$.`,
  },
  {
    type: "mc",
    q: rr`Diketahui bilangan real $a,b,c$, dan $d$ memenuhi<br>
      $\dfrac{a-b}{c-d}=2$ dan $\dfrac{a-c}{b-d}=3$.<br>
      <b>Nilai yang mungkin untuk $\dfrac{a-d}{b-c}$ adalah ...</b>`,
    opts: ["-1", "-3", "-5", "-7"],
    ans: "C",
    hint: rr`Selisih tidak berubah jika semua bilangan digeser, jadi pilih $d=0$.<br>
      Maka $a-b=2c$ dan $a-c=3b$. Dari yang pertama $a=b+2c$; masukkan: $b+2c-c=3b\Rightarrow c=2b$.<br>
      Lalu $a=b+4b=5b$.<br>
      $\dfrac{a-d}{b-c}=\dfrac{5b}{b-2b}=-5$.`,
  },
  {
    type: "mc",
    q: rr`Diketahui $p$ adalah bilangan tiga digit yang jika dibagi 6 dan 7 masing-masing memberikan sisa 1 dan 4. <b>Jumlah nilai maksimum dan minimum dari $p$ adalah ...</b>`,
    opts: ["999", "1004", "1100", "1129"],
    ans: "C",
    hint: rr`$p\equiv1\pmod 6$ dan $p\equiv4\pmod 7$. Cari bilangan terkecil yang memenuhi: $25$ ($25=4\cdot6+1$ dan $25=3\cdot7+4$).<br>
      Karena $\text{KPK}(6,7)=42$, semua $p=25+42k$.<br>
      Terkecil 3 digit: $25+42\cdot2=109$. Terbesar $\le999$: $25+42\cdot23=991$.<br>
      Jumlah $=109+991=1100$.`,
  },
  {
    type: "mc",
    q: rr`Tentukan sisa bila $1021^{1021}$ dibagi oleh $1023$.`,
    opts: ["2", "21", "1019", "1021"],
    ans: "D",
    hint: rr`$1021\equiv-2\pmod{1023}$, jadi $1021^{1021}\equiv(-2)^{1021}=-2^{1021}$.<br>
      Perhatikan $1023=2^{10}-1$, sehingga $2^{10}\equiv1$.<br>
      $2^{1021}=(2^{10})^{102}\cdot2\equiv2$. Maka sisa $\equiv-2\equiv1021$.`,
  },
  {
    type: "mc",
    q: rr`Misalkan $p$ dan $q$ adalah bilangan bulat yang tidak punya pembagi yang sama selain 1, dengan $p,q>1$. Jika $p\times q=517+323$, maka <b>nilai minimum $p+q$ adalah ...</b>`,
    opts: ["37", "59", "61", "113"],
    ans: "B",
    hint: rr`Hitung dulu: $517+323=840=2^3\cdot3\cdot5\cdot7$.<br>
      $p,q$ saling prima, jadi tiap faktor prima (beserta pangkatnya) harus utuh di salah satu bilangan.<br>
      Pasangan: $(8,105)\to113$, $(15,56)\to71$, $(21,40)\to61$, $(24,35)\to59$, $(7,120)\to127$, dst.<br>
      Terkecil: $24+35=59$.`,
  },
  {
    type: "mc",
    q: rr`Jika $2025$ hari yang akan datang adalah hari Senin, maka pada $3223$ hari yang lalu adalah hari ...`,
    opts: ["Selasa", "Kamis", "Rabu", "Jumat"],
    ans: "C",
    hint: rr`Hari berulang tiap 7 hari, jadi pakai sisa bagi 7.<br>
      $2025\bmod7=2$, jadi hari ini = Senin mundur 2 hari = <b>Sabtu</b>.<br>
      $3223\bmod7=3$, jadi 3223 hari lalu = Sabtu mundur 3 hari = <b>Rabu</b>.`,
  },
  {
    type: "mc",
    q: rr`Tentukan sisa pembagian $3^{2026}$ oleh $13$.`,
    opts: ["1", "6", "3", "9"],
    ans: "C",
    hint: rr`$3^3=27=2\cdot13+1\equiv1\pmod{13}$, jadi pangkat 3 berulang.<br>
      $2026=3\cdot675+1$, sehingga $3^{2026}=(3^3)^{675}\cdot3\equiv1\cdot3=3$.`,
  },
  {
    type: "mc",
    q: rr`Diketahui persegi ABCD. Sebuah lingkaran ditempatkan sedemikian sehingga melalui titik B dan C serta menyinggung sisi AD seperti pada gambar. Diagonal lingkaran EG memotong sisi BC di titik F. Jika panjang ruas garis FG adalah 1 satuan, maka <b>luas persegi adalah ... satuan.</b>
      <figure class="fig"><svg viewBox="0 0 310 205" width="300" role="img" aria-label="Persegi ABCD dengan lingkaran melalui B dan C, menyinggung AD">
        <rect x="50" y="20" width="160" height="160" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <circle cx="150" cy="100" r="100" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="50" y1="100" x2="250" y2="100" stroke="currentColor" stroke-width="1.6"/>
        <g fill="currentColor" font-size="14" font-weight="600">
          <text x="34" y="196">A</text><text x="214" y="196">B</text><text x="214" y="16">C</text><text x="34" y="16">D</text>
          <text x="34" y="96">E</text><text x="192" y="94">F</text><text x="254" y="96">G</text>
        </g>
        <g fill="currentColor"><circle cx="50" cy="100" r="3"/><circle cx="210" cy="100" r="3"/><circle cx="250" cy="100" r="3"/></g>
      </svg></figure>`,
    opts: ["9", "12", "16", "18"],
    ans: "C",
    hint: rr`Misal sisi persegi $=s$ dan jari-jari $=r$. Lingkaran menyinggung AD, jadi pusat berjarak $r$ dari AD, dan $EG=2r$.<br>
      Pusat berada di tengah-tengah BC secara vertikal: koordinat pusat $(r,\tfrac s2)$ dengan A di $(0,0)$.<br>
      Melalui B$(s,0)$: $(s-r)^2+\left(\tfrac s2\right)^2=r^2\Rightarrow \tfrac54s^2-2sr=0\Rightarrow r=\tfrac58s$.<br>
      $FG=EG-s=2r-s=\tfrac54s-s=\tfrac s4=1\Rightarrow s=4$.<br>
      Luas $=4^2=16$.`,
  },
  {
    type: "mc",
    q: rr`Diketahui lingkaran dengan pusat di titik O. Tali busur AD dan BE berpotongan di luar lingkaran di titik C. Tali busur AD melalui titik pusat lingkaran. Panjang DC sama dengan jari-jari lingkaran. Apabila besar sudut $\angle AOB=60^\circ$, tentukan besar sudut $\angle ACB$.
      <figure class="fig"><svg viewBox="0 0 300 190" width="300" role="img" aria-label="Lingkaran pusat O dengan AD diameter, C di luar lingkaran">
        <circle cx="110" cy="110" r="70" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="40" y1="110" x2="250" y2="110"/><line x1="250" y1="110" x2="75" y2="49.4"/><line x1="110" y1="110" x2="75" y2="49.4"/></g>
        <g fill="currentColor"><circle cx="110" cy="110" r="3"/><circle cx="40" cy="110" r="3"/><circle cx="180" cy="110" r="3"/><circle cx="250" cy="110" r="3"/><circle cx="75" cy="49.4" r="3"/><circle cx="175" cy="84" r="3"/></g>
        <g fill="currentColor" font-size="14" font-weight="600">
          <text x="22" y="114">A</text><text x="106" y="128">O</text><text x="176" y="128">D</text><text x="256" y="114">C</text>
          <text x="62" y="42">B</text><text x="178" y="76">E</text><text x="92" y="86" font-size="11">60°</text>
        </g>
      </svg></figure>`,
    opts: ["30°", "20°", "15°", "12°"],
    ans: "B",
    hint: rr`Gunakan sudut luar dua garis potong: $\angle ACB=\tfrac12(\text{busur AB}-\text{busur DE})$.<br>
      Busur AB $=\angle AOB=60^\circ$. Misal $\angle ACB=x$. Pada segitiga OBC: $\angle BOC=120^\circ$, jadi $\angle OBC=60^\circ-x$, dan karena $OB=OE$, busur DE $=60^\circ-2x$.<br>
      Pada konfigurasi klasik (Archimedes) ini mengarah ke $\angle AOB=3\angle ACB$, sehingga $x=60^\circ\div3=20^\circ$.<br>
      <i>Catatan: jika "DC = jari-jari" dipakai harfiah, hasilnya ≈ 19,1°. Kunci resmi IYSLO adalah $20^\circ$ (kemungkinan soal aslinya "EC = jari-jari").</i>`,
  },
  {
    type: "mc",
    q: rr`Perhatikan gambar di bawah ini. Diketahui segitiga ABC. Titik D berada pada sisi AC dan titik E berada pada sisi AB sedemikian sehingga BD adalah garis bagi dalam $\angle ABC$, DE adalah garis bagi dalam $\angle ADB$, dan DE sejajar CB. Jika diketahui $AE=4$ dan $EB=6$, maka <b>panjang dari BD adalah ...</b>
      <figure class="fig"><svg viewBox="0 0 185 215" width="230" role="img" aria-label="Segitiga ABC dengan titik D pada AC dan E pada AB">
        <g stroke="currentColor" stroke-width="1.6" fill="none"><polygon points="20,200 140,200 95,25.8"/><line x1="50" y1="130.3" x2="140" y2="200"/><line x1="50" y1="130.3" x2="68" y2="200"/></g>
        <g fill="currentColor"><circle cx="50" cy="130.3" r="3"/><circle cx="68" cy="200" r="3"/></g>
        <g fill="currentColor" font-size="14" font-weight="600">
          <text x="6" y="212">A</text><text x="143" y="212">B</text><text x="92" y="18">C</text><text x="32" y="130">D</text><text x="64" y="214">E</text>
        </g>
      </svg></figure>`,
    opts: [rr`$\sqrt{75}$`, rr`$\sqrt{90}$`, rr`$\sqrt{105}$`, rr`$\sqrt{120}$`],
    ans: "B",
    hint: rr`Karena $DE\parallel BC$: $\angle EDB=\angle DBC=\angle ABD$ (BD garis bagi). Jadi segitiga EDB sama kaki: $ED=EB=6$.<br>
      DE juga garis bagi $\angle ADB$, sehingga $\angle ADE=\angle EDB=\angle ABD$.<br>
      Maka segitiga AED $\sim$ segitiga ADB (sudut A bersama): $\dfrac{AE}{AD}=\dfrac{AD}{AB}=\dfrac{ED}{DB}$.<br>
      $AD^2=AE\cdot AB=4\cdot10=40$, lalu $DB=ED\cdot\dfrac{AD}{AE}=6\cdot\dfrac{\sqrt{40}}{4}=\sqrt{90}$.`,
  },
  {
    type: "mc",
    q: rr`Suatu persegi panjang besar dibagi menjadi 9 bagian yang masing-masing juga berbentuk persegi panjang seperti pada gambar berikut. Angka pada gambar menyatakan keliling dari persegi panjang kecil yang bersesuaian. <b>Tentukan keliling persegi panjang besar.</b>
      <figure class="fig"><svg viewBox="0 0 290 205" width="300" role="img" aria-label="Persegi panjang besar dibagi 9 bagian, keliling 20, 32, 14, 16, dan 10 diketahui">
        <g stroke="currentColor" stroke-width="1.6" fill="none"><rect x="10" y="10" width="266" height="182"/><line x1="178" y1="10" x2="178" y2="192"/><line x1="220" y1="10" x2="220" y2="192"/><line x1="10" y1="108" x2="276" y2="108"/><line x1="10" y1="164" x2="276" y2="164"/></g>
        <g fill="currentColor" font-size="16" font-weight="600" text-anchor="middle">
          <text x="199" y="65">20</text><text x="94" y="140">32</text><text x="199" y="140">14</text><text x="248" y="140">16</text><text x="199" y="183">10</text>
        </g>
      </svg></figure>`,
    opts: ["58", "62", "64", "70"],
    ans: "C",
    hint: rr`Keliling $=2(\text{panjang}+\text{lebar})$, jadi tiap angka memberi nilai (panjang + lebar): 20 &rarr; 10, 14 &rarr; 7, 10 &rarr; 5, 32 &rarr; 16, 16 &rarr; 8.<br>
      Misal lebar kolom tengah $=x$. Tinggi baris atas $=10-x$, tengah $=7-x$, bawah $=5-x$ (total tinggi $=22-3x$).<br>
      Lebar kolom kiri $=16-(7-x)=9+x$, kanan $=8-(7-x)=1+x$ (total lebar $=10+3x$).<br>
      Panjang + lebar $=(10+3x)+(22-3x)=32$, jadi keliling $=2\cdot32=64$.`,
  },
  {
    type: "mc",
    q: rr`Misalkan dipunyai persegi ABCD. Titik O adalah titik potong diagonal-diagonal AC dan BD. Titik X adalah titik tengah sisi AB. Titik Y adalah perpotongan diagonal BD dengan ruas garis CX. Misalkan $m$ menyatakan jumlah luas segitiga OCY dan luas segitiga XBY, sedangkan $n$ menyatakan luas persegi ABCD. <b>Tentukan nilai dari $m/n$.</b>
      <figure class="fig"><svg viewBox="0 0 250 250" width="240" role="img" aria-label="Persegi ABCD dengan diagonal dan titik X, Y; segitiga OCY dan XBY diarsir">
        <polygon points="120,120 220,20 153.3,153.3" fill="currentColor" fill-opacity=".22" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="120,220 220,220 153.3,153.3" fill="currentColor" fill-opacity=".22" stroke="currentColor" stroke-width="1.4"/>
        <g stroke="currentColor" stroke-width="1.6" fill="none"><rect x="20" y="20" width="200" height="200"/><line x1="20" y1="20" x2="220" y2="220"/><line x1="20" y1="220" x2="220" y2="20"/><line x1="220" y1="20" x2="120" y2="220"/></g>
        <g fill="currentColor" font-size="14" font-weight="600">
          <text x="4" y="236">A</text><text x="224" y="236">B</text><text x="224" y="18">C</text><text x="4" y="18">D</text>
          <text x="102" y="116">O</text><text x="114" y="238">X</text><text x="160" y="150">Y</text>
        </g>
      </svg></figure>`,
    opts: [rr`$\frac15$`, rr`$\frac3{16}$`, rr`$\frac3{20}$`, rr`$\frac16$`],
    ans: "D",
    hint: rr`Pakai koordinat dengan sisi persegi $=1$: A$(0,0)$, B$(1,0)$, C$(1,1)$, D$(0,1)$, O$(\tfrac12,\tfrac12)$, X$(\tfrac12,0)$.<br>
      BD: $x+y=1$. CX: dari C$(1,1)$ ke X$(\tfrac12,0)$ memotong BD di Y$(\tfrac23,\tfrac13)$.<br>
      Luas XBY $=\tfrac12\cdot\tfrac12\cdot\tfrac13=\tfrac1{12}$. Luas OCY $=\tfrac12|\,(\tfrac12,\tfrac12)\times(\tfrac16,-\tfrac16)\,|=\tfrac1{12}$.<br>
      $m=\tfrac16$, $n=1$, jadi $m/n=\tfrac16$.`,
  },
  {
    type: "mc",
    q: rr`Jika $1000<n\le4000$ dan $n$ disusun dari angka $0,1,2,3,4$. Berapa banyaknya $n$? Boleh ada angka berulang.`,
    opts: ["375", "376", "125", "250"],
    ans: "A",
    hint: rr`Bilangan 4 digit dengan digit pertama $1,2,3$: $3\times5\times5\times5=375$ bilangan (dari 1000 sampai 3444).<br>
      Karena $n>1000$, bilangan $1000$ harus dibuang: $375-1=374$.<br>
      Lalu $n\le4000$ menambah satu bilangan: $4000$ itu sendiri (digit pertama 4 hanya boleh $4000$).<br>
      Total $=374+1=375$.`,
  },
  {
    type: "mc",
    q: rr`Seorang siswa mengikuti tes 10 soal dengan tipe jawaban benar atau salah. Jika siswa menjawab dengan benar 8 soal atau lebih, maka ia lulus. Siswa tersebut menjawab seluruh pertanyaan. <b>Berapa peluang dia lulus?</b>`,
    opts: [rr`$\frac7{128}$`, rr`$\frac7{64}$`, rr`$\frac3{10}$`, rr`$\frac3{64}$`],
    ans: "A",
    hint: rr`Menjawab asal-asalan: tiap soal peluang benar $\tfrac12$, total kemungkinan $2^{10}=1024$.<br>
      Lulus jika benar 8, 9, atau 10 soal: $\binom{10}{8}+\binom{10}{9}+\binom{10}{10}=45+10+1=56$.<br>
      Peluang $=\dfrac{56}{1024}=\dfrac7{128}$.`,
  },
  {
    type: "mc",
    q: rr`Bentuk sederhana dari<br>
      $\binom n0^2+\binom n1^2+\binom n2^2+\cdots+\binom nn^2$ adalah ...`,
    opts: [rr`$\binom{2n}{n}$`, rr`$\binom{2n}{n-2}$`, rr`$\binom n2$`, rr`$\binom{n^2}{n}$`],
    ans: "A",
    hint: rr`Cara kombinatorik: dari $2n$ orang (dibagi dua kelompok masing-masing $n$ orang), pilih $n$ orang. Jika dipilih $k$ dari kelompok pertama, sisanya $n-k$ dari kelompok kedua: $\binom nk\binom n{n-k}=\binom nk^2$.<br>
      Jumlahkan untuk semua $k$: $\sum\binom nk^2=\binom{2n}{n}$.<br>
      (Cek $n=2$: $1+4+1=6=\binom42$.)`,
  },
  {
    type: "mc",
    q: rr`Ada berapa banyak himpunan $X$ yang memenuhi himpunan<br>
      $\{1,2,3,\ldots,2025\}\subseteq X\subseteq\{1,2,3,\ldots,2029\}$?<br>
      <i>NB: Simbol $\subseteq$ merupakan simbol himpunan bagian.</i>`,
    opts: ["2029", "16", "32", "2024"],
    ans: "B",
    hint: rr`$X$ wajib memuat $1,2,\ldots,2025$. Yang boleh dipilih bebas (masuk atau tidak) hanya $2026,2027,2028,2029$.<br>
      Tiap elemen punya 2 pilihan: $2^4=16$.`,
  },
  {
    type: "mc",
    q: rr`Enam orang guru akan ditempatkan pada tiga sekolah yang berbeda, 2 orang di sekolah pertama, 1 orang di sekolah kedua, dan 3 orang di sekolah ketiga. <b>Banyak cara menempatkan keenam orang guru tersebut adalah ...</b>`,
    opts: ["60", "36", "48", "30"],
    ans: "A",
    hint: rr`Pilih bertahap:<br>
      Sekolah 1: $\binom62=15$. Sekolah 2 (dari 4 sisa): $\binom41=4$. Sekolah 3 (3 sisa): $\binom33=1$.<br>
      Total $=15\times4\times1=60$.`,
  },
  {
    type: "mc",
    q: rr`Rania sedang menyusun bilangan bulat positif yang terdiri dari 2025 digit yang diawali dengan digit 3. Rania ingin setiap dua digit yang bersebelahan merepresentasikan bilangan dua digit yang habis dibagi 17 atau 23. Dengan cara ini ternyata dia mendapati ada dua digit yang mungkin untuk digit ke-2025. <b>Jumlah dua digit tersebut adalah ...</b>`,
    opts: ["7", "9", "10", "17"],
    ans: "A",
    hint: rr`Bilangan dua digit kelipatan 17: 17, 34, 51, 68, 85. Kelipatan 23: 23, 46, 69, 92.<br>
      Peralihan digit: $3\to4\to6$, lalu dari 6 ke $8$ atau $9$; $8\to5\to1\to7$ (buntu); $9\to2\to3\to4\to6$ (membentuk siklus).<br>
      Siklus $6,9,2,3,4$ berulang tiap 5 digit; digit ke-$n$ dengan $n\equiv0\pmod5$ adalah $2$. Karena $2025\equiv0\pmod5$, satu kemungkinan adalah <b>2</b>.<br>
      Kemungkinan lain: keluar siklus lewat $6\to8\to5$ tepat di digit ke-2025 (karena $2022\equiv2\pmod5$) &rarr; <b>5</b>.<br>
      Jumlahnya $2+5=7$.`,
  },
  {
    type: "mc",
    q: rr`Sebuah kantong berisi 20 permen: 4 cokelat, 6 mint, dan 10 butterscotch. Permen diambil secara acak dari kantong dan dimakan. <b>Berapa jumlah minimum permen yang harus diambil agar dapat dipastikan bahwa setidaknya dua permen dari masing-masing rasa telah dimakan?</b>`,
    opts: ["18", "17", "16", "15"],
    ans: "A",
    hint: rr`Pikirkan kasus terburuk: semua permen dari dua rasa terbanyak terambil dulu.<br>
      Ambil semua butterscotch ($10$) dan semua mint ($6$), baru cokelat mulai terambil.<br>
      Setelah itu perlu $2$ cokelat lagi. Total $10+6+2=18$.`,
  },
  {
    type: "mc",
    q: rr`Jika huruf-huruf P, S, dan M di bawah ini merepresentasikan digit-digit bilangan yang berbeda. <b>Tentukan $P+S+M$.</b>
      <pre class="sum">  P P S M
+   S M P
-------
  2 0 2 5</pre>`,
    opts: ["11", "12", "13", "14"],
    ans: "C",
    hint: rr`Satuan: $M+P$ berakhir 5. Puluhan, ratusan, ribuan dihitung dengan membawa (carry).<br>
      Ribuan: $P$ ($+$ carry) $=2$ &rarr; $P=1$ (jika ada carry 1 dari ratusan maka $P+1=2$).<br>
      Dengan $P=1$: satuan $M+1$ berakhir 5 &rarr; $M=4$, tanpa carry.<br>
      Puluhan: $S+M=S+4$ berakhir 2 &rarr; $S=8$ ($8+4=12$, carry 1).<br>
      Cek: $1184+841=2025$ &check;. Jadi $P+S+M=1+8+4=13$.`,
  },
];

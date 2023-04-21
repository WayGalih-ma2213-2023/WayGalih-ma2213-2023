//cuaca
let dataAPI;
let urlAPI =
  "https://api.openweathermap.org/data/2.5/weather?q=way%20galih&appid=ace2225fe551d467004d8525e384f714&units=metric";

//Data Digram Pie
//Data Usia
let dataUsia;
let urlusia =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmSzwpheVP1NYB58liRNmrOxzRHbebYiDt5OyaLDGCN-MsChoIPimNfpsRz3qUhffv6aPl5woSlXif/pub?gid=288602216&single=true&output=csv";

//Data Jenis Kelamin
let dataPiejk;
let urljk =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmSzwpheVP1NYB58liRNmrOxzRHbebYiDt5OyaLDGCN-MsChoIPimNfpsRz3qUhffv6aPl5woSlXif/pub?gid=1783044099&single=true&output=csv";

//Data Agama
let dataPieAgama;
let urlAgama =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmSzwpheVP1NYB58liRNmrOxzRHbebYiDt5OyaLDGCN-MsChoIPimNfpsRz3qUhffv6aPl5woSlXif/pub?gid=378699670&single=true&output=csv";

//Data Kepadatan
let dataKepadatan;
let urlkep =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmSzwpheVP1NYB58liRNmrOxzRHbebYiDt5OyaLDGCN-MsChoIPimNfpsRz3qUhffv6aPl5woSlXif/pub?gid=147250268&single=true&output=csv";

//Data Pekerjaan
let dataPekerjaan;
let urlpek =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmSzwpheVP1NYB58liRNmrOxzRHbebYiDt5OyaLDGCN-MsChoIPimNfpsRz3qUhffv6aPl5woSlXif/pub?gid=1022967965&single=true&output=csv";

//Penamaan & Inisiasi Variabel
let bg;
let logo;
let logoKab;
let sumber;
let organigram;
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
let RobotoMonoLight;
r = 15;

//Open Weather
function infoCuaca(p, q, data, fontSize) {
  textSize(fontSize);
  fill("white");
  noStroke();
  textFont(RobotoMonoExtraLight);

  // Nama Desa
  text(data.name, (posP = p + 1060), (posQ = q + 1120), textSize(20));

  // Cuaca
  text(
    data.weather[0].main,
    (posP = p + 1300),
    (posQ = q + 1100),
    textSize(30)
  );
  text("Cuaca", (posP = p + 1300), (posQ = q + 1120), textSize(13));

  // temperatur
  text(
    data.main.temp + "°c",
    (posP = p + 1060),
    (posQ = q + 1160),
    textSize(40)
  );

  // kecepatan angin
  text("Kecepatan Angin", (posP = p + 1300), (posQ = q + 1200), textSize(13));
  text(
    data.wind.speed + " km/h ",
    (posP = p + 1300),
    (posQ = q + 1180),
    textSize(30)
  );

  // kelembaban
  text(
    data.main.humidity + " % ",
    (posP = p + 1300),
    (posQ = q + 1260),
    textSize(30)
  );
  text("Kelembaban", (posP = p + 1300), (posQ = q + 1260 + 20), textSize(13));
}

//Load Image & Data
function preload() {
  dataAPI = loadJSON(urlAPI);
  bg = loadImage("kebun karet.jpg");
  logo = loadImage("Logo.png");
  logoKab = loadImage("Logo Kab.png");
  sumber = loadImage("sumber.png");
  organigram = loadImage("Struktur Desa.png");
  RobotoMonoLight = loadFont("RobotoMono-Light.ttf");
  RobotoMonoSemiBold = loadFont("RobotoMono-SemiBold.ttf");
  RobotoMonoMedium = loadFont("RobotoMono-Medium.ttf");
  RobotoMonoExtraLight = loadFont("RobotoMono-ExtraLight.ttf");
  dataUsia = loadTable(urlusia, "csv", "header");
  dataPiejk = loadTable(urljk, "csv", "header");
  dataPieAgama = loadTable(urlAgama, "csv", "header");
  dataKepadatan = loadTable(urlkep, "csv", "header");
  dataPekerjaan = loadTable(urlpek, "csv", "header");
}

function setup() {
  createCanvas(1600, 3150);
  //map
  let div = createDiv();
  div.id("maps");
}

function draw() {
  background("white");
  noStroke();

  Cover();
  About();
  Weather();

  //Organigram
  fill("#8ECAE6");
  image(organigram, 10, 1425, 950, 550);

  noStroke();
  fill("white");
  rect(100, 2051, 800, 400);

  fill("black");
  textFont(RobotoMonoMedium);
  textSize(20);
  text("Peta Desa", 1275, 1475);

  //Judul Bagian Data
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(30);
  text("Data Statistik Desa Way Galih", 550, 2025);

  anglesusia = dataUsia.getColumn("sudut");
  pieChartUsia(200, anglesusia);

  anglesjk = dataPiejk.getColumn("sudut");
  pieChartjk(200, anglesjk);

  anglesagama = dataPieAgama.getColumn("sudut");
  pieChartagama(200, anglesagama);

  angleskep = dataKepadatan.getColumn("sudut");
  pieChartkep(200, angleskep);

  anglespek = dataPekerjaan.getColumn("sudut");
  pieChartpek(200, anglespek);

  fill("#4C5762");
  rect(0, 3000, width, 150);
  fill("reflection");
  textSize(20);
  textFont(RobotoMonoSemiBold);
  text("Desa Way Galih", 100, 3075);
  textSize(16);
  textFont(RobotoMonoLight);
  text(
    "Kecamatan Tanjung Bintang Kabupaten Lampung Selatan Provinsi Lampung Kode Pos 35361",
    100,
    3095
  );
  textSize(18);
  text("Email   :   -", 1150, 3070);
  text("Telp    :   +62 812-7176-3520", 1150, 3090);
}

//Informasi cuaca
function Weather() {
  fill("white");
  rect(1000, 950, 500, 400);
  fill("black");
  textFont(RobotoMonoMedium);
  textSize(20);
  judul = "Informasi Cuaca";
  text(judul, 1160, 980);
  fill(51, 66, 87, 200);
  rect(1045, 1010, 422, 250, 20);
  infoCuaca(0, -50, dataAPI, 500 / 20);
  textFont(RobotoMonoExtraLight);
  fill(0);
  noStroke();
  textSize(18);

  //Logo Open Weather
  image(sumber, 1060, 1150, 200, 85);
}

//cover
function Cover() {
  //Background
  image(bg, 0, 0, 1600, 900);

  //Logo
  fill(51, 66, 87, 200);
  rect(0, 0, 1600, 900);
  image(logoKab, width / 2 - 100, 300, 200, 325);
  image(logo, width - 135, 10, 125, 75);

  //Nama Desa
  fill("white");
  rect(465, 650, 670, 75);
  textFont(RobotoMonoMedium);
  fill("black");
  textSize(25);
  text("DESA WAY GALIH", 690, 680);
  textSize(20);
  text("Kec. Tanjung Bintang Kab. Lampung Selatan Prov. Lampung", 470, 705);

  //Teks Dashboard
  fill("white");
  textFont(RobotoMonoSemiBold);
  textSize(30);
  text("Dashboard", 30, 60);

  // Inisiasi Tanggal dan Jam
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate =
    currentDay + "/" + nf(currentMonth, 2) + "/" + nf(currentYear, 2);
  var currentTime =
    currentHour + ":" + nf(currentMinute, 2) + ":" + nf(currentSecond, 2);

  fill("white");

  //Tanggal
  textSize(22);
  text(currentDate, 800 - 65, 85);

  //Jam
  textSize(30);
  text(currentTime, 798 - 68, 45);
}

//Tentang Way Galih
function About() {
  fill("#EAE2B7");
  rect(80, 940, 750, 450);
  textSize(20);
  textFont(RobotoMonoMedium);
  fill("#071E22");
  text("Tentang Way Galih", 350, 980);

  textSize(16);
  textFont(RobotoMonoLight);
  //textFont(RobotoMonoSemiBold);
  //Paragraf 1
  text(
    "Desa Way Galih merupakan sebuah desa yang terletak di Kecamatan ",
    170,
    1020
  );
  text(
    "Tanjung Bintang, Kabupaten Lampung Selatan, Provinsi Lampung, Indonesia. ",
    110,
    1040 + r
  );
  text(
    "Desa ini terletak sekitar 25 kilometer dari ibu kota Kabupaten Lampung ",
    110,
    1060 + 2 * r
  );
  text(
    "Selatan, Kota Kalianda, dan sekitar 50 kilometer dari ibu kota Provinsi ",
    110,
    1080 + 3 * r
  );
  text("Lampung, Kota Bandar Lampung. ", 110, 1100 + 4 * r);

  // Paragraf 2
  text(
    "Desa Way Galih memiliki beberapa objek wisata alam yang menarik, ",
    170,
    1140 + 4 * r
  );
  text(
    "diantaranya adalah Air Terjun Batu Menangis, Sungai Way Galih, dan Hutan ",
    110,
    1160 + 5 * r
  );
  text(
    "Raya Way Galih. Selain itu, di desa ini terdapat pula beberapa warung ",
    110,
    1180 + 6 * r
  );
  text(
    "makan dan penginapan yang bisa menjadi pilihan bagi wisatawan yang ingin ",
    110,
    1200 + 7 * r
  );
  text("mengunjungi desa ini. ", 110, 1220 + 8 * r);
}

//Data Usia
function pieChartUsia(diameterusia, dataPieUsia) {
  let lastAngle = 0;
  var piecolorusia = [
    "#5F0F40",
    "#9A031E",
    "#EAE2B7",
    "#E36414",
    "#0F4C5C",
    "#FCBF49",
  ];
  for (var i = 0; i < dataPieUsia.length; i++) {
    fill(piecolorusia[i]);
    arc(
      325,
      2212,
      diameterusia,
      diameterusia,
      lastAngle,
      lastAngle + radians(anglesusia[i])
    );
    lastAngle += radians(anglesusia[i]);
  }

  fill("black");
  textSize(18);
  textFont(RobotoMonoMedium);
  text("Data Usia", 275, 2080);
  textFont(RobotoMonoExtraLight);
  text("Bayi               = " + dataUsia.getColumn("jumlah")[0], 200, 2342);
  text("Balita             = " + dataUsia.getColumn("jumlah")[1], 200, 2362);
  text("5-17 Tahun         = " + dataUsia.getColumn("jumlah")[2], 200, 2382);
  text("18-25 Tahun        = " + dataUsia.getColumn("jumlah")[3], 200, 2402);
  text("Dewasa             = " + dataUsia.getColumn("jumlah")[4], 200, 2422);
  text("Lansia             = " + dataUsia.getColumn("jumlah")[5], 200, 2442);

  fill(piecolorusia[0]);
  circle(380, 2337, 16);
  fill(piecolorusia[1]);
  circle(380, 2357, 16);
  fill(piecolorusia[2]);
  circle(380, 2377, 16);
  fill(piecolorusia[3]);
  circle(380, 2397, 16);
  fill(piecolorusia[4]);
  circle(380, 2417, 16);
  fill(piecolorusia[5]);
  circle(380, 2437, 16);
}
//Data Jenis Kelamin
function pieChartjk(diameterjk, dataPeijk) {
  let lastAnglejk = 0;
  var piecolorjk = ["#1D7874 ", "#F4C095 "];
  for (var i = 0; i < dataPeijk.length; i++) {
    fill(piecolorjk[i]);
    arc(
      800,
      2212,
      diameterjk,
      diameterjk,
      lastAnglejk,
      lastAnglejk + radians(anglesjk[i])
    );
    lastAnglejk += radians(anglesjk[i]);
  }

  fill("black");

  textSize(18);
  textFont(RobotoMonoMedium);
  text("Data Jenis Kelamin", 700, 2080);
  textFont(RobotoMonoExtraLight);
  text("Laki-Laki        = " + dataPiejk.getColumn("jumlah")[0], 675, 2350);
  text("Perempuan        = " + dataPiejk.getColumn("jumlah")[1], 675, 2380);

  fill(piecolorjk[0]);
  circle(835, 2345, 18);
  fill(piecolorjk[1]);
  circle(835, 2375, 18);
}
//Data Agama
function pieChartagama(diameter, dataPeiAgama) {
  let lastAngle = 0;
  var piecoloragama = ["#8ECAE6 ", "#219EBC ", "#023047 ", "#FFB703 "];
  for (var i = 0; i < dataPeiAgama.length; i++) {
    fill(piecoloragama[i]);
    arc(
      1270,
      2212,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i])
    );
    lastAngle += radians(anglesagama[i]);
  }

  fill("white");

  fill("black");
  textFont(RobotoMonoMedium);
  text("Data Agama", 1210, 2080);

  textFont(RobotoMonoExtraLight);
  text("Islam           = " + dataPieAgama.getColumn("jumlah")[0], 1155, 2342);
  text("Kristen         = " + dataPieAgama.getColumn("jumlah")[1], 1155, 2362);
  text("Hindu           = " + dataPieAgama.getColumn("jumlah")[2], 1155, 2382);
  text("Budha           = " + dataPieAgama.getColumn("jumlah")[3], 1155, 2402);

  fill(piecoloragama[0]);
  circle(1300, 2337, 16);
  fill(piecoloragama[1]);
  circle(1300, 2357, 16);
  fill(piecoloragama[2]);
  circle(1300, 2377, 16);
  fill(piecoloragama[3]);
  circle(1300, 2397, 16);
}
//Data Kepadatan
function pieChartkep(diameter, dataPieKepadatan) {
  let lastAngle = 0;
  var piecolorkep = [
    "#001219",
    "#005F73 ",
    "#0A9396 ",
    "#94D2BD ",
    "#E9D8A6 ",
    "#EE9B00",
    "#CA6702",
    "#BB3E03",
    "#C9124F ",
    "#8A36C1 ",
  ];
  for (var i = 0; i < dataPieKepadatan.length; i++) {
    fill(piecolorkep[i]);
    arc(
      585,
      2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angleskep[i])
    );
    lastAngle += radians(angleskep[i]);
  }
  fill("white");

  textFont(RobotoMonoMedium);
  fill("black");
  text("Data Kepadatan Penduduk", 460, 2539);

  textFont(RobotoMonoExtraLight);
  text(
    "Dusun I.A          = " + dataKepadatan.getColumn("JumlahJiwa")[0],
    460,
    2800
  );
  text(
    "Dusun I.B          = " + dataKepadatan.getColumn("JumlahJiwa")[1],
    460,
    2820
  );
  text(
    "Dusun II.A         = " + dataKepadatan.getColumn("JumlahJiwa")[2],
    460,
    2840
  );
  text(
    "Dusun II.B         = " + dataKepadatan.getColumn("JumlahJiwa")[3],
    460,
    2860
  );
  text(
    "Dusun III          = " + dataKepadatan.getColumn("JumlahJiwa")[4],
    460,
    2880
  );
  text(
    "Dusun IV           = " + dataKepadatan.getColumn("JumlahJiwa")[5],
    460,
    2900
  );
  text(
    "Dusun V.A          = " + dataKepadatan.getColumn("JumlahJiwa")[6],
    460,
    2920
  );
  text(
    "Dusun V.B          = " + dataKepadatan.getColumn("JumlahJiwa")[7],
    460,
    2940
  );
  text(
    "Dusun VI.A         = " + dataKepadatan.getColumn("JumlahJiwa")[8],
    460,
    2960
  );
  text(
    "Dusun VI.B         = " + dataKepadatan.getColumn("JumlahJiwa")[9],
    460,
    2980
  );

  fill(piecolorkep[0]);
  circle(640, 2795, 16);
  fill(piecolorkep[1]);
  circle(640, 2815, 16);
  fill(piecolorkep[2]);
  circle(640, 2835, 16);
  fill(piecolorkep[3]);
  circle(640, 2855, 16);
  fill(piecolorkep[4]);
  circle(640, 2875, 16);
  fill(piecolorkep[5]);
  circle(640, 2895, 16);
  fill(piecolorkep[6]);
  circle(640, 2915, 16);
  fill(piecolorkep[7]);
  circle(640, 2935, 16);
  fill(piecolorkep[8]);
  circle(640, 2955, 16);
  fill(piecolorkep[9]);
  circle(640, 2975, 16);
}
//Data Pekerjaan
function pieChartpek(diameterpek, dataPiePekerjaan) {
  let lastAnglepek = 0;
  var piecolorpek = [
    "#001219",
    "#005F73 ",
    "#0A9396 ",
    "#94D2BD ",
    "#E9D8A6 ",
    "#EE9B00",
  ];
  for (var i = 0; i < dataPiePekerjaan.length; i++) {
    fill(piecolorpek[i]);
    arc(
      1050,
      2670,
      diameterpek,
      diameterpek,
      lastAnglepek,
      lastAnglepek + radians(anglespek[i])
    );
    lastAnglepek += radians(anglespek[i]);
  }
  fill("white");

  textSize(18);
  textFont(RobotoMonoMedium);
  fill("black");
  text("Data Pekerjaan", 970, 2539);

  textFont(RobotoMonoExtraLight);
  text(
    "PNS                = " + dataPekerjaan.getColumn("jumlah")[0],
    920,
    2800
  );
  text(
    "Tidak Bekerja      = " + dataPekerjaan.getColumn("jumlah")[1],
    920,
    2820
  );
  text(
    "Mahasiswa          = " + dataPekerjaan.getColumn("jumlah")[2],
    920,
    2840
  );
  text(
    "Pelajar            = " + dataPekerjaan.getColumn("jumlah")[3],
    920,
    2860
  );
  text(
    "Buruh              = " + dataPekerjaan.getColumn("jumlah")[4],
    920,
    2880
  );
  text(
    "Wiraswasta         = " + dataPekerjaan.getColumn("jumlah")[5],
    920,
    2900
  );

  fill(piecolorpek[0]);
  circle(1100, 2795, 15);
  fill(piecolorpek[1]);
  circle(1100, 2815, 15);
  fill(piecolorpek[2]);
  circle(1100, 2835, 15);
  fill(piecolorpek[3]);
  circle(1100, 2855, 15);
  fill(piecolorpek[4]);
  circle(1100, 2875, 15);
  fill(piecolorpek[5]);
  circle(1100, 2895, 15);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 900) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

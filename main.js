// Quản lý tuyển sinh

document.getElementById("tinhDiem").onclick = function () {
    let diemChuan = document.getElementById("diemChuan").value*1;
    let diemMon1 = document.getElementById("diemMon1").value*1;
    let diemMon2 = document.getElementById("diemMon2").value*1;
    let diemMon3 = document.getElementById("diemMon3").value*1;
    let diemKhuVuc = document.getElementById("diemKhuVuc").value*1;
    let diemDoiTuong = document.getElementById("diemDoiTuong").value*1;
    let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
    let ketQua;
    if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        ketQua = "Đậu";
}
    else {
         ketQua = "Rớt";
    }
    document.getElementById("ketQua").innerHTML = ketQua;
    document.getElementById("tongDiem").innerHTML = tongDiem;}


    // tính tiền điện

    document.getElementById("tinhTienDien").onclick = function () {
       
        let soKw = document.getElementById("soKw").value*1;
        let tongTienDien 
        
        if (soKw <= 50) {
         tongTienDien = soKw * 500;   
        }  else if (50 < soKw <= 100) {
            tongTienDien = 50 * 500 + (soKw-50) * 650;
        } else if (100 < soKw <= 200) {
            tongTienDien = 50 * 500 + 50 * 650 + (soKw-100) * 850;
        } else if (200 < soKw <= 350) {
            tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw-200) * 1100;
        } else {
            tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw-350) * 1300;
        }

        document.getElementById("tongTienDien").innerHTML = tongTienDien + " VND";
    }
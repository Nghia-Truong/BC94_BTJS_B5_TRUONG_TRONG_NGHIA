// Quản lý tuyển sinh
/*input : diemChuan, diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong
progress:
+ tinhDiem
+ So sánh điều kiện để biết đậu rớt
output:
+ ketQua
+ tongDiem*/


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
/*input : soKW
progress:
+ dùng If để tính tien dien
output:
+ Tiền Điện*/    

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

    // Tính thuế thu nhập cá nhân
/*input : hoTen, thuNhapNam, nguoiPhuThuoc
progress:
+ tính thu nhập chịu thuế
+ dùng If để tính tien thue
+ làm tròn tiền thuế
output:
+ xuất kết quả*/  
    document.getElementById("tinhThue").onclick = function () {
        let hoTen = document.getElementById("hoTen");
        let thuNhapNam = document.getElementById("thuNhapNam").value*1;
        let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value*1;
        let thuNhapChiuThue = thuNhapNam - 4 - nguoiPhuThuoc * 16;
        let tienThue;
        if (thuNhapChiuThue <=60){
            tienThue = thuNhapChiuThue * 0.05;
        } else if (60<thuNhapChiuThue <= 120){
            tienThue = thuNhapChiuThue * 0.1;
        } else if (120<thuNhapChiuThue <= 210){
            tienThue = thuNhapChiuThue * 0.15;
        } else if (210<thuNhapChiuThue <= 384){
            tienThue = thuNhapChiuThue * 0.2;
        } else if (384<thuNhapChiuThue <= 624){
            tienThue = thuNhapChiuThue * 0.25;
        } else if (624<thuNhapChiuThue <= 960){
            tienThue = thuNhapChiuThue * 0.3;
        } else if (thuNhapChiuThue > 960){
            tienThue = thuNhapChiuThue * 0.35;
        };        
        document.getElementById("tongTienThue").innerHTML = Number(tienThue.toFixed(2)) + "Triệu VND";
    }

    // Tính tiền Cáp
/*input : maKhachHang, soKenhCaoCap, so KetNoi, loaiKhachHang
progress:
+ Dựa vào loại khách hàng để bật tắt số kết nối
+ dùng If để tính tien cap
output:
+ Tiền cáp*/  
    document.getElementById("loaiKhachHang").onclick = function () {
        let loaiKhachHang = document.getElementById("loaiKhachHang").value;
        switch (loaiKhachHang) {
                case "nhaDan":
                    document.getElementById("soKetNoi").style.display = "none";
                    break;
                
                default:
                    document.getElementById("soKetNoi").style.display = "inline-block";
                    break;
            }  
    }
    
    document.getElementById("tinhTienCap").onclick = function () {
        let maKhachHang = document.getElementById("maKhachHang").value;
        let soKenhCaoCap = document.getElementById("soKenhCaoCap").value*1;
        let loaiKhachHang = document.getElementById("loaiKhachHang").value;
        let soKetNoi = document.getElementById("soKetNoi").value*1;
        let tienCap;
        switch (loaiKhachHang) {
                case "nhaDan":
                    tienCap = 4.5 + 20.5 + soKenhCaoCap * 7.5;
                    break;
                
                default:
                    tienCap =(soKetNoi <= 10)? 15 + 20.5 + 75 + soKenhCaoCap * 50 : 15 + 20.5 + 75 + (soKetNoi-10)*5 + soKenhCaoCap * 50; ;                    
                    break;
            }
        document.getElementById("tienCap").innerHTML = tienCap + " $";
    }
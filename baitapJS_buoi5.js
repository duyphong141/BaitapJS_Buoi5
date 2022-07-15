//! Bài tập 1: Quản lý tuyển sinh
document.getElementById('btnKetQua').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var diemMon1 = Number(document.getElementById('diemMon1').value);
    var diemMon2 = Number(document.getElementById('diemMon2').value);
    var diemMon3 = Number(document.getElementById('diemMon3').value);
    var khuVuc = Number(document.getElementById('chonKhuVuc').value);
    var doiTuong = Number(document.getElementById('chonDoiTuong').value);

    var tongDiem = 0;
    var ketQua = '';

    if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
        ketQua = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0'
    } else {
        tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
        if (tongDiem >= diemChuan) {
            ketQua = 'Bạn đã đậu. Tổng điểm: ' + tongDiem + ' điểm';
        } else {
            ketQua = 'Bạn đã rớt. Tổng điểm: ' + tongDiem + ' điểm';
        }
    }

    document.getElementById('hienThiKetQua').innerHTML = ketQua;
}

//! Bài tập 2: Tính tiền điện
document.getElementById('btnTienDien').onclick = function() {
    var hoTen = document.getElementById('hoTen').value;
    var soKw = Number(document.getElementById('soKw').value);
    var tienDien = 0;
    var ketQua = '';

    if (soKw <= 0) {
        alert('Số Kw không hợp lệ! Vui lòng nhập lại');
    } else if (soKw <= 50) {
        tienDien = 500 * soKw;
    } else if (soKw <= 100) { 
        tienDien = 650 * (soKw - 50) + 500 * 50;
    } else if (soKw <= 200) { 
        tienDien = 850 * (soKw - 100) + 650 * 50 + 500 * 50;
    } else if (soKw <= 350) { 
        tienDien = 1100 * (soKw - 200) + 850 * 100 + 650 * 50 + 500 * 50;
    } else {
        tienDien = 1300 * (soKw - 350) + 1100 * 150 + 850 * 100 + 650 * 50 + 500 * 50;
    }
    ketQua = 'Họ tên: ' + hoTen + '; Tiền điện: ' + tienDien.toLocaleString();
    document.getElementById('hienThiTienDien').innerHTML = ketQua;

}
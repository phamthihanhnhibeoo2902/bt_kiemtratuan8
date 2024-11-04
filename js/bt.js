$(document).ready(function() {
    let i = 2; // Biến đếm cho số thứ tự
    // Hiển thị modal khi nhấn nút Đăng Ký
    $("#btnDK").click(function() {
        $("#myModal").modal('show');
    });
    // Đóng modal khi nhấn nút đóng
    $("#close").click(function() {
        $("#myModal").modal('hide');
    });
    // Kiểm tra mã học viên
    function KiemTraMa() {
        let ma = $("#txtMa").val().trim(); // Loại bỏ ký tự trắng
        console.log("Giá trị mã học viên:", ma);
        var pattern = /^[0-9]{2}[0-9]{8}$/;
        if (!pattern.test(ma)) {
            $("#tbMa").html("Sai định dạng xxyyyyyyyy").addClass("mauDo");
            console.log("KiemTraMa: False");
            return false;
        } else {
            $("#tbMa").html("Nhập đúng").removeClass("mauDo");
            console.log("KiemTraMa: True");
            return true;
        }
    }
    // Kiểm tra họ tên
    function KiemtraHT() {
        let ht = $("#txtHT").val().trim(); // Loại bỏ ký tự trắng
        console.log("Giá trị họ tên:", ht); // In giá trị họ tên ra console để kiểm tra
        var pattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
        if (ht === "") {
            $("#tbTen").html("Nhập tên không hợp lệ (Nguyen Van Anh)").addClass("mauDo");
            return false;
        }
        if (!pattern.test(ht)) {
            $("#tbTen").html("Chữ cái đầu của mỗi từ phải viết hoa và tối thiểu 2 từ").addClass("mauDo");
            return false;
        }
        $("#tbTen").html("Nhập đúng").removeClass("mauDo");
        return true;
    }
    $("#txtHT").blur(KiemtraHT);
    // Kiểm tra địa chỉ email
    function kiemTraDC() {
        let dc = $("#txtDC").val().trim(); // Loại bỏ ký tự trắng
        var mauKT = /@iuh\.edu\.vn$/; // Kiểm tra đuôi email
        if (dc === "") {
            $("#tbDC").html("Bắt buộc nhập").addClass("mauDo");
            return false;
        }
        if (!mauKT.test(dc)) {
            $("#tbDC").html("Nhập sai, phải có đuôi @iuh.edu.vn").addClass("mauDo");
            return false;
        }
        $("#tbDC").html("Nhập đúng").removeClass("mauDo");
        return true;
    }
    $("#txtDC").blur(kiemTraDC);
    // Lấy giá trị của dịch vụ
    $("#slGia").change(function() {
        $("#txtDV").val($(this).val());
    });
    // Tính tiền đồ dùng và tổng tiền
    $(".chkDoDung").click(function() {
        var tienDD = 0;
        $(".chkDoDung:checked").each(function() {
            tienDD += parseFloat($(this).val());
        });
        $("#txtDD").val(tienDD);
        // Tính tổng tiền
        var tong = parseFloat($("#txtDV").val() || 0) + tienDD;
        $("#txtTong").val(tong);
    });
    $("#btnSave").click(function() {
        // Gọi lại các hàm kiểm tra
        const maValid = KiemTraMa();
        const htValid = KiemtraHT();
        const dcValid = kiemTraDC();
        // Ghi lại kết quả kiểm tra trong console
        console.log("Kiểm tra mã:", maValid);
        console.log("Kiểm tra họ tên:", htValid);
        console.log("Kiểm tra email:", dcValid);
        if (!maValid || !htValid || !dcValid) {
            alert("Hãy nhập đầy đủ thông tin!");
            return false;
        }
        // Tiếp tục thêm dữ liệu vào bảng nếu mọi thứ hợp lệ
        var ma = $("#txtMa").val().trim(); // Loại bỏ ký tự trắng
        var ht = $("#txtHT").val().trim(); // Loại bỏ ký tự trắng
        var dc = $("#txtDC").val().trim(); // Loại bỏ ký tự trắng
        var dv = $("#txtDV").val() || "0";
        var dd = $("#txtDD").val() || "0";
        var tong = $("#txtTong").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ht + "</td><td>" + dc + "</td><td>" + dv + "</td><td>" + dd + "</td><td>" + tong + "</td></tr>";
        $("#tbDanhSach").append(them);
        $("#myModal").modal("hide");
        return true;
    });
    // Gọi kiểm tra ban đầu trong console
    console.log("Kiểm tra mã:", KiemTraMa());
    console.log("Kiểm tra họ tên:", KiemtraHT());
    console.log("Kiểm tra email:", kiemTraDC());
});
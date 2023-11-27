function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra xem các trường username và password có được điền đầy đủ hay không
    if (username == "" || password == "") {
      alert("Vui lòng điền đầy đủ thông tin đăng nhập!");
      return false;
    }

    // Thực hiện kiểm tra đăng nhập (ví dụ: kiểm tra với cơ sở dữ liệu)
    // Đây chỉ là ví dụ đơn giản, bạn cần thay thế bằng mã kiểm tra thực tế

    if (username === "admin" && password === "admin") {
      alert("Đăng nhập thành công!");
      window.location.href = "trang-chu.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
      return false;
    }
  }


# CRACKFORFUN

CRACKFORFUN là trang chia sẻ game miễn phí, hợp pháp và an toàn. Dự án này sử dụng Netlify CMS để quản lý nội dung.

## Cấu trúc
- `index.html`: Trang chủ, giới thiệu và hiển thị một số game nổi bật.
- `games.html`: Trang liệt kê tất cả các game.
- `game.html`: Trang chi tiết cho mỗi game, hiển thị nút tải với các link (sạch/rút gọn/host) và chỗ quảng cáo AdSense.
- `admin/`: Thư mục cấu hình Netlify CMS (`index.html` và `config.yml`).
- `data/games.json`: Dữ liệu danh sách game, được CMS quản lý.
- `images/`: Thư mục chứa ảnh minh họa game và uploads.
- `style.css`: File CSS cho giao diện tối.
- `.gitignore`: Loại trừ một số file/thư mục khi đẩy lên Git.
- `LICENSE`: Giấy phép MIT.

## Sử dụng
1. Fork hoặc clone repo này.
2. Kết nối repo với Netlify và bật Identity + Git Gateway.
3. Đăng nhập CMS tại `/admin` để thêm/sửa game.
4. Cập nhật `data/games.json` thông qua CMS và deploy sẽ tự động chạy.

*Lưu ý: Chỉ chia sẻ game hợp pháp và tuân thủ chính sách của Netlify/Google AdSense.*

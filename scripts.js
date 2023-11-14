// Tạo một đối tượng div
var newDiv = document.createElement("div");

// Thiết lập các thuộc tính và class cho div mới
newDiv.className = "product-small col has-hover product type-product post-16265 status-publish first instock product_cat-den-tru-cong product_cat-den-loi-di has-post-thumbnail sale shipping-taxable purchasable product-type-simple";
newDiv.innerHTML = `
  <div class="col-inner">
    <div class="badge-container absolute left top z-1">
      <div class="callout badge badge-circle">
        <div class="badge-inner secondary on-sale">
          <span class="onsale">-17%</span>
        </div>
      </div>
    </div>
    <div class="product-small box ">
      <div class="box-image">
        <div class="image-fade_in_back">
          <a href="https://givasolar.com/san-pham/den-tru-nang-luong-mat-troi-gv-gdl212/" aria-label="Đèn trụ chiếu sáng sân vườn năng lượng mặt trời GV-GDL212">
            <img width="700" height="700" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20700%20700'%3E%3C/svg%3E" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" fetchpriority="high" data-lazy-src="https://givasolar.com/wp-content/uploads/2019/05/den-san-vuon-luong-nang-luong-mat-troi-gv-gdl212.png" />
          </a>
        </div>
        <div class="image-tools is-small top right show-on-hover"></div>
        <div class="image-tools is-small hide-for-small bottom left show-on-hover"></div>
        <div class="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
      </div>

      <div class="box-text box-text-products text-center grid-style-2">
        <div class="title-wrapper">
          <h3 class="name product-title woocommerce-loop-product__title">
            <a href="https://givasolar.com/san-pham/den-tru-nang-luong-mat-troi-gv-gdl212/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">Đèn trụ chiếu sáng sân vườn năng lượng mặt trời GV-GDL212</a>
          </h3>
        </div>
        <div class="price-wrapper">
          <span class="price">
            <del aria-hidden="true">
              <span class="woocommerce-Price-amount amount">
                <bdi>1,150,000<span class="woocommerce-Price-currencySymbol">&#8363;</span></bdi>
              </span>
            </del>
            <ins>
              <span class="woocommerce-Price-amount amount">
                <bdi>950,000<span class="woocommerce-Price-currencySymbol">&#8363;</span></bdi>
              </span>
            </ins>
          </span>
        </div>
        <div class="add-to-cart-button">
          <a href="?add-to-cart=16265" data-quantity="1" class="primary is-small mb-0 button product_type_simple add_to_cart_button ajax_add_to_cart is-outline" data-product_id="16265" data-product_sku="" aria-label="Thêm &ldquo;Đèn trụ chiếu sáng sân vườn năng lượng mặt trời GV-GDL212&rdquo; vào giỏ hàng" aria-describedby="" rel="nofollow">Thêm vào giỏ hàng</a>
        </div>
      </div>
    </div>
  </div>
`;

// Lấy đối tượng div có class là "qq"
var targetDiv = document.querySelector('.qq');

// Thêm div mới vào đối tượng có class là "qq"
targetDiv.appendChild(newDiv);

var aa = new Vue({
    el: '#app1',
    data: {
        title: 'toi la trung'
    },
    methods: {
        say(x){
            return x +'la con cho'
        },

        said: function(x){
            return x +'me may'
        }
    }
});

console.log(aa);

setTimeout(function () {
    aa.title= ' tao la Cho'
},4000)

setTimeout(() => {
    aa.title= ' Cho ha may'
}, 5000);




var vueInstance = new Vue({
    el: '#app',
    data: {
        cardNumber: 1,
        title: 'quano thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        x: '_blank',
        price: 20000,
        sale: 0.1,
        selectedProduct: 2,
        
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            }, {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            }, {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            }, 
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        testDescription: `<p>Test hjskhfk h</p>
        <p><strong><span style="background-color:#8e44ad">fhsdjkfhsk&nbsp; hsdjkfk&nbsp;</span></strong></p>`
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e) {
            if(this.cardNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target)
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            var index = this.selectedProduct;
            return this.listProductDetail[index];
        }

    }
});



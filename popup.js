(function () {
    /**
     * [popup view show item]
     * @param  {[dom object]} dom [dom is popup view dom]
     * @return {[type]}
     */
    function popup(dom) {
        dom.querySelectorAll('.popup_container')[0].addEventListener('click', function (e) {
            e.stopPropagation();
        })
        dom.addEventListener('click', function (e) {
            e.stopPropagation();
            close();
        });
        if (dom.querySelector('.popup_close')) {
            dom.querySelector('.popup_close').addEventListener('click', function (e) {
                e.preventDefault();
                close();
            })
        }
        window.addEventListener('orientationchange', function() {
            renderView();
        });

        function renderView() {
            dom.querySelector('.popup_container').style.height = 'auto';
            var domHd = dom.querySelector('.popup_hd');
            styleDomHd = domHd.currentStyle || window.getComputedStyle(domHd);
            var domBd = dom.querySelector('.popup_bd');
            styleDomBd = domBd.currentStyle || window.getComputedStyle(domBd);
            var popUpContainerH = parseInt(styleDomHd.height, 10) + parseInt(styleDomBd.height, 10);
            var clientH = document.body.clientHeight;
            var h;
            if (clientH*0.8 > popUpContainerH) {
                h = popUpContainerH;
            } else {
                h = clientH*0.8;
            }
            dom.querySelector('.popup_container').style.height = h + 'px';
        }

        function init(dosomething) {
            if (dosomething !== undefined) {
                dosomething();
            }
        }
        function open(render, dosomething) {
            if (render !== undefined) {
                renderView();
            }
            if (dosomething !== undefined) {
                dosomething();
            }
            dom.classList.remove('hide');
            document.body.classList.add('popup_open');
        }
        function close(dosomething) {
            if (dosomething !== undefined) {
                dosomething();
            }
            dom.classList.add('hide');
            dom.querySelector('.popup_container').style.height = 'auto';
            document.body.classList.remove('popup_open');
        }
        this.init = init;
        this.open = open;
        this.close = close;
    }
    window.popup = popup;
})();

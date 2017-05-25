/**
 * Created by Dell Precision on 4/26/2017.
 */

$(document).ready(function () {
    $('.button-add-more').click(function () {
        $('.my_popup').addClass('show');
        $('.overlay').addClass('show');

    });

    $('.back-to-main-page').click(function () {
        $('.my_popup').removeClass('show');
        $('.overlay').removeClass('show');

    });

    $('.quangtv-add-new').click(function () {

        //check pageTitle use JS
        var checkTitle = $.trim($('.page-title-input').val());
        // alert("Done");
        if (checkTitle == '') {
            alert("Page title is required.");
            // return false;
        }

        //using ajax methods send request to server
        $.ajax({
            url: 'server.php',
            type: 'GET',
            cache: false,
            data: 'pageTitle=' + $('.page-title-input').val(), //'key = value'
            success: function (string) {
                // console.log(string);
                /**
                 * Kiểu mặc định trả về là dạng String, bạn dùng hàm parseJSON để phân tích dữ liệu trả về
                 * có 2 cách parse JSON là : JSON.parse() và $.parseJSON();
                 * 1. var getData = JSON.parse(string);
                 * 2. var getData = $.parseJSON(string);
                 **/
                var getData = $.parseJSON(string); //conver string --> jsonObject
                // console.log(getData);

                var html = '<li> ' +
                    '<a target="_blank" class="edit-page" data-method="get" href="/editor?id=256193668&amp;page=new-page-1&amp;shop=gempage.myshopify.com&amp;type=template-page"> ' +
                    '<span class="page-title"> <span class="title-text">' + getData.pageTitle + '</span> </span>' +
                    '<span class="page-description">' + getData.times + '</span> </a>' +
                    ' <div class="editor-tool"> <a href="#" title="Delete Page" class="delete-page" data-shop="gempage.myshopify.com" data-pid="256193668" data-ptype="template-page"> ' +
                    '<svg fill="#b7b7b7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"> ' +
                    '<path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path> ' +
                    '</svg> <img class="" alt="" src="img/ajax-loader.gif">' +
                    '</a><a href="#" title="Clone Page" class="clone-page" data-shop="gempage.myshopify.com" data-pid="256193668" data-ptype="template-page"> <svg fill="#b7b7b7" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path> </svg> <img class="" alt="" src="img/ajax-loader.gif"> </a> <a href="#" title="Page Settings" class="settings-page" data-shop="gempage.myshopify.com" data-pid="256193668" data-ptype="template-page" data-ptitle="New page 1" data-playout="default"> <svg fill="#b7b7b7" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path> </svg> </a> <a href="//gempage.myshopify.com/pages/new-page-1" title="View Page" target="_blank" class="preview-page"> <svg fill="#b7b7b7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"> <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path> </svg> </a> <a target="_blank" class="edit-page" data-method="get" href="/editor?id=256193668&amp;page=new-page-1&amp;shop=gempage.myshopify.com&amp;type=template-page"> <svg fill="#b7b7b7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"> <path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"></path> </svg> </a></div> </li>'

                $('.my_popup').removeClass('show');
                $('.overlay').removeClass('show');

                setTimeout(function () {
                    if (getData.pageTitle != '') {
                        $('.list-unstyled').prepend(html); //prepend html vao list
                    }
                }, 1000);
            }
        });
        return false;
    });
});


!function (a, b, c) {
    var d = a(document), e = a(b), f = (b.Modernizr, f || {});
    f = {
        init: function () {
            var b, c = this;
            for (b in c)if (c.hasOwnProperty(b)) {
                var d = c[b];
                void 0 !== d.selector && void 0 !== d.init && a(d.selector).length > 0 && d.init()
            }
        },

        gemCustomCheckbox: {
            selector: ".layout-none", init: function () {
                var b = this, c = a(b.selector);
                c.each(function () {
                    a(this).children("input").is(":checked") ? a(this).children("svg").css("fill", "#3f5dbc") : a(this).children("svg").css("fill", "#c5c5c5"), a(this).off().on("click", function () {
                        a(this).children("input").is(":checked") ? a(this).children("svg").css("fill", "#3f5dbc") : a(this).children("svg").css("fill", "#c5c5c5")
                    })
                })
            }
        },

    }, e.resize(function () {
    }), e.scroll(function () {
    }), d.ready(function () {
        f.init()
    }), d.on("turbolinks:load", function () {
    })
}(jQuery, this);

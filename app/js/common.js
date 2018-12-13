$(function() {



//    tab_about
    $(function () {
        $(".tab_item").not(":first").hide();
        $(".tabs_wrapper .tabs_item").click(function() {
            $(".tabs_wrapper .tabs_item").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    });

//    tab_services
    $(function () {
        $(".tab_services_item").not(":first").hide();
        $(".tabs_services_wrapper .tabs_services_item").click(function() {
            $(".tabs_services_wrapper .tabs_services_item").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_services_item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    });

//    diagram
//     (function(w, d, n, s, t) {
//         w[n] = w[n] || [];
//         w[n].push(function() {
//             Ya.Direct.insertInto(84098, "yandex_ad", {
//                 ad_format: "direct",
//                 type: "240x400",
//                 border_type: "block",
//                 border_radius: true,
//                 site_bg_color: "FFFFFF",
//                 header_bg_color: "FEEAC7",
//                 bg_color: "FFF9F0",
//                 border_color: "FBE5C0",
//                 title_color: "0000CC",
//                 url_color: "006600",
//                 text_color: "000000",
//                 hover_color: "0066FF",
//                 favicon: true,
//                 no_sitelinks: false
//             });
//         });
//         t = d.getElementsByTagName("script")[0];
//         s = d.createElement("script");
//         s.src = "//an.yandex.ru/system/context.js";
//         s.type = "text/javascript";
//         s.async = true;
//         t.parentNode.insertBefore(s, t);
//     })(window, document, "yandex_context_callbacks");


});

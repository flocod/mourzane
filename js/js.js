$(document).ready(function () {
  max_height = window.innerHeight;
  carousel_height = max_height;

  if (max_height <= 400) {
    $("#carousel").css("height", "400px");
  } else {
    $("#carousel").css("height", carousel_height + "px");
  }
  // Espace du header
  // $("#carousel").css("margin-top", $(".header").height() + "px");
  // $(".cover").css("margin-top", $(".header").height() + "px");
  $(".panier_header").css("height", $(".header").height() + "px");
});

$(document).ready(function () {});
state_carousel = 0;

function slide_to_left() {
  if (state_carousel == 0) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img1").addClass("img_carousel_active");
    state_carousel = 1;
  } else if (state_carousel == 1) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img2").addClass("img_carousel_active");
    state_carousel = 2;
  } else if (state_carousel == 2) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img3").addClass("img_carousel_active");
    state_carousel = 3;
  } else if (state_carousel == 3) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img4").addClass("img_carousel_active");
    state_carousel = 4;
  } else if (state_carousel == 4) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img5").addClass("img_carousel_active");
    state_carousel = 5;
  } else if (state_carousel == 5) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img6").addClass("img_carousel_active");
    state_carousel = 6;
  } else if (state_carousel == 6) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img1").addClass("img_carousel_active");
    state_carousel = 1;
  }
}

function slide_to_right() {
  if (state_carousel == 0) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img6").addClass("img_carousel_active");
    state_carousel = 6;
  } else if (state_carousel == 1) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img6").addClass("img_carousel_active");
    state_carousel = 6;
  } else if (state_carousel == 2) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img1").addClass("img_carousel_active");
    state_carousel = 1;
  } else if (state_carousel == 3) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img2").addClass("img_carousel_active");
    state_carousel = 2;
  } else if (state_carousel == 4) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img3").addClass("img_carousel_active");
    state_carousel = 3;
  } else if (state_carousel == 5) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img4").addClass("img_carousel_active");
    state_carousel = 4;
  } else if (state_carousel == 6) {
    $(".img_carousel").removeClass("img_carousel_active");
    $(".img5").addClass("img_carousel_active");
    state_carousel = 5;
  }
}

setInterval(slide_to_left, 12000);

$(".control_left").live({
  click: function () {
    slide_to_left();
  },
});

$(".control_right").live({
  click: function () {
    slide_to_right();
  },
});

$(".close").click(function () {
  $("#sup_contain_menu_mob").fadeOut();
});

$("#menu").live({
  click: function () {
    $(".menu_mob").show("fast", function () {
      $("#sup_contain_menu_mob").fadeIn();
    });
  },
});

$(".login").live({
  click: function () {
    $("#sup_contain_log_in").fadeIn();
  },
});

$("#sign").live({
  click: function () {
    $("#sup_contain_log").fadeIn();
  },
});

$("#log").live({
  click: function () {
    $("#sup_contain_log_in").fadeIn();
  },
});

$("#mail_sign").live({
  click: function () {
    $("#sup_contain_sign_email").fadeIn();
  },
});

$("#mail_log").live({
  click: function () {
    $("#sup_contain_log_email").fadeIn();
  },
});

$("#login_mail").live({
  click: function () {
    $("#sup_contain_sign_email").fadeOut();
    $("#sup_contain_log_email").fadeIn();
  },
});

$("#sign_mail").live({
  click: function () {
    $("#sup_contain_sign_email").fadeIn();
  },
});

$(".cart").live({
  click: function () {
    $("#Panier_box").fadeIn();
  },
});

$(".sup_contain").click(function () {
  temp = "";
  temp = $(this).attr("id");
  if (temp == "sup_contain_log_email") {
    console.log(temp);
  } else if (temp == "sup_contain_sign_email") {
    console.log(temp);
  } else if (temp == "Panier_box") {
    console.log(temp);
  } else {
    $(this).fadeOut();
    console.log(temp);
  }
  temp = "";
});

$(".close").live({
  click: function () {
    $(".sup_contain").fadeOut();
  },
});

$(".menu_item").live({
  click: function () {
    $(".menu_item").removeClass("menu_item_active");
    $(this).addClass("menu_item_active");
  },
});

// progress bar.......
let progress_state;

$(document).ready(function () {
  progress_bar = $(".progress");
  totalheight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    progress = (window.pageYOffset / totalheight) * 100;
    progress = Math.round(Number(progress));

    progress = progress + "%";

    progress_bar.css("width", progress);

    header_nav = $(".header");

    if (progress_state < progress) {
      header_nav.css("transform", "translateY(-100%)");
      console.log("scroll to bottom");
    } else if (progress_state > progress) {
      header_nav.css("transform", "translateY(0%)");
      console.log("scroll to top");
    }
    progress_state = progress;
  };
});



// probleme au niveau de la suppression d'un element...Calcul_amount()

function Calcul_amount() {
  total_amount = 0;

  item="";
  item=$(".item_box");

  $(".item_box").each(function () {

    if($(this).attr("state")=="on"){

      item_product = "";
      price_item = "";
      price_item = Number($(this).find(".price_item").text());
      item_product = Number($(this).find(".number").text());
      total_amount = total_amount + price_item * item_product;
      price_item = "";
      item_product = "";

    }



  });

  $(".total_amount_price").text(total_amount);
  


}

// bouton to add

$(".bnt_remove").live({
  click: function () {
    temp = "";
    temp = Number($(this).next().text());
    if (temp > 1) {
      temp = temp - 1;
      $(this).next().text(temp);
    } else {
      $(this).next().text("1");
    }
    Calcul_amount();
  },
});

$(".bnt_add").live({
  click: function () {
    temp = "";
    temp = Number($(this).prev().text());
    temp = temp + 1;
    $(this).prev().text(temp);
    Calcul_amount();
  },
});

function increase_panier() {
  temp = "";
  temp = Number($(".cart").attr("item")) + 1;
  $(".cart").attr("item", temp);

  if (temp == 0) {
    $("#buy_now").fadeOut();
  } else {
    $("#buy_now").fadeIn();
  }

  
}

function decrease_panier() {
  temp = "";
  temp = Number($(".cart").attr("item")) - 1;
  $(".cart").attr("item", temp);

  if (temp == 0) {
    $("#buy_now").fadeOut();
  } else {
    $("#buy_now").fadeIn();
  }

  
}



$(".close_item_box").live({
  click: function () {

    $(this).parent().attr("state","off");
    $(this).parent().hide();


    temp_total="";
    temp_total=Number($(".total_amount_price").text());

    temp_amount="";
    temp_amount=Number($(this).next().next().find(".price_item").text());

    temp_item="";
    temp_item=Number($(this).next().next().next().find(".number").text());
    
    temp_val="";
     temp_val=temp_total-(temp_item*temp_amount);

    decrease_panier();
    Calcul_amount();
    


     $(".total_amount_price").text(temp_val);
    
  },
});

$(".btn_adden").live({
  click: function () {
    prix_temp = "";
    name_temp = "";
    img_temp = "";
    prix_temp = $(this).parent().prev().find(".price_product").text();
    name_temp = $(this).parent().prev().prev().prev().text();
    img_temp = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find("img")
      .attr("src");
    console.log(img_temp);

    temp_item =
      '<span class="item_box" state="on"><span class="close_item_box"><i class="fad fa-times-octagon"></i></span><span class="item_box_img"><img class="item_box_img_val" src="' +
      img_temp +
      '" alt=""/></span><span class="item_box_text"><span class="text1">' +
      name_temp +
      '</span><span class="text2"> <span class="price_item">' +
      prix_temp +
      '</span> $</span></span><span class="item_modif"><span class="bnt_remove bnt_modif"><i class="fas fa-minus"></i></span><span class="number">1</span><span class="bnt_add bnt_modif"><i class="fas fa-plus"></i></span></span></span>';

    $(temp_item).insertAfter(".adding_anchor");



    prix_temp = "";
    name_temp = "";
    img_temp = "";
    increase_panier();
    Calcul_amount();
  },
});



// view product

$(".miniature_img_item img").live({
  click:function(){
    $("#big_img_product").attr("src",$(this).attr("src"));
  }
});



// redirection vers view.html
$(".btn_item").live({
  click:function(){
    temp_text=$(this).find(".text").text();
    if(temp_text=="Voir"){
      window.location.href="view.html";
    }
  }
})




// redirection vers checkout.html
$("#buy_now").live({
  click:function(){
  
      window.location.href="checkout.html";
    
  }
})




$(".btn_view").live({
  click:function(){
    temp_name="";
    temp_name=$("#name_product").text();

    temp_price="";
    temp_price=$("#price_product").text();

    temp_qte="";
    temp_qte=$("#qte_product").text();

    temp_img="";
    temp_img=$("#big_img_product").attr("src");

    temp_item =
    '<span class="item_box" state="on"><span class="close_item_box"><i class="fad fa-times-octagon"></i></span><span class="item_box_img"><img class="item_box_img_val" src="' +
    temp_img +
    '" alt=""/></span><span class="item_box_text"><span class="text1">' +
    temp_name +
    '</span><span class="text2"> <span class="price_item">' +
    temp_price +
    '</span> $</span></span><span class="item_modif"><span class="bnt_remove bnt_modif"><i class="fas fa-minus"></i></span><span class="number">'+temp_qte+'</span><span class="bnt_add bnt_modif"><i class="fas fa-plus"></i></span></span></span>';

  $(temp_item).insertAfter(".adding_anchor");



  prix_temp = "";
  name_temp = "";
  img_temp = "";
  increase_panier();
  Calcul_amount();





  }
})
var products = [
    {
      name: "product 1",
      price: 10,
      id: 133,
      hasDiscount: false,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/c6691393f9fdaa6f782f6b3b1a2f73116d06afa2_1713612612.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      name: "product 2",
      price: 17,
      id: 234,
      hasDiscount: true,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/e304670318e5c446e4a0a661dadd2e33adebd31f_1620216702.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      name: "product 3",
      price: 31,
      id: 534,
      hasDiscount: false,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/02f0e34a248303807e175d1cd7e61dc7d50782c5_1708417372.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      name: "product 4",
      price: 43,
      id: 131,
      hasDiscount: false,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/b7502b55d6b4a22495d10e6901526c2b9e4d01e9_1691071853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      name: "product 5",
      price: 13,
      id: 34,
      hasDiscount: true,
      imageSrc:
        "https://dkstatics-public.digikala.com/digikala-products/8590fddfbec8d88efc47aa73b9ac7f348d651463_1714194467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

function createTag(typeTag) {
  var Tag = document.createElement(typeTag);
  return Tag;
}
function showPrdctList()
{
  products.forEach(prod => {
      var proKeys = Object.keys(prod);
      var divTag = createTag("div");
      divTag.setAttribute("id",prod.id);
      divTag.setAttribute("class","present");
      //var proId = prod.id;
      //console.log(divTag);
      document.getElementById("show-pro").appendChild(divTag);

      proKeys.forEach(function(key){
        if(key === "imageSrc"){
          var imgTag = createTag("img");
          imgTag.setAttribute("src",prod[key]);
          document.getElementById(prod.id).appendChild(imgTag);
        }
        else{
          var pTag = createTag("p");
          if(key === "hasDiscount"){
            if (prod[key]){
              pTag.innerText = key + ": yes";
              //var tikTag = createTag("img");
              //tikTag.setAttribute("src","./img/tik.png");
              //document.getElementById(prod.id).appendChild(tikTag);
            }
            else{
              pTag.innerText = key + ": No";
            }
          }
          else{
            pTag.innerText = key + ": " +prod[key];
        }
        document.getElementById(prod.id).appendChild(pTag);
      }
    });
  });
}
showPrdctList();
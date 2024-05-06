const lbn=document.getElementById('yazi');
let ilkSayi;
let islemkont;
function Sayi(sayi){
    if(lbn.value=="0"){
        lbn.value=sayi;
    }
    else{
        lbn.value+=sayi;
    }
}
function Sil(){
    lbn.value="0";
    ilkSayi=0;
}
function Sonuc(sonuc){
    if(islemkont=='+'){
        lbn.value=Number(ilkSayi)+Number(lbn.value);
    }
    else if(islemkont=='-'){
        lbn.value=Number(ilkSayi)-Number(lbn.value);
    }
    else if(islemkont=='*'){
        lbn.value=Number(ilkSayi)*Number(lbn.value);
    }
    else if(islemkont=='/'){
        lbn.value=Number(ilkSayi)/Number(lbn.value);
    }
}
function Topla(islem){
ilkSayi=Number(lbn.value);
islemkont=islem;
lbn.value="0";
}
function Fark(fark){
    ilkSayi=Number(lbn.value);
    islemkont=fark;
    lbn.value="0";
}
function Bol(bol){
    ilkSayi=Number(lbn.value);
    islemkont=bol;
    lbn.value="0";
}
function Carp(carp){
    ilkSayi=Number(lbn.value);
    islemkont=carp;
    lbn.value="0";
}
function Nokta(virgul){
    lbn.value+=virgul;
}
 class STLOcarinaPage{



 get OurOcarinasLink(){

return $('ul[@class="grid grid--uniform"]')

 }
 get AccessoriesLink(){
  return $('ul[@id="MobileNav"]')  
 }
get ocarinaImage() {
return $('div[@class="oca-img"]'); 
}
get  membership(){
return $('//a[@href="https://www.stlocarina.com/pages/all-stars-membership"]')
}
get EducationLink(){
return $('//a[@href="/pages/educational-resources"]')
}
}   
 export default new STLOcarinaPage();

 import '../styles/index.scss'

 const menuList = document.querySelectorAll('#header-menu li')

 for (let i = 0; i < menuList.length; i++) {
    const li = menuList[i]
     const target = li.getAttribute('target')
    li.addEventListener('click',function(e) {
         document.getElementById(target).scrollIntoView({behavior:'smooth'});
    })
 }



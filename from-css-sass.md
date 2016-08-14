# 從 CSS 到 Sass

Sass 並不會取代 CSS，而是透過編譯轉換成 CSS 檔案，再引入到 HTML 裡面。CSS 不像一般程式語言擁有定義變數或模組的方法，只能一行一行編寫。當有很多元素需要修改時，就會耗費很多時間逐行修正，不利維護與重置。

這是一般常見的 CSS：

```
.menu{
  position: relative; 
 }

.menu .submenu{ 
  float: left;
}

.menu a{
  display: block;
}

.menu a:hover{
  color: red;
}

.menu span{
  color: #fff;
} 
```

以上範例可以發現 CSS 不管在**新增**、**調整**或**除錯**上都無法有效率的進行。

當我們採用 **Sass** 來編寫：

```
.menu
  position: relative

  .submenu
    float: left

  a
    display: block

    &:hover
      color:red

  span
    color: #fff
```

Sass 省略大括號與分號，並透過縮排來定義子元素，語法十分精簡。

如果你不適應 Sass 過於精簡的寫法，也可以試試 **Scss**：

```
.menu {
  position: relative;

  .submenu {
    float: left;
  }

  a {
    display: block;
    
    &:hover{
      color: red;
    }
  }

  span {
    color: #fff;
  }
}
```

Scss 寫法類似 CSS，保留大括號與分號，但多了巢狀結構。

試試看吧！

The Sass Playground：[http:\/\/www.sassmeister.com\/](http://www.sassmeister.com/)



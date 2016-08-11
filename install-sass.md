# SASS 環境安裝

SASS 由 Ruby 開發而成，針對不同作業系統有不同的安裝方式：

#### MAC

OS X 內建 Ruby，你可以直接在終端機輸入指令來安裝：

```
gem install sass
```

如果你收到錯誤訊息，嘗試透過 `sudo` 來安裝：

```
sudo gem install sass
```

安裝完成後，可以透過 `sass -v` 來檢查目前 Sass 的安裝版本

#### Linux

你需要先安裝 Ruby，再透過以下指令安裝：

```
sudo su -c "gem install sass"
```

#### Windows

你可以透過 [Ruby Installer](http://rubyinstaller.org) 快速安裝 Ruby 與 SASS。

---

## LibSass

LibSass 讓你可以用不同程式語言來編寫 SASS，你可以使用自己熟悉的語言與環境來增加開發效率。

更多資訊參考：[http://sass-lang.com/libsass]()


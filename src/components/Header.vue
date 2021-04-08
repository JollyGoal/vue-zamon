<template>
  <header id="header">
    <!--header-->
    <div class="header">
      <div class="container">
        <transition name="fade" appear
                    @before-enter="beforeEnter"
                    @enter="enter"
                    after-enter="after-enter">
          <div class="row">
            <div class="header_btn">
              <button class="top_header_btn" @click="drawer = !drawer">
                = Категории
              </button>
              <div style="display: inline">
                <input type="text" placeholder="search" class="top_header_btn_search" :style="!search ? 'width:0px; padding:4px 0': '' ">
              </div>
              <button class="top_header_btn search_btn" @click="search = !search">
                <i class="far fa-search" ></i>
              </button>
            </div>
            <div class="header_center">
              <div class="header_center_main">
                <div class="header_center_main_today">
                  <i style="color: #ccccccbf;" class="far fa-newspaper"></i>
                  <span style="margin-left: 10px; color: white;"> Свежие </span>
                </div>
                <div class="header_center_main_today">
                  <i style=" color: #ccccccbf;" class="far fa-video"></i>
                  <span style="margin-left: 10px; color: white;"> Видео</span>
                </div>
                <div class="header_center_main_title">
                  <router-link style="text-decoration: none;  color: white; font-family: 'Old London', serif" :to="$i18nRoute({ name: 'Home'})"> ZAMON
                  </router-link>
                </div>
                <div class="header_center_main_stock">
                  <p>
                    <i style="color: #ccccccbf;" class="far fa-thermometer"></i>
                    <span style="color: #fff;"> 25°F </span></p>
                </div>
                <div class="header_center_main_stock">
                  <p style="color: #fff;">
                    <span> Apple </span>
                    <span style=" color: #ccccccbf;"> 12.5%</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="header_profile">
              <div class="user">
                <div class="profile">
                  <img src="../assets/logo.png" alt="">
                </div>
                <div class="profile_text">
                  <p class="subscribe">Подпишись</p>
                  <p class="prise_sub">цуи*йцуке $0.99</p>
                </div>
                <div class="profile_img">
                  <img src="../assets/logo.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="container">
        <transition name="expand" appear
                    @enter="expEnter"
                    @after-enter="expAfterEnter"
                    @before-enter="expBeforeEnter">
          <div class="wrap_nav">
            <nav class="nav">
              <ul class="nav_menu" ref="nav">
                <li v-for="item in menu" :key="item">{{item}}</li>
                <li v-if="menu.length>limit">more
                  <ul class="sub_menu">
                  </ul>
                </li>
              </ul>

            </nav>
          </div>
        </transition>
        <transition name="fadeWidth" appear
                    @enter="whEnter"
                    @after-enter="whAfterEnter"
                    @before-enter="whBeforeEnter">
          <div class="line"></div>
        </transition>
      </div>


    </div>
    <!--header-->
    <!--side menu-->
    <div class="category_menu"
         :style="drawer ? 'width: 15%;  opacity: 1' : 'width: 0; opacity: 0;'">
      <div class="icon_close" style="cursor: pointer" @click="drawer = !drawer">
        <span><i class="fal fa-times"></i></span>
      </div>
      <div class="category_nav">
        <ul class="category_nav_menu" :style="!drawer ? 'display:none':'display:block'">
          <li v-for="item in menu" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
    <!--side menu-->
  </header>

  <div class="asd">

  </div>
</template>
<script>
  import {ref}from "vue"
    export default {
        name: 'Header',
        data() {
            return {
                menu: [
                    "Home",
                    "USB",
                    "Politics",
                    "Tashkent",
                    "Business",
                    "opinion",
                    "tech",
                    "science",
                    "health",
                    "sports",
                    "arts",
                    "style",
                    "food",
                    "travel",
                    "magazine",
                    "t magazine",
                    "real estate",
                ],
                more:[],
            }
        },
        methods:{

        },
        setup() {
            const limit = 10
            const drawer = ref(false)
            const search = ref(false)
            const sheet = ref(false)
            //fade anim start
            const beforeEnter = () => {
                console.log(beforeEnter)
            };
            const enter = () => {
                console.log(enter)
            };
            const afterEnter = () => {
                console.log(afterEnter)
            };
            const expBeforeEnter = () => {
                console.log(expBeforeEnter)
            };
            const expEnter = () => {
                console.log(expEnter)
            };
            const expAfterEnter = () => {
                console.log(afterEnter)
            };
            const whBeforeEnter = () => {
                console.log(expBeforeEnter)
            };
            const whEnter = () => {
                console.log(expEnter)
            };
            const whAfterEnter = () => {
                console.log(afterEnter)
            };


            return {
                beforeEnter,
                enter,
                afterEnter,
                expBeforeEnter,
                expEnter,
                expAfterEnter,
                whBeforeEnter,
                whEnter,
                whAfterEnter,
                drawer,
                search,
                sheet,
                limit,
            }
        }
    }
</script>

<style scoped lang="scss">
  .category_menu {
    background: #00000040;
    position: fixed;
    left: 0;
    top: 0;
    opacity: 1;
    pointer-events: all;
    z-index: 10000;
    height: 100%;
    padding: 20px;
    transition: all 0.4s ease-in-out;
  }

  .icon_close {
    font-size: 20px;
    float: right;
    line-height: 86px;
    cursor: pointer;
    color: #808080a3;
    transition: all 0.4s ease-in-out;

    &:hover {
      color: white;
    }
  }

  .top_header_btn_search {
    background: none;
    color: white;
    outline: none;
    border:1px solid white;
    border-radius: 3px;
    padding: 4px 10px;
    margin-right: 10px;
    transition: width 1s ease;
    position: relative;
    width: 190px;
    &::placeholder{
      padding: 0 10px;
    }
  }


  .category_nav {
   position: absolute;
    top: 25%;
    &_menu {
      list-style: none;
      margin-top: 50px;
      color: #ccccccbf;
      text-transform: capitalize;

      & li {
        cursor: pointer;

        &:hover {
          color: white;
        }
      }
    }
  }


  .expand-enter-active,
  .expand-leave-active {
    transition: all 2s ease;

  }

  .expand-enter-from,
  .expand-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }

  .fadeWidth-enter-active,
  .fadeWidth-leave-active {
    transition: all 2s ease-in-out;
    width: 78%;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
  }

  .fadeWidth-enter-from,
  .fadeWidth-leave-to {
    width: 0;
  }

  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 3s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-active {
    transition: opacity 3s ease;
  }

  .asd {
  /*  background: url("../assets/bg2.jpg");*/
    background: black;
    background-size: cover;

    height: 100%;
    width: 100%;
    position: absolute;
object-fit: contain;
  }

  #header {
    background: none;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .header {
    background: none;
  }

  .container {
    width: 1500px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #80808033;
    padding: 0 20px;
  }

  .header_btn {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 374px;
  }

  .top_header_btn {
    background: none;
    color: white;
    outline: none;
    border: 1px solid white;
    border-radius: 3px;
    padding: 4px 10px;
    margin-right: 10px;
    transition: all 0.6s ease-in-out;

    &:hover {
      background: white;
      color: black;
    }
  }

  .line {
    height: 2px;
    background: #ccccccbf;
    text-align: center;
  }

  .header_center_main {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .header_center_main_today {
    margin: 0 20px;
    cursor: pointer;
  }

  .header_center_main_title {
    font-size: 40px;
    color: inherit;
  }

  .header_center_main_stock {
    margin: 0 25px;
    cursor: pointer;
  }

  .header_profile {
    width: 374px;
  }

  .user {
    display: flex;
    align-self: center;
    justify-content: flex-end;

  }

  .profile {
    width: 40px;
    height: 40px;


    & img {
      width: 100%;
      height: 100%;
    }

    &_img {
      width: 30px;
      height: 30px;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    &_text {
      margin: 0 10px;
    }


  }

  .subscribe {
    font-size: 10px;
    line-height: 0;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: red;
    }
  }

  .prise_sub {
    font-size: 10px;
    color: #ccccccbf;
  }

  .wrap_nav {
    padding: 0 50px;
  }

  .nav_menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-transform: capitalize;
    color: #ccccccbf;

    & li {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      color: #ccccccbf;
    }

    & li:hover {
      color: white;
    }
  }

</style>

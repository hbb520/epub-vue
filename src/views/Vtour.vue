<template>
  <div id="wrapper">
    <img class="img_btn" src="../assets/qrcode.png" alt="" v-if="!show" @click="show=!show">
    <transition
      name="qrcode-transition"
      enter-active-class="showUp"
      leave-active-class="hideDown"
    >
      <qrcode v-if="show" @closeorder="getorder"></qrcode>
    </transition>
    <div id="pano">
      <noscript>
        <table style="width:100%;height:100%;">
          <tr style="vertical-align:middle;">
            <td>
              <div style="text-align:center;">
                ERROR:
                <br/>
                <br/>Javascript not activated
                <br/>
                <br/>
              </div>
            </td>
          </tr>
        </table>
      </noscript>
    </div>
  </div>
</template>
<script>
  var krpano = null;
  function krpano_onready_callback(krpano_interface) {
    krpano = krpano_interface;
    console.log(krpano);
  }
  import Qrcode from '@/components/Qrcode';
  export default {
    name: 'vtour',
    data() {
      return {
        show: false
      };
    },
    mounted() {
      embedpano({
        swf: './static/vtour/tour.swf',
        xml: './static/vtour/tour.xml',
        target: 'pano',
        html5: 'auto',
        mobilescale: 1.0,
        passQueryParameters: true,
        onready: krpano_onready_callback //回调函数，获取Krpano 对象
      });
    },
    methods: {
      getorder(msg) {
        this.show = msg;
      },
      init() {
      }
    },
    components: {
      Qrcode
    }
  };
</script>
<style scoped>
  #wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  #pano {
    width: 100%;
    height: 100%;
  }
  .img_btn {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 10px;
    right: 6px;
    z-index: 4010;
  }
  .showUp {
    animation: showup 0.4s ease-in;
  }
  .hideDown {
    animation: hidedown 0.4s ease-out;
  }
  @keyframes showup {
    from {
      transform: translateY(110%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes hidedown {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(110%);
    }
  }
</style>

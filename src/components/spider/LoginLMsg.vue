<template>
    <div class="login">
      <div class="login-style">
        <span class="login-title">{{loginTitle}}</span>
        <div class="login-input">
          <span class="input input--nao">
            <input class="input__field input__field--nao" type="text" />
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao">Username</span>
            </label>
          </span>
          <span class="input input--nao">
            <input class="input__field input__field--nao" type="password" />
            <label class="input__label input__label--nao" for="input-1">
              <span class="input__label-content input__label-content--nao">Password</span>
            </label>
          </span>
        </div>
        <div class="login-btn">
          <button class="login-btn-button" @click="goHomePage">
            <span>LOGIN</span>
          </button>
        </div>
        <div class="login-forgot-password"></div>
      </div>
    </div>
</template>

<script>
import {LOGINTITLE} from '../../static/index.js'
export default {
  name: 'LoginLMsg',
  data () {
    return {
      loginTitle: LOGINTITLE
    }
  },
  mounted(){
    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
          inputEl.parentNode.classList.add('input--filled' );
        }

        // events:
        inputEl.addEventListener( 'focus', onInputFocus);
        inputEl.addEventListener( 'blur', onInputBlur);
      } );
      
      function onInputFocus(ev) {
        ev.target.parentNode.classList.add('input--filled');
      }

      function onInputBlur(ev) {
        if( ev.target.value.trim() === '' ) {
          ev.target.parentNode.classList.remove('input--filled')
        }
      } 
  },
  methods:{
     goHomePage(){
       this.$router.push('./home');
     }
  }
}
</script>

<style scoped>
.login{
  width:400px;
  min-width:300px;
  height:600px;
  margin-left:22%;
  position:absolute;
  background:url(../../assets/login-bg-2.png) no-repeat;
  background-size: cover;
  background-position:-10px -10px;
  top:100px;
}
.login-style{
  width:100%;
  height:100%;
  position:absolute;
  background:rgba(0,0,0,0.3);
}
.login-title{
  display:block;
  height:5rem;
  margin-top:10rem;
  text-align: left;
  padding-left:1rem;
  font-size:2.5rem;
  line-height: 5rem;
  color:#fff;
}
.login-input{
  height:14rem;
  width:80%;
  margin-left:10%;
}
/* 
  userName&passWord input style
*/
.input {
	position: relative;
	z-index: 1;
	display: inline-block;
	margin: 0.5em;
  max-width: 350px;
  height:4rem;
	width: calc(100% - 1em);
	vertical-align: top;
}

.input__field {
	position: relative;
	display: block;
	float: right;
	padding: 0.8em;
	width: 60%;
	border: none;
	border-radius: 0;
	background: #f0f0f0;
	color: #aaa;
	font-weight: 400;
	font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-appearance: none; /* for box shadows to show on iOS */
  border-bottom:2px solid #333 !important;
}

.input__field:focus {
	outline: none;
}

.input__label {
	display: inline-block;
	float: right;
	padding: 0 1em;
	width: 40%;
	color: #fff;
	font-weight: bold;
	font-size: 70.25%;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.input__label-content {
	position: relative;
	display: block;
	padding: 1.6em 0;
	width: 100%;
}


/* Nao */
.input--nao {
  /* overflow: hidden; */
	padding-top: 1em;
}

.input__field--nao {
	padding: 0.5em 0em 0.25em;
	width: 100%;
	background: transparent;
	color: #000;
  font-size: 1.25em;
  height:3.5rem;
  margin-top:0.5rem;
}

.input__label--nao {
	position: absolute;
	top: 0.95em;
	font-size: 1.3rem;
	left: 0;
	display: block;
	width: 100%;
	text-align: left;
	padding: 0em;
	pointer-events: none;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.2s 0.15s, color 1s;
	transition: transform 0.2s 0.15s, color 1s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}

.graphic--nao {
	stroke: #92989e;
	pointer-events: none;
	-webkit-transition: -webkit-transform 0.7s, stroke 0.7s;
	transition: transform 0.7s, stroke 0.7s;
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
} 

.input__field--nao:focus + .input__label--nao,
.input--filled .input__label--nao {
	color: #333;
	-webkit-transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
	transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
}

.input__field--nao:focus ~ .graphic--nao,
.input--filled .graphic--nao {
	stroke: #333;
	-webkit-transform: translate3d(-66.6%, 0, 0);
	transform: translate3d(-66.6%, 0, 0);
}

/*login button*/
.login-btn{
  height: 6rem;
  margin-top: 2rem;
}
.login-btn-button{
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  background: transparent;
  border:2px solid #bbb;
  cursor: pointer;
}
.login-btn-button:focus {
	outline: none;
}
.login-btn-button span{
  color:#fff;
  font-size:1.4rem;
}
</style>

import styled from "styled-components";





export const LandingCont= styled.div`


width:100%;
min-height: 100vh;

display:flex;
align-items:center;
justify-content:center;
background-color: ${(props)=> props.theme.background};


div{
    margin-right: 3em;
    color:${(props)=> props.theme.color};
}

`





export const Switcher= styled.div`

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:  ${ 'rgb(67,151,213)'};
  background: ${'linear-gradient(90deg, rgba(67,151,213,1) 0%, rgba(57,168,194,1) 35%, rgba(60,202,153,1) 100%);'}
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #343956;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color:  '#f0f3fa';
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }


`
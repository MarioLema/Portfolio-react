import React, { Component } from "react";
import disableButton from "./images/disable-animation.svg";
import "./animation.css";

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: this.props.display
    };
    this.stopAnimation = this.stopAnimation.bind(this);
  }

  //STOPS THE ANIMATION BY CHANGING ITS DISPLAY
  stopAnimation() {
    let newState = this.state;
    newState.display = { display: "none" };
    this.setState(newState);
  }

  render() {
    return (
      <div
        className="animation-container"
        style={this.state.display}
        onLoad={() => setTimeout(this.stopAnimation, 22000)}
      >
        <div className="svg-container">
          <svg
            className="svg-object"
            xmlns="http://www.w3.org/2000/svg"
            width="848.72314mm"
            height="493.42255mm"
            viewBox="0 0 848.72315 493.42255"
            version="1.1"
            id="svg1456"
          >
            {/* CONTAINING BOX AND VISIBLE ANIMATION AREA */}
            <rect
              id="rect977"
              y="2.8421709e-014"
              x="0"
              height="493.42255"
              width="848.72314"
            />
            {/*FIRST LETTER: M*/}
            <path
              className="animated-item opacity-object"
              id="letter1"
              d="m 198.58803,254.07009 7.2722,0.005 v -34.0151 l 12.47227,17.06317 12.38426,-16.74762 0.0497,33.71709 7.27048,-0.0153 -0.002,-43.69639 -7.27106,0.01 -12.37836,16.64221 -12.37331,-16.63906 -7.40413,-0.0352 z"
            />
            {/*SECOND LETTER: A*/}
            <path
              className="animated-item opacity-object"
              id="letter2"
              d="m 248.64372,254.06935 8.02579,-0.0117 3.06161,-7.41392 22.14526,0.0165 3.12003,7.40907 8.00824,0.006 -18.21683,-43.65546 -8.02673,-0.0585 4.01787,10.05353 8.07153,19.08238 -16.07275,-0.004 8.00122,-19.07824 -4.01787,-10.05353 z"
            />
            {/*THIRD LETTER: R*/}
            <path
              className="animated-item opacity-object"
              id="letter3"
              d="m 313.55902,243.30694 0.0288,10.76559 -7.41884,0.14883 0.19395,-43.80428 7.23729,7.25355 -0.0207,18.19944 10.58734,-0.0305 c 4.12693,-0.0119 7.99097,-5.41943 7.80662,-9.51884 -0.18068,-4.01727 -4.4141,-8.5849 -8.45664,-8.60378 l -9.91667,-0.0463 -7.2373,-7.25355 16.99797,-0.0682 c 9.20875,-0.037 15.64668,8.29974 15.82494,15.28916 0.2546,9.98274 -6.97753,14.58317 -6.97753,14.58317 l 7.96679,13.80181 -8.46001,0.0165 -6.25422,-10.71381 z"
            />
            {/*FOURTH LETTER: I*/}
            <path
              className="animated-item opacity-object"
              id="letter4"
              d="m 353.59615,254.0752 7.30824,0.0234 -0.0585,-43.73146 -7.2907,0.0117 z"
            />
            {/*FIFTH LETTER: O*/}
            <path
              className="animated-item opacity-object"
              id="letter5"
              d="m 396.75939,210.53578 c -12.0904,0 -21.75105,9.84007 -21.75105,21.9142 0,12.07413 9.76814,21.56061 21.85853,21.56061 12.0904,0 21.57546,-9.75107 21.57546,-21.8252 0,-12.07413 -9.59255,-21.64961 -21.68294,-21.64961 z m 0.14882,6.95567 c 6.86147,-0.14665 14.48555,6.0935 14.5517,14.42109 0.0541,6.80602 -5.25482,14.59425 -14.49724,14.65496 -7.09632,0.0466 -14.50273,-6.16401 -14.67425,-13.53048 -0.13229,-5.68176 3.78801,-15.31406 14.61979,-15.54557 z"
            />
            {/*SIXTH LETTER: L*/}
            <path
              className="animated-item opacity-object"
              id="letter6"
              d="m 471.31047,210.40868 h 7.29655 l -0.0212,36.3991 18.21233,0.008 -0.008,7.25761 -25.49475,0.0248 z"
            />
            {/*SEVENTH LETTER: E*/}
            <path
              className="animated-item opacity-object"
              id="letter7"
              d="m 509.74581,254.09274 -0.008,-43.66939 32.89459,-0.0227 0.004,7.26599 -25.63466,0.0146 0.0175,10.91506 h 18.20431 l 0.003,7.28925 -18.19407,-0.0175 -0.0116,10.9399 25.62667,-0.0498 0.0167,7.29958 z"
            />
            {/*EIGTH LETTER: M*/}
            <path
              className="animated-item opacity-object"
              id="letter8"
              d="m 556.65569,254.07293 7.2649,-0.008 0.0146,-33.9853 12.48997,17.06065 12.38554,-16.75298 0.0175,33.65862 7.2739,0.0359 V 210.3981 l -7.27776,-0.004 -12.38223,16.68858 -12.29239,-16.67715 -7.49218,-0.0319 z"
            />
            {/*NINTH LETTER: A*/}
            <path
              className="animated-item opacity-object"
              id="letter9"
              d="m 606.67573,254.056 8.04441,0.0289 3.11174,-7.4417 22.07347,-0.0117 3.10912,7.40859 8.06675,0.0351 -18.21651,-43.68285 -8.04606,0.0207 4.04413,9.89862 8.06802,19.22764 -16.1254,-0.0276 8.05738,-19.2 -4.04413,-9.89862 z"
            />
            {/*BOTTOM RULER*/}
            <rect
              className="animated-item"
              id="rule0down"
              y="253.94026"
              x="193.81506"
              height="0.2811197"
              width="461.4859"
            />
            {/*TOP RULER*/}
            <rect
              className="animated-item"
              id="rule0up"
              y="210.26045"
              x="193.04504"
              height="0.2811197"
              width="451.27594"
            />
            {/*VERTICAL LINES */}
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l1v1"
              transform="rotate(90)"
              y="-198.71617"
              x="200.53163"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l1v2"
              transform="rotate(90)"
              y="-205.99615"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l1v3"
              transform="rotate(90)"
              y="-230.9149"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l1v4"
              transform="rotate(90)"
              y="-238.196"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l3v1"
              transform="rotate(90)"
              y="-306.44891"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l3v2"
              transform="rotate(90)"
              y="-313.73001"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l3v3"
              transform="rotate(90)"
              y="-332.13882"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l3v4"
              transform="rotate(90)"
              y="-339.34988"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l4v1"
              transform="rotate(90)"
              y="-353.75339"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l4v2"
              transform="rotate(90)"
              y="-361.03448"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l5v1"
              transform="rotate(90)"
              y="-374.38144"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l5v2"
              transform="rotate(90)"
              y="-382.36246"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l5v3"
              transform="rotate(90)"
              y="-411.48126"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l5v4"
              transform="rotate(90)"
              y="-419.46231"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l6v1"
              transform="rotate(90)"
              y="-471.46768"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l6v2"
              transform="rotate(90)"
              y="-478.74875"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l6v3"
              transform="rotate(90)"
              y="-496.94867"
              x="242.7392"
              height="0.2811197"
              width="21.912134"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l7v1"
              transform="rotate(90)"
              y="-509.88663"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l7v2"
              transform="rotate(90)"
              y="-517.16656"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l7v3"
              transform="rotate(90)"
              y="-535.36646"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l7v4"
              transform="rotate(90)"
              y="-542.78528"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            {/* HORIZONTAL LINES */}
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l2h1"
              transform="scale(-1)"
              y="-239.66255"
              x="-293.69141"
              height="0.2811197"
              width="46.057629"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l2h2"
              transform="scale(-1)"
              y="-246.80252"
              x="-296.35217"
              height="0.2811197"
              width="50.888279"
            />
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l3h1"
              transform="scale(-1)"
              y="-217.82155"
              x="-341.5202"
              height="0.2811197"
              width="38.291248"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l3h2"
              transform="scale(-1)"
              y="-236.02257"
              x="-338.13522"
              height="0.2811197"
              width="36.586266"
            />
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l3h3"
              transform="scale(-1)"
              y="-243.44142"
              x="-341.78345"
              height="0.2811197"
              width="40.234493"
            />
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l5h1"
              transform="scale(-1)"
              y="-217.82265"
              x="-424.77676"
              height="0.2811197"
              width="55.365299"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l5h2"
              transform="scale(-1)"
              y="-246.94141"
              x="-424.91663"
              height="0.2811197"
              width="54.735142"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l6h1"
              transform="scale(-1)"
              y="-246.94141"
              x="-500.99738"
              height="0.2811197"
              width="34.429661"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l7h1"
              transform="scale(-1)"
              y="-217.82265"
              x="-550.27313"
              height="0.2811197"
              width="46.057629"
            />
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l7h2"
              transform="scale(-1)"
              y="-228.74149"
              x="-539.84241"
              height="0.2811197"
              width="35.626884"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l7h3"
              transform="scale(-1)"
              y="-236.02257"
              x="-539.91394"
              height="0.2811197"
              width="34.928448"
            />
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l7h4"
              transform="scale(-1)"
              y="-246.94141"
              x="-548.10974"
              height="0.2811197"
              width="43.824265"
            />
            {/* DIAGONAL LINES */}
            <path
              className="animated-item diagonal-line"
              id="l1d1"
              d="m 195.35512,258.14135 0.35003,0.13972 40.87982,-55.57979 -0.28005,-0.21024 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l1d2"
              d="m 199.9751,261.78141 0.35002,0.13972 40.17977,-54.59947 -0.28004,-0.21024 z"
            />
            {/* CIRCLES */}
            <circle
              className="animated-item opacity-object"
              id="l3c2"
              r="9.1109495"
              cy="226.81656"
              cx="322.77985"
            />
            <circle
              className="animated-item opacity-object"
              id="l3c1"
              r="16.490803"
              cy="226.72902"
              cx="322.72241"
            />
            <circle
              className="animated-item opacity-object"
              id="l5c2"
              r="14.494658"
              cy="232.07845"
              cx="396.8436"
            />
            {/* ------- */}
            <path
              className="animated-item diagonal-line"
              id="l1d4"
              d="m 241.27485,258.14132 -0.35003,0.13972 -40.6698,-55.64976 0.28004,-0.21024 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l1d3"
              d="m 236.37484,261.50132 -0.27978,0.13999 -39.75984,-54.31954 0.28004,-0.21024 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l2d1"
              d="m 243.99387,264.58131 0.35,0.14 26.94982,-64.4697 -0.34999,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l2d2"
              d="m 252.04383,264.58132 0.35,0.14 26.94983,-64.4697 -0.35001,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l2d4"
              d="m 297.61352,264.58132 -0.35001,0.13999 -26.94982,-64.4697 0.35,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l2d3"
              d="m 289.56361,264.58133 -0.35,0.13999 -26.94982,-64.4697 0.34999,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l3d1"
              d="m 337.45879,263.53132 -0.35,0.21 -34.29985,-59.21973 0.28,-0.21 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l3d2"
              d="m 342.49877,257.65135 -0.28,0.14 -32.61985,-56.06974 0.28,-0.21 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l5d2"
              d="m 370.67147,258.07134 0.28001,0.28 51.79975,-51.79976 -0.28,-0.28 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l5d1"
              d="m 421.42118,256.53135 -0.28,0.28 -51.79976,-51.79976 0.28,-0.28 z"
            />
            <circle
              className="animated-item opacity-object"
              id="l5c1"
              r="21.748075"
              cy="232.22404"
              cx="396.71255"
            />
            {/* LETTER 8 LINES */}
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l8v1"
              transform="rotate(90)"
              y="-556.78076"
              x="200.53163"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line top-to-bottom"
              id="l8v2"
              transform="rotate(90)"
              y="-564.06067"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l8v3"
              transform="rotate(90)"
              y="-588.97949"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item vertical-line bottom-to-top"
              id="l8v4"
              transform="rotate(90)"
              y="-596.26062"
              x="200.55717"
              height="0.2811197"
              width="64.094147"
            />
            <rect
              className="animated-item horizontal-line right-to-left"
              id="l9h1"
              transform="scale(-1)"
              y="-239.66255"
              x="-651.75598"
              height="0.2811197"
              width="46.057629"
            />
            <rect
              className="animated-item horizontal-line left-to-right"
              id="l9h2"
              transform="scale(-1)"
              y="-246.80252"
              x="-654.41675"
              height="0.2811197"
              width="50.888279"
            />
            <path
              className="animated-item diagonal-line"
              id="l8d1"
              d="m 553.41962,258.14135 0.35003,0.13972 40.87982,-55.57979 -0.28005,-0.21024 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l8d2"
              d="m 558.0396,261.78141 0.35002,0.13972 40.17977,-54.59947 -0.28004,-0.21024 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l8d4"
              d="m 599.33935,258.14132 -0.35003,0.13972 -40.6698,-55.64976 0.28004,-0.21024 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l8d3"
              d="m 594.43934,261.50132 -0.27978,0.13999 -39.75984,-54.31954 0.28004,-0.21024 z"
            />
            {/* LETTER 9 LINES */}
            <path
              className="animated-item diagonal-line"
              id="l9d1"
              d="m 602.05846,264.58131 0.34999,0.14 26.94979,-64.4697 -0.34999,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l9d2"
              d="m 610.1084,264.58132 0.34999,0.14 26.94985,-64.4697 -0.35001,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l9d4"
              d="m 655.67809,264.58132 -0.34999,0.13999 -26.94985,-64.4697 0.34999,-0.14 z"
            />
            <path
              className="animated-item diagonal-line"
              id="l9d3"
              d="m 647.62817,264.58133 -0.35002,0.13999 -26.94982,-64.4697 0.34999,-0.14 z"
            />
            {/* SUBHEADER TEXT */}
            <text
              className="animated-item opacity-object"
              id="sub-header-text"
              x="424.36887"
              y="288.43716"
            >
              <tspan id="tspan901" x="465.369" y="288.43716">
                Front End Developer
              </tspan>
            </text>
            <rect
              y="16.769058"
              x="12.387146"
              height="459.88443"
              width="823.94885"
              id="rect977-4"
            />
          </svg>
        </div>
        {/* BUTTON TO STOP ANIMATION */}
        <img
          className="disable-button animated-item opacity-object"
          src={disableButton}
          alt=""
          onClick={this.stopAnimation}
        />
      </div>
    );
  }
}
export default Animation;

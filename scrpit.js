window.onload = function(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let buttons = document.getElementsByTagName("button");

    function draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height)    
    }
    draw();

    
   buttons[0].addEventListener("click", function () {
    //I 
        let yAchseI = 50;
        function I () {
            ctx.fillStyle = 'red';
            ctx.fillRect(50, yAchseI, 50, 50)
            yAchseI = yAchseI + 50
        }
        let IntervalI = setInterval(I, 100);

        function IEnd () {
            clearInterval(IntervalI);
        }
        setTimeout(IEnd, 1400);
    
    //L 
    
        let yAchseL1 = 50;
        let IntervalL1 = null;

        setTimeout(() => {
            IntervalL1 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(300, yAchseL1, 50, 50)
                yAchseL1 = yAchseL1 + 50
            }, 100)
        }, 1400)
        
        function L1End () {
            clearInterval(IntervalL1);
        }
        setTimeout(L1End, 2800);

        let xAchseL2 = 350;
        let IntervalL2 = null;

        setTimeout(() => {
            IntervalL2 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseL2, 600, 50, 50)
                xAchseL2 = xAchseL2 + 50
            }, 100)
        }, 2800)
        
        function L2End () {
            clearInterval(IntervalL2);
        }
        setTimeout(L2End, 3300);
        
    //O
    let IntervalO1 = null;
    let xAchseO2 = 650;
    setTimeout(() => {
        IntervalO1 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseO2, 50, 50, 50)
            xAchseO2 = xAchseO2 + 50;
        }, 100)
    }, 3400)

    function O1End () {
        clearInterval(IntervalO1);
    }
    setTimeout(O1End, 3700);

    let IntervalO2 = null;
    let yAchseO2 = 100;
    setTimeout(() => {
        IntervalO2 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(600, yAchseO2, 50, 50)
            yAchseO2 = yAchseO2 + 50;
        }, 100)
    }, 3700)

    function O2End () {
        clearInterval(IntervalO2);
    }
    setTimeout(O2End, 4900);

    let IntervalO3 = null;
    let xAchseO3 = 650;
    setTimeout(() => {
        IntervalO3 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseO3, 600, 50, 50)
            xAchseO3 = xAchseO3 + 50;
        }, 100)
    }, 4900)

    function O3End () {
        clearInterval(IntervalO3);
    }
    setTimeout(O3End, 5200);

    let IntervalO4 = null;
    let yAchseO4 = 100;
    setTimeout(() => {
        IntervalO4 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(750, yAchseO4, 50, 50)
            yAchseO4 = yAchseO4 + 50;
        }, 100)
    }, 5200)

    function O4End () {
        clearInterval(IntervalO4);
    }
    setTimeout(O4End, 6400);

    //V

    let IntervalV1 = null;
    let xAchseV1 = 850;
    let yAchseV1 = 50;

    setTimeout(() => {
        IntervalV1 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseV1, yAchseV1, 50, 50)
            xAchseV1 = xAchseV1 + 20;
            yAchseV1 = yAchseV1 + 50;
        }, 100)
    }, 6400)

    function V1End () {
        clearInterval(IntervalV1);
    }
    setTimeout(V1End, 7800);

    let IntervalV2 = null;
    let xAchseV2 = 1090;
    let yAchseV2 = 600;

    setTimeout(() => {
        IntervalV2 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseV2, yAchseV2, 50, 50)
            xAchseV2 = xAchseV2 + 20;
            yAchseV2 = yAchseV2 - 50;
        }, 100)
    }, 7800)

    function V2End () {
        clearInterval(IntervalV2);
    }
    setTimeout(V2End, 9200);

    //E

    let IntervalE1 = null;
    let yAchseE1 = 50;

    setTimeout(() => {
        IntervalE1 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(1400, yAchseE1, 50, 50)
            yAchseE1 = yAchseE1 + 50;
        }, 100)
    }, 9200)

    function E1End () {
        clearInterval(IntervalE1);
    }
    setTimeout(E1End, 10600);

    let IntervalE2 = null;
    let xAchseE2 = 1400;

    setTimeout(() => {
        IntervalE2 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseE2, 50, 50, 50)
            xAchseE2 = xAchseE2 + 50;
        }, 100)
    }, 10600)

    function E2End () {
        clearInterval(IntervalE2);
    }
    setTimeout(E2End, 11200);

    let IntervalE3 = null;
    let xAchseE3 = 1400;

    setTimeout(() => {
        IntervalE3 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseE3, 300, 50, 50)
            xAchseE3 = xAchseE3 + 50;
        }, 100)
    }, 11200)

    function E3End () {
        clearInterval(IntervalE3);
    }
    setTimeout(E3End, 11800);

    let IntervalE4 = null;
    let xAchseE4 = 1400;

    setTimeout(() => {
        IntervalE4 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseE4, 600, 50, 50)
            xAchseE4 = xAchseE4 + 50;
        }, 100)
    }, 11800)

    function E4End () {
        clearInterval(IntervalE4);
    }
    setTimeout(E4End, 12400);

    //Y

    let IntervalY1 = null;
    let xAchseY1 = 1800;
    let yAchseY1 = 50;

    setTimeout(() => {
        IntervalY1 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseY1, yAchseY1, 50, 50)
            xAchseY1 = xAchseY1 + 40;
            yAchseY1 = yAchseY1 + 50;
        }, 100)
    }, 12400)

    function Y1End () {
        clearInterval(IntervalY1);
    }
    setTimeout(Y1End, 13100);

    let IntervalY2 = null;
    let xAchseY2 = 2000;
    let yAchseY2 = 300;

    setTimeout(() => {
        IntervalY2 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseY2, yAchseY2, 50, 50)
            xAchseY2 = xAchseY2 + 40;
            yAchseY2 = yAchseY2 - 50;
        }, 100)
    }, 13100)

    function Y2End () {
        clearInterval(IntervalY2);
    }
    setTimeout(Y2End, 13800);

    let IntervalY3 = null;
    let yAchseY3 = 300;

    setTimeout(() => {
        IntervalY3 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(2000, yAchseY3, 50, 50)
            yAchseY3 = yAchseY3 + 50;
        }, 100)
    }, 13800)

    function Y3End () {
        clearInterval(IntervalY3);
    }
    setTimeout(Y3End, 14600);

    //O
    let IntervalO11 = null;
    let xAchseO11 = 2350;
    setTimeout(() => {
        IntervalO11 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseO11, 50, 50, 50)
            xAchseO11 = xAchseO11 + 50;
        }, 100)
    }, 14600)

    function O11End () {
        clearInterval(IntervalO11);
    }
    setTimeout(O11End, 14900);

    let IntervalO22 = null;
    let yAchseO22 = 100;
    setTimeout(() => {
        IntervalO22 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(2300, yAchseO22, 50, 50)
            yAchseO22 = yAchseO22 + 50;
        }, 100)
    }, 14900)

    function O22End () {
        clearInterval(IntervalO22);
    }
    setTimeout(O22End, 16100);


    let IntervalO33 = null;
    let xAchseO33 = 2350;
    setTimeout(() => {
        IntervalO33 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseO33, 600, 50, 50)
            xAchseO33 = xAchseO33 + 50;
        }, 100)
    }, 16100)

    function O33End () {
        clearInterval(IntervalO33);
    }
    setTimeout(O33End, 16400);

    let IntervalO44 = null;
    let yAchseO44 = 100;
    setTimeout(() => {
        IntervalO44 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(2450, yAchseO44, 50, 50)
            yAchseO44 = yAchseO44 + 50;
        }, 100)
    }, 16400)

    function O44End () {
        clearInterval(IntervalO44);
    }
    setTimeout(O44End, 17600);

    //U

    let IntervalU1 = null;
    let yAchseU1 = 50;

    setTimeout(() => {
        IntervalU1 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(2550, yAchseU1, 50, 50)
            yAchseU1 = yAchseU1 + 50;
        }, 100)
    }, 17600)

    function U1End () {
        clearInterval(IntervalU1);
    }
    setTimeout(U1End, 18900);

    let IntervalU2 = null;
    let xAchseU2 = 2600;

    setTimeout(() => {
        IntervalU2 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(xAchseU2, 600, 50, 50)
            xAchseU2 = xAchseU2 + 50;
        }, 100)
    }, 18900)

    function U2End () {
        clearInterval(IntervalU2);
    }
    setTimeout(U2End, 19200);

    let IntervalU3 = null;
    let yAchseU3 = 550;

    setTimeout(() => {
        IntervalU3 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(2700, yAchseU3, 50, 50)
            yAchseU3 = yAchseU3 - 50;
        }, 100)
    }, 19200)

    function U3End () {
        clearInterval(IntervalU3);
    }
    setTimeout(U3End, 20500);
   })

    buttons[1].addEventListener("click", function () {
        let IntervalH1 = null;
        
        IntervalH1 = setInterval (() => {
            ctx.fillStyle = 'red';
            ctx.fillRect(950, 200, 50, 50)
        }, 100)

        function H1End () {
            clearInterval(IntervalH1);
        }
        setTimeout(H1End, 200);

        let IntervalH2 = null;
        let yAchseH2 = 150;
        let xAchseH2 = 900;

        setTimeout(() => {
            IntervalH2 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseH2, yAchseH2, 50, 50)
                yAchseH2 = yAchseH2 - 50;
                xAchseH2 = xAchseH2 - 50;
            }, 100)
        }, 200)

        function H2End () {
            clearInterval(IntervalH2);
        }
        setTimeout(H2End, 500);

        let IntervalH3 = null;
        let yAchseH3 = 150;
        let xAchseH3 = 1000;

        setTimeout(() => {
            IntervalH3 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseH3, yAchseH3, 50, 50)
                yAchseH3 = yAchseH3 - 50;
                xAchseH3 = xAchseH3 + 50;
            }, 100)
        }, 200)

        function H3End () {
            clearInterval(IntervalH3);
        }
        setTimeout(H3End, 500);

        let IntervalH4 = null;
        let xAchseH4 = 800;

        setTimeout(() => {
            IntervalH4 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseH4, 100, 50, 50)
                xAchseH4 = xAchseH4 - 50;
            }, 100)
        }, 500)

        function H4End () {
            clearInterval(IntervalH4);
        }
        setTimeout(H4End, 800);

        let IntervalH5 = null;
        let xAchseH5 = 1100;

        setTimeout(() => {
            IntervalH5 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseH5, 100, 50, 50)
                xAchseH5 = xAchseH5 + 50;
            }, 100)
        }, 500)

        function H5End () {
            clearInterval(IntervalH5);
        }
        setTimeout(H5End, 800);

        let IntervalH6 = null;
        let yAchseH6 = 150;

        setTimeout(() => {
            IntervalH6 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(700, yAchseH6, 50, 50)
                yAchseH6 = yAchseH6 + 50;
            }, 100)
        }, 800)

        function H6End () {
            clearInterval(IntervalH6);
        }
        setTimeout(H6End, 1200);

        let IntervalH7 = null;
        let yAchseH7 = 150;

        setTimeout(() => {
            IntervalH7 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(1200, yAchseH7, 50, 50)
                yAchseH7 = yAchseH7 + 50;
            }, 100)
        }, 800)

        function H7End () {
            clearInterval(IntervalH7);
        }
        setTimeout(H7End, 1200);

        let IntervalH8 = null;
        let yAchseH8 = 300;
        let xAchseH8 = 700;

        setTimeout(() => {
            IntervalH8 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseH8, yAchseH8, 50, 50)
                yAchseH8 = yAchseH8 + 50;
                xAchseH8 = xAchseH8 + 50;
            }, 100)
        }, 1200)

        function H8End () {
            clearInterval(IntervalH8);
        }
        setTimeout(H8End, 1900);

        let IntervalH9 = null;
        let yAchseH9 = 300;
        let xAchseH9 = 1200;

        setTimeout(() => {
            IntervalH9 = setInterval (() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(xAchseH9, yAchseH9, 50, 50)
                yAchseH9 = yAchseH9 + 50;
                xAchseH9 = xAchseH9 - 50;
            }, 100)
        }, 1200)

        function H9End () {
            clearInterval(IntervalH9);
        }
        setTimeout(H9End, 1900);


    })


}
        
    



    

    
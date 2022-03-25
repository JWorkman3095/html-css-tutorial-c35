
    const minus = () => {
        let inpCtrl = document.getElementById("txtBox");
        let val = inpCtrl.value; 
        val = Number(val); // makes sure it's actually a number
        val--;
        inpCtrl.value = val;
        if(val % 2 == 0) {
            inpCtrl.style.color = "red";    
        } else {
            inpCtrl.style.color = "black";
        }
        if(val % 3 == 0) {
            inpCtrl.style.fontWeight = "bold";
        } else {
            inpCtrl.style.fontWeight = "normal";
        }
    }

    const plus = () => {
        let inpCtrl = document.getElementById("txtBox");
        let val = inpCtrl.value;
        val = Number(val); // makes sure it's a number
        val++;
        inpCtrl.value = val;
        if(val % 2 == 0) {
            inpCtrl.style.color = "red";    
        } else {
            inpCtrl.style.color = "black";
        }
                
        if(val % 3 == 0) {
            inpCtrl.style.fontWeight = "bold";
        } else {
            inpCtrl.style.fontWeight = "normal";
        }
    }

        const change = (chg) => {
            let inpCtrl = document.getElementById("txtBox");
            let val = inpCtrl.value; 
            val = Number(val); // makes sure it's actually a number
            val = val + chg;
            inpCtrl.value = val;
            display(val, inpCtrl);   
        }
    
        const display = (nbr, ctrl) => {
            ctrl.value = nbr;
            ctrl.style.color = (nbr %  2 == 0) ? "red" : "black";
            ctrl.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
            ctrl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
        }
    
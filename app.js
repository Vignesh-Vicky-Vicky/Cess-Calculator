
        const exShowroom = document.getElementById('exShowroomInput');
        const discount = document.getElementById('discountInput');
        const button = document.getElementById('button');

        const cess1exShowroom = document.getElementById('cess1exShowroom');
        const cess1discount = document.getElementById('cess1discount');
        const cess1assessable = document.getElementById('cess1assessable');
        const cess1cgst14 = document.getElementById('cess1cgst14');
        const cess1sgst14 = document.getElementById('cess1sgst14');
        const cess1cess = document.getElementById('cess1cess');
        const cess1Total = document.getElementById('cess1Total');


        const cess3exShowroom = document.getElementById('cess3exShowroom');
        const cess3discount = document.getElementById('cess3discount');
        const cess3assessable = document.getElementById('cess3assessable');
        const cess3cgst14 = document.getElementById('cess3cgst14');
        const cess3sgst14 = document.getElementById('cess3sgst14');
        const cess3cess = document.getElementById('cess3cess')
        const cess3Total = document.getElementById('cess3Total');


        const cess17exShowroom = document.getElementById('cess17exShowroom');
        const cess17discount = document.getElementById('cess17discount');
        const cess17assessable = document.getElementById('cess17assessable');
        const cess17cgst14 = document.getElementById('cess17cgst14');
        const cess17sgst14 = document.getElementById('cess17sgst14');
        const cess17cess = document.getElementById('cess17cess')
        const cess17Total = document.getElementById('cess17Total');


        button.addEventListener('click', () => {

            const exShowroomValue = Number(exShowroom.value);
            const discountValue = Number(discount.value);

            cess1exShowroom.innerHTML = Math.round((exShowroomValue / 129) * 100);
            cess1discount.innerHTML = Math.round((discountValue / 129) * 100);
            cess1assessable.innerHTML = (Math.ceil((exShowroomValue / 129) * 100)) - (Math.ceil((discountValue / 129) * 100));

            const assessableValue = (Math.ceil((exShowroomValue / 129) * 100)) - (Math.ceil((discountValue / 129) * 100));

            cess1cgst14.innerHTML = Math.round(assessableValue * 14 / 100);
            const c1gst14 = Math.round(assessableValue * 14 / 100);

            cess1sgst14.innerHTML = Math.round(assessableValue * 14 / 100);
            const s1gst14 = Math.round(assessableValue * 14 / 100);
            
            let cess1TotalVar = assessableValue + c1gst14 + s1gst14;
            
            let cess1 = (exShowroomValue - discountValue) - cess1TotalVar;
            cess1cess.innerHTML = cess1;

            cess1Total.innerHTML = cess1TotalVar + cess1;

            // 3% cess calculation

            cess3exShowroom.innerHTML = Math.round((exShowroomValue / 131) * 100);
            cess3discount.innerHTML = Math.round((discountValue / 131) * 100);
            cess3assessable.innerHTML = (Math.ceil((exShowroomValue / 131) * 100)) - (Math.ceil((discountValue / 131) * 100));

            const assessableValue3 = (Math.ceil((exShowroomValue / 131) * 100)) - (Math.ceil((discountValue / 131) * 100));

            cess3cgst14.innerHTML = Math.round(assessableValue3 * 14 / 100);
            const c3gst14 = Math.round(assessableValue3 * 14 / 100);

            cess3sgst14.innerHTML = Math.round(assessableValue3 * 14 / 100);
            const s3gst14 = Math.round(assessableValue3 * 14 / 100);

            let cess3TotalVar = assessableValue3 + c3gst14 + s3gst14;
            
            let cess3 = (exShowroomValue - discountValue) - cess3TotalVar;
            cess3cess.innerHTML = cess3;

            cess3Total.innerHTML = cess3TotalVar + cess3;

            //  17% Cess

            cess17exShowroom.innerHTML = Math.round((exShowroomValue / 145) * 100);
            cess17discount.innerHTML = Math.round((discountValue / 145) * 100);
            cess17assessable.innerHTML = (Math.ceil((exShowroomValue / 145) * 100)) - (Math.ceil((discountValue / 145) * 100));

            const assessableValue17 = (Math.ceil((exShowroomValue / 145) * 100)) - (Math.ceil((discountValue / 145) * 100));

            cess17cgst14.innerHTML = Math.round(assessableValue17 * 14 / 100);
            const c17gst14 = Math.round(assessableValue17 * 14 / 100);

            cess17sgst14.innerHTML = Math.round(assessableValue17 * 14 / 100);
            const s17gst14 = Math.round(assessableValue17 * 14 / 100);


            let cess17TotalVar = assessableValue17 + c17gst14 + s17gst14;
            
            let cess17 = (exShowroomValue - discountValue) - cess17TotalVar;
            cess17cess.innerHTML = cess17;

            cess17Total.innerHTML = cess17TotalVar + cess17;


        })


        document.addEventListener("scroll",()=>{

            let scrollData = window.scrollY;
            if(scrollData > 50){
                document.querySelector(".display-4").style.display="none";
            }else{
                document.querySelector(".display-4").style.display="block";
            }

        })
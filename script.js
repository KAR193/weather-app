       let btn1=document.querySelector('#btn');

          const change=()=>{
        let text1=document.querySelector('#text').value;
        let city=text1;
        // console.log(city)
        

        let heading=document.querySelector('.heading');
        heading.innerHTML=`<i class="fas fa-poo-storm"></i> ${city} weather`;
        let temp1=document.querySelector('#temp1')
        let wind1=document.querySelector('#wind')
        let disct1=document.querySelector('#disct');

    //    API part
      
        const weather=async()=>{
            const res= await fetch(`https://goweather.herokuapp.com/weather/${city}`);
             const data= await res.json();
            //  console.log(data);
            temp1.innerHTML=`<i class="fas fa-temperature-low"></i> temperature is: ${data.temperature}`;
            wind1.innerHTML=`<i class="fas fa-wind"></i> wind is :${data.wind}`;
            disct1.innerHTML=`<i class="fas fa-cloud-sun"></i> description is: ${data. description}`;
           
        //    forecast part[0]
        var  for0=data.forecast[0];
        var {day,temperature,wind}=for0;
        document.querySelector('#day').innerHTML=`day is : ${day}`;
        document.querySelector('#temperature').innerHTML=`temperature is : ${temperature}`;
        document.querySelector('#wind0').innerHTML=`wind is : ${wind}`;
        //   forecast part[1]
        var for1=data.forecast[1];
       var {day,temperature,wind}=for1;
       document.querySelector('#day1').innerHTML=`day is : ${day}`;
       document.querySelector('#temperature1').innerHTML=`temperature is : ${temperature}`;
       document.querySelector('#wind2').innerHTML=`wind is : ${wind}`;
    //    console.log(for1)
    //    console.log(day1);

    //    forecast part[2]
       var for2=data.forecast[2];
       var {day,temperature,wind}=for2;
       document.querySelector('#day2').innerHTML=`day is : ${day}`;
       document.querySelector('#temperature3').innerHTML=`temperature is : ${temperature}`;
       document.querySelector('#wind3').innerHTML=`wind is : ${wind}`;
    //    console.log(day2);
    };
        weather();
    }
        btn1.addEventListener('click',change);
   
    

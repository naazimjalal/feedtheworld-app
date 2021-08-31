import React from 'react';

function loadScript(src) {
    
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
async function displayRazorpay(amount, img) {
    const apikey = "rzp_test_07LADrzEJUhwFJ"   
    const amnt = await fetch('/checkout?amount=20') 
    const var2 = amnt.json()
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }
    
    let cost = {
        amnt: amount,
    }//https://us-central1-ohmypets-shop.cloudfunctions.net/razorpay/razorpay
    const data = await fetch(`https://pacific-springs-43652.herokuapp.com/razorpay`, { method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify(cost) }).then((t) =>
        t.json()
    ).catch((err) =>console.log(err))
    const options = {

        key: apikey,
        currency: data.currency,
        amount: data.amount * 100,
        order_id: data.id,
        name: 'Feed The World',
        description: 'Donation. this is test mode no real money is taken',
        image: 'https://i.pinimg.com/originals/86/a6/d5/86a6d5464c29adc196eb5805667efd52.jpg',
        handler: function (response) {
            console.log("payment recieved")
             
        },
        
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
    }
export default displayRazorpay
let tl0 = gsap.timeline();
tl0.from(
    '#fanta',
    {
        x:'-200%',
        duration:2,
})
.from(
    '#fanta-1',
    {
        y:'-200%',
        duration:2
    });

let tl = gsap.timeline({
    scrollTrigger:{
        triger:'.two', // selector
        start:'10% 20%',  // scroll start level
        end:'60% 90%', // scroll start level
        scrub : true,
        markers: false
    }
});

tl.to('#fanta-1',{
    top:'170%',
    left:'5%'
},'one')
.to('#leaf2',{
    rotate:'120deg',
    top:'240%',
    left:'80%'
},'one')
.to('#leaf3',{
    rotate:'240deg',
    top:'170%',
    left:'0%'
},'one')
.to('#orange2',{
    scale:'1.5',
    top:'175%',
    left:'75%'
},'one')
.to('#orange3',{
    top:'275%',
    left:'35%'
},'one')

let tl2 = gsap.timeline({
    scrollTrigger:{
        triger:'.three', // selector
        start:'40% 20%',  // scroll start level
        end:'90% 90%', // scroll start level
        scrub : true,
        markers: false
    }
});

tl2.from('#cococola',{
    // scale:'1.5',
    rotate:'-30deg',
    left:'-150%',
    top:'10%'
},'three')
.from('#pepsi',{
    // scale:'1.5',
    rotate:'30deg',
    right:'-150%',
    top:'10%'
},'three')

tl2.to('#fanta-1',{
    scale:'0.8',
    top:'310%',
    left:'30%'
},'three')
.to('#orange2',{
    scale:'1',
    top:'400%',
    left:'60%'
},'three')
.to('#leaf3',{
    rotate:'380deg',
    top:'320%',
    left:'25%'
},'three');

// let tl3 = gsap.timeline({
//     scrollTrigger:{
//         triger:'.footer',
//         start:'81% 40%',
//         end:'100% 100%',
//         scrub : true,
//         markers: true
//     }
// });

// tl3.from(
//     '#x',
//     {
//         position:'absolute',
//         left:'-100%',
//         duration:'2',
//         // scale:'1.5',
//         color:'blue',
// })
// .from(
//     '#github',
//     {
//         position:'absolute',
//         left:'-100%',
//         duration:'2',
//         // scale:'1.5',
//         color:'blue',
//         delay:'2',

// })
// .from(
//     '#instagram',
//     {
//         position:'absolute',
//         left:'-100%',
//         duration:'2',
//         delay:'2',
//         // scale:'1.5',
//         color:'blue',
// })
// .youtube(
//     '#youtube',
//     {
//         position:'absolute',
//         left:'-100%',
//         duration:'2',
//         delay:'2',
//         // scale:'1.5',
//         color:'blue',
// })
// .from(
//     '#linkedin',
//     {
//         position:'absolute',
//         left:'-100%',
//         duration:'2',
//         delay:'2',
//         // scale:'1.5',
//         color:'blue',
// })
